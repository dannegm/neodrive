const { writeFileSync } = require('fs');
const path = require('path');
const SVGO = require('svgo');
const svgtojsx = require('svg-to-jsx');
const evaIcons = require('eva-icons/eva-icons.json');
const DebugLogger = require('../utils/DebugLogger');

const debug = new DebugLogger('Icon Genetaror', {
  DEBUG: process.env.NODE_ENV !== 'production',
});

const ICONS_OUTPUT_FOLDER = path.join(__dirname, '../common/icons');
const svgo = new SVGO({
  plugins: [
    { cleanupAttrs: true },
    { removeDoctype: true },
    { removeXMLProcInst: true },
    { removeComments: true },
    { removeMetadata: true },
    { removeTitle: true },
    { removeDesc: true },
    { removeUselessDefs: true },
    { removeXMLNS: true },
    { removeEditorsNSData: true },
    { removeEmptyAttrs: true },
    { removeHiddenElems: true },
    { removeEmptyText: true },
    { removeEmptyContainers: true },
    { removeViewBox: true },
    { cleanupEnableBackground: true },
    { minifyStyles: true },
    { convertStyleToAttrs: true },
    { convertColors: true },
    { convertPathData: true },
    { convertTransform: true },
    { removeUnknownsAndDefaults: { keepDataAttrs: false } },
    { removeNonInheritableGroupAttrs: true },
    { removeUselessStrokeAndFill: { removeNone: true } },
    { removeUnusedNS: true },
    { cleanupIDs: true },
    { cleanupNumericValues: true },
    { cleanupListOfValues: true },
    { moveElemsAttrsToGroup: true },
    { moveGroupAttrsToElems: true },
    { collapseGroups: true },
    { removeRasterImages: true },
    { mergePaths: true },
    { convertShapeToPath: true },
    { sortAttrs: true },
    { removeDimensions: true },
    { removeAttrs: true },
    { removeElementsByAttr: true },
    { removeStyleElement: true },
    { removeScriptElement: true },
  ],
});

const getComponentName = (string) =>
  string
    .match(/[a-z0-9]+/gi)
    .map((word) => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase())
    .join('');

const isOutline = (name) => /.*-outline/.test(name);

const generateIconComponents = (icons, dir) => {
  Object.keys(icons).forEach(async (name) => {
    try {
      const input = icons[name]
        .replace(/<g id="Layer_2"[^>]*>(.*?)<\/g>/g, '$1')
        .replace(/<g id="[^>"]+">(.*?)<\/g>/g, '$1')
        .replace(/<g id="smiling-face"([^>]*)>/g, '<g $1>')
        .replace(/<path (.*?) id="[^>"]+"([^>]*)>/, '<path $1 $2>')
        .replace(/<defs[^>]*>(.*?)<\/defs>/g, '$1');

      const optimizedSVGContent = await svgo.optimize(input);
      const JSXContent = await svgtojsx(optimizedSVGContent.data);

      const componentName = getComponentName(name);
      const componentPath = `${dir}/${
        isOutline(name) ? 'outline' : 'fill'
      }/${componentName}.js`;

      const componentContent = [
        'import React from "react";',
        'import SvgIcon from "../../components/SvgIcon"',
        '',
        `const ${componentName} = (props) => (`,
        '\t<SvgIcon {...props}>',
        `\t\t${JSXContent}`,
        '\t</SvgIcon>',
        ');',
        '',
        `export default ${componentName};`,
        '',
      ].join('\n');
      writeFileSync(componentPath, componentContent);
    } catch (error) {
      debug.log(error);
    }
  });
  debug.log('Icon Components created');
};

const generateIconsIndex = (icons, dir) => {
  const indexContent = [
    Object.keys(icons)
      .map((icon) => {
        let iconPath = `./${
          isOutline(icon) ? 'outline' : 'fill'
        }/${getComponentName(icon)}`;
        iconPath = `export { default as ${getComponentName(
          icon
        )}Icon } from '${iconPath}';`;
        return iconPath;
      })
      .join('\n'),
  ].join('\n');
  writeFileSync(`${dir}/index.js`, indexContent);
  debug.log('Icons index file created');
};

try {
  if (evaIcons) {
    generateIconComponents(evaIcons, ICONS_OUTPUT_FOLDER);
    generateIconsIndex(evaIcons, ICONS_OUTPUT_FOLDER);
  }
} catch (error) {
  debug.log(error);
}

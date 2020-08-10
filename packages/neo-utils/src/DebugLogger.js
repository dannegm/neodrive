/*
 * Debug Logger
 * @param  {String} [namespace] The tag what you use to track every log
 * @param  {Object} [options] Options
 *
 * @options
 *  @param {Boolean} [hasTimestamp] If `true`, every log will print its timestamp
 *
 * @description The Debug function can be used to add logs using namespaces
 * into the system that would only be displayed during debug mode.
 *
 * Sometimes it is required to have a trace of logs than multiple debuggers
 * breaking the flow, this library is made with the purpose of extending
 * the console object with a more traceable and clean way to have logs.
 *
 * The logs using this library will only be displayed
 * when `config.DEBUG` it's truly
 *
 * Therefore, logs using this library WILL NOT be shown while using other
 * environments like regular development env or even more important
 * while using the app in production mode.
 */

/* eslint-disable no-console */
/* istanbul ignore next reason: Hard to test, just dev purposes */
class DebugLogger {
  constructor(namespace = 'DEBUG', options = {}) {
    this.namespace = namespace;
    this.setOptions(options);
  }

  logger(level, ...args) {
    if (this.options.DEBUG) {
      const logger = console[level];
      const timestampString = this.options.hasTimestamp
        ? `[${Date.now()}]`
        : '';

      logger.apply(logger, [`[${this.namespace}]${timestampString}`, ...args]);
    }
  }

  setOptions(options = {}) {
    const defaultOptions = {
      hasTimestamp: false,
      DEBUG: false,
    };
    this.options = {
      ...defaultOptions,
      ...options,
    };
  }

  log(...args) {
    return this.logger('log', ...args);
  }

  info(...args) {
    return this.logger('info', ...args);
  }

  warn(...args) {
    return this.logger('warn', ...args);
  }

  error(...args) {
    return this.logger('error', ...args);
  }
}

export default DebugLogger;

// Singleton to avoid to create a new instance when is not needed.
export const StaticLogger = new DebugLogger('*');

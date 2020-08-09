import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import axios from 'axios';

import { Layout, Breadcrumb, Button } from 'antd';
import { HomeOutlined, FolderOutlined, FileOutlined } from '@ant-design/icons';

const { Header, Content, Sider } = Layout;

const Logo = styled.div`
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 28px 16px 0;
  float: left;
`;

const useDirectory = (path = '/') => {
  const [currentPath, setPath] = useState(path);
  const [content, setContent] = useState({ files: [], folders: [] });

  const listDirectory = async () => {
    const response = await axios.get(`http://localhost:3000/dir${currentPath}`);
    console.log(response.data.data);
    setContent(response.data.data.content);
  };

  useEffect(() => {
    listDirectory();
  }, [currentPath]);

  return {
    currentPath,
    content,
    setPath
  };
};

const DirectoryItem = styled.div`
  display: block;
  padding: 0.5rem 1rem;
  width: 33.33%;
`;

const DirectoryList = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-left: -1rem;
  margin-right: -1rem;
  margin-bottom: 2rem;
`;

const Home = () => {
  const { t } = useTranslation();

  const { currentPath, content, setPath } = useDirectory('/sample/go');

  let splittedPath = currentPath.split('/');
  splittedPath = splittedPath.map((folder, index) => {
    const context = [...splittedPath].splice(0, index).join('/');
    return {
      path: `${context}/${folder}`,
      base: context,
      name: folder
    };
  });

  const handleFolder = (folder) => {
    console.log(folder);
    setPath(folder);
  };

  return (
    <Layout>
      <Header className="header">
        <Logo />
      </Header>
      <Layout>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>
              <HomeOutlined />
            </Breadcrumb.Item>

            {splittedPath.map((folder) => (
              <Breadcrumb.Item
                key={`breadcrumb:${folder.path}`}
                onClick={() => handleFolder(folder.path)}
              >
                {folder.name}
              </Breadcrumb.Item>
            ))}
          </Breadcrumb>
          <Content>
            <DirectoryList>
              {content.folders.map((folder) => (
                <DirectoryItem>
                  <Button
                    key={`folder:${currentPath}/${folder}`}
                    icon={<FolderOutlined />}
                    onClick={() => handleFolder(`${currentPath}/${folder}`)}
                    size="large"
                    type="primary"
                    block
                  >
                    {folder}
                  </Button>
                </DirectoryItem>
              ))}
            </DirectoryList>

            <DirectoryList>
              {content.files.map((file) => (
                <DirectoryItem>
                  <Button
                    key={`file:${currentPath}/${file}`}
                    icon={<FileOutlined />}
                    size="large"
                    block
                  >
                    {file}
                  </Button>
                </DirectoryItem>
              ))}
            </DirectoryList>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
export default Home;

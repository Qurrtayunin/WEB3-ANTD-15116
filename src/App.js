import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Typography, Card, Col, Row, Layout, Menu } from 'antd';


function App() {
  const { Header, Content, Footer } = Layout;
  const { Title } = Typography;
  const carData = [
    {
      title : "Annastasya Fitri",
      desc : "UI/UX Designer"
    },
    {
      title : "Cintya Agusti A",
      desc : "UI/UX Designer"
    },
    {
      title : "Afida Rindy",
      desc : "Web Dev"
    },
    {
      title : "Qurrota A'yunin",
      desc : "FrontEnd Dev"
    },
    {
      title : "Zhahira Salma",
      desc : "Mobile Dev"
    },
    {
      title : "Febriana P",
      desc : "Mobile Dev"
    }
  ]

  return (
    <div className="App">

    <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}>
            <Menu.Item key="1">Tugas</Menu.Item>
            <Menu.Item key="2">WEB 3</Menu.Item>
            <Menu.Item key="3">Ant Design</Menu.Item>
          </Menu>
        </Header>

        <Content style={{ padding: '0 50px' }}>
          <div className="site-layout-content">

            <Row>
              <Col span={12} className="padding">
                  <Title level={3}>Praktikum Web 3 </Title>
                  <p>Tugas ke 3 mata kuliah praktikum website 3, yaitu membuat layout atau tampilan menggunakan beberapa komponen yang ada pada antdesign</p>
              </Col>
              <Col span={12}>
                  <img src="https://image.freepik.com/free-vector/time-management-concept-illustration_114360-1013.jpg" width="400px" height="300px"></img>
              </Col>
            </Row>
          </div>
        </Content>
        <Footer>
          <Title level={3}>- Member -  </Title>
          {carData.map(data =>
            <Card title="Card" className="card" style={{ width: 300 }}>
              <p>{data.title}</p>
              <p>{data.desc}</p>
            </Card>
          )}
        </Footer>
      </Layout>
  </div>
    
  );
}

export default App;

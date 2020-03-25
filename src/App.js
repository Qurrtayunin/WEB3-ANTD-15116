import React , {Component, Fragment} from 'react';
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
      title : "Jihan Fatharani",
      desc : "FrontEnd Dev"
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

        <Content className="content">
          <div className="site-layout-content">

            <Row>
              <Col span={12} className="padding">
                  <Title level={3}>Praktikum Web 3 </Title>
                  <p>Tugas ke 3 mata kuliah praktikum website 3, yaitu membuat layout atau tampilan menggunakan beberapa komponen yang ada pada antdesign</p>
                  
                  <hr></hr>
                  <p>Qurrota A'yunin</p>
                  <p>18/425974/SV/15116</p>
              </Col>
              <Col span={12}>
                  <img src="https://2.bp.blogspot.com/-s2P6r_JR3pI/WRXgZxjsovI/AAAAAAAAAOo/PD1_ll-YDXks-5o-jee0zd0SMYMAwI3fgCLcB/s1600/programmer.png" width="300px" height="300px"></img>
              </Col>
            </Row>
          </div>
        </Content>
      </Layout>
  </div>
    
  );
}

export default App;

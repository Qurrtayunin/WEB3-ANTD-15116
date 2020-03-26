import React , {Component, Fragment} from 'react';
import './App.css';
import CardMember from './CardMember';

import { Typography, Card, Col, Row, Layout, Menu } from 'antd';

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

class App extends Component {
  render(){
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
      
      <CardMember/>
    </div>
      
    );
  }
}

export default App;

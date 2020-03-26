import React , {Component, Fragment} from 'react';
import './App.css';
import CardMember from './CardMember';

import { Typography, Card, Col, Row, Layout, Menu } from 'antd';

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

class App extends Component {
  state = {
    like: 20,
    unlike:3
  }

  handleCounterChange = (newValue) => {
      this.setState({
        like: newValue
      })
  }

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
      
      <div className="set-card">
          <Card title="Lets Vote, Karyawan Terbaik!!!" bordered={false}>
          <p><b>Total Penilaian :</b></p>
          <p className="nomargin">Qurrota A'yunin  <i><b> {this.state.like} Vote Suka</b></i></p>
          <p className="nomargin">Cintya Agusti A  <i><b> {this.state.like} Vote Suka</b></i></p>
          <p className="nomargin">Afida Rindy      <i><b> {this.state.like} Vote Suka</b></i></p>
          </Card>
        </div>
      
      <CardMember onCounterChange={(value)=>this.handleCounterChange(value)}/>
    </div>
      
    );
  }
}

export default App;

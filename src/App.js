import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Typography, Card, Col, Row, Layout, Menu } from 'antd';
import { OmitProps } from 'antd/lib/transfer/renderListBody';


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
                  <img src="https://image.freepik.com/free-vector/time-management-concept-illustration_114360-1013.jpg" width="400px" height="300px"></img>
              </Col>
            </Row>
          </div>
        </Content>

        <Footer className="footer">

        {carData.map(data=>
             <Row gutter={8} justify="center"> 
                     <Col span={4}> 
                    <Card
                        style={{ width: 225 }}
                        cover={
                        <img className="padding-img"
                            alt="example"
                            src="https://image.freepik.com/free-vector/fashion-illustration-with-female-model_23-2148223276.jpg"
                        />
                        }
                        actions={[
                        <img src="https://image.flaticon.com/icons/svg/633/633759.svg" width="15px" height="15px"></img>,
                        <img src="https://image.flaticon.com/icons/svg/633/633758.svg" width="15px" height="15px"></img>,
                        ]}
                    >
                      <p className="title"><b>{data.title}</b></p>
                      <p className="desc">{data.desc}</p>
                    </Card>
                      </Col>
             </Row> 
            )}

        </Footer>
      </Layout>
  </div>
    
  );
}

export default App;

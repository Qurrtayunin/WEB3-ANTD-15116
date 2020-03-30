import React , {Component, Fragment} from 'react';
import '../assets/css/LandingPage.css';
import { Typography, Card, Col, Row, Layout, Menu } from 'antd';

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

class LandingPageComp extends Component {
  render(){
    return (
      <div>
      <Layout className="layout">
          <Content className="content">
            <div className="site-layout-content">
              <Row>
                <Col span={12} className="padding">
                    <Title level={1}>Hi ! </Title>
                    <p>Saya Qurrota A'yunin mahasiswa D3 Komputer dan Sistem Infromasi, Website ini merupakan tugas dari Praktikum Website 3 yaitu membuat tampilan website menggunakan komponen komponen Ant Design,
                        menerapkan update parent oleh child komponen, dan yang terakhir menerapkan routing dan deploy.
                    </p>
                    <br></br>
                    <hr></hr>
                    <p>Qurrota A'yunin<br></br>
                    18/425974/SV/15116</p>
                </Col>
                <Col span={12}>
                    <img src="https://image.freepik.com/free-vector/usability-testing-concept-illustration_114360-1571.jpg" width="350px" height="350px"></img>
                </Col>
              </Row>
            </div>
          </Content>
      </Layout>
    </div> 
      
    );
  }
}

export default LandingPageComp;

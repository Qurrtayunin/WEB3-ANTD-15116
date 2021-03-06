import React , {Component} from 'react';
import {Card, Row, Col} from 'antd';
import '../../assets/css/CardMember.css';

const cardData = [
    {
      title : "Qurrota A'yunin",
      desc : "Mobile Dev"
    },
    {
      title : "Cintya Agusti A",
      desc : "UI/UX Designer"
    },
    {
      title : "Afida Rindy",
      desc : "Web Dev"
    }
  ]

class CardVote extends Component{
    state = {
        like: 20,
        unlike:3
    }
    

    handleCounterChange = (newValue) =>{
        this.props.onCounterChange(newValue);
    }

    handleLike = () =>{
        this.setState({
            like: this.state.like + 1
        }, ()=> {
            this.props.onCounterChange(this.state.like);
        })

        
    }

    handleUnlike = () => {
        this.setState({
            unlike: this.state.unlike + 1 
        })
        
    }

    render (){
        return(
           <div>
            <div className="set-card">
                <Card bordered={false}>
                  <Row>
                    <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                    {cardData.map(data=>
                            <Card
                                style={{ width: 230 }}
                                cover={
                                <img className="padding-img"
                                    alt="example"
                                    src="https://image.freepik.com/free-vector/fashion-illustration-with-female-model_23-2148223276.jpg"
                                />
                                }
                                actions={[
                                <img src="https://image.flaticon.com/icons/svg/633/633759.svg" width="15px" height="15px" onClick={this.handleLike}></img>,
                                <img src="https://image.flaticon.com/icons/svg/633/633758.svg" width="15px" height="15px"onClick={this.handleUnlike}></img>,
                                ]}
                                >
                                <p className="title"><b>{data.title}</b></p>
                                <p className="desc">{data.desc}</p>
                                <p className="ket"> {this.state.like} menyukai,  {this.state.unlike} tidak menyukai</p>
                            </Card>
                            )}
                    </Col>
                    <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                    {cardData.map(data=>
                            <Card
                                style={{ width: 230 }}
                                cover={
                                <img className="padding-img"
                                    alt="example"
                                    src="https://image.freepik.com/free-vector/fashion-illustration-with-female-model_23-2148223276.jpg"
                                />
                                }
                                actions={[
                                <img src="https://image.flaticon.com/icons/svg/633/633759.svg" width="15px" height="15px" onClick={this.handleLike}></img>,
                                <img src="https://image.flaticon.com/icons/svg/633/633758.svg" width="15px" height="15px"onClick={this.handleUnlike}></img>,
                                ]}
                                >
                                <p className="title"><b>{data.title}</b></p>
                                <p className="desc">{data.desc}</p>
                                <p className="ket"> {this.state.like} menyukai,  {this.state.unlike} tidak menyukai</p>
                            </Card>
                            )}
                    </Col>
                    <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                    {cardData.map(data=>
                            <Card
                                style={{ width: 230 }}
                                cover={
                                <img className="padding-img"
                                    alt="example"
                                    src="https://image.freepik.com/free-vector/fashion-illustration-with-female-model_23-2148223276.jpg"
                                />
                                }
                                actions={[
                                <img src="https://image.flaticon.com/icons/svg/633/633759.svg" width="15px" height="15px" onClick={this.handleLike}></img>,
                                <img src="https://image.flaticon.com/icons/svg/633/633758.svg" width="15px" height="15px"onClick={this.handleUnlike}></img>,
                                ]}
                                >
                                <p className="title"><b>{data.title}</b></p>
                                <p className="desc">{data.desc}</p>
                                <p className="ket"> {this.state.like} menyukai,  {this.state.unlike} tidak menyukai</p>
                            </Card>
                            )}
                    </Col>
                  </Row>,
                </Card> 
            </div>
           </div>
        )
    } 
}

export default CardVote;
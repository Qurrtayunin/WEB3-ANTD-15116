import React , {Component} from 'react';
import '../assets/css/CardMember.css';
import CardVote from '../common/component/CardVote';


import { Card } from 'antd';

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

class CardMemberComp extends Component{
    state = {
        like: 20,
        unlike:3
      }
    
      handleCounterChange = (newValue) => {
          this.setState({
            like: newValue
          })
      }

    render (){
        return(
            <div>
                <div className="set-card">
                    <Card >
                    <p><b>Total Penilaian :</b></p>
                    <p className="nomargin">Qurrota A'yunin  <i><b> {this.state.like} Vote Suka</b></i></p>
                    <p className="nomargin">Cintya Agusti A  <i><b> {this.state.like} Vote Suka</b></i></p>
                    <p className="nomargin">Afida Rindy      <i><b> {this.state.like} Vote Suka</b></i></p>
                    </Card>
                </div>
                <CardVote onCounterChange={(value)=>this.handleCounterChange(value)}/> 
            </div>
        )
    } 
}

export default CardMemberComp;
import React, {Component} from 'react'; 
import CardMemberComp from '../modules/CardMember-component';

class CardMember extends Component {
    state ={
        visible: false,
    }
   
    componentDidMount(){

    }
    

    showModal = () => {
        this.setState({
          visible: true,
        });
    };

    handleOk = e => {
        console.log(e);
        this.setState({
          visible: false,
        });
      };
    
      handleCancel = e => {
        console.log(e);
        this.setState({
          visible: false,
        });
      };


    render(){
        return (
            <CardMemberComp
                initialData = {this.state}
                showModal = {this.showModal}
                handleCancel = {this.handleCancel}
                handleOk = {this.handleOk} 
            />
        );
    }
}

export default CardMember;
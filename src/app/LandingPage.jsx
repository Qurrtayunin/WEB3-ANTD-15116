import React, {Component} from 'react'; 
import LandingPageComp from '../modules/LandingPage-component';

class LandingPage extends Component {
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
            <LandingPageComp
                initialData = {this.state} 
                showModal = {this.showModal}
                handleCancel = {this.handleCancel}
                handleOk = {this.handleOk}
            />
        );
    }
}

export default LandingPage;
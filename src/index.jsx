import React from 'react'
import ReactDOM from 'react-dom'
import { Container,Media , Row, Col,Modal, ModalHeader, ModalBody, ModalFooter,Jumbotron , Button } from 'reactstrap';
import {Header} from './components/Header/Header';
import Logo from './images/Krishail_Logo.jpg';
import ProductImage from './images/img_venetta_full_opt.png';
import AmazonLogo from './images/amazonlogo.png';
import MailChimpContainer from './components/MailChimp/MailChimpContainer';
import {CheckIcon} from './components/Constants'


class MainContainer extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    const url = this.props.url;
    return (
      <Container>
        <Row>
          <Col md="12" sm="12" lg="6">
            <Row>
            <Col md="4" sm="12" className="logo">
               <img src={Logo} alt="KRISHAIL Logo" style={{width:'150px'}}/>
            </Col>
            <Col md="8" className="Header">
            <p>Krishail Anti Aging Cream SAVE <span style={{color:'red'}}>20%</span> With Your Coupon Code</p>
            </Col>
              <Col md="12" className="Description">
              <Jumbotron>
              <h2>Angi aging scream for radiant skin - now just a click away</h2>
               <ul style={{listStyle:'none'}} className="bulletpoints">
                   <li><CheckIcon/><span>ANTI FOG: Swim Goggles inner surface 
                     of lens are coated with anti-fog technology which enhances the anti-fog ability of the swimming goggles and does no any harm to your eyes and provide crystal clear vision</span></li>
                   <li><CheckIcon/><span>ANTI FOG: Swim Goggles inner surface of lens are coated with anti-fog technology which enhances the anti-fog ability of the swimming goggles and does no any harm to your eyes and provide crystal clear vision</span></li>
                   <li><CheckIcon/><span>ANTI FOG: Swim Goggles inner surface of lens are coated with anti-fog technology which enhances the anti-fog ability of the swimming goggles and does no any harm to your eyes and provide crystal clear vision</span></li>
               </ul>
              </Jumbotron>
            </Col>
            </Row>
          </Col>
          <Col md="12" sm="12" lg="6">
           <Row>
            <Col md="12" className="ProductImage"><img src={ProductImage} alt="product images" style={{width:`77%`}}/></Col>
           </Row>
           <Row>
            <Col md="12" style={{textAlign:'center'}} className="subscribe"><MailChimpContainer url={url} buttontext={this.props.buttontext}/></Col>
           </Row>
           <Row>
            <Col md="12" style={{textAlign:'center'}} ><img src={AmazonLogo} alt="amazon logo which tell that offer is availabe on Amazon"/></Col>
           </Row>
          </Col>
        </Row>

      </Container>
    );
  }
}



ReactDOM.render(<MainContainer  
  url={"https://splashswim.us15.list-manage.com/subscribe/post?u=c8d9b5374f1eb84712a3f2a1f&id=707ff93d65"}
  buttontext={"Yes I want to save 20%"}
  /> 
  
  , document.getElementById("mainContainer"))

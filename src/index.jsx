import React from 'react'
import ReactDOM from 'react-dom'
import { Container,Media , Row, Col,Modal, ModalHeader, ModalBody, ModalFooter,Jumbotron , Button } from 'reactstrap';
import {Header} from './components/Header/Header';
import Logo from './images/Krishail_Logo.jpg';
import ProductImage from './images/product.jpg';
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
            <p>Hornbull Mens Leather RFID Blocking Wallet Save <span style={{color:'red'}}>20%</span> With Your Coupon Code</p>
            </Col>
              <Col md="12" className="Description">
              <Jumbotron>
              <h2>Hornbull Mens Leather RFID Blocking Wallet (Brown) - now just a click away</h2>
               <ul style={{listStyle:'none'}} className="bulletpoints">
                   <li><CheckIcon/><span>TOP GRAIN LEATHER: This Wallet Made in Exclusive Leather, Well Designed By Skilled Handcraft Man, Durable Cloth Lining Used, Designed To Accommodate maximum needs. Each Wallet Has Unique Natural Grain Of Leather.</span></li>
                   <li><CheckIcon/><span>RFID BLOCKING SECURITY: Our wallets are equipped with advanced RFID SECURE Technology, a unique metal composite, engineered specifically to block 13.5 MHz or higher RFID signals and protect the valuable information stored on RFID chips from unauthorized scans.</span></li>
                   <li><CheckIcon/><span>MECHANISM: There are 6 in build Credit card slots, one Transparent Identity window for Driving License or Office I.D card, two secret compartment, 1 Coin Pocket and 2 Currency compartment carrying all your needs with extra comfort while carrying.</span></li>
                   <li><CheckIcon/><span>GIFTING SOLUTION: This wallet of Hornbull is ideal to gift your loved one and it comes with gift box.</span></li>
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
        <Row className="footer">
           <Col md="6" sm="12">
           </Col>
           <Col md="6" sm="12">
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

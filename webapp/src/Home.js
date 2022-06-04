import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {FormControl} from "react-bootstrap";
import InputGroup from 'react-bootstrap/InputGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'
import icon from './media/icon_low_res.png'
import logo from './media/logo_low_res.png'
import { Textfit } from 'react-textfit';
import square from './media/square.webp';
import { Animate, AnimateKeyframes, AnimateGroup } from "react-simple-animate";
import 'bootstrap/dist/css/bootstrap.css';
import './Home.css';

const passwords = ['test', 'test2', 'test3']

class Home extends React.Component { 

  constructor() {
    super();

    this.state = { 
      passwordEntered: '',
      rightPassword: false,
      incorrectCount: 0,
    };

    this.checkPassword = this.checkPassword.bind(this);
    
  }

  componentDidMount()
  {
  
  }

  checkPassword(input) {
    if(passwords.indexOf(input) > -1)
    {
      this.setState({rightPassword: true})
      return true;
    }
    else {
      var element = document.getElementById('passwordInput');
      element.classList.add('error');
      this.setState({incorrectCount: this.state.incorrectCount + 1})
      return false;
    }
    
  }
  

  
  render()
  {  


    

    return (
      
    <div style={{display: this.state.incorrectCount === 3 ? 'none' : 'block'}} >
      <div className='front' style={{visibility: this.state.rightPassword === false ? 'visible' : 'hidden', opacity: this.state.rightPassword === false ? '1':'0', transition: this.state.rightPassword === false ? 'none':'visibility 0s 1s, opacity 1s linear' }}>
        <div className='vertical-center'>
          <center>
            <div>
              <InputGroup className="mb-3" id="passwordInput">
                <FormControl
                  placeholder="password"
                  aria-label="password"
                  aria-describedby="basic-addon2"
                  onChange={e => {
                      this.setState({passwordEntered: e.target.value});
                      var element = document.getElementById('passwordInput');
                      element.classList.remove('error');
                  }}
                  onKeyDown={e => {
                    if(e.key === 'Enter')
                    {
                      //on third it dissapears
                      if(this.checkPassword(e.target.value) === false)
                      {
                        e.target.value = ''
                        var element = document.getElementById('passwordInput');
                        
                      }
                    }
                  }}/>
              </InputGroup>
              <ToggleButton variant="light" type="submit" className="boldBtn" onClick={e => (this.checkPassword(this.state.passwordEntered))}>
                submit
              </ToggleButton>
            </div>
          </center>
        </div>
        
      </div>
      <img src={icon} className='footer' alt='footer' >
        
        </img>   

      <div className='front' style={{visibility: this.state.rightPassword === true ? 'visible' : 'hidden', opacity: this.state.rightPassword === true ? '1':'0', transition: this.state.rightPassword === true ? 'none':'visibility 0s 1s, opacity 1s linear' }}>
        <div id='wrapper'>
        <div className='invitation'>
          <center>
            <img src={logo} className='logo' alt='footer'></img> 
            <br></br>
            <br></br>
            
        
              {this.state.rightPassword === true && 
              <div className='verticalish-center'>
                <b>
              <h2 className='firstLine'>CONGRATS, YOU'RE IN<br></br>JUNE 22, 2022</h2>
             
              <div className='container'>
                <div className='divdiv'>
                  <h2 style={{marginTop: '1em'}} className='firstLine'>2103 FAULKNER RD</h2>
                  <img src={square} className='square'></img>
                  <h2 className='firstLine'>7PM-10PM</h2>
                </div>
                <div className='divdiv'>
                  <h2 style={{marginTop: '1em'}}>RULES</h2>
                  <br></br>
                  <div className='verticalrules-center'>
                    <div>
                      <div className='divdiv2'>
                        <h3>NO ENTEROUGES</h3>
                        <h3>BRING A STICKER</h3>
                        <h3>ANOTHER RULE</h3>
                      </div>
                      <div className='divdiv2'>
                        <h3>NETWORK</h3>
                        <h3>ENSURE FUNNESS</h3>
                        <h3>NUMBER SEVEN</h3>
                      </div>
                  </div>
                  <ToggleButton variant="light" type="submit" className='customBtn' onClick={e => (alert("hello"))} style={{marginTop: '2em'}}>
                    RSVP
                  </ToggleButton>
                  </div>
                  
                </div>
                
                  
              </div>
              </b>
            </div>
            }

          </center>
        </div>
        </div>
          
      </div>
      <div id='#finalFantasy'>
        <div id="foglayer_01" class="fog">
          <div class="image01"></div>
        </div>
        <div id="foglayer_02" class="fog">
          <div class="image01"></div>
        </div>
        <div id="foglayer_03" class="fog">
          <div class="image01"></div>
        </div>
        <div id="foglayer_04" class="fog">
          <div class="image01"></div>
        </div>
        </div>
        
       
      
    </div>)
    
    
          
      
  }
}
export default Home;

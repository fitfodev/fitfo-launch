import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {FormControl} from "react-bootstrap";
import InputGroup from 'react-bootstrap/InputGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'
import icon from './media/icon_low_res.png'
import 'bootstrap/dist/css/bootstrap.css';
import './Home.css';

class Home extends React.Component { 

  constructor() {
    super();
    this.state = { 

    };
    
  }

  componentDidMount()
  {
  
  }

  

  
  render()
  {  


    

    return (
      
    <div >
      <div className='vertical-center'>
        <center>
          <InputGroup className="mb-3">
          <FormControl
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          </InputGroup>
          <ToggleButton variant="primary" type="submit">
            Submit
          </ToggleButton>
        </center>
      </div>

      <img src={icon} className='footer' alt='footer'></img>   
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
       
      
    </div>)
    
    
          
      
  }
}
export default Home;

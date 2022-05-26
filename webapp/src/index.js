import React from 'react';
import ReactDOM from 'react-dom';

import Home from './Home';
import reportWebVitals from './unused/reportWebVitals';
import Redirect from './Redirect';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';



/*using react router we set a constant equal to whatever component
we would like to render*/
const routing = (
  <Router>
    <Switch>
      <Route exact path="/" component={Home}/>  
      <Route exact path="/*" component={Redirect}/>    
    </Switch>
  </Router>
)

/*the code below reads the path and renders component on a conditional basis.
i.e. /home throws two different components at different places...*/
ReactDOM.render(routing, document.getElementById("root"));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

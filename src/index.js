import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import SectionComponent from './sectioncomponent/SectionComponent';


import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Search from './corporationcomponent/search';






const App = () => (
  <BrowserRouter>
    <div className="app">
      <Switch>
        <Route exact path="/" component={SectionComponent} />
        <Route path="/search" component={Search} />
        
        
      </Switch>
    </div>
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById('index'));

//ReactDOM.render(<LoginPage />, document.getElementById('index'));

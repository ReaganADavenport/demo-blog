//libraries
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as Data from "./data/data.json";

//components
import Header from './components/header';
import ListLayout from './components/listLayout';
import PostLayout from './components/postLayout';
import Footer from './components/footer';

import Wrapper from './sharedComponents/wrapper';
//CSS
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Header/>
        <Wrapper>
          <Route path="/" exact render={() => <ListLayout posts={Data}/>} />
          <Route path="/post/:id?" render={ routeProps => <PostLayout posts={Data} {...routeProps}/>} />
        </Wrapper>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;

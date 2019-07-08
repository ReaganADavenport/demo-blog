//libraries
import React from 'react';

import * as Data from "./data/data.json";

//components
import Header from './components/header';
import ListLayout from './components/listLayout';
import Footer from './components/footer';

import Wrapper from './sharedComponents/wrapper';
//CSS
import './App.css';

function App() {
  return (
    <>
      <Header/>
      <Wrapper>
        <ListLayout posts={Data}/>
      </Wrapper>
      <Footer/>
    </>
  );
}

export default App;

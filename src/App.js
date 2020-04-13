import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/home';
import Form from './Pages/Form/form';
import Header from './Components/Header/header';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/form" component={Form} />
      </Switch>
    </>
  );
}

export default App;

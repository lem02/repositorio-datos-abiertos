import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './Pages/Home/home';
import Repository from './Pages/Repository/repository';
import Form from './Pages/Form/form';
import Header from './Components/Header/header';
import Footer from './Components/Footer/footer';

function App() {
  return (
    <section className="max-page-height scroll-styles">
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/:type/:value" exact component={Repository} />
        <Route path="/form" exact component={Form} />
        <Redirect to={'/'} />
      </Switch>
      <Footer />
    </section>
  );
}

export default App;

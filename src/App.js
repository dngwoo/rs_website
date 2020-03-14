import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './hoc/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import SoftWare from './components/Project/SoftWare';
import HardWare from './components/Project/HardWare';
import NoMatch from './components/NoMatch/NoMatch';
import NavigationBar from './hoc/NavigationBar/NavgationBar';
import Layout from './hoc/Layout/Layout';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <NavigationBar />
          <Layout>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/about' component={About} />
              <Route path='/software' component={SoftWare} />
              <Route path='/hardware' component={HardWare} />
              <Route path='/contact' component={Contact} />
              <Route component={NoMatch} />
            </Switch>
          </Layout>
          <Footer></Footer>
        </Router>
      </React.Fragment>
    );
  }
}
export default App;

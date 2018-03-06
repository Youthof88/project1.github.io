import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Maincontent from './components/Maincontent';
import Tees from './components/Tees';
import Backpacks from './components/Backpacks';
import Accesories from './components/Accesories';
import Trips from './components/Trips';


class App extends Component {
  render() {
    return (
      <div>
        <div>
        <Header />
        </div>
        <div>
        <Route path="/home" component={Maincontent}/>
        <Route path="/tees" component={Tees}/>
        <Route path="/backpacks" component={Backpacks}/>
        <Route path="/accesories" component={Accesories}/>
        <Route path="/trips" component={Trips}/>
        </div>

        <div>
          <Footer />
        </div>
      
    </div>
    );
  }
}

export default App;

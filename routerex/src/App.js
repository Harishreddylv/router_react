import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter ,Switch,Route, Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/contact' component={Contact}/>
        </Switch>
      </BrowserRouter>
        
      </div>
    );
  }
}

export default App;

const Home = () =>  {
  return <ul>
  <li><Link to='about'>About</Link></li>
  <li><Link to='contact'>Contact</Link></li>
</ul>;
}
const About = () =>  {
  return <h1>Hello About<Link to='/'>Home</Link></h1>;
}
const Contact = () =>  {
  return <h1>Hello Contact</h1>;
}
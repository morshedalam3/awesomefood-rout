import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Works from './Components/Works';
import WorkDetail from './Components/WorkDetail';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Header from './Components/Header';

const address = "/about"
switch(address) {
  case '/home':
    // Home page dekhate hobe
    break;
  case '/about':
    // About page dekhate hobe
    break;
  case '/works':
      // Works page dekhate hobe
    break;
  case '/contact':
      // Contact page dekhate hobe
    break;
  default: 
    // 404
  
}

function App() {
  return (
    <>
       <Router>
      <Header />

      <Switch>
        
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/about">
          <About />
        </Route>

        <Route path="/works">
          <Works />
        </Route>
        <Route  path="/work/:productName">
          <WorkDetail />
        </Route>

        <Route path="/contact">
          <Contact />
        </Route>

        <Route path="*">
          <h1>404 Not found!</h1>
        </Route>
        
      </Switch>
      <Footer />
    </Router>
    </>
  );
}

export default App;

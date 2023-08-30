import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Component/Home/Home';
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';
import About from './Component/About/About';
import Support from './Component/Support/Support';
import Contact from './Component/Contact/Contact';
import NotFound from './Component/NotFound/NotFound';
import Services from './Component/Services/Services';
import Register from './Component/Contact/Register/Register';
import Login from './Component/Contact/Login/Login';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/support">
            <Support></Support>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;

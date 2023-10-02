import Header from './components/Header/Header'
import Hero from './components//Hero/Hero'
import Companies from './components/Companies/Companies'
import './app.css'
import Product from './components/Product/Product'
import Value from './components/Value/Value'
import Contact from './components/Contact/Contact'
import GetStarted from './components/GetStarted/GetStarted'
import Footer from './components/Footer/Footer'
// import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient"/>
        <Header />
        <Hero />
      </div>
      <Companies />
      <Product />
      <Value/>
      <Contact />
      <GetStarted />
      <Footer />
    </div>
  );
}

export default App;

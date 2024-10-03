import './App.css';
import NavigationBar from './components/NavigationBar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <NavigationBar></NavigationBar>
      <Home></Home>
      <About></About>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  );
}

export default App;

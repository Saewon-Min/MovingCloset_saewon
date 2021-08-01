import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav role="navigation" class="active-1">
      <ul>
        <li><a tabindex="1" href="#">Home</a></li>
        <li><a tabindex="2" href="#" class="selected">About</a></li>
        <li><a tabindex="3" href="#">Clients</a></li>
        <li><a tabindex="4" href="#">Contact Us</a></li>
      </ul>
    </nav> 
    </div>
  );
}

export default App;

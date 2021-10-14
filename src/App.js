import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';

function App() {
  const objStyle= {backgroundColor: 'red'}
  return (
    
    <div className="App"  style={ objStyle } onClick={ () => alert('Hola') } >
        <NavBar/>
        <img src={logo} className="App-logo" alt="logo"  />
        
    </div>
  );
}

export default App;

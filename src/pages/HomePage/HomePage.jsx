//import logo from './logo.svg';
import Cards from '../Cards/Cards';
import './HomePage.css';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch("/coins.json")
      .then(response => response.json())
      .then(data => setData(data))
  }, [])

  return (
    <div className="App">
      <div className="Container">
        <img className="App-logo" alt="dogecoin" src="https://upload.wikimedia.org/wikipedia/en/d/d0/Dogecoin_Logo.png" />
        <h1>Exchanges acceptant le Dogecoin</h1>
        <div class="home-grid">
          {
            data.map(function (coin) {
              return (
                <Cards data={coin} key={coin.name + coin.network}></Cards>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}

export default App;

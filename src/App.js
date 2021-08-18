import './App.css';
import Lottery from './Lottery';

function App() {
  return (
    <div className="App">
      <h1>Lottery</h1>
      <Lottery 
        name="Monthly lottery"
        max={40}
        numOfBalls={8}
      />
      <Lottery
        name="Weely lottery"
        max={10}
        numOfBalls={5}/>
    </div>
  );
}

export default App;

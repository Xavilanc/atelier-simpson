import logo from './logo.svg';
import './App.css';
import Avatar from './Avatar.js';

function App() {
  return (
    <div className="App">
      <Avatar image="https://www.stickees.com/files/cartoon/the-simpsons/2239-bart-simpson-.png" firstName="Bart" lastName="Simpson" />
      <Avatar image="https://www.stickees.com/files/cartoon/the-simpsons/2248-homer-simpson-happy.png" firstName="Homer" lastName="Simpson" />
      <Avatar image="https://www.stickees.com/files/cartoon/the-simpsons/2252-marge-simpson-sticker.png" firstName="Marge" lastName="Simpson" />
      <Avatar image="https://www.stickees.com/files/cartoon/the-simpsons/2250-lisa-simpson-sticker.png" firstName="Lisa" lastName="Simpson" />
      <Avatar image="https://www.stickees.com/files/cartoon/the-simpsons/2251-maggie-simpson-sticker.png" firstName="Maggie" lastName="Simpson" />
    </div>
  );
}

export default App;

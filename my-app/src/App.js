import logo from './logo.svg';
import './App.css';
import Gameplay from './components/gamePlay/Gameplay';
import Title from './components/title/Title';
// import HomePage from './components/homePage/HomePage';
function App() {
  return (
    <>
    <Title/>
    {/* <HomePage/> */}
    <Gameplay/>
    </>
  );
}

export default App;

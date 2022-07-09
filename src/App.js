import './App.css';
import {Header} from "./components/Header";
import {Students} from "./components/Students";
function App() {
  return (
    <div className="App">
       <Header title='React Header'/>
        <Students/>
    </div>
  );
}

export default App;

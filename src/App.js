import './App.css';
import {Header} from "./components/Header";
import {Students} from "./components/Students";
import {useState} from "react";
function App() {
    const [students, setStudents] = useState([
        {
            id: 1,
            name: 'Saurabh',
            age:30,
        },
        {
            id: 2,
            name: 'Raushan',
            age: 32,
        }
    ]);
  return (
    <div className="App">
       <Header title='React Header'/>
        <Students students={students}/>
    </div>
  );
}

export default App;

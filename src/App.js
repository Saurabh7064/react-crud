import './App.css';
import {Header} from "./components/Header";
import {Students} from "./components/Students";
import {useState} from "react";
import {AddStudent} from "./components/AddStudent";
function App() {
    const [students, setStudents] = useState([
        {
            id: 1,
            name: 'Saurabh',
            age:30,
            status: 'pass',
        },
        {
            id: 2,
            name: 'Raushan',
            age: 32,
            status: 'fail',
        }
    ]);

    const deleteStudent = (id) => {
        console.log(id);
        setStudents(students.filter((student)=>student.id!==id));
    }

    //This function toggles the status of the student based on pass and fail
    const toggleStudent = (id,status) => {
      console.log(id);
        //student.id === id && status === 'pass' ? {...student,status:'fail'}:student
        setStudents(students.map(student => {
          if (student.id === id) {
              if(student.status === 'pass'){
              return {
                  ...student,
                  status: 'fail'
              }}else {
                  return {
                      ...student,
                      status: 'pass'
                  }
              }
          }
          else {
              return student
          }
      }));
    }

    const addStudent = (student) => {
        console.log(student);
        setStudents([...students,student]);
    }

  return (
    <div className="App">
       <Header title='React Header'/>
        <AddStudent onAddStudent={addStudent}/>
        {students.length>0?(<Students students={students} onDelete={deleteStudent} onToggle={toggleStudent}/>):('No student records found')}
    </div>
  );
}

export default App;

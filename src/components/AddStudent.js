import {useState} from "react";

export const AddStudent = ({onAddStudent}) => {
    const [id,setId] = useState('');
    const [name,setName] = useState('');
    const [age,setAge] = useState('');
    const [status,setStatus] = useState('');

    const onSubmit = (e) => {
      e.preventDefault();
      if(!id){
          alert("Please enter id");
      }
        onAddStudent({id,name,age,status});
        setId('');
        setName('');
        setAge('');
        setStatus('');

    }

    return(
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Id</label>
                <input type='text' placeholder='Enter Id' value={id} onChange={(e)=>setId(e.target.value)}/>
            </div>

            <div className='form-control'>
                <label>Name</label>
                <input type='text' placeholder='Enter name'  value={name} onChange={(e)=>setName(e.target.value)}/>
            </div>

            <div className='form-control'>
                <label>Age</label>
                <input type='text' placeholder='Enter age'  value={age} onChange={(e)=>setAge(e.target.value)}/>
            </div>

            <div className='form-control'>
                <label>Status</label>
                <input type='text' placeholder='Enter status'  value={status} onChange={(e)=>setStatus(e.target.value)}/>
            </div>

            <input type='submit' value='Save Student' className='btn btn-block'/>
        </form>

    )
}

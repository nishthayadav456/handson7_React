import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom'
import { editStudent } from '../Slice';
import './Style.css';
const EditStudent = () => {
  const dispatch = useDispatch();
  const navi = useNavigate();
  const index = useLocation().state.index;
  const data = useSelector((state) => state.Stu_Data);
  console.log(index)
  console.log(data)
  const [info, setInfo] = useState({
    name : data[index].name,
    age : data[index].age,
    course : data[index].course,
    batch : data[index].batch
  })
  const handleChange = (e) =>{
    setInfo({...info, [e.target.name] : e.target.value})
  }
  const handleClick = () => {
    dispatch(editStudent({info, index}));
    navi('/student')
    console.log(info)
  }
  return (
    <div>
      
      <label className="Name" htmlFor='name'>Name</label>
      <input className="box1" type='text' placeholder='Enter Name' id='name' name='name'  onChange={handleChange} />
      <label className="Age" htmlFor='age'>Age</label>
      <input className="box2" type='number' placeholder='Enter Age' id='age' name='age'  onChange={handleChange}/>
      <label className="Course" htmlFor='course'>Course</label>
      <input className="box3" type='text' placeholder='Enter Course' id='course' name='course'  onChange={handleChange}/>
      <label className="Batch" htmlFor='batch'>Batch</label>
      <input className="box4" type='text' placeholder='Enter Batch' id='batch' name='batch'  onChange={handleChange}/>
      <button className="btn2" onClick={() =>navi('/student')}>cancel</button>
      <button className="btn3" onClick={handleClick}>Update</button>
    </div>
  )
}
export default EditStudent
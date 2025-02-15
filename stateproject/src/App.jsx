
import './App.css';
import Course from './Course';
import { useState } from 'react';

function getRandomCourse(){
  const courseArray = ['Angular','Bootstrap','Ccsharp','KompleWeb'];
  return courseArray[Math.floor(Math.random()*courseArray.lenght)]
}

function App() {
  const [courses, setCourses] = useState([])

  const handleClick = () =>{
setCourses([...courses,getRandomCourse()]);
  };

  const courseList =  courses.map((course,index)=>{
      return <Course key={index} courseName={course}/>;
     });
      

  return (
    <div className="App">
      <button className='appButton' onClick={handleClick}>Kurs Ekle</button>
     <div>
      {courseList}
     </div>
<Course/>
    </div>
  );
}

export default App;

//  we will call all courses here in an array
import React, { useState } from 'react';
import Course from './Course';

const AllCourses=()=>{

    // we'll return multiple courses from here
    const [courses, setCourses]=useState([
        {title:"Java Course", description:"this is java course"},
        {title:"React Course", description:"this is react course"},
        {title:"Django Course", description:"this is Django course"},
        {title:"Angular Course", description:"this is Angular course"}
    ]); 
    
    // array contains courses, and a function setCourses
    // here useState is a hook which enable state( bcoz by def state can be used in class component)


    return(
        <div>
            <h1>All Courses</h1>
            <p>List of courses are as follows :</p>

            {
                courses.length>0 ? courses.map((item)=>
                <Course course={item}></Course>)
                 : "no courses are there"
            }
        </div>
    );
}
export default AllCourses;
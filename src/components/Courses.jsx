import { useState } from "react";
import CourseBox from "./CourseBox";

function Courses(props){
    const courses = props.courses;
    // console.log(courses)
    const [searchTerm, setSearchTerm] = useState('');

    const filteredCourses = searchTerm.trim() !== ''
    ? courses.filter((course)=>
        course.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    : courses;

    return(
        <section className="courses">
            <div className="heading hz">
                <p>Courses</p>
                <input 
                    type="text"
                    name="search-courses"
                    id="search-courses"
                    className="input"
                    placeholder="Search courses..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <div className="content">
                <div className="list">
                    {filteredCourses.map(course=>(
                        <CourseBox
                            key={course.id}
                            course={course}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Courses;
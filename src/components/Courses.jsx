import { useState } from "react";
import CourseBox from "./CourseBox";

function Courses(){
    const [searchTerm, setSearchTerm] = useState('');
    const coursesData = [
        { title: 'Web Programming 1 (ENG)', lecturer: 'Giorgi Kakashvili', enrolled: true },
        { title: 'CS105 Aspects of Computer Science and Technology', lecturer: 'David Razmadze' },
        { title: 'CS104 Principles of Programming - Nika Narushvili', lecturer: 'Nika Narushvili' },
        { title: 'HUM054 German Language A1.1 (GEO)', lecturer: 'Nino Gogelia', enrolled: true },
    ];

    const filteredCourses = searchTerm.trim() !== ''
    ? coursesData.filter((course)=>
        course.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    : coursesData;

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
                    {filteredCourses.map((course, index)=>(
                        <CourseBox
                            key={index}
                            title={course.title}
                            lecturer={course.lecturer}
                            enrolled={course.enrolled}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Courses;
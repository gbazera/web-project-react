import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Course(props){
    const {id, formattedTitle} = useParams();

    const courses = JSON.parse(localStorage.getItem('courses')) || [];
    const course = courses[id]
    return(
        <section>
            <div className="heading">
                <p>{course.title}</p>
                <p className="lecturer">Lecturer: <a href="#" className="link">{course.lecturer}</a></p>
            </div>
            <div className="content">
                <div className="weeks">
                    <div className="item box">
                        <p className="title">Week 1</p>
                        <ul className="attachments">
                            <li><i className='bx bxs-file-doc'></i> <a href="#" className="link">Syllabus</a> <span>314.6KB Word 2007 Document</span></li>
                            <li><i className='bx bxs-slideshow'></i> <a href="#" className="link">Lecture 1 Presentation</a> <span>9.6 MB Powerpoint 2007 Presentation</span></li>
                        </ul>
                    </div>
                    <div className="item box">
                        <p className="title">Week 2</p>
                        <ul className="attachments">
                            <li><i className='bx bxs-slideshow'></i> <a href="#" className="link">Lecture 2 Presentation</a> <span>35.3 MB Powerpoint 2007 Presentation</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Course;
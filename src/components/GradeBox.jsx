import { Link } from 'react-router-dom';

function GradeBox(props) {
	const course = props.course;
    const grades = props.grades;
    
    let formattedTitle = course.title.replace(/\s+/g, '-').toLowerCase();
	return (
		<div className="item grade box">
			<Link
				to={'/course/' + course.id + '/' + formattedTitle}
				className="title"
			>
				{course.title}
			</Link>
            <p className='grade'><span>{grades[course.id].grade } </span> / 100</p>
		</div>
	);
}

export default GradeBox;

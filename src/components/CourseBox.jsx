import { Link } from 'react-router-dom';

function CourseBox(props) {
	const course = props.course;
	// console.log(props)
	let formattedTitle = course.title.replace(/\s+/g, '-').toLowerCase();
	return (
		<div className="item course box">
			<Link
				to={'/course/' + course.id + '/' + formattedTitle}
				className="title"
			>
				{course.title}
			</Link>
			<a href="#" className="lecturer">
				{course.lecturer}
			</a>
			<button
				className={course.btn_hidden ? 'btn hidden' : 'btn'}
				disabled={course.enrolled}
			>
				{course.enrolled ? 'Already Enrolled' : 'Enroll'}
			</button>
		</div>
	);
}

export default CourseBox;

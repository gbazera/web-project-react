import { Link, useNavigate } from 'react-router-dom';

function CourseBox(props) {
	const course = props.course;
	// console.log(props)
	let formattedTitle = course.title.replace(/\s+/g, '-').toLowerCase();

	let courses = JSON.parse(localStorage.getItem('courses')) || [];

    const toggleEnrollment=()=>{
		// Find the index of the current course
		const courseIndex = courses.findIndex((c) => c.id === course.id);

		// Toggle enrollment status for the current course
		courses[courseIndex].enrolled = !courses[courseIndex].enrolled;
	
		// Save the updated courses back to localStorage
		localStorage.setItem('courses', JSON.stringify(courses));

		useNavigate('/course/' + course.id + '/' + formattedTitle, {replace: true})
	}

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
				onClick={toggleEnrollment}
				className={props.btn_hidden ? 'btn hidden' : 'btn'}
				disabled={course.enrolled}
			>
				{course.enrolled ? 'Already Enrolled' : 'Enroll'}
			</button>
		</div>
	);
}

export default CourseBox;

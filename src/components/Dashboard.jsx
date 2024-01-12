import CourseBox from './CourseBox';
import GradeBox from './GradeBox';
import NewsBox from './NewsBox';

function Dashboard(props) {
	let courses = props.courses;
	let grades = props.grades;
	let news = props.news;
	return (
		<div className="dashboard">
			<section className="my-courses">
				<p className="heading">My Courses</p>
				<div className="content">
					<div className="list">
						{courses.map((course) => (
							<CourseBox
								key={course.id}
								course={course}
								btn_hidden={true}
							/>
						))}
					</div>
				</div>
			</section>
			<section className="grades">
				<p className="heading">My Grades</p>
				<div className="content">
					<div className="list">
						{courses.map((course) => (
							<GradeBox
								key={course.id}
								course={course}
								grades={grades}
							/>
						))}
					</div>
				</div>
			</section>
			<section className="news">
				<p className="heading">News</p>
				<div className="content">
					<div className="list">
						{news.map((item) => (
							<NewsBox key={item.id} item={item} short={true} />
						))}
					</div>
				</div>
			</section>
		</div>
	);
}

export default Dashboard;

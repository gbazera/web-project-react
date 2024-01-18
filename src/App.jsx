import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Courses from './components/Courses';
import News from './components/News';
import Course from './components/Course';
import Login from './components/Login';

function App() {
	const [loggedIn, setLoggedIn] = useState(
		JSON.parse(localStorage.getItem('loggedIn')) || false
	);

	useEffect(() => {
		localStorage.setItem('loggedIn', JSON.stringify(loggedIn));
	}, [loggedIn]);

	useEffect(() => {
		const storedLoggedIn = localStorage.getItem('loggedIn');
		setLoggedIn(JSON.parse(storedLoggedIn));
	}, []);

	function LoggedOutRoute({ children }) {
		const isLoggedIn = loggedIn; // Access loggedIn state directly

		return isLoggedIn ? children : <Navigate to="/login" replace />;
	}

	function LoggedInRoute({ children }) {
		const isLoggedIn = loggedIn; // Access loggedIn state directly

		return isLoggedIn ? <Navigate to="/" replace /> : children;
	}

	const [courses, setCourses] = useState(
		JSON.parse(localStorage.getItem('courses')) || [
			{
				id: 0,
				title: 'Web Programming 1 (ENG)',
				lecturer: 'Giorgi Kakashvili',
				enrolled: true,
			},
			{
				id: 1,
				title: 'CS105 Aspects of Computer Science and Technology (ENG)',
				lecturer: 'David Razmadze',
				enrolled: false,
			},
			{
				id: 2,
				title: 'CS104 Principles of Programming (ENG)',
				lecturer: 'Nika Narushvili',
				enrolled: true,
			},
			{
				id: 3,
				title: 'HUM054 German Language A1.1 (GEO)',
				lecturer: 'Nino Gogelia',
				enrolled: false,
			},
		]
	);

	useEffect(() => {
		localStorage.setItem('courses', JSON.stringify(courses));
	}, [courses]);

	useEffect(() => {
		const storedCourses = localStorage.getItem('courses');
		setCourses(JSON.parse(storedCourses));
	}, []);

	const [grades, setGrades] = useState([
		{ id: 0, grade: 94 },
		{ id: 1, grade: 24 },
		{ id: 2, grade: 91 },
		{ id: 3, grade: 19 },
	]);

	useEffect(() => {
		localStorage.setItem('grades', JSON.stringify(grades));
	}, [grades]);

	const [news, setNews] = useState([
		{
			id: 0,
			title: 'Bla bla bla',
			date: 'January 4',
			message:
				'Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla \
                bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla \
                bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla\
                bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla \
                bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla',
		},
		{
			id: 1,
			title: 'Bla bla bla (meore)',
			date: 'January 5',
			message:
				'Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla blala bla bla bla bla \
                bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla \
                bla bla bla bla bla bla bla bla bla bla bla bla bla \
                bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla',
		},
	]);

	useEffect(() => {
		localStorage.setItem('news', JSON.stringify(news));
	}, [news]);

	const myCourses = courses.filter((course) => course.enrolled === true);
	const { openedCourse, setOpenedCourse } = useState('');

	return (
		<>
			<BrowserRouter>
				<Header loggedIn={loggedIn} />
				<main>
					<Routes>
						<Route
							path="/login"
							element={
								<>
									{/* <LoggedInRoute> */}
									<Login />
									{/* </LoggedInRoute> */}
								</>
							}
						/>
						<Route
							index
							element={
								<>
									<LoggedOutRoute>
										<Sidebar />
										<Dashboard
											courses={myCourses}
											grades={grades}
											news={news}
										/>
									</LoggedOutRoute>
								</>
							}
						/>
						<Route
							path="courses"
							element={
								<>
									<LoggedOutRoute>
										<Sidebar />
										<Courses courses={courses} />
									</LoggedOutRoute>
								</>
							}
						/>
						<Route
							path="news"
							element={
								<>
									<LoggedOutRoute>
										<Sidebar />
										<News news={news} />
									</LoggedOutRoute>
								</>
							}
						/>
						<Route
							path="course/:id/:formattedTitle"
							element={
								<>
									<LoggedOutRoute>
										<Sidebar />
										<Course openedCourse={openedCourse} />
									</LoggedOutRoute>
								</>
							}
						/>
						<Route
							path="*"
							element={
								<section>
									<p className="heading">Page not found.</p>
								</section>
							}
						/>
					</Routes>
				</main>
			</BrowserRouter>
		</>
	);
}

export default App;

import CourseBox from "./CourseBox";

function Dashboard(){
    return(
        <div className="dashboard">
            <section className="my-courses">
                <p className="heading">My Courses</p>
                <div className="content">
                    <div className="list">
                        <CourseBox title='Web Programming 1 (ENG)' lecturer='Giorgi Kakashvili' btn_hidden/>
                        <CourseBox title='HUM054 German Language A1.1 (GEO)' lecturer='Nino Gogelia' btn_hidden/>
                    </div>
                </div>
            </section>
            <section className="news">
                <p className="heading">News</p>
                <div className="content">
                    <div className="list">
                        <div className="item box">
                            <div className="top">
                                <a href="#" className="title">Bla bla bla</a>
                                <p className="date">January 4</p>
                            </div>
                            <p className="message">Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla... <a href="#" className="link">Read More</a></p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Dashboard;
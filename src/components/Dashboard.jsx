function Dashboard(){
    return(
        <div className="dashboard">
            <section className="courses">
                <p className="heading">My Courses</p>
                <div className="content">
                    <div className="list">
                        <div className="item box">
                            <a href="./course" className="title">Web Programming 1 (ENG)</a>
                            <a href="#" className="teacher">Giorgi Kakashvili</a>
                        </div>
                        <div className="item box">
                            <a href="./course" className="title">Web Programming 1 (ENG)</a>
                            <a href="#" className="teacher">Giorgi Kakashvili</a>
                        </div>
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
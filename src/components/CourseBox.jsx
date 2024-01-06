function CourseBox(props){
    return(
        <div className="item course box">
            <a href="./course" className="title">{ props.title }</a>
            <a href="#" className="lecturer">{ props.lecturer }</a>
            <button className={props.btn_hidden ? 'btn hidden' : 'btn'} disabled={props.enrolled}>{props.enrolled ? 'Already Enrolled' : 'Enroll'}</button>
        </div>
    )
}

export default CourseBox;
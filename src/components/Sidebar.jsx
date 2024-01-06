import { useState } from "react"
import {Link} from "react-router-dom";

function Sidebar(){
    const [isActive, setActive] = useState('dashboard')

    return(
        <aside>
            <ul>
                <Link to={'/'}><li className={` ${isActive === 'dashboard' ? 'active' : ''}`} onClick={() => setActive('dashboard')}><i className='bx bxs-dashboard'></i> Dashboard</li></Link>
                <Link to={'/courses'}><li className={` ${isActive === 'courses' ? 'active' : ''}`} onClick={() => setActive('courses')}><i className='bx bx-menu'></i> Courses</li></Link>
                <Link to={'/grades'}><li className={` ${isActive === 'grades' ? 'active' : ''}`} onClick={() => setActive('grades')}><i className='bx bxs-bulb'></i> Grades</li></Link>
                <Link to={'/news'}><li className={` ${isActive === 'news' ? 'active' : ''}`} onClick={() => setActive('news')}><i className='bx bxs-news'></i> News</li></Link>
                <Link to={'#'}><li className="log-out"><i className='bx bxs-log-out'></i> Log Out</li></Link>
            </ul>
        </aside>
    )
}

export default Sidebar;
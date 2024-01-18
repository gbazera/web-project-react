import { useState } from "react"
import {Link, useNavigate} from "react-router-dom";

function Sidebar(){
    const [isActive, setActive] = useState('dashboard')

    const logOut=()=>{
        localStorage.setItem('loggedIn', JSON.stringify(false));
        window.location = '/login'
    }

    return(
        <aside>
            <ul>
                <Link to={'/'}><li className={` ${isActive === 'dashboard' ? 'active' : ''}`} onClick={() => setActive('dashboard')}><i className='bx bxs-dashboard'></i> Dashboard</li></Link>
                <Link to={'/courses'}><li className={` ${isActive === 'courses' ? 'active' : ''}`} onClick={() => setActive('courses')}><i className='bx bx-menu'></i> Courses</li></Link>
                <Link to={'/news'}><li className={` ${isActive === 'news' ? 'active' : ''}`} onClick={() => setActive('news')}><i className='bx bxs-news'></i> News</li></Link>
                <Link onClick={logOut}><li className="log-out"><i className='bx bxs-log-out'></i> Log Out</li></Link>
            </ul>
        </aside>
    )
}

export default Sidebar;
import '../components/css/Profile.css';
import profile from './Kathir.jpg';
export function Profile() {
    return (
        <>
            <div className='profile-body'>
                <nav>
                    <ul>
                        <li><a href="/">Dashboard</a></li>
                        <li><a className="active" href="/profile">Profile</a></li>
                        <li><a href="/resume">Resume</a></li>
                    </ul>
                </nav>
                <img className='profile-img' src={profile} alt='profile-pic' />
                <div className="profile-column">
                    <span className="profile-header">Kathirvel Selvam</span>
                    <span className="profile-sub-header">Pavoorchatram, Tenkasi</span>
                    <span className="profile-description">Full Stack Developer</span>
                </div>
                <div className="profile-column">
                    <a className="profile-link" href="https://github.com/kathirvelsiva">Github</a>
                    <a className="profile-link" href="https://www.linkedin.com/in/kathirvelsiva">LinkedIn</a>
                </div>
            </div>
        </>
    )
};
// import { useEffect } from "react";
// import getData from "../../data/getData";
import "../css/Dashboard.css";
import WordChanger from "./WordChanger";
export function Dashboard() {
    // const links = document.querySelectorAll('nav ul li a');
    // links.forEach(link => {
    //     link.addEventListener('click', function (event) {
    //         links.forEach(link => {
    //             link.classList.remove('active');
    //         });
    //         this.classList.add('active');
    //     })
    // })
    // useEffect(() => {
    //     getData();
    // }, []);
    return (
        <>

            <div className="dashboard-body">
                <nav>
                    <ul>
                        <li><a className="active" href="/">Dashboard</a></li>
                        <li><a href="/profile">Profile</a></li>
                        <li><a href="/resume">Resume</a></li>
                    </ul>
                </nav>
                <div className="filter-wall">
                    <span className="title"><WordChanger /></span>
                    <article>
                        <h1>As a Full Stack developer</h1>
                        <p>
                            Full stack development refers to the end-to-end application software development, including the front end and back end. The front end consists of the user interface, and the back end takes care of the business logic and application workflows.
                        </p>
                    </article>
                </div>
            </div>
        </>
    )
}
import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/career-skills-progress-graphic-icon-symbol_53876-124007.jpg?w=996&t=st=1703094662~exp=1703095262~hmac=6bf8feab50af4d3e87000453c28c14cc13b9ceec72eefc5d174f5b907c643382)' }}>
                <div className="hero-overlay bg-opacity-75"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5">Job task analysis (JTA), involves an examination and breakdown of the skills and demands specific to a particular task, role or duties within the workplace.</p>
                        <Link to={"/dashboard"}><button className="btn btn-primary">Let`s Explore</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
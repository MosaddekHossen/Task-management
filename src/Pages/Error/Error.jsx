import { Link } from "react-router-dom";

const Error = () => {
    return (
        <>
            <div className="flex justify-center max-w-screen-xl mx-auto">
                <img className="h-[90vh] w-auto object-cover" src="https://img.freepik.com/free-vector/403-error-forbidden-with-police-concept-illustration_114360-1904.jpg?w=740&t=st=1703099530~exp=1703100130~hmac=f8ed4fe72363b98fd2a4bc7e41086d716e9f5f675126b943c9113c29df340bd7" alt="Error" />
            </div>
            <div className="text-center my-2">
                <Link to={'/'}><button className="btn bg-[#3d5fdb] hover:bg-[#2b2b81] text-white">Back To Home</button></Link>
            </div>
        </>
    );
};

export default Error;
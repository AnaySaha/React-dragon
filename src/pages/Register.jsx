import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const Register = () => {

const { createNewUser, user, setUser } = useContext(AuthContext);

  const handleSubmit = (e)=> {
    e.preventDefault();
    //get from data
    const form = new FormData(e.target);
    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");
    console.log({ name, email, password });

    createNewUser(email, password)
    .then((result) => {
      const user = result.user;
      setUser(user);
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
   
  };
    return (
        <div className="min-h-screen flex justify-center items-center hero bg-base-200">
        <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl rounded-none p-10">
 <h2 className="text-2xl font-semibold text-center">Create Your Account</h2>
 <form onSubmit={handleSubmit} className="card-body">

 <div className="form-control">
     <label className="label">
       <span className="label-text">Name</span>
     </label>
     <input name="name" type="text" placeholder="name" className="input input-bordered" required />
   </div>

   <div className="form-control">
     <label className="label">
       <span className="label-text">Email</span>
     </label>
     <input name= "email" type="email" placeholder="email" className="input input-bordered" required />
   </div>
   <div className="form-control">
     <label className="label">
       <span className="label-text">Password</span>
     </label>
     <input name="password" type="password" placeholder="password" className="input input-bordered" required />
     <label className="label">
       <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
     </label>
   </div>
   <div className="form-control mt-6">
     <button className="btn btn-neutral rounded-none">Sign Up</button>
   </div>
 </form>
 <p className="text-center font-semibold">
   Already Have an Account? Please <Link className="text-blue-500" to="/auth/login">Login</Link>
 </p>
</div>
   </div>
    );
};

export default Register;
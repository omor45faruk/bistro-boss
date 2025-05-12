import { Link } from "react-router-dom";


 

 
const Login = () => {
    const{setUser}=useContext(AuthContext)
const provider=new GoogleAuthProvider();
const handleGoogleLogin=()=>{
 
    signInWithPopup(auth,provider)
    .then((result)=>{
        

        {result.user && toast.success("Log in Successful.")}
        setUser(user);
    })

    .catch(error=>{
toast.error(error);
    })
 
}
    const handleLogin=(e)=>{
        e.preventDefault();
        const form=e.target;
        const email=form.email.value;
        const password=form.password.value;
        // console.log({email,password});

        signInWithEmailAndPassword(auth,email,password)
        .then(result=>{
            const user =result.user;
            // console.log(user)
            {user && toast.success("Log in Successful.")}
            setUser(user);
           

           return;
            
        })
        .catch(error=>{
            toast.error(error.message)
        })


    }



    
    return (
        <div>
            {/* <Helmet>
                <title>SportXpert || Login</title>
            </Helmet> */}
           <div className="hero bg-violet-200 min-h-screen ">
            
  <div className="hero-content   flex-col  ">
    <div className="text-center sm:w-[350px] lg:w-[520px]  md:w-[520px]
    ">
      <h1 className="lg:text-5xl md:text-3xl  max-sm:text-2xl max-sm:w-[300px] font-bold  ">Login now!</h1>
    </div>
    <div className="card  bg-violet-50 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" 
         name="email" 
          placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password"
          name="password" placeholder="password" className="input input-bordered" required />
          <label className="label text-gray-600">
            <p>Don't have an account? <Link to={'/auth/register'} className="text-sky-500">Sign up</Link></p>
          </label>
        </div>
        <div className="form-control mt-1">
          <button className="btn btn-primary">Login</button>
           
          <button className="btn btn-outline mt-2" onClick={handleGoogleLogin}> <FcGoogle />
          Login with Google.</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;
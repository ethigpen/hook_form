import React, {useState} from 'react';


const Form = () => {
    const [fname, setFirstName] = useState("");
    const [lname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setCPassword] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { fname, lname, email, password };
        console.log(`Welcome ${fname} ${lname}`);
        setHasBeenSubmitted( true );
    };
    
    const formMessage = () => {
        if( hasBeenSubmitted ) {
            return "Thank you for submitting the form!";
	} else {
        return "Welcome, please submit the form";
	}
    };

    return (
        <div className="container">
            <form onSubmit={createUser}>
                <h3>{formMessage()}</h3>
                <div className="form-group">
                    <label htmlFor="">First Name:</label>
                    {fname.length < 3 || fname.length > 20?
                    <p className="text-danger">Name must be between 3-20 characters</p>:
                    ""
                    }
                    <input onChange = {(e)=>setFirstName(e.target.value)} type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="">Last Name:</label>
                    {lname.length < 3 || lname.length > 20?
                    <p className="text-danger">Name must be between 3-20 characters</p>:
                    ""
                    }
                    <input onChange = {(e)=>setLastName(e.target.value)}type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="">Email:</label>
                    {email.length < 5?
                    <p className="text-danger">Email must be at least 5 characters</p>:
                    ""
                    }
                    <input onChange = {(e)=>setEmail(e.target.value)}type="email" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="">Password:</label>
                    {password.length < 8?
                    <p className="text-danger">Password must be at least 8 characters</p>:
                    ""
                    }
                    <input onChange = {(e)=>setPassword(e.target.value)}type="password" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="">Confirm Password:</label>
                    {confirmPassword != password?
                    <p className="text-danger">Passwords must match</p>:
                    ""
                    }
                    <input onChange = {(e)=>setCPassword(e.target.value)}type="password" className="form-control" />
                </div>
                <input type="submit" value="Register!" className= "btn btn-success mt-1"/>
            </form>
            {/* <h3 className="mt-3">Your info:</h3>
            <div>
                <p>First Name: {fname}</p>
                <p>Last Name: {lname}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {confirmPassword}</p>
            </div> */}
        </div>
    );
};


export default Form;
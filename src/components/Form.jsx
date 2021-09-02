import React, {useState} from 'react';


const Form = () => {
    const [fname, setFirstName] = useState("");
    const [lname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setCPassword] = useState("");

    return (
        <div className="container">
            <form>
                <div className="form-group">
                    <label htmlFor="">First Name:</label>
                    <input onChange = {(e)=>setFirstName(e.target.value)} type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="">Last Name:</label>
                    <input onChange = {(e)=>setLastName(e.target.value)}type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="">Email:</label>
                    <input onChange = {(e)=>setEmail(e.target.value)}type="email" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="">Password:</label>
                    <input onChange = {(e)=>setPassword(e.target.value)}type="password" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="">Confirm Password:</label>
                    <input onChange = {(e)=>setCPassword(e.target.value)}type="password" className="form-control" />
                </div>
                <input type="submit" value="Register!" className= "btn btn-success mt-3"/>
            </form>

            <h3>Your info:</h3>
            <div>
                <p>Name: {fname}</p>
                <p>Last Name: {lname}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {confirmPassword}</p>
            </div>
        </div>
    );
};


export default Form;
import React,{useState} from 'react'
import { useNavigate } from "react-router-dom";

const login = (props) => {

    const [credentials, setcredentials] = useState({email:"",password:""})
    const navigate = useNavigate();

    const handleSubmit = async (e)=>{
        e.preventDefault();

        const responce = await fetch(`http://localhost:5000/api/auth/login`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({email: credentials.email ,password: credentials.password }),
          });
      
          const json = await responce.json();
          // console.log(json);
          if(json.sucess){
            localStorage.setItem('token',json.authToken);
            localStorage.setItem('Name',json.Name);
            navigate('/');
            props.showAlert("SuccesFully LogedIn","success")
          }else{
            props.showAlert("Invalid Details","danger")
          }
    }

    const onChange=(e)=>{
        setcredentials({...credentials, [e.target.name]: e.target.value})
    }

  return (
    <>
    <h3>LOgin</h3>
    <form className="container m-4" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
          email
          </label>
          <input
            onChange={onChange}
            type="email"
            className="form-control"
            id="email"
            name="email"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
          password
          </label>
          <input
            onChange={onChange}
            type="password"
            className="form-control"
            id="password"
            name="password"
            required
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
        >
          login
        </button>
      </form>
    </>
  )
}

export default login
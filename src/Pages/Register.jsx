import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { SERVER_URL } from "../Services/serverUrl"



function Register() {
    const [userData,setUserData] = useState({
        firstname:"",lastname:"",address:"",email:"",gender:"",mobile:"",password:"",dob:"",course:""
    })
    const navigate = useNavigate()
    const handleRegister =async (e)=>{
        e.preventDefault()
        console.log(userData);
        const {firstname,lastname,address,email,gender,mobile,password,dob,course} = userData
        if(!firstname || !lastname || !address || !email || !gender || !mobile || !password || !dob || !course){
            alert("please fill the form completely")
        }else{
            //proceed to api call
            try {
                await axios.post(`${SERVER_URL}/register`,userData)
                alert("Registration Successfull")
                navigate("/details")
            } catch (error) {
                console.log(error);
                alert("Error Registering")
            }
        }
    }
  return (
    <div style={{width:'100%',height:'100vh'}}>
      <div className="container">
          <div className="row">
            <div className="col-lg-3 d-flex justify-content-center align-items-center mt-5">
               <div className=""> <img className="img-fluid" src="https://images.unsplash.com/photo-1594312915251-48db9280c8f1?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGVkdWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D" alt="" /></div>
            </div>
            <div className="col-lg-9">
                <h1 className="text-center mt-5">Apply as a Student</h1>
                <div className="row mt-5">
                    <div className="col-lg-6 ">
                        <div>
                            <label htmlFor="">First Name</label>
                            <input type="text" placeholder="Enter Your First name" className="form-control" onChange={e=>setUserData({...userData,firstname:e.target.value})} value={userData.firstname} />
                        </div>
                        <div>
                            <label htmlFor="">Last Name</label>
                            <input type="text" placeholder="Enter Your last name" className="form-control" onChange={e=>setUserData({...userData,lastname:e.target.value})} value={userData.lastname} />
                        </div>
                        <div>
                            <label htmlFor="">Address</label>
                            <textarea type="text" placeholder="Enter Your Address" className="form-control" onChange={e=>setUserData({...userData,address:e.target.value})} value={userData.address} />
                        </div>
                        <div>
                            <label htmlFor="">Email</label>
                            <input type="mail" placeholder="Enter Your Email" className="form-control" onChange={e=>setUserData({...userData,email:e.target.value})} value={userData.email} />
                        </div>
                        <div className="d-flex flex-column w-50">
                            <label htmlFor="">Gender</label>
                            <select name="gender" id="" value={userData.gender} onChange={e=>setUserData({...userData,gender:e.target.value})}>
                                <option value=""></option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-lg-6">
                    <div>
                            <label htmlFor="">Mobile</label>
                            <input type="text" placeholder="Enter Your Mobile Number" className="form-control" onChange={e=>setUserData({...userData,mobile:e.target.value})} value={userData.mobile}  />
                        </div>
                        <div>
                            <label htmlFor="">Password</label>
                            <input type="password" placeholder="Enter Your Password" className="form-control" onChange={e=>setUserData({...userData,password:e.target.value})} value={userData.password} />
                        </div>
                        <div>
                            <label htmlFor="">Date of Birth</label>
                            <input type="date" placeholder="Enter Your Date of Birth" className="form-control" onChange={e=>setUserData({...userData,dob:e.target.value})} value={userData.dob} />
                        </div>
                        <div>
                            <label htmlFor="">Course</label>
                            <input type="text" placeholder="Enter Your First name" className="form-control" onChange={e=>setUserData({...userData,course:e.target.value})} />
                        </div>
                        <div className="mt-3">
                            <button onClick={handleRegister} className="btn btn-info">Register</button>
                        </div>
                    </div>
                </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Register

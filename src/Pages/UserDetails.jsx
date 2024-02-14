import axios from 'axios';
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';

import { SERVER_URL } from '../Services/serverUrl';
import { Link } from 'react-router-dom';
function UserDetails() {
    const [data,setData] = useState([])

    const fetchData = async()=>{
        try {
            const response = await axios.get(`${SERVER_URL}/register`)
            setData(response.data)
        } catch (error) {
            console.log('Error Fetching Data',error);
        }
    }
    console.log(data);
    useEffect(()=>{
        fetchData();
    },[])
  return (
    <div className="container">
        <div className="d-flex justify-content-center">
            <h3>Back to Home</h3>
        </div>
        <Table striped bordered hover className='shadow container mt-5'>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Address</th>
                    <th>Email</th>
                    <th>Mobile</th>
                    <th>Date of Birth</th>
                    <th>Gender</th>
                    <th>Course</th>
                </tr>
            </thead>
            <tbody>
                {data && data.map((item,index)=>(
                    <tr key={index}>
                    <td>{item.firstname}</td>
                    <td>{item.lastname}</td>
                    <td>{item.address}</td>
                    <td>{item.email}</td>
                    <td>{item.gender}</td>
                    <td>{item.mobile}</td>
                    <td>{item.password}</td>
                    <td>{item.dob}</td>
                    <td>{item.course}</td>
                </tr>
                ))}
            </tbody>
        </Table>
        <button><Link to={'/'}>Go Back</Link></button>
    </div>
  )
}

export default UserDetails
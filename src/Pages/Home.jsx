import { Link } from "react-router-dom"


function Home() {
  return (
    <div style={{width:'100%',height:'90vh'}}>
    <div className="container">
        <div className="row">
            <div className="col-lg-6 mt-5 justify-content-center d-flex flex-column ">
                <div className="ms-3">
                    <h3>Education</h3>
                </div>
                <div className="m-3">
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad officiis maiores modi natus, facere corporis laboriosam quae neque reprehenderit earum quia, odit minus in, exercitationem iusto a consequatur atque quidem.</span>
                </div>
                <div className="d-flex align-items-center gap-2 ms-3">
                    <span>New Student?</span>
                    <span className="btn btn-info"><Link style={{textDecoration:'none',color:'black'}} to={'/register'}>Register</Link></span>
                </div>
            </div>
            <div className="col-lg-6 d-flex justify-content-center align-items-center">
                <div className="d-flex justify-content-center align-items-center">
                    <img className="img-fluid mt-5 rounded-circle " style={{height:'200px'}} src="https://img.freepik.com/free-photo/front-view-stacked-books-graduation-cap-diploma-education-day_23-2149241011.jpg?size=626&ext=jpg&ga=GA1.1.87170709.1707782400&semt=sph" alt="" />
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Home
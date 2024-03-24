import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="card">
        <div className="card-header">
            My Cart
        </div>
        <div className="card-body ">
            <h5 className="card-title">Welcome to My Cart</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.
                    With supporting text below as a natural lead-in to additional content
                    With supporting text below as a natural lead-in to additional content
                    With supporting text below as a natural lead-in to additional content
                    With supporting text below as a natural lead-in to additional content
                    With supporting text below as a natural lead-in to additional content.
                </p>
            <Link to="/listProduct" className="btn btn-warning">Go to Product list</Link>
        </div>
        </div>
        
    )
}

export default Home;
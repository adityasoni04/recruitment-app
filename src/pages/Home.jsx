import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import rec from "../images/rec.png"

const Home = () => {
    return (

        <div className="homepage">
            <Container>
                <Row>
                    <Col>
                        <h1>JOB LO!</h1>
                        <h1>Welcome to Our Digital Recruitment Solution App</h1>
                        <p>
                            We provide a seamless hiring experience for multiple MNCs. Our online recruitment solution is designed to
                            streamline the hiring process, making it efficient for hiring managers and HR professionals.
                        </p>
                        <Button variant="warning"><Link to="/login"> Get Started</Link></Button>
                    </Col>
                    <Col>
                        <img src={rec} alt="Recruitment" />
                        <h3 style={{ marginLeft: "140px", marginTop: "-40px" }} >Find Your Dream Job!</h3>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home

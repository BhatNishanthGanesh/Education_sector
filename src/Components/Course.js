import React from 'react';
import Navbar from '../Navbar/navbar';
import { Card } from 'react-bootstrap';
import Cprog from '../Images/c-pg.jpg';
import Java from '../Images/java-pg.png';
import python from '../Images/py.png';
import R from '../Images/r-pg.jpg';
import assembly from '../Images/assembly-pg.png';
import go from '../Images/go-pg.png';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const Course = () => {
  return (
    <div>
      <header>
        <Navbar />
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item " aria-current="page">
                  <Link to="/" className="text-dark text-primary custom-link text-decoration-none">
                    Home
                  </Link>
                </li>
                <li className="breadcrumb-item active">
                  <Link
                    to="/Course"
                    className="custom-link text-primary fw-bold text-decoration-none"
                  >
                    Course
                  </Link>
                </li>
              </ol>
            </nav>
          </div>
        </nav>
      </header>
      <div className="row justify-content-center">
        <div className="col-md-3 mb-3" style={{marginLeft:'2rem'}}>
          <Card className="d-flex flex-column align-items-center">
            <Card.Img
              variant="top"
              src={Cprog}
              className="img-fluid course-image"
              style={{ maxWidth: '100%', maxHeight: '200px', width: '200px' }}
            />
            <Card.Body className="text-center">
              <Card.Title>C Programming</Card.Title>
              <Card.Text>Some description for course 1</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3 mb-3">
          <Card className="d-flex flex-column align-items-center">
            <Card.Img
              variant="top"
              src={Java}
              className="img-fluid course-image"
              style={{ maxWidth: '100%', maxHeight: '200px', width: '200px' }}
            />
            <Card.Body className="text-center">
              <Card.Title>Java Programming</Card.Title>
              <Card.Text>Some description for course 2</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3 mb-3">
          <Card className="d-flex flex-column align-items-center">
            <Card.Img
              variant="top"
              src={python}
              className="img-fluid course-image"
              style={{ maxWidth: '100%', maxHeight: '200px', width: '200px' }}
            />
            <Card.Body className="text-center">
              <Card.Title>Course 3</Card.Title>
              <Card.Text>Some description for course 3</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3 mb-3"  style={{marginLeft:'2rem'}}>
          <Card className="d-flex flex-column align-items-center">
            <Card.Img
              variant="top"
              src={R}
              className="img-fluid course-image"
              style={{ maxWidth: '100%', maxHeight: '200px', width: '200px' }}
            />
            <Card.Body className="text-center">
              <Card.Title>Course 3</Card.Title>
              <Card.Text>Some description for course 3</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3 mb-3">
          <Card className="d-flex flex-column align-items-center">
            <Card.Img
              variant="top"
              src={assembly}
              className="img-fluid course-image"
              style={{ maxWidth: '100%', maxHeight: '200px', width: '200px' }}
            />
            <Card.Body className="text-center">
              <Card.Title>Course 3</Card.Title>
              <Card.Text>Some description for course 3</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3 mb-3">
          <Card className="d-flex flex-column align-items-center">
            <Card.Img
              variant="top"
              src={go}
              className="img-fluid course-image"
              style={{ maxWidth: '100%', maxHeight: '200px', width: '200px' }}
            />
            <Card.Body className="text-center">
              <Card.Title>Course 3</Card.Title>
              <Card.Text>Some description for course 3</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Course;

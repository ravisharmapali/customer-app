import logo from './logo.svg';
import './App.css';
import {Button, Col, Container, Row} from "reactstrap";

import { ToastContainer,toast } from 'react-toastify';
import Home from './components/Home';
import Course from './components/Course';
import AllCourses from './components/AllCourses';
import AddCourse from './components/AddCourse';
import Header from './components/Header';
import Menu from './components/Menu';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About';

function App() {

  const btnHandle=()=>{
    toast("this is my first msg");
  }

  return (
    <div>
      {/* <h1>just a msg ..</h1>
      <h2>sample text</h2>
      <Button color="primary" outline onClick={btnHandle}>Click</Button> */}
      

      {/* <Home/> */}
      {/* <Course course={{title:"Django", description:"just for testing"}}/>
      <Course course={{title:"Spring MVC", description:"just for testing"}}/> */}

      {/* <AllCourses/> */}
      <hr/>
      {/* <AddCourse/> */}


      <Router>
      <ToastContainer/>

      <Container>
        <Header/>
        <Row>
          <Col md="4">
            {/* <h2>left side menu</h2> */}
            <Menu/>
          </Col>

          <Col md={8}>
            {/* <h2>right side</h2> */}

            <Routes>
              <Route path='/' Component={Home} exact/>
              <Route path="/add-course" Component={AddCourse} exact />
              <Route path="/view-courses" Component={AllCourses} exact />
              <Route path="/about" Component={About} exact />
            </Routes>
          </Col>
        </Row>

      </Container>
      </Router>





    </div>
    
  );
}

export default App;

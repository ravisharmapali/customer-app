import React from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem } from "reactstrap";
const Menu=()=>{
    return(
        <div>

            <ListGroup>
                <Link  className="list-group-item list-group-item-action" tag="a" to="/" action> Home</Link>
                <Link className="list-group-item list-group-item-action" tag="a" to="/add-course">Add Course</Link>
                <Link  className="list-group-item list-group-item-action" tag="a" to="/view-courses">View Courses</Link>
                <Link  className="list-group-item list-group-item-action" to="about" tag="a" >About</Link>
                <ListGroupItem>Contacts</ListGroupItem>
            </ListGroup>
        </div>
    )
}
export default Menu;
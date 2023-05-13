import React from "react";
import {Button, Form,FormGroup, Input, Label} from 'reactstrap';

const AddCourse=()=>{
    return (
        <div>
            <h1 className="text-center my-3">Fill course details</h1>
            <Form>
                 
               <FormGroup>
                    <label for="userId">Course Id</label>
                    <Input type="text" placeholder="enter id here" name="userId" id="userId"/>
                </FormGroup>
                <FormGroup>
                    <Label for="courseTitle">Course Title</Label>
                    
                    <Input type="text" placeholder="course title here" id="courseTitle"/>
                </FormGroup>

                <FormGroup>
                    <Label for="description">Description</Label>
                    <Input type="textarea" id="description" placeholder="enter description" style={{height:150}}/>
                </FormGroup>
                <Button color="success">Add Course</Button>
                <Button color="dark" class="ml-2">Clear</Button>
            </Form>
        </div>
    )
}
export default AddCourse;
import {Card,CardBody,CardSubtitle,CardText,Container,Button} from "reactstrap";

const Course=({course})=>{

    return(
        <Card>
            <CardBody>
                <CardSubtitle className="font-weight-bold">{course.title}</CardSubtitle>
                <CardText>{course.description}</CardText>
                <Container className="">
                  <Button color="danger" >Delete</Button>
                  <Button color="warning">Update</Button>
                </Container>
            </CardBody>
        </Card>
    );
}
export default Course;
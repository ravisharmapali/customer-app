import React from "react";
import {Jumbotron, Container, Button} from "reactstrap";

const Home=()=>{
    return(
        <div>
            <>
            <h1 className="display-5 pt-5">Learn coding with Ravi</h1>
            <p>One stop solution for learning.</p>
            <Container> 
                <Button color="primary" outline>start using </Button>
            </Container>

            </>
        </div>
    );
}
export default Home;

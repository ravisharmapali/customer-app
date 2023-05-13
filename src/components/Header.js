import React from "react";
import { Card, CardBody } from "reactstrap";

function Header({name , role}){
    return (
        <div>
            <Card className="my-3 bg-warning text-white">
                <CardBody>
                 <h1 className="text-center my-3">
                     {/*  style={{background:'#8606ff', color:"#fff"}} */}
                    Welcome to Course Application
                {/* <span>{name}</span>
                <span>{role}</span>     */}
                </h1>
                </CardBody>
            </Card>
        </div>
    );
}
export default Header;
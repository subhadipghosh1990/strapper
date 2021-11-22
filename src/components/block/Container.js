import React, {useState} from "react";

const Container = (props) => {


    return(

        <div className={props.wid === "fixed" ? "container" : "container-fluid"}>

            <div className="row">

                <div className="col-12">

                    <h4>col-12</h4>

                </div>

            </div>            

        </div>        

    )
}


export default Container;
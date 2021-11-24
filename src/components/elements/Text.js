import React, {useState, useEffect} from "react";


const Text = (props) => {

    // useEffect(()=>{
    //     console.log(props);
    // },[])


    // class: ""
    // tag: "h3"
    // text: ""
    // type: "text"

    return(

        <React.Fragment>

            <props.info.tag className={props.info.class}>{props.info.text}</props.info.tag>
            

        </React.Fragment>

    )
}


// Text.propTypes = {
//     tag: PropTypes.string,
//     text:PropTypes.string,
//     class:PropTypes.string
// };


export default Text;
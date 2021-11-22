import React, {useState} from "react";

const CssPallate = (props) => {



    const [showPan ,setShowPan] = useState(false); 

    // let vall = (event) => {
    //     console.log(event);
    //   };

    return(


        <React.Fragment>

            <button onClick={()=>setShowPan(!showPan)} className={showPan ? "toggleCssPan showPan" : "toggleCssPan"}>CSS</button>

            <div className={showPan ? "cssPallate showCssEditor" : "cssPallate"}>                        

                <div>

                    

                </div>

            </div>


        </React.Fragment>

        
        
        

    )
}


export default CssPallate;
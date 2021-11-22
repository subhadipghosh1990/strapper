import React, {useState} from "react";
import Editor from "@monaco-editor/react";

const CssEditor = (props) => {



    const [showPan ,setShowPan] = useState(false); 

    // let vall = (event) => {
    //     console.log(event);
    //   };

    return(


        <React.Fragment>

            <button onClick={()=>setShowPan(!showPan)} className={showPan ? "toggleCssPan showPan" : "toggleCssPan"}>CSS</button>

            <div className={showPan ? "cssEditor showCssEditor" : "cssEditor"}>                        

                <Editor
                    onChange={(event) => props.updateStyle(event)}
                    height="90vh"
                    width="100%"
                    defaultLanguage="css"
                    defaultValue=""
                />

            </div>


        </React.Fragment>

        
        
        

    )
}


export default CssEditor;
import React from "react";


//common parts
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../assets/style.css";
import Header from "../components/common/Header";

//editor
import CssEditor from "../components/CssEditor";
import Artboard from "../components/block/Artboard";
import _JSXStyle from 'styled-jsx/style';

class App extends React.Component{


  constructor(){

    super();

    this.state= {
      name:"Strapper",
      styles:"",
      dummy:[

        {
          name:"container",
          cols:[
            {
              class:"col-md-4",
              children:[
                {
                  text:"",
                  tag:"h3",
                  class:""
                },
                {
                  src:"",
                  tag:"img",
                  class:""
                }
              ]
            },{
              class:"col-md-4",
              children:[
                {
                  text:"",
                  tag:"h3",
                  class:""
                },
                {
                  src:"",
                  tag:"img",
                  class:""
                }
              ]
            },{
              class:"col-md-4",
              children:[
                {
                  text:"",
                  tag:"h3",
                  class:""
                },
                {
                  src:"",
                  tag:"img",
                  class:""
                }
              ]
            }
            
          ],
        },
        

      ],
      stylePallette:{
        "background-color":"",
        "background-image":"",
        "font-size":"",
        "color":"",
        "padding":"",
        "margin":"",
        "position":"",
        "border":"",
        "display":"",
        "id":"",
        "class":""
      }
    }
  }


  updateStyle = (e) => {
    let styles = e;
    this.setState({
      styles:styles
    })
  }


  render(){
    return(
      <React.Fragment>


        <style jsx="true">{this.state.styles}</style>

        <Header/>
        <CssEditor updateStyle={this.updateStyle}/>
        <Artboard/>


        {/* {this.state.styles}

        <div className="root">This is root</div> */}


        <div className="createBoard">
        {this.state.dummy.map((e,i)=>{

          return(

            <section key={i}>

              <div className={e.name}>

                <div className="row">

                  {e.cols.map((col,colI)=>{
                      return(
                        <div key={colI} className={col.class}>
                        </div>
                      )
                  })}

                </div>

              </div>

            </section>


          )

        })}
        </div>

        

        

      </React.Fragment>
    )
  }


}

export default App;

import React from "react";


//common parts
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../assets/style.css";
import Header from "../components/common/Header";

//editor
import CssEditor from "../components/CssEditor";
import Artboard from "../components/block/Artboard";
import _JSXStyle from 'styled-jsx/style';

//elements
import Text from "../components/elements/Text";

class App extends React.Component{


  constructor(){

    super();

    this.state= {
      name:"Strapper",
      styles:"",
      options:{
        edit:false
      },
      dummy:[

        {
          name:"container",
          rows:[
            {
              cols:[
                {
                  class:"col-md-4",
                  children:[
                    {
                      type:"text",
                      text:"Custom Text",
                      tag:"h3",
                      class:"font-weight-light",
                      wrapper:{
                        class:"",
                        is:false
                      }
                    },
                    {
                      type:"img",
                      src:"",
                      tag:"img",
                      class:"",
                      wrapper:{
                        class:"",
                        is:false
                      }
                    }
                  ]
                },{
                  class:"col-md-4",
                  children:[
                    {
                      type:"text",
                      text:"",
                      tag:"h3",
                      class:"",
                      wrapper:{
                        class:"",
                        is:false
                      }
                    },
                    {
                      type:"img",
                      src:"",
                      tag:"img",
                      class:"",
                      wrapper:{
                        class:"",
                        is:false
                      }
                    }
                  ]
                },{
                  class:"col-md-4",
                  children:[
                    {
                      type:"text",
                      text:"",
                      tag:"h3",
                      class:"",
                      wrapper:{
                        class:"",
                        is:false
                      }
                    },
                    {
                      type:"img",
                      src:"",
                      tag:"img",
                      class:"",
                      wrapper:{
                        class:"",
                        is:false
                      }
                    }
                  ]
                }
                
              ]
            }
          ]
          
        },
        

      ],

      master:[]
    }
  }


  updateStyle = (e) => {
    let styles = e;
    this.setState({
      styles:styles
    })
  }


  addContainer = (e, cont) => {
    let master = this.state.master
    
    let cols = [];
    let rows = [];
    
    for(let i=0; i < e; i++){
      cols.push({
        class:"col-md-"+12/e,
        children:[]
      })
    }

    rows.push(
      {
        cols:cols
      }
    )
    
    master.push({
      name:cont,
      rows:rows
      
    })

    this.setState({
      master:master
    })
    
    console.log(master);
    
  }

  toggleEdit = () => {
    let options = this.state.options;
    options.edit = !options.edit;
    this.setState({
      options:options
    })
  }


  getCOl = (e,f, g) => {
    console.log(e,f,g);
  }

  render(){
    return(
      <React.Fragment>


        <style jsx="true">{this.state.styles}</style>

        <Header
          addContainer={this.addContainer}
        />

        <CssEditor updateStyle={this.updateStyle}/>
        <Artboard/>


        {/* {this.state.styles}

        <div className="root">This is root</div> */}


        <div className="createBoard">
        {this.state.master.map((e,i)=>{

          return(

            <section key={i}>

              {this.state.options.edit ? <button className="editBtn btn">edit</button> : null}

              <div className={e.name}>
              {this.state.options.edit ? <button className="editBtn btn">edit</button> : null}

                {e.rows.map((row,rowI)=>{
                    return(
                      <div className="row" key={rowI}>
                          {this.state.options.edit ? <button className="editBtn btn">edit</button> : null}

                          {row.cols.map((col,colI)=>{
                            return(
                              <div className={col.class} key={colI} onClick={() => this.getCOl(i, rowI, colI)}>
                                {this.state.options.edit ? <button className="editBtn btn">edit</button> : null}
                              </div>
                            )
                          })}

                      </div>
                    )
                })}


              </div>

            </section>


          )

        })}
        </div>

        <div className="text-right">
        <button onClick={()=> this.addContainer(4, "container-fluid")}>Add</button>
        <button onClick={this.toggleEdit}>edit</button>
        </div>

        {/* <Text info={this.state.dummy[0].cols[0].children[0]}/> */}
        

        

      </React.Fragment>
    )
  }


}

export default App;

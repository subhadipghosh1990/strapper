import React, {useState} from "react";


const Header = () => {

    const [basic, setBasic] = useState(false);
    const [grid, setGrid] = useState(false);


    return(
        
        <div className="appHeader border">


            <div className="listHolder">
                
                <p onClick={() => setBasic(!basic)} className="px-2 pt-5 small m-0"><i>Basic Elems</i></p>

                <ul className={basic ? "showMenu d-flex basicElems flex-wrap px-0" : "d-none basicElems flex-wrap px-0"}>

                    <li>
                        <a href="#" className="h1">h1</a>
                    </li>

                    <li>
                        <a href="#" className="h2">h2</a>
                    </li>

                    <li>
                        <a href="#" className="h3">h3</a>
                    </li>

                    <li>
                        <a href="#" className="h4">h4</a>
                    </li>

                    <li>
                        <a href="#" className="h5">h5</a>
                    </li>

                    <li>
                        <a href="#" className="h6">h6</a>
                    </li>

                    <li>
                        <a href="#" className="">p</a>
                    </li>

                    <li>
                        <a href="#" className="">div</a>
                    </li>

                    <li>
                        <a href="#" className="small">small</a>
                    </li>

                    <li>
                        <a href="#" className="">span</a>
                    </li>

                    <li>
                        <a href="#" className=""><i>i</i></a>
                    </li>

                    <li>
                        <a href="#" className=""><b>b</b></a>
                    </li>

                    <li>
                        <a href="#" className=""><strong>strong</strong></a>
                    </li>

                    <li>
                        <a href="#" className="">img</a>
                    </li>

                </ul>


                <p onClick={() => setGrid(!grid)} className="px-2 pt-3 small m-0"><i>Grids</i></p>
                <ul className={grid ? "showMenu d-flex gridElems flex-wrap px-0" : "d-none gridElems flex-wrap px-0"}>

                    <li className="w-100 ">
                        <a href="#" className="">

                            <div className="d-flex flex-wrap p-2 border justify-content-center">

                                <div className="border w-75 p-3  text-center">
                                    <small>.container</small>
                                </div>

                            </div>

                        </a>
                    </li>


                    <li className="w-100 ">
                        <a href="#" className="">

                            <div className="d-flex flex-wrap p-2 border justify-content-center">

                                <div className="border w-100 p-3 text-center">
                                    <small>.container-fluid</small>
                                </div>

                            </div>

                        </a>
                    </li>


                    <li className="w-100 ">
                        <a href="#" className="">

                            <div className="d-flex flex-wrap p-2 border justify-content-center">

                                <div className="border w-50 p-3 text-center">
                                    <small>6</small>
                                </div>

                                <div className="border w-50 p-3 text-center">
                                    <small>6</small>
                                </div>

                                
                            </div>

                        </a>
                    </li>


                    <li className="w-100 ">
                        <a href="#" className="">

                            <div className="d-flex flex-wrap p-2 border justify-content-center">

                                <div className="border w-25 p-3 text-center">
                                    <small>3</small>
                                </div>

                                <div className="border w-25 p-3 text-center">
                                    <small>3</small>
                                </div>

                                <div className="border w-25 p-3 text-center">
                                    <small>3</small>
                                </div>

                                <div className="border w-25 p-3 text-center">
                                    <small>3</small>
                                </div>

                            </div>

                        </a>
                    </li>


                    <li className="w-100 ">
                        <a href="#" className="">

                            <div className="d-flex flex-wrap p-2 border justify-content-center">

                                <div className="border w-33 p-3 text-center">
                                    <small>4</small>
                                </div>

                                <div className="border w-33 p-3 text-center">
                                    <small>4</small>
                                </div>

                                <div className="border w-33 p-3 text-center">
                                    <small>4</small>
                                </div>
                                
                            </div>

                        </a>
                    </li>

                    <li className="w-100 ">
                        <a href="#" className="">

                            <div className="d-flex flex-wrap p-2 border justify-content-center">

                                <div className="border w-25 p-3 text-center">
                                    <small>4</small>
                                </div>

                                <div className="border w-75 p-3 text-center">
                                    <small>8</small>
                                </div>

                                
                            </div>

                        </a>
                    </li>


                    <li className="w-100 ">
                        <a href="#" className="">

                            <div className="d-flex flex-wrap p-2 border justify-content-center">

                            <div className="border w-75 p-3 text-center">
                                    <small>8</small>
                                </div>


                                <div className="border w-25 p-3 text-center">
                                    <small>4</small>
                                </div>                                
                                
                            </div>

                        </a>
                    </li>


                </ul>

            </div>

        </div>

    )
}


export default Header;
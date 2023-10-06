import { Component } from "react";
class Calculator extends Component{
    constructor(){
        super();
        this.state={history:"",exp:""}
    }
    render(){
        return(
            <>
                <div id="dot">.</div>
                <div id="equal">=</div>
            </>
        )
    }
}
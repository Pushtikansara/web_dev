import{ Component } from "react";
class PrintNames extends Component{
   
    render(){
        return(
            <>
                <p style={{ backgroundColor: "blue", color: "white" }}>{this.props.name}</p>
                <p style={{ backgroundColor: "red", color: "white" }}>{this.props.des}</p>    
                
            </>
        );
    }

}


export default PrintNames;
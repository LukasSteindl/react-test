import React,{Component} from "react";
import "./Marker.css";

class Marker extends Component
{
    render()
    {
        let classes = "marker"
        if (this.props.selected)
            classes += " selected";
        console.log(classes);
        return (<div className={classes}>{this.props.text}</div>);
    }

}

export default Marker


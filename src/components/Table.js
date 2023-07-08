import React from "react";
function ShowPrice(){

}
function RemovePrice(){

}
function Table(props){
    return <div>
        <img className="img" style={{height : 315 ,objectFit:"cover",width : 340,marginRight:5,marginLeft :5,borderRadius:60,cursor:"pointer"}}   src ={props.img}></img>
    </div>
}
export default Table;
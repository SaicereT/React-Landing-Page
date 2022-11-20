import React from "react";

const Cards =(props) => {
/*   function getCardItems (props){
    return props.cardItem.map (cardItem =>{
      return (
        <img src={cardItem.img} className="card-img-top" alt="No Image Found"></img>
        
      )
    })
  } */

    return (
<div className="card my-2" style= {{width: "18rem"}}>
  <img src={props.img} className="card-img-top" alt="No Image Found"></img>
  <div className="card-body">
    <h5 className="card-title"> {props.title} </h5>
    <p className="card-text">{props.text}</p>
    <a href={props.href} className="btn btn-info">{props.btnText}</a>
  </div>
</div>
)
}

export default Cards;
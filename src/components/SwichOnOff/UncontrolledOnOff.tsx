import React, { useState } from "react";

type PropsType = {
 
};

export function UncontrolledOnOff(props: PropsType) {
  console.log("OnOff rendering");

  let [on, setOn]= useState (false)

  const OnStyle = {
    width: "30px",
    height: "20px",
    border: "1px solid black",
    display: "inline-block",
    padding: "5px",
    backgroundColor: on ? "green" : "white"
  };
  const OffStyle = {
    width: "30px",
    height: "20px",
    border: "1px solid black",
    display: "inline-block",
    marginLeft: "5px",
    padding: "5px",
    backgroundColor: on ? "white" : "red"
  };
  const IndicatorStyle = {
    width: "10px",
    height: "10px",
    borderRadius: "10px",
    border: "2px solid black",
    display: "inline-block",
    marginLeft: "5px",
    backgroundColor: on ? "green" : "red"
  };


  const onClicked = () => {
    setOn( true )
  }


  const offClicked = () => {
    setOn( false )
  }
  
  return (
    <div>
      <div style={OnStyle} onClick={ onClicked }>On</div>
      <div style={OffStyle} onClick={ offClicked }>Off</div>
      <div style={IndicatorStyle}></div>
    </div>
  );
}
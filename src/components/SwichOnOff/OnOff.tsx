

type PropsType = {
  on: boolean
  onChange: ( value: boolean ) => void
};

export function OnOff(props: PropsType) {
  console.log("OnOff rendering");

  

  const OnStyle = {
    width: "30px",
    height: "20px",
    border: "1px solid black",
    display: "inline-block",
    padding: "5px",
    backgroundColor: props.on ? "green" : "white"
  };
  const OffStyle = {
    width: "30px",
    height: "20px",
    border: "1px solid black",
    display: "inline-block",
    marginLeft: "5px",
    padding: "5px",
    backgroundColor: props.on ? "white" : "red"
  };
  const IndicatorStyle = {
    width: "10px",
    height: "10px",
    borderRadius: "10px",
    border: "2px solid black",
    display: "inline-block",
    marginLeft: "5px",
    backgroundColor: props.on ? "green" : "red"
  };

  return (
    <div>
      <div style={OnStyle} onClick={ () => { props.onChange( true ) } }>On</div>
      <div style={OffStyle} onClick={ () => { props.onChange( false ) } }>Off</div>
      <div style={IndicatorStyle}></div>
    </div>
  );
}



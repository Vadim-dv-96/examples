import React, { useReducer, useState } from "react";

type AccordionPropsType = {
  tittleValue: string;
  // collapsed: boolean;
};

type ActionType = {
  type: string
}

const TOGGLE_CONSTANT = "TOGGLE-COLLAPSED";

type StateType = {
  collapsed: boolean
}

const reduser = ( state: StateType, action: ActionType ): StateType => {

  switch (action.type) {
    case TOGGLE_CONSTANT:
     const stateCopy= {
       ...state,
       collapsed: !state.collapsed
     }; 
     return stateCopy;
      default:
        throw new Error("Bad action type")
        
  };
  return (
    state
  ) 
}

export function UnConrtolledAccordion(props: AccordionPropsType) {

  // let [ collapsed, setCollapsed ] = useState( true )
  let [ state, dispatch ] = useReducer( reduser, {collapsed:false} )

  // return (
  //     <div>
  //       <AccordionTittle tittle={props.tittleValue} onClick={ () => { setCollapsed(!collapsed) } } /> 
  //       {  !collapsed && <AccordionBody />}
  //     </div>
  //   );
  // } 

  return (
    <div>
      <AccordionTittle tittle={props.tittleValue} onClick={ () => { dispatch( {type: TOGGLE_CONSTANT} ) } } /> 
      {  !state.collapsed && <AccordionBody />}
    </div>
  );
} 
    

type AccordionTittlePropsType = {
  onClick: () => void
  tittle: string
};

function AccordionTittle(props: AccordionTittlePropsType) {
  return (
    <div>
      <h3 onClick={ props.onClick } >{props.tittle}</h3>
    </div>
  );
}

function AccordionBody() {
  return (
    <div>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
      </ul>
    </div>
  );
}

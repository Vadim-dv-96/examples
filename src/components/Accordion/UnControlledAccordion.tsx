import React, { useState } from "react";

type AccordionPropsType = {
  tittleValue: string;
  // collapsed: boolean;
};

export function UnConrtolledAccordion(props: AccordionPropsType) {

  let [ collapsed, setCollapsed ] = useState( true )

  return (
      <div>
        <AccordionTittle tittle={props.tittleValue} onClick={ () => { setCollapsed(!collapsed) } } /> 
        {  !collapsed && <AccordionBody />}
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

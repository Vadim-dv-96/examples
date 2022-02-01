import React from "react";

type AccordionPropsType = {
  tittleValue: string;
  collapsed: boolean;
  onClick: (  ) => void
};

export function Accordion(props: AccordionPropsType) {
  return (
      <div>
        <AccordionTittle tittle={props.tittleValue} onClick= { props.onClick } />
        { ( !props.collapsed ) && <AccordionBody />}
      </div>
    );
  } 
    

type AccordionTittlePropsType = {
  tittle: string;
  onClick: () => void
};

function AccordionTittle(props: AccordionTittlePropsType) {
  return (
    <div>
      <h3 onClick={ () => { props.onClick() } } >{props.tittle}</h3>
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

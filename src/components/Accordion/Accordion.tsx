
type ItemType = {
  tittle: string
  value: any
}

type AccordionPropsType = {
  tittleValue: string;
  collapsed: boolean;
  onClick: (  ) => void
  items: ItemType[]
  onClick2: (value:any) => void
};

export function Accordion(props: AccordionPropsType) {
  return (
      <div>
        <AccordionTittle tittle={props.tittleValue} onClick= { props.onClick } />
        { ( !props.collapsed ) && <AccordionBody items={props.items} onClick2={props.onClick2} />}
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

type AccordionBodyPropsType = {
  items: ItemType[]
  onClick2: (value:any) => void
};

function AccordionBody(props:AccordionBodyPropsType ) {
  return (
    <div>
      <ul>
        { props.items.map( (i, index ) => <li onClick={ () => {props.onClick2(i.value)}} key={index} > {i.tittle} </li> ) }
      </ul>
    </div>
  );
}

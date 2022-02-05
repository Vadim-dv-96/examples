import { useState } from 'react';
import './App.css';
import { Accordion } from './components/Accordion/Accordion';
import { UnConrtolledAccordion } from './components/Accordion/UnControlledAccordion';
import { RatingValueType, Rating } from './components/Rating/Rating';
import { UncontrolledRating } from './components/Rating/UncotrolledRating';
import { OnOff } from './components/SwichOnOff/OnOff';
import { UncontrolledOnOff } from './components/SwichOnOff/UncontrolledOnOff';

function App() {
  let [ ratingValue, setratingValue ] = useState<RatingValueType>(0)
  let [ accordionCollapsed, setaccordionCollapsed ] = useState<boolean>(true)
  let [swichOn, setswichOn]= useState (false)
  return (
    <div>
       <AppTittle tittle = { "This is app components" } />
      <AppTittle tittle = { "Lina" } />
      <Rating value = {ratingValue} onClick = { setratingValue } />
      <Accordion tittleValue = { "Menu " } collapsed = { accordionCollapsed } onClick = { () => { setaccordionCollapsed(!accordionCollapsed) } } />
      {/* <Accordion tittleValue = { "Users" } collapsed = { false } /> */}
      <UnConrtolledAccordion tittleValue = { "Menu " }  />
      <UnConrtolledAccordion tittleValue = { "Users" }  />
      <UncontrolledRating value = {0} />
      <UncontrolledRating value = {1} />
      <UncontrolledRating value = {2} />
      <UncontrolledRating value = {3} />
      <UncontrolledRating value = {4} />
      <UncontrolledRating value = {5} />
      <OnOff on = { swichOn } onChange = { setswichOn } />
      <UncontrolledOnOff/>
    </div>
  );
}
type AppTittleProps = {
  tittle: string
}

function AppTittle( props: AppTittleProps ) {
  return <h1> { (props.tittle) } </h1>
}
export default App;

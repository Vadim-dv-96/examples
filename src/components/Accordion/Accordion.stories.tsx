import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useState } from 'react';
import { Accordion } from './Accordion';



export default {
  title: 'Accordion',
  component: Accordion,
} as ComponentMeta<typeof Accordion>;
const Template: ComponentStory<typeof Accordion> = (args) => <Accordion {...args} />;



export const MenuCollapsedMode = () => <Accordion tittleValue='Menu' collapsed={true} onClick={useState} items={[]} onClick2={useState} />

export const UsersUncollapsedMode = () => <Accordion tittleValue='Users' collapsed={false} onClick={useState} items={[{tittle:"Ira" ,value:1},{tittle:"Dima",value:2}]} onClick2={useState} />

export const ModeChanging = () => {
  const [value, setValue] = useState(false)
  return (
    <Accordion tittleValue='Users' collapsed={value} onClick={ () => {setValue(!value)} } items={[{tittle:"Ira" ,value:1},{tittle:"Dima",value:2}]} onClick2={() => {alert( "click" ) } } />
  )
}
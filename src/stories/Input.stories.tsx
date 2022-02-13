import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ChangeEvent, useRef, useState } from 'react';



export default {
  title: 'input',
  // component: input,
} as ComponentMeta<typeof input>;
const Template: ComponentStory<typeof input> = (args) => <input {...args} />;
export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {},
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};

export const UncontrolledInput = () => <input/>


export const TrackValueUncontrolledInput = () =>  {
  const[value,setValue]=useState("")
  const onChange = (event:ChangeEvent<HTMLInputElement>) => {
    const PressKey = event.currentTarget.value
    setValue(PressKey)
return ( <><input onChange={ onChange } /> - {value} </>
)
} }


export const GetValueUncontrolledInputByButtonPress = () =>  {
  
  const[value,setValue]=useState("")

  const InputRef = useRef<HTMLInputElement>  (null)

  const save = () => {
    const el = InputRef.current as HTMLInputElement;
    setValue(el.value) };

return ( <><input ref={InputRef} /> <button onClick={ save } >
  save</button> -actual value:  {value} </>
)
} 

export const ControlledInput = () => {
  
  const [ parentValue, setParentValue ] = useState("")

const onChange = (e:ChangeEvent<HTMLInputElement>) => {
  
  setParentValue(e.currentTarget.value)}

  return (
    <input value={ parentValue } onChange={ onChange } />
  )

}
export const ControlledCheckbox = () => {

  const [ parentValue, setParentValue ] = useState(true)

  const onChange = (e:ChangeEvent<HTMLInputElement>) => {
    
    setParentValue(e.currentTarget.checked)}
  
    return (
      <input type={"checkbox"} checked={parentValue} onChange={ onChange } />
    )

}
export const ControlledSelect = () => {

  const [ parentValue, setParentValue ] = useState<string | undefined>  (undefined)

  const onChange = (e:ChangeEvent<HTMLSelectElement>) => {
    
    setParentValue(e.currentTarget.value)}
  
    return (
      <select value={parentValue} onChange={onChange} >
        <option>none</option>
        <option value={"1"} >Minsk</option>
        <option value={"2"} >Moscow</option>
        <option value={"3"} >Kiev</option>
        
      </select>
    )

}

export const ControlledInputWithFixedValues = () => <input value={"Hello"}/>
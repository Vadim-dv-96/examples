import { type } from "@testing-library/user-event/dist/type"
import { useEffect, useState } from "react"
import { AnalogClockView } from "./AnalogClockView"
import { DigitalClockView } from "./DigitalClockView"

type PropsType = {
    mode: "digital" | "analog"
}

export type ClockViewPropsType = {
    date: Date
}

export const Clock: React.FC<PropsType> = (props) => {

    const [date,setDate] = useState( new Date() )

    useEffect( () => {
        const intervalid = setInterval( () => {

            console.log("TICK");
            
            setDate( new Date() )
        }, 1000 );

        return () => {
            clearInterval(intervalid)
        }

    },[] )


    // const secondsString = date.getSeconds() < 10
    // ? "0" + date.getSeconds()
    // : date.getSeconds()

    // const minutesString = date.getMinutes() < 10
    // ? "0" + date.getMinutes()
    // : date.getMinutes()

    // const hoursString = date.getHours() < 10
    // ? "0" + date.getHours()
    // : date.getHours()
    

    let view;

    switch (props.mode) {
        case "analog":
            view = <AnalogClockView date={date} />
            break;
        case "digital":
        default:
            view = <DigitalClockView date={date} />  
    }

    return ( 
    <div> {view} </div>
    )
}

 


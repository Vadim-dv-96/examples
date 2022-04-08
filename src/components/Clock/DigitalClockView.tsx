import { ClockViewPropsType } from "./Clock";

export const getString = ( num: number ) => num < 10 ? "0" + num : num

export const DigitalClockView: React.FC<ClockViewPropsType> = ({ date }) => {
    return <>
        <span> {getString(date.getHours())} </span>
        :
        <span> {getString(date.getMinutes())} </span>
        :
        <span> {getString(date.getSeconds())} </span>
    </>;
};

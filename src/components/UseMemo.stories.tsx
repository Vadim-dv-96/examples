import React from "react"
import { useMemo, useState } from "react"

export default {
    title: "UseMemo",
} 


export const DifficultCountingExample = () => {

    const [ a, setA ] = useState<number>(5)
    const [ b, setB ] = useState<number>(5)

    let rezaltA = 1
    let rezaltB = 1

    rezaltA = useMemo( () => {

        let tempRezaltA = 1;

        for ( let i=1; i<=a; i++ ) {
            let fake = 0;
            while(fake < 100000000 ) {
                fake++;
                const fakeValue = Math.random();
            }
            tempRezaltA = tempRezaltA * i
        }

        return tempRezaltA;

    }, [a] )

    
    for ( let i = 1; i<=b; i++ ) {
        rezaltB = rezaltB * i
    }

    return <>
    <input value={a} onChange={ (e) => { setA(Number (e.currentTarget.value) ) } } />
    <input value={b} onChange={ (e) => { setB( + e.currentTarget.value ) } } />
    <hr/>
    <div>
        Rezalt for a: {rezaltA}
    </div>
    <div>
    Rezalt for b: {rezaltB}
    </div>
    </>

}


const UsersSecret = (props:{ users: Array<string> }) => {

    debugger;

    console.log("users secret")
    return(
        <div>  
            {props.users.map( (u,i) => <div key={i} > {u} </div> ) } 
         </div>
    )
}

const Users = React.memo(UsersSecret)

export const HelpForReactMemo = () => {

    debugger;

    console.log("HelpForReactMemo")

    const [counter,setCounter] = useState(0)
    const [users,setUsers] = useState(["Dimych", "Valera", "Artem","Katy"])


    const newArray = useMemo( () => {
        debugger;
        const newArray = users.filter( u => u.toLowerCase().indexOf( "a" ) > -1 )
        return newArray;

    }, [users] ) 

    const addUser = () => {
        const newUsers = [ ...users, "Sveta" + new Date().getTime() ];
        setUsers(newUsers) 
    }
   
    return (
        <>
        <button onClick={ () => { setCounter(counter + 1) } } > + </button>
        <button onClick={ () => { addUser() } } > add user </button>
        {counter}
        <Users users={ newArray } />
    </>
    )
    
}

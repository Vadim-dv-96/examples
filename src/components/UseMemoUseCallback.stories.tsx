import React, { useCallback } from "react"
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
export const LikeUseCallback = () => {

    console.log("LikeUseCallback")

    const [counter,setCounter] = useState(0)
    const [books,setBooks] = useState(["React", "JS", "CSS", "HTML"])


    // const newArray = useMemo( () => {
    //     debugger;
    //     const newArray = books.filter( books => books.toLowerCase().indexOf( "a" ) > -1 )
    //     return newArray;

    // }, [books] ) 

     

    const memoizedaddBook = useMemo( () => {
        return () => {
            const newUsers = [ ...books, "Angular" + new Date().getTime() ];
            setBooks(newUsers) 
        }
    } , [books] )

    const memoizedaddBook2 = useCallback( () => {
        console.log(books)
            const newUsers = [ ...books, "Angular" + new Date().getTime() ];
            setBooks(newUsers) 
    } , [books] )
   
    return (
        <>
        <button onClick={ () => { setCounter(counter + 1) } } > + </button>
        {counter}
        <Books  addBook={memoizedaddBook2} />
    </>
    )
    
}

type BooksSecretPropsType = {
    // books: Array<string>
     addBook: ()=>void
}

const BooksSecret = (props:BooksSecretPropsType) => {

    console.log("BooksSecret")
    return(
        <div> 
            <button onClick={ () => { props.addBook() } } > addBook </button> 
            {/* {props.books.map( (books,i) => <div key={i} > {books} </div> ) }  */}
         </div>
    )
}

const Books = React.memo(BooksSecret)

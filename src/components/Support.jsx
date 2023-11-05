import { useState, useEffect } from 'react';

/**
 * Here we use useEffect as whwenver count become greater than 0 (do it would for every count change)
 * change the page title
 */

const pageTitle = document.title;

export default () => {
    //initializing nd setCountFuction useed in code to modify varible count .useState, useEffect etc.. are default hooks in react
    const [count, setCount] = useState(0);
    // useEffect(() => {
    //     if(count >0){
    //         document.title = `${pageTitle}--${count}`;
    //     }
    // })
    // one of the side effects with useEfect is sometimes it doesnt update the dome when you save manual update is required
    //means when I first ran above commented code title is React App --9 and witing new code commented one aand saved it
    // then when I run React App --9--1 like that increamenting when I mmanually refresh it and click support button 
    //then React App--1
    useEffect(() => {
        /*Simplifying above code*/
        count && (document.title = `${pageTitle}--${count}`);
    })
    return(
        <div>
            <button className="firstline" onClick = {() => setCount(count + 1)}> 
             Support { count } </button>
            <button className="secondline" onClick = {() => setCount(count + 1)}> 
            { count %2 ==0 ? 'Support' : 'Donate' } </button>
            <button className="Thirdline" onClick = {() => setCount(count + 1)}> 
            { ( () => {
                if(count == 0){
                    return 'Click Me To Support';
                }
                else{
                    // jsx es6 syntax
                    return `Supported ${count} times`;
                }
            } ) () } </button>
            {
                // See Syntax above for returning a fucntion insted jsx {( ....arow dunction code ) ()}
                //Syntax to evaluate expression / vrable { ....var . expression...}
            }
            <button className="LastLine" onClick ={ () =>  setCount(count + 1) }>
                {count === 0 ? 'Click Me To Support' : `Supported ${count} times`}
            </button>
        </div>
    )
}
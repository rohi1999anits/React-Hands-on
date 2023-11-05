import { useState } from 'react';

export default () => {
    //initializing nd setCountFuction useed in code to modify varible count .useState, useEffect etc.. are default hooks in react
    const [count, setCount] = useState(0);
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
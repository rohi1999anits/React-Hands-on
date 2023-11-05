/***Combining useEffect with useState */

import {useState, useEffect} from 'react';

export default () => {
    const [cast, setCast] = useState([]);

    /**async - await  so that things happen in orderly manner in js*/

    async function fetchCast(){
        const response = await fetch('cast.json');
        setCast(await response.json());
    }

    //we often use useEffect hook when we want to load element - when ever data from an api is avail ,it will immendiately render it
    useEffect(() => {
        fetchCast();
    });

    return(
        <div style = {{
            display: "grid",
            //1Fr id fractonal unit
            gridTemplateColumns: `repeat(auto-fit, minmax(90px, 1fr))`,
            gap:`1rem`,
            //In normal Css we will give it as margin-botton , as it is jsx we write it in camelCasing
            marginBotton: `1rem`
        }}>
            {
                
                //inside map arrowfunction instead of curly backets { ..} normal brackets used thats how jsx works
                cast.map(member => (
                    <a key = {member.id} data-tooltip = {member.name}>
                    <img src = {`images/${member.slug}_tn.svg`} alt = {member.name} />
                    </a>
                ))

                // In the above map function if you dont write key in anchor it will throw warning --becoz react is expecting each child in the list should have unique key prop
                //so it is good practice to put id in the child list item so that it will which id name,img is pointing 
                //The good thing of react it is always managing the Dom for you
                
            }
        </div>
    )
}
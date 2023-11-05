import React , {Component} from 'react';

/**Example with Class */

/*class ComponentDemo extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return <h1> Meet the {this.props.name} </h1>;
    }
}*/

/**Example with Hooks */

const ComponentDemo = (props) => {
    return (
        <h1> Meet the {props.name} </h1>
    )
}

function App() {
    var name = "StarGazers"
    return (
    <div className="container">
        <article>
      <hgroup>
        <img src = "logo.svg" alt="Star Gazers" />
        {
            //Comment Section - if we want to add comments  in jsx we have to wrap the single line (//) or multiline  (/* */) in curly brackets { }. Htm comments  (<!--- --->) wouldnt work in jsx
            //This is how we can make Component reusable as html tag  if it is class rember first letter is capital
            // In React, it will render html of the Component render function, In Angular it will render html of the template property 
            //the proprties here in component jsx will be taken as object in jsx and that have the object as input frm constructor
        }
        <ComponentDemo name= 'Buzz LightYear' />
        <ComponentDemo name = ''/>
        <ComponentDemo name = 'Mighthy lamp' />
        <h1>Meet the StarGazers <i style = {{color:"steelblue"}} >{name}</i></h1>
        <p>Members of an <b>intergalactic alliance</b> paving the way for peace and benevolence among all species. They are known for their enthusiasm for science, for their love of fun, and their dedication to education.</p>
        <button className = "outline" onClick = {() => alert('Hello World')}> click Me!!</button>
      </hgroup>
      </article>
    </div>
    )
  }
  export default App
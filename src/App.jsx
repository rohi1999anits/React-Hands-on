import Welcome from './components/Welcome';
import Support from './components/Support';

function App() {
    var name = "StarGazers"
    return (
    <div className="container">
        <article>
      <hgroup>
        <img src = "logo.svg" alt="Star Gazers" />
        <Welcome name = "Galactic Rangers" />
        <h1>Meet the StarGazers <i style = {{color:"steelblue"}} >{name}</i></h1>
        <p>Members of an <b>intergalactic alliance</b> paving the way for peace and benevolence among all species. They are known for their enthusiasm for science, for their love of fun, and their dedication to education.</p>
        <button className = "outline" onClick = {() => alert('Hello World')}> click Me!!</button>
        <Support />
      </hgroup>
      </article>
    </div>
    )
  }
  export default App
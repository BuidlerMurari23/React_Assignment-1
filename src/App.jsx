
import './App.css'
import Button from './components/Button'
import Header from './components/Header'
import List from './components/List'
import Person from './components/Person'

function App() {


  return (
    <>
    <Header title={"Welcome to the react app  ...!!!"} />
    <Person name={"Murari Gupta"} age={26} />
    <List items={["Apple", "Banana", "Grapes", "Mango"]} />
    <Button text={"Click me"} onClick={() => alert("Button Clicked!")} />
    </>
  )
}

export default App

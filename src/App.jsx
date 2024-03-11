import "./App.css"
import { Bala } from "./components/Bala"
import { Jura } from "./components/Jura"
import { Pasaulis } from "./components/Pasaulis"
import { Tvenkinys } from "./components/Tvenkinys"
import { Vandenynas } from "./components/Vandenynas"

function App() {
  return (
    <div className="App">
      <Bala />
      <Tvenkinys />
      <Jura />
      <Vandenynas />
      <Pasaulis />
    </div>
  )
}

export default App

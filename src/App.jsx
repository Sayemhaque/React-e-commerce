import { Outlet } from "react-router-dom"
import Header from "./components/Header."
import Shop from "./Shop"


function App() {
  return (
    <div>
      {/* Header section */}
     <Header />
     <main>
      <Shop/>
     </main>
     <Outlet/>
    </div>
  )
}

export default App

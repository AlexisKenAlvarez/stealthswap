import { Hero } from "./views"
import './index.css'
import { Footer, Nav } from "./components"
import How from "./views/How"
import Privacy from "./views/Privacy"
import Why from "./views/Why"
import Roadmap from "./views/Roadmap"

function App() {

  return (
    <>
      <main className="font-poppins text-wht bg-gry">
        <Nav />
        <Hero />
        <How />
        <Privacy />
        <Why />
        <Footer />
      </main>
    </>
  )
}

export default App

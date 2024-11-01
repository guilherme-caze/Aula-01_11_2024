import Titulo from "./Titulo" //Lembre de sempre importar
import Footer from "./Footer"
import Contador from "./Contador"

function App(){
  return (
    <> {/*tag para usar varias div*/}
    <div>
      <Titulo nome="Marcão" idade="32"/>
    </div>
    <div>
      <Titulo nome="Douglas" idade="14"/>
    </div>
    <div>
      <Contador/>
    </div>
    <div>
      <Footer/>
    </div>
    </>
  )
}

export default App
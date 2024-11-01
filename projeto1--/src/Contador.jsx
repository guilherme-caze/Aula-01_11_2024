import { useState } from "react" //Importar a biblioteca do Reactv para alterar o comportamento

function Contador(){

    const [Contador, setContador] = useState(0) /*Inicializar um contador*/

    const incrementar = () => { //Função de call back, chama ela mesma -->() => {}
        setContador(Contador+1);
    };

    const decrementar = () => { //Função de call back, chama ela mesma -->() => {}
        setContador(Contador-1);
    };

    return (
        <div>
            <h1>Contador: {Contador}</h1>
            <button onClick={incrementar}>Incrementar</button>
            <button onClick={decrementar}>Decrementar</button>
        </div>
    )

}

export default Contador
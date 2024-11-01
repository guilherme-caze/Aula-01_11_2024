function Titulo (props){ //props passa os componentes de pai para filho, muda as informações da estrutura daquele componente
    //let nome = "Guilherme";
    return (
        <div>
            <h1>Título da página</h1>
            <h2>Seu nome: {props.nome}</h2>
            <h2>Idade: {props.idade}</h2>
        </div>
    )

}

export default Titulo
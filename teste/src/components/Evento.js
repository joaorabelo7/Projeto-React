function Evento({numero}){


    function MeuEvento(){
        console.log(`Fui ativado ===> ${numero}`)
    }



    return(
        <div>
            <p>Clique aqui para disparar um evento</p>
            <button onClick={MeuEvento}>Ativar</button>
        </div>
    )
}

export default Evento;
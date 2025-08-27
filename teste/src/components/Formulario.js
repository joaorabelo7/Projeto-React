function Formulario(){

    function cadastrarUsuario(e){
        e.preventDefault()
        console.log('Cadastrou o usuário')
    }

    return(
        <div>
            <h1>Cadastro</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <input type = "texto" placeholder = "Digite seu nome"></input>
                </div>
                <div>
                    <input type="submit" value = "Cadastrar"></input>
                </div>
            </form>
        </div>
    )
}

export default Formulario;
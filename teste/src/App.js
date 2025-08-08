import './App.css';
import HelloWorld from './components/HelloWorld';
import Frase from './components/Frase';
import DigaMeuNome from './components/DigaMeuNome';
import Pessoa from './components/Pessoa'

function App() {
  const nome = "Rabelo"
   return ( 
    <div className="App">

        <h1>MEU PRIMEIRO REACT</h1>
        <Frase />
        <HelloWorld/>
        <Frase />
        <DigaMeuNome nome = "João Henrique"/>
        <DigaMeuNome nome = {nome}/>
        <Pessoa
          nome="Joao"
          idade = "16"
          foto = "https://placehold.co/150"
        />
  
    </div>
  );
}

export default App;

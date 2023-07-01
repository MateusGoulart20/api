import { Info } from './components/Info';
import { Foto } from './components/Foto';
import { Atividade } from './components/Atividade';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> FALA MEUS BONS</h1>
        <Info />
        <Foto />
        <Atividade />
      </header>
    </div>
  );/*
      <ButtonC title="Botão 34" onclick={() => alert("Qual foi?")}/>  
      <Button title="Botão 777" />  
      <UpperCase>Olá Mundão!</UpperCase>*/

      // informações pessoais, foto de perfil, histórico de atividades,
}


/*
function ButtonC(props){
  console.log(props)
  return(
    <button onClick={props.onclick}> {props.title}</button>
  )
}
function Button(props){
  console.log(props)
  return(
    <button> {props.title}</button>
  )
}
function UpperCase(props){
  console.log(props.children);
  return (
    <p>{props.children.toUpperCase()}</p>
  );
}
*/
export default App;

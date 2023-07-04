import { Info } from './components/Info';
import { Foto } from './components/Foto';
import { Atividade } from './components/Atividade';
import { useState } from 'react';
import styles from './styles.css'

function Button(props) {
  if (props.icon) {
      return (
          <button>
              {props.icon}
          </button>
      )
  }

  return (
      <button>
          Botão
      </button>
  )
};
/*
let lista = ['Marcos','João','Pedro','Lucas'];
function setNome(e){
    lista.add(e);
    return lista;
 };*/
 
 function App() {
  //[lista, setNome] = useState(0);
  
  
  const [idade, setIdade] = useState(0);

  return (
    <div className="App" >
      <header className="App-header">
        <h1>Cadastro</h1>
        <Info />
        <Foto />  
        <Atividade />
      </header>
      <input type="number" placeholder='Digite sua idade' onChange={(e)=>{
        setIdade(e.target.value);
      }} min={0}/>
      {idade >= 18
        ? <p>Você é maior de idade</p>
        : <p>Você é menor de idade</p>
      }
      
      <Button icon="🔥"/>
      <nav>aaaaa</nav>
    </div>
  );/*
  {lista.map( (item,index) => <p key={index}>{item}</p>)}
  <input type="text" placeholder='Nome' onPointerEnter={(e)=>{ setNome(e.target.value) }}/>
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

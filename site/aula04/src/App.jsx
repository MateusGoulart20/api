
import { useState } from 'react';
import styles from './styles.css'

function App() {

  //const [lista, setNome] = useState(0);



  const [itens, setItens] = useState([]);

  const adicionarItem = (item) => {
    if (item === '') return;
    console.log(item)
    setItens([...itens, { texto: item, marcado: false }]);
  };
  const removerItem = (alvo) => {
    if (alvo === '') return;
    console.log(alvo)
    const novosItens = [...itens];
    let index = itens.findIndex((e) => e.texto === alvo);
    console.log(index)
    if (index === -1) return;
    novosItens.splice(index, 1);
    setItens(novosItens);
  };
  const removerItemIndex = (index) => {
    const novosItens = [...itens];
    novosItens.splice(index, 1);
    setItens(novosItens);
  };
  const marcarItem = (index) => {
    const novosItens = [...itens];
    novosItens[index].marcado = !novosItens[index].marcado;
    setItens(novosItens);
  };

  //{lista.map((item, index) => <p key={index}>{item}</p>)}
  return (
    <div className="App" >
      <header className="App-header">
        <h1>Cadastro</h1>
      </header>
      <input type="text" placeholder='Digite aqui' id='entrada' />
      <button onClick={() => adicionarItem(document.querySelector('#entrada').value)}>Adicionar item</button>
      <button onClick={() => removerItem(document.querySelector('#entrada').value)}>Remover</button>
      <ul>
        {itens.map((item, index) => (
          <li key={index}>
            <button onClick={() => removerItemIndex(index)}>❌ </button>
            <span style={{ textDecoration: item.marcado ? 'line-through' : 'none' }}>
              {item.texto}
            </span>
            <button onClick={() => marcarItem(index)}>{item.marcado ? ' ⚠️' : ' ⚪'}</button>
          </li>
        ))}
      </ul>
    </div>
  );/*
  {itens.map((item, index) => ( <li key={index}>{item}</li> ))}
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
/*
const [idade, setIdade] = useState(0);
verificar idadde
<input type="number" placeholder='Digite sua idade' onChange={(e) => {
        setIdade(e.target.value);
      }} min={0} />
      {idade >= 18
        ? <p>Você é maior de idade</p>
        : <p>Você é menor de idade</p>
      }
*/

export default App;

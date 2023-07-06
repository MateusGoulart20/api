import './App.css';
import InfoPessoal from './InfoPessoal';
import Foto from './Foto';
import Atividades from './Atividades';
/*
Construção de layout de uma página de perfil usando React
Descrição: Seu objetivo é criar o layout de uma página de perfil de usuário
  utilizando React.
O layout deve conter diferentes seções, como
  * informações pessoais,
  * foto de perfil,
  * histórico de atividades,
  * entre outros.
Você deve utilizar componentes React para estruturar e estilizar o layout da página.
*/
function Welcome(props) {
  return <h1>Hello {props.name} </h1>
}

function App() {
  return (
    <div className="App">
      <div className='esquerda'>
      <Foto/>
      <InfoPessoal/>
      </div>
      <div className='direita'>
      <Atividades/>
      </div>
    </div>
  );
}

export default App;

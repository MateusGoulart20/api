function Nome(props) {
  if(!props.nome) return <h1>Guest 404</h1>;
  return <h1>{props.nome}</h1>;
}
function Bio(props){
  if (!props.bio) return <p>Bio: -~-~-</p>;
  return <cite>{props.bio}</cite>;
}
function InfoPessoal(props) {
    return (
      <div className="App">
        <Nome nome='Howard Phillips Lovecraft'/>
        <Bio bio='Escritor de terror, ficção estranha, científica, fantasia e horror' />
        
      </div>
    );
  }
  
export default InfoPessoal;
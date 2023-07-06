function Arquivo(props){
    if(!props.foto) return <img style={{height: 20+'rem',  borderRadius: 100+'%'}}//
     src="https://upload.wikimedia.org/wikipedia/commons/1/10/H._P._Lovecraft%2C_June_1934.jpg"/>
    return <img src='$props.foto' />
}

function Foto(props) {
    return (
        <div>
            <Arquivo/>
        </div>
    );
}
export default Foto;
//
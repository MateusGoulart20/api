function Atividade(props) {
    return <li>{props.text} <i>Em: {props.date}</i></li>;
}
function Atividades(props) {
    return (
        <ul className="App">
<Atividade text='🎇 Nascimento' date='20 de agosto de 1890' />
<Atividade text='📕: The Alchemist' date= '1916' />
<Atividade text='📕: Dagon' date='1919'/>
<Atividade text='📕: O Navio Branco' date= '1919' />
<Atividade text='📕: Nyarlathotep' date='1920'/>
<Atividade text='📕: The Statement of Randolph Carter' date= '1920' />
<Atividade text='📕: The Cats of Ulthar' date='1920'/>
<Atividade text='📕: A Cidade Sem Nome' date='1921'/>
<Atividade text='📕: The Terrible Old Man' date= '1921' />
<Atividade text='📕: The Music of Erich Zann' date= '1922' />
<Atividade text='📕: Celephaïs' date= '1922' />
<Atividade text='📕: Herbert West–Reanimator' date='1922'/>
<Atividade text='📕: The Lurking Fear' date= '1923' />
<Atividade text='📕: Hypnos' date= '1923' />
<Atividade text='📕: The Hound' date= '1924' />
<Atividade text='📕: The Rats in the Walls' date= '1924' />
<Atividade text='📕: The Shunned House' date= '1924' />
<Atividade text='📕: The Festival' date= '1925' />
<Atividade text='📕: In the Vault' date= '1925' />
<Atividade text='📕: The Unnamable' date= '1925' />
<Atividade text='📕: The Temple' date= '1925' />
<Atividade text='📕: The Outsider' date='1926'/>
<Atividade text='📕: Supernatural Horror In Literature' date= '1927' />
<Atividade text='📕: Pickmans Model' date= '1927' />
<Atividade text='📕: Cool Air' date= '1928' />
<Atividade text='📕: O Chamado de Cthulhu' date='1928'/>
<Atividade text='📕: O Horror de Dunwich' date='1929'/>
<Atividade text='📕: The Silver Key' date= '1929' />
<Atividade text='📕: Sussurros na Escuridão' date='1931'/>
<Atividade text='📕: The Thing on the Doorstep' date= '1933' />
<Atividade text='📕: The Other Gods' date= '1933' />
<Atividade text='📕: The Dreams in the Witch House' date='1933'/>
<Atividade text='📕: From Beyond' date= '1934' />
<Atividade text='📕: The Shadow Out of Time' date= '1936' />
<Atividade text='📕: A sombra de Innsmouth' date='1936'/>
<Atividade text='📕: At the Mountains of Madness' date='1936'/>
<Atividade text='📕: O Habitante da Escuridão' date= '1936' />
<Atividade text='💀 Morte' date='15 de março de 1937'/>
<Atividade text='📕: Azathoth' date='1938'/>
<Atividade text='📕: História do Necronomicon' date= '1938' />
<Atividade text='📕: The Mound' date= '1940' />
<Atividade text='📕: Á procura de Kadath' date= '1943' />
<Atividade text='📕: O Caso de Charles Dexter Ward' date='1943'/>
<Atividade text='📕: Chamado de Cthulhu' date='1981'/>
<Atividade text='📕: Le mythe de Cthulhu' date='1999' />

        </ul>
    );
}
export default Atividades;
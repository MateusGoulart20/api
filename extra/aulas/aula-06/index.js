console.log("Veneno garotadal")
function nome() {
    console.log("Meu nome é mateus")
}
nome();
function liporar(a){
    try {
        if(!Number(a)) {
            throw new Error("não numero")
         }
        return a*2
    } catch (error) {
        console.error(error)
    }
    
}
console.log(liporar("veneno "))
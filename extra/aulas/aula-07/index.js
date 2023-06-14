function multiplicaPorDois(valor) {
    return new Promise((resolve, reject) => {
        if (typeof valor === 'number') {
            resolve(valor * 2); 
        } else {
            reject(new Error('O argumento não é um número.'));
        }
    });
}
multiplicaPorDois(4).then(result => {
    console.log(result);
}).catch(error => {
    console.error(error.message);
});


async function buscaEndereco(cep) {
    try {
        const url = `https://viacep.com.br/ws/${cep}/json/`;
        const response = await fetch(url, { method: "GET" });
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
// Chamando a função passando o CEP
buscaEndereco("01310100")

/*
"dependencies": {
    "bcrypt": "^5.1.0",
    "dotenv": "^16.3.1",
    "express": "^4.18.2",
    "jsonwebtoken": "^9.0.0",
    "nodemon": "^2.0.22",
    "pg": "^8.11.0",
    "pg-hstore": "^2.3.4",
    "prompt-sync": "^4.2.0",
    "sequelize": "^6.32.1"
  },
"devDependencies": { ( lembrar do -D)
    "nodemon": "^2.0.22",
    "sequelize-cli": "^6.6.1"
  }
*/

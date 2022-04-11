const axios = require('axios')

const buscarPorPerfilDoGitHub = async (perfil) => {
    return await axios.get(`https://api.github.com/users/${perfil}`)
        .then(resposta => resposta.data);
}

buscarPorPerfilDoGitHub('vtorres96').then(resposta => {
    console.log(resposta);
});
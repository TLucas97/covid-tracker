const preencherDados = (resultado => {
    document.getElementById("killme").value = resultado
})

const pesquisarDados = async() => {
    const url = "https://api.covid19api.com/summary"
    const dados = await fetch(url);
    const resultado = await dados.json();
    console.log(resultado);
}
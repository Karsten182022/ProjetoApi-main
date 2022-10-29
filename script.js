async function chamarProduto() {
    debugger
    var Produto = document.getElementById("lista").value;

    var endpoint = "https://codifica-demo-api.herokuapp.com/api/v1/products/category/" + Produto

    var resposta = await fetch(endpoint);

    var arquivojson = await resposta.json();

    var resultado = document.getElementById("resultado");


    for (var categoria of arquivojson) {
        var img = document.createElement("img")
        img.src = categoria.img
        resultado.innerHTML = img
    }
}
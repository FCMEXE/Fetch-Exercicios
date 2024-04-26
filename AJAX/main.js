let links = document.querySelectorAll("a"); // Pego o A
let pagina = document.querySelector(".content"); // Pego o Content

links.forEach((element) => {
  //ForEach faz callback para cada item do Array
  element.addEventListener("click", (event) => {
    //Pego o Evento "click" do Usuario
    event.preventDefault();
    // Para o Evento padrão do Browser de entrar no Link
    fetch(element)
      .then((reponse) => reponse.text())
      .then((dados) => (pagina.innerHTML = dados));
  });
});

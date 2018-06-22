(function () {
  /*Variaveis podem ser alteradas de acordo com a necessidade*/
  var va = 0; //contador de evento de scroll
  var pag = 4; //numero de paginas
  var vel = 200; //velocidade do scroll

  /*Não alterar nenhum valor abaixo*/
  var tela = $(window).width() * pag; //4 e o numero de paginas
  var controle = vel * 1.32; //controle de click, 1.32 valor absoluto, não alterar
  var click = tela / controle; //limitar encrementação do contador de evento;

  $(window).on('mousewheel', function () {
    if (event.wheelDelta > 1 && va > 0) {
      va--;
    } else if (event.wheelDelta < 1 && va < click) {
      va++;
    }
    $('.wrapper').scrollLeft(va * vel);
  });
})();

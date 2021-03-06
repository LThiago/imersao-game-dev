function preload() {
  imagemTelaInicial = loadImage("imagens/cenario/telaInicial.png");
  imagemCenario = loadImage("imagens/cenario/floresta.png");
  imagemPersonagem = loadImage("imagens/personagem/correndo.png");
  imagemInimigo = loadImage("imagens/inimigos/gotinha.png");
  imagemInimigoGrande = loadImage("imagens/inimigos/troll.png");
  imagemInimigoVoador = loadImage("imagens/inimigos/gotinha-voadora.png");
  imagemGameOver = loadImage("imagens/assets/game-over.png");
  imagemVida = loadImage("imagens/assets/coracao.png");

  fonteTelaInicial = loadFont("imagens/assets/fonteTelaInicial.otf");

  somDoJogo = loadSound("sons/trilha_jogo.mp3");
  somDoPulo = loadSound("sons/somPulo.mp3");

  fita = loadJSON("/fita/fita.json");
}

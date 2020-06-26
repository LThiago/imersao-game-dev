class Vida {
  constructor(total, inicial) {
    this.total = total;
    this.inicial = inicial;
    this.vidas = this.inicial;

    this.largura = 25;
    this.altura = 25;
    this.xInicial = 20;
    this.y = 20;
  }

  exibe() {
    for (let index = 0; index < this.vidas; index++) {
      const margem = index * 10;
      const posicao = this.xInicial * (index + 1);

      image(imagemVida, posicao + margem, this.y, this.largura, this.altura);
    }
  }

  ganhaVida() {
    if (this.vidas <= this.total) {
      this.vidas++;
    }
  }
  perdeVida() {
    this.vidas--;
  }
}

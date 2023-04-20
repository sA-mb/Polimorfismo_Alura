export class Cuenta {
  #cliente;
  #saldo;

  constructor(cliente, numero, agencia, saldo) {
    if (this.constructor == Cuenta) {
      throw new Error("No se deben instanciar objetos de la clase Cuenta");
    }
    this.numero = numero;
    this.agencia = agencia;
    this.#cliente = cliente;
    this.#saldo = saldo;
  }

  set cliente(valor) {
    if (valor instanceof Cliente) this.#cliente = valor;
  }

  get cliente() {
    return this.#cliente;
  }

  depositoEnCuenta(valor) {
    if (valor > 0) this.#saldo += valor;
    return this.#saldo;
  }

  retirarDeCuenta(valor) {
    //este es un metodo abstracto
    throw new Error("Implemente metodo retirarDeCuenta en la clase a utilizar");
  }

  _retirarDeCuenta(valor, comision) {
    valor = valor * (comision / 100 + 1);
    if (valor <= this.#saldo) this.#saldo -= valor;
    return this.#saldo;
  }

  verSaldo() {
    return this.#saldo;
  }

  transferirParaCuenta(valor, cuentaDestino) {
    this.retirarDeCuenta(valor);
    cuentaDestino.depositoEnCuenta(valor);
  }

  prueba() {
    console.log("Método padre");
  }
}

export default class ContaCorrente {
	agencia;
	conta;
	#saldo;

	sacar(valor) {
		if(this.#saldo >= valor) {
			this.#saldo -= valor
		}
	}

	depositar(valor) {
		if(valor > 0) {
			this.#saldo += valor;
		}
	}
}
export default class ContaCorrente {
	agencia;
	conta;
	Cliente;

	saldo = 0;

	sacar(valor) {
		if(this.saldo >= valor) {
			this.saldo -= valor

			return valor;
		}
	}

	depositar(valor) {
		if(valor > 0) {
			this.saldo += valor;
		}
	}

	transferir(conta, valor) {
		const valorSacado = this.sacar(valor);
		conta.depositar(valorSacado);
	}

	get saldo() {
		return this.saldo;
	}

	constructor(agencia, conta, cliente) {
		this.agencia = agencia;
		this.conta = conta;
		this.cliente = cliente;
	}
}
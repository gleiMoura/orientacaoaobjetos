class Cliente {
	nome;
	cpf;
}

class contaCorrente {
	agencia;
	conta;
	saldo;

	sacar(valor) {
		if(this.saldo >= valor) {
			this.saldo -= valor
		}
	}
}

const Cliente1 = new Cliente;

Cliente1.nome = 'Paulo';
Cliente1.cpf = '12345678912';

const contaCorrente1 = new contaCorrente;

contaCorrente1.agencia = '1234';
contaCorrente.conta = '32456';

console.log("Cliente1 -->", Cliente1)

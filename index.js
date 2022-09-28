import Cliente from "./Cliente.js";
import contaCorrente from "./ContaCorrente.js";

const Cliente1 = new Cliente('Paulo', '123.456.789-12');

const contaCorrente2 = new contaCorrente('1532','45635', Cliente1);

console.log(Cliente1);


// Developer: Iuri Torres | 31/08/2022
// Estudo de JavaScript com Aplicação de Juros

import input from 'readline-sync';

console.log('Aplicação de Juros: \n');

let valorDivida = input.question('Informe o valor devido: R$');

if (valorDivida > 0) {

	let diasVencimento = input.question('Informe quantos dias se passaram desde o vencimento do boleto: ');

	if (diasVencimento > 0) {

		let juros = (diasVencimento > 15) ? 10 : 5;

		let valorJuros = (valorDivida / 100) * juros;
		let totalDivida = Number(valorDivida) + Number(valorJuros);

		console.log(`Valor original da dívida: R$${valorDivida}`);
		console.log(`Dias atrasados: ${diasVencimento}`);
		console.log(`Taxa de Juros: ${juros}%`);
		console.log(`Valor total com juros: R$${totalDivida}`);
	}
	else {
		console.log('Você está em dia!')
	}
}
else{
	console.log('O valor da dívida deve ser maior do que zero!')
}


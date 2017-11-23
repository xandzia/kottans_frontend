var accessories = 5;
var phone = 50;
var canI = prompt("Сколько у вас денег?");
var tax = 0.08;
var bank = prompt("Сколько денег в банке?");
var amount = 0;

//покупаем телефоны, пока есть деньги в банке
while (bank > amount) {
    amount = amount + phone;
    
    //пока можем себе позволить, покупаем accessories
    if(canI > amount) {
        amount = amount + accessories;
    }
}

function withTax(amount) {
	return amount * tax;
}

function format(amount) {
	return "$" + amount.toFixed( 2 );
}

amount = amount + withTax( amount );
alert (format(amount));


// можете ли позволить себе эту покупку?
if (amount > bank) {
	alert(
		"Вы не можете позволить себе эту покупку. :("
	);
}

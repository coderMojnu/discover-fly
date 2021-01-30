function handleTicketCountAndPrice(ticketType, isIncrease) {
    const ticketNumber = getInputValue(ticketType);
    let newTicketNumber = ticketNumber;
    if (isIncrease == true) {
        newTicketNumber = ticketNumber + 1;
    }
    if (isIncrease == false && ticketNumber > 0) {
        newTicketNumber = ticketNumber - 1;
    }
    document.getElementById(ticketType).value = newTicketNumber;
    calculateTotal();
}

//function to calculate Subtotal, total and tax
function calculateTotal() {
    const firstClassTicket = getInputValue('firstClass');
    const economyTicket = getInputValue('economy');
    const subTotal = firstClassTicket * 150 + economyTicket * 100;
    const totalTax = subTotal * 0.1;
    const total = subTotal + totalTax;
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax').innerText = totalTax;
    document.getElementById('total').innerText = total;
}

//function to get Input Value from User
function getInputValue(ticketType) {
    const NumberOfTicket = document.getElementById(ticketType);
    const ticketValue = parseInt(NumberOfTicket.value);
    return ticketValue;
}

//function to confirm purchase
function bookNowBtn() {
    const firstClassTicket = getInputValue('firstClass');
    const economyTicket = getInputValue('economy');
    const subTotal = firstClassTicket * 150 + economyTicket * 100;
    const totalTax = subTotal * 0.1;
    const total = subTotal + totalTax;
    confirm(document.innerText = 'Press OK to confirm purchase' + '\n' + '_____________________________________________________________________________' + '\n' + 'First Class Ticket - ' + firstClassTicket + '\n' + 'Economy Ticket - ' + economyTicket + '\n' + 'Subtotal - ' + subTotal + '\n' + 'Tax - ' + totalTax + '\n' + 'Total - ' + total);
}
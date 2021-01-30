function handleTicketCountAndPrice(ticketType, isIncrease) {
    //console.log(getInputValue('firstClass'));
    const ticketNumber = getInputValue(ticketType);
    let newTicketNumber = ticketNumber;
    if (isIncrease == true) {
        newTicketNumber = ticketNumber + 1;
    }
    if (isIncrease == false && ticketNumber > 0) {
        newTicketNumber = ticketNumber - 1;
    }
    document.getElementById(ticketType).value = newTicketNumber;
    calculateSubTotal();
}
function bookNowBtn(){
    confirm("Confirm Please");
}
function calculateSubTotal() {
    const firstClassTicket = getInputValue('firstClass');
    const economyTicket = getInputValue('economy');
    const subTotal = firstClassTicket * 150 + economyTicket * 100;
    const totalTax = subTotal * 0.1;
    const total = subTotal + totalTax;
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax').innerText = totalTax;
    document.getElementById('total').innerText = total;
}
function getInputValue(ticketType) {
    const NumberOfTicket = document.getElementById(ticketType);
    const ticketValue = parseInt(NumberOfTicket.value);
    return ticketValue;
}
var customerName = "bob";

function upperCaseCustomerName(){
    customerName =  customerName.toUpperCase();
    return customerName;
}

function setBestCustomer(){
    window.bestCustomer;
    bestCustomer = "not bob";
    return bestCustomer;
}

function overwriteBestCustomer() {
    bestCustomer ="maybe bob";
    return bestCustomer;
}

const leastFavoriteCustomer = "Emmanuel";

function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = "Emmax";
}
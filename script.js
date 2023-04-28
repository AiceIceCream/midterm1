function product(){
    location.assign("product.html");
}

let quant = 0;
let subTotal = 0;
let ship = 50;
let total = 0;
let qty = 0;
let total_check = 0;

function addQuantity(){
    quant = quant + 1;
    subTotal = subTotal + 4236;
    total = subTotal + ship;

    document.getElementById("Quantity").innerHTML = quant;
    document.getElementById("quantity").innerHTML = quant;
    document.getElementById("sub_total").innerHTML = subTotal;
    document.getElementById("total").innerHTML = total;

    if(quant > 10){
        alert("Limit Reach!");
        quant = 10;
        subTotal = 42360;
        total =42410;

        document.getElementById("Quantity").innerHTML = quant;
        document.getElementById("quantity").innerHTML = quant;
        document.getElementById("sub_total").innerHTML = subTotal;
        document.getElementById("total").innerHTML = total;
    }
}

function minQuantity(){
    quant = quant - 1;
    subTotal = subTotal - 4236;
    total = total - 4236;

    document.getElementById("Quantity").innerHTML = quant;
    document.getElementById("quantity").innerHTML = quant;
    document.getElementById("sub_total").innerHTML = subTotal;
    document.getElementById("total").innerHTML = total;

    if(quant < 0){
        quant = 1;
        subTotal = 4236;
        total = 4286;

        alert("Invalid Quantity");

        document.getElementById("Quantity").innerHTML = quant;
        document.getElementById("quantity").innerHTML = quant;
        document.getElementById("sub_total").innerHTML = subTotal;
        document.getElementById("total").innerHTML = total;
    }
}

function checkOut(){
    qty = qty + quant;
    total_check = total;

    document.getElementById("qty").innerHTML = qty;
    document.getElementById("total_check").innerHTML = total_check;
    document.getElementById("checkOut").style.display = "";
    document.getElementById("wrap").style.display = "None";
}
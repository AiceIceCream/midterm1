function product(){
    location.assign("product.html");
}

let quan = 0;

function getadd(){
    quan += 1;
    document.getElementById("Quantity").innerHTML = quan;

    var price = 4236;
    let total = 0;

    if(quan == 1){
        document.getElementById("sub_total").innerHTML = price;
        document.getElementById("quantity").innerHTML = quan;
        total = document.getElementById("total").innerHTML = price + 50;



        document.getElementById("total_quantity").innerHTML = quan;
        document.getElementById("value").innerHTML = total;
    }

    else if(quan == 2){
        document.getElementById("sub_total").innerHTML = price * 2;
        document.getElementById("quantity").innerHTML = quan;
        total = document.getElementById("total").innerHTML = (quan * price) + 50;

        document.getElementById("total_quantity").innerHTML = quan;
        document.getElementById("value").innerHTML = total;
    }

    else if(quan == 3){
        document.getElementById("sub_total").innerHTML = price * 3;
        document.getElementById("quantity").innerHTML = quan;
        total = document.getElementById("total").innerHTML = (quan * price) + 50;

        document.getElementById("total_quantity").innerHTML = quan;
        document.getElementById("value").innerHTML = total;
    }

    else if(quan == 4){
        document.getElementById("sub_total").innerHTML = price * 4;
        document.getElementById("quantity").innerHTML = quan;
        total = document.getElementById("total").innerHTML = (quan * price) + 50;

        document.getElementById("total_quantity").innerHTML = quan;
        document.getElementById("value").innerHTML = total;
    }

    else if(quan == 5){
        document.getElementById("sub_total").innerHTML = price * 5;
        document.getElementById("quantity").innerHTML = quan;
        total = document.getElementById("total").innerHTML = (quan * price) + 50;

        document.getElementById("total_quantity").innerHTML = quan;
        document.getElementById("value").innerHTML = total;
    }

    else if(quan == 6){
        document.getElementById("sub_total").innerHTML = price * 6;
        document.getElementById("quantity").innerHTML = quan;
        total = document.getElementById("total").innerHTML = (quan * price) + 50;

        document.getElementById("total_quantity").innerHTML = quan;
        document.getElementById("value").innerHTML = total;
    }

    else if(quan == 7){
        document.getElementById("sub_total").innerHTML = price * 7;
        document.getElementById("quantity").innerHTML = quan;
        total = document.getElementById("total").innerHTML = (quan * price) + 50;

        document.getElementById("total_quantity").innerHTML = quan;
        document.getElementById("value").innerHTML = total;
    }

    else if(quan == 8){
        document.getElementById("sub_total").innerHTML = price * 8;
        document.getElementById("quantity").innerHTML = quan;
        total = document.getElementById("total").innerHTML = (quan * price) + 50;

        document.getElementById("total_quantity").innerHTML = quan;
        document.getElementById("value").innerHTML = total;
    }

    else if(quan == 9){
        document.getElementById("sub_total").innerHTML = price * 9;
        document.getElementById("quantity").innerHTML = quan;
        total = document.getElementById("total").innerHTML = (quan * price) + 50;

        document.getElementById("total_quantity").innerHTML = quan;
        document.getElementById("value").innerHTML = total;
    }

    else if(quan == 10){
        document.getElementById("sub_total").innerHTML = price * 10;
        document.getElementById("quantity").innerHTML = quan;
        total = document.getElementById("total").innerHTML = (quan * price) + 50;

        document.getElementById("total_quantity").innerHTML = quan;
        document.getElementById("value").innerHTML = total;
    }

    else if(quan > 10)
    {
        window.alert("Maximum Reach");
        document.getElementById("Quantity").innerHTML = 1;
        document.getElementById("sub_total").innerHTML = 4236;
        document.getElementById("quantity").innerHTML = 1;
        document.getElementById("total").innerHTML = price +50;
    }
    

}

function getmin(){
    quan -= 1;
    document.getElementById("Quantity").innerHTML = quan;
    

    if(quan == 1){
        document.getElementById("sub_total").innerHTML = ( - price);
        document.getElementById("quantity").innerHTML = quan;
        document.getElementById("total").innerHTML = price + 50;
    }

    else if(quan == 2){
        document.getElementById("sub_total").innerHTML = (- price);
        document.getElementById("quantity").innerHTML = quan;
        document.getElementById("total").innerHTML = (quan * price) + 50;
    }

    else if(quan == 3){
        document.getElementById("sub_total").innerHTML = (- price)
        document.getElementById("quantity").innerHTML = quan;
        document.getElementById("total").innerHTML = (quan * price) + 50;
    }

    else if(quan == 4){
        document.getElementById("sub_total").innerHTML = (- price);
        document.getElementById("quantity").innerHTML = quan;
        document.getElementById("total").innerHTML = (quan * price) + 50;
    }

    else if(quan == 5){
        document.getElementById("sub_total").innerHTML = (- price);
        document.getElementById("quantity").innerHTML = quan;
        document.getElementById("total").innerHTML = (quan * price) + 50;
    }

    else if(quan == 6){
        document.getElementById("sub_total").innerHTML = (- price);
        document.getElementById("quantity").innerHTML = quan;
        document.getElementById("total").innerHTML = (quan * price) + 50;
    }

    else if(quan == 7){
        document.getElementById("sub_total").innerHTML = (- price);
        document.getElementById("quantity").innerHTML = quan;
        document.getElementById("total").innerHTML = (quan * price) + 50;
    }

    else if(quan == 8){
        document.getElementById("sub_total").innerHTML =(- price);
        document.getElementById("quantity").innerHTML = quan;
        document.getElementById("total").innerHTML = (quan * price) + 50;
    }

    else if(quan == 9){
        document.getElementById("sub_total").innerHTML = (- price);
        document.getElementById("quantity").innerHTML = quan;
        document.getElementById("total").innerHTML = (quan * price) + 50;
    }

    else if(quan == 10){
        document.getElementById("sub_total").innerHTML = (- price);
        document.getElementById("quantity").innerHTML = quan;
        document.getElementById("total").innerHTML = (quan * price) + 50;
    }

    else if(quan < 1)
    {
        window.alert("Unidentified Quantity!");
        document.getElementById("Quantity").innerHTML = 1;
        document.getElementById("sub_total").innerHTML = 4236;
        document.getElementById("quantity").innerHTML = 1;
        document.getElementById("total").innerHTML = price +50;
    }
    
}

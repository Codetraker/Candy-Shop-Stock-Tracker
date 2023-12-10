let form = document.getElementById('form');
let cname = document.getElementById('name');
let cdes = document.getElementById('des');
let cprice = document.getElementById('price');
let cquantity = document.getElementById('quantity');

let list = document.getElementById('list');

form.addEventListener('submit',addInStorage);

function addInStorage(event){
    event.preventDefault();
    
    let stockData = JSON.parse(localStorage.getItem("stockDetail")) ?? [];
    stockData.push({
        cname : cname.value ,
        cdes : cdes.value ,
        cprice : cprice.value ,
        cquantity : cquantity.value
    });
    localStorage.setItem("stockDetail",JSON.stringify(stockData));
    event.target.reset();

    displayData();
}

let displayData = () =>{
    let stockData = JSON.parse(localStorage.getItem("stockDetail")) ?? [];
    list.innerHTML="";
    stockData.forEach((element,i) => {
        addNewListItem(element,i);
    });
}

function addNewListItem(element,i){
    let newList = document.createElement('li');
    newList.innerHTML = `Candy Name:-${element.cname}-Description:-${element.cdes}-Price:-${element.cprice}-Quantity:-${element.cquantity}`;

    let buyOne = document.createElement('button');
    buyOne.appendChild(document.createTextNode('Buy 1'));
    buyOne.onclick = function(){
        oneItemBuy(`${i}`);
    }

    let buyTwo = document.createElement('button');
    buyTwo.appendChild(document.createTextNode('Buy 2'));
    buyTwo.onclick = function(){
        twoItemBuy(`${i}`);
    }

    let buyThree = document.createElement('button');
    buyThree.appendChild(document.createTextNode('Buy 3'));
    buyThree.onclick = function(){
        threeItemBuy(`${i}`);
    }

    let deleteButton = document.createElement('button');
    deleteButton.appendChild(document.createTextNode('Delete'));
    deleteButton.onclick = function(){
        removeItem(`${i}`);
    }
    

    newList.appendChild(buyOne);
    newList.appendChild(buyTwo);
    newList.appendChild(buyThree);
    newList.appendChild(deleteButton);
    list.appendChild(newList);
};

function removeItem(i){
    let stockData= JSON.parse(localStorage.getItem("stockDetail")) ?? [];
    stockData.splice(i,1);
    localStorage.setItem("stockDetail",JSON.stringify(stockData));
    displayData();

}

function oneItemBuy(i){
    let stockData= JSON.parse(localStorage.getItem("stockDetail")) ?? [];
    if(stockData[i].cquantity>0){
        stockData[i].cquantity = stockData[i].cquantity - 1;
        localStorage.setItem("stockDetail", JSON.stringify(stockData));
        displayData();
    }else{
        console.error("Item Shortage! Not able to fullfill Order of 1 item.");
        alert("Stock is not Available");
        stockData[i].cquantity = stockData[i].cquantity;
        localStorage.setItem("stockDetail", JSON.stringify(stockData));
        
        displayData();
    } 
}

function twoItemBuy(i){
    let stockData= JSON.parse(localStorage.getItem("stockDetail")) ?? [];
    if(stockData[i].cquantity>0 && stockData[i].cquantity-2 >= 0){
        stockData[i].cquantity = stockData[i].cquantity - 2;
        localStorage.setItem("stockDetail", JSON.stringify(stockData));
        displayData();
    }else{
        console.error("Item Shortage! Not able to fullfill Order of 2 item.");
        alert("Stock is not Available");
        stockData[i].cquantity = stockData[i].cquantity;
        localStorage.setItem("stockDetail", JSON.stringify(stockData));
        
        displayData();
    } 
}

function threeItemBuy(i){
    let stockData= JSON.parse(localStorage.getItem("stockDetail")) ?? [];
    if(stockData[i].cquantity>0 && stockData[i].cquantity-3 >= 0){
        stockData[i].cquantity = stockData[i].cquantity - 3;
        localStorage.setItem("stockDetail", JSON.stringify(stockData));
        displayData();
    }else{
        console.error("Item Shortage! Not able to fullfill Order of 3 item.");
        alert("Stock is not Available");
        stockData[i].cquantity = stockData[i].cquantity;
        localStorage.setItem("stockDetail", JSON.stringify(stockData));
        
        displayData();
    } 
}

displayData();
let cartItems = [];
let totalPrice = 0;
let sections = document.querySelectorAll('[id^="section"]');
let x = document.getElementById("total");
let ele = document.getElementById("cartformen");

let car = document.getElementById("buyCart");
car.addEventListener("click",function(){
  alert("request sending to server to buy product...");
  while(cartItems.length > 0) {
    cartItems.pop()
  }
  removeCarts()
  x.innerText = "$ 0.00";
})

function addToCart(item) {
    let prod = document.getElementById(item);
    let content = prod.innerText;
    cartItems.push(content);
    let price = content.slice(1,);
    price = parseFloat(price);
    calculate(price);
    insert(item,price);
}

if (sections.length > 1) {
  let sectionOne = sections[0];
  sections.forEach((section) => {
    if (section != sectionOne) {
      $(section).css("display", "none");
    }
  });
}

const display = (sectionId) => {
  makeRemainingScreensInvisible(sectionId);
  let section = document.getElementById(sectionId);
  $(section).css("display", "block");
  window.scrollTo(0, 0);
};

const makeRemainingScreensInvisible = (sectionId) => {
  let sections = document.querySelectorAll('[id^="section"]');
  sections.forEach((section) => {
    if ($(section).attr("id") != sectionId) {
      $(section).css("display", "none");
    }
  });
};
function calculate(price) {
    totalPrice += price;
    x.innerText = "$ " + totalPrice;
}

function insert(item,price) {
    //Add-to-cart code...
    let newele = document.createElement("div");
    let newprice = document.createElement("div");
    newele.innerText = item;
    newprice.innerText = price;
    newele.setAttribute("class","new");
    newprice.setAttribute("class","new");
    ele.append(newele,newprice);
}

function removeCarts() {
  var carts = document.querySelectorAll("#cartformen .new");

  carts.forEach(function(cart) {
      cart.remove();
  });
}



// EXAMPLE FOR PROMISES: 
// function fetchData() {
//   return new Promise((resolve,reject) => {
//     let data = true;

//     setTimeout(()=>{
//       if(data) {
//         resolve("Data is fetched accurately!!!");
//       } else {
//         reject("Something went wrong we are fixing it...");
//       }
//     },2000);
//   });
// }

// fetchData()
//   .then((r) =>{
//     console.log(r);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
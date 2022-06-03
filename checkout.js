const taxRate=0.18;
const shippingPrice=15.0;


// * =====================WİNDOW===============*
window.addEventListener('load',()=>{
    //localStorage
    localStorage.setItem('taxRate',taxRate);  
    localStorage.setItem('shippingPrice',shippingPrice);
      //!key-value ile set edilirken get ile key çağrılır
    
    //SESSİON STORAGE  
    sessionStorage.setItem('taxRate',taxRate);  
    sessionStorage.setItem('shippingPrice',shippingPrice);
      //!key-value ile set edilirken get ile key çağrılır

      // TODO: SESSİON ST0RAGE AND LOCAL STORAGE DATABASE İN BROWSER
})


// * ========================CAPTURIİNG METHOD=====================*
//click eventte tüm childlar sahip oldu
let productsDiv=document.querySelector(".products")
productsDiv.addEventListener('click',(event)=>{
   // * if(event.target.className=='minus')


   //* ===========MİNUS=====================

   if(event.target.classList.contains('minus')){

    if( event.target.nextElementSibling.innerText>1){
        event.target.nextElementSibling.innerText--;
        //hem fiyata hemde miktara ulaşmak için product info classına gitmek gerek!
        calculateProductAndCardTotal(event.target.parentElement.parentElement);
    }
    else{
        if(confirm('Product will be deleted?')){
            event.target.parentElement.parentElement.parentElement.remove();
            calculateCardTotal();

        }
    }

       console.log('minus button chicked');
   }
   //? ===========PLUS=====================
   else if(event.target.classList.contains('plus')){
    console.log('plus button chicked');
    event.target.previousElementSibling.innerText++;
    calculateProductAndCardTotal(event.target.parentElement.parentElement);
    //event.target.closest(".product-info").querySelector("#product-quantity")
    //.innerText++;

}
   //? ===========REMOVE=====================
   else if(event.target.classList.contains("remove-product")){
    console.log('remove button chicked');
    event.target.parentElement.parentElement.parentElement.remove();
    calculateCardTotal();
    // * event.target.closest(".product").remove();
   }
})



// * ===================FUNCTİON================================*



const calculateProductAndCardTotal= (productInfoDiv) =>{

console.log(productInfoDiv);

let quantity=productInfoDiv.querySelector('#product-quantity').innerText;
let price=productInfoDiv.querySelector("strong").innerText;
let productTotalDiv=productInfoDiv.querySelector(".product-line-price");

productTotalDiv.innerText=(price*quantity).toFixed(2)


calculateCardTotal();

}


const calculateCardTotal=()=>{
    let productsTotalPriceDivs=document.querySelectorAll(".product-line-price")

    let subtotal=0;

    productsTotalPriceDivs.forEach((eachprice)=>{
        subtotal+=parseFloat(eachprice.innerText)
    });
    console.log(subtotal);

    let taxPrice=subtotal*localStorage.getItem("taxRate");

    let shippingPrice=parseFloat(localStorage.getItem('shippingPrice'));

    let cartTotal=subtotal+taxPrice+shippingPrice;

    document.querySelector("#cart-subtotal p:nth-child(2)").innerText=subtotal.toFixed(2)
    
    document.querySelector("#cart-tax p:nth-child(2)").innerText=taxPrice.toFixed(2)
   
    document.querySelector("#cart-shipping p:nth-child(2)").innerText=shippingPrice.toFixed(2);


    document.querySelector("#cart-total").lastElementChild.innerText=cartTotal.toFixed(2);








  

}








/*
/ const taxRate = 0.18;
// const shippingPrice = 15.0;
​
window.addEventListener("load", () => {
  calculateCartTotal();
  //set item to LocalStorage
  // localStorage.setItem("taxRate", taxRate);
  // localStorage.setItem("shippingPrice", shippingPrice);
​
  //set item to SessionStorage
  //  sessionStorage.setItem("taxRate", taxRate);
  //  sessionStorage.setItem("shippingPrice", shippingPrice);
});
​
//capturing method
let productsDiv = document.querySelector(".products");
productsDiv.addEventListener("click", (event) => {
  if (event.target.className == "minus") {
    let quantityP = event.target
      .closest(".product-info")
      .querySelector("#product-quantity");
    // let quantityP = event.target.nextElementSibling;
    if (quantityP.innerText > 1) {
      quantityP.innerText--;
      //parameter == selected productInfoDiv
      calculateProductAndCartTotal(event.target.closest(".product-info"));
      //   calculateProductAndCartTotal(event.target.parentElement.parentElement);
    } else {
      if (confirm("Product will be deleted?")) {
        event.target.closest(".product").remove();
        // event.target.parentElement.parentElement.parentElement.remove();
        calculateCartTotal();
      }
    }
    // console.log(typeof event.target.nextElementSibling.innerText);
    // console.log("minus button clicked");
  } else if (event.target.classList.contains("plus")) {
    event.target.closest(".product-info").querySelector("#product-quantity")
      .innerText++;
    // event.target.previousElementSibling.innerText++;
    //parameter == selected productInfoDiv
    calculateProductAndCartTotal(event.target.closest(".product-info"));
    // console.log("plus button clicked");
  } else if (event.target.classList.contains("remove-product")) {
    if (confirm("Product will be deleted?")) {
      event.target.closest(".product").remove();
      //   event.target.parentElement.parentElement.parentElement.remove();
      calculateCartTotal();
    }
​
    // console.log("remove button clicked");
  } else {
    // console.log("other element clicked");
  }
});
​
//calculate cart and product totals
const calculateProductAndCartTotal = (productInfoDiv) => {
  //product calculation
  // console.log(productInfoDiv);
  let price = productInfoDiv.querySelector("strong").innerText;
  let quantity = productInfoDiv.querySelector("#product-quantity").innerText;
  let productTotalDiv = productInfoDiv.querySelector(".product-line-price");
  productTotalDiv.innerText = (price * quantity).toFixed(2);
  //cart calculation
  calculateCartTotal();
};
​
//calculate cart totals
const calculateCartTotal = () => {
  //nodeList Div
  let productsTotalPriceDivs = document.querySelectorAll(".product-line-price");
  // console.log(productsTotalPriceDivs);
  let subtotal = 0;
  productsTotalPriceDivs.forEach((eachProductTotalDiv) => {
    subtotal += parseFloat(eachProductTotalDiv.innerText);
  });
  console.log(subtotal);
  let taxPrice = subtotal * localStorage.getItem("taxRate");
  console.log(taxPrice);
​
  let shippingPrice =
    subtotal > 0 ? parseFloat(localStorage.getItem("shippingPrice")) : 0;
​
  let cartTotal = subtotal + taxPrice + shippingPrice;
​
  document.querySelector("#cart-subtotal p:nth-child(2)").innerText =
    subtotal.toFixed(2);
​
  document.querySelector("#cart-tax p:nth-child(2)").innerText =
    taxPrice.toFixed(2);
​
  document.querySelector("#cart-shipping p:nth-child(2)").innerText =
    shippingPrice.toFixed(2);
​
  document.querySelector("#cart-total").lastElementChild.innerText =
    cartTotal.toFixed(2);
};*/
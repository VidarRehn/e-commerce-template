
    let products = [{
        "id": 1,
        "name": "product 1",
        "price": 1000,
        "color": "black",
        "size": "M",
        "image": "image URL"
    },{
        "id": 2,
        "name": "product 2",
        "price": 1500,
        "color": "white",
        "size": "XL",
        "image": "image URL"
    },{
        "id": 3,
        "name": "product 3",
        "price": 2000,
        "color": "red",
        "size": "XX",
        "image": "image URL"
    },{
        "id": 4,
        "name": "product 4",
        "price": 2500,
        "color": "color",
        "size": "XX",
        "image": "image URL"
    },{
        "id": 5,
        "name": "product 5",
        "price": 3000,
        "color": "color",
        "size": "XX",
        "image": "image URL"
    },{
        "id": 6,
        "name": "product 6",
        "price": 3500,
        "color": "color",
        "size": "XX",
        "image": "image URL"
    }];

// scroll to collection on click

let seeCollectionButton = document.querySelector(".see-collection-btn");
let collection = document.querySelector(".shop");

seeCollectionButton.addEventListener("click", ()=>{
    collection.scrollIntoView({behavior: "smooth"})
})

// toggle hamburger

let hamburgerButton = document.querySelector(".hamburger");
let navigationLinks = document.querySelector(".navlinks");

hamburgerButton.addEventListener("click", ()=>{
    navigationLinks.classList.toggle("hide");
    if (!navigationLinks.classList.contains("hide")){
        hamburgerButton.innerHTML = "<i class='fas fa-times'></i>";
    } else {
        hamburgerButton.innerHTML = "<i class='fas fa-bars'></i>";
    }
})

// toggle shopping cart

let shoppingCartIcon = document.querySelector(".fa-shopping-cart");
let shoppingCart = document.querySelector(".shopping-cart");

shoppingCartIcon.addEventListener("click", ()=>{
    if (!likesContainer.classList.contains("hide")){
        likesContainer.classList.add("hide");
    }
    shoppingCart.classList.toggle("hide");
})

// toggle likes screen

let likeIcon = document.querySelector(".header-icons .fa-heart");
let likesContainer = document.querySelector(".likes");

likeIcon.addEventListener("click", ()=>{
    if (!shoppingCart.classList.contains("hide")){
        shoppingCart.classList.add("hide");
    }
    likesContainer.classList.toggle("hide");
})


// toggle login screen

let loginScreen = document.querySelector(".login-screen");
let getToLoginIcon = document.querySelector(".fa-user");
let closeLoginScreen = document.querySelector(".close-btn");

[getToLoginIcon, closeLoginScreen].forEach((btn) => {
    btn.addEventListener("click", ()=>{
        loginScreen.classList.toggle("hide");
    })
});


// check user name and password

let userInput = document.querySelector(".username-input");
let passwordInput = document.querySelector(".password-input");
let loginButton = document.querySelector(".login-btn");
let errorMessage = document.querySelector(".error-msg");
let userLoggedIn = document.querySelector(".user-logged-in");

const username = "admin";
const password = "123";

[userInput, passwordInput].forEach((input) => {
    input.addEventListener("input", ()=>{
        if (!errorMessage.classList.contains("hide")){
            errorMessage.classList.add("hide");
        }
    })    
});

function clearInput(){
    userInput.value = "";
    passwordInput.value = "";
}

loginButton.addEventListener("click", (x)=>{
    x.preventDefault();
    if (userInput.value == "" || passwordInput.value == ""){
        errorMessage.innerText = "Please enter both username and password";
        errorMessage.classList.remove("hide");
    } else if (userInput.value == username && passwordInput.value == password){
        loginScreen.classList.toggle("hide");
        userLoggedIn.innerText = `(${username})`;
        userLoggedIn.classList.remove("hide");
    } else {
        errorMessage.innerText = "The username and password does not match";
        errorMessage.classList.remove("hide");
    }
    clearInput();
})

// toggle filters 

let filterSelectors = document.querySelectorAll(".selector");

filterSelectors.forEach((selector)=>{
    selector.addEventListener("click", ()=>{
        selector.nextElementSibling.classList.toggle("hide");
    })
})

// close filter on mouseleave

filterSelectors.forEach((selector)=>{
    selector.nextElementSibling.addEventListener("mouseleave", ()=>{
        selector.nextElementSibling.classList.toggle("hide");
    })
})

// display products

let productsContainer = document.querySelector(".products-container");

products.forEach((product)=>{
    let productArticle = document.createElement("article");
    productArticle.innerHTML = `<div class='image'><img src='${product.image}' alt=''><i class="fas fa-heart"></i></div><div class='product-info'><p class='product-name'>${product.name}</p><p class='product-price'>${product.price} SEK</p></div><div><button class='add-to-cart'>Add to cart</button><select name='' id='' class='size'><option selected disabled>size</option><option value='XS'>XS</option><option value='S'>S</option><option value='M'>M</option><option value='L'>L</option><option value='XL'>XL</option></select><select name='' id='' class='amount'><option value='1'>1</option><option value='2'>2</option><option value='3'>3</option></select></div>`;
    productsContainer.append(productArticle);
})

// räkna likes

let likeButtons = document.querySelectorAll(".image .fa-heart");
let likeCounterContainer = document.querySelector(".like-counter")
let likeCounter = 0;

likeButtons.forEach((btn)=>{
    btn.addEventListener("click", ()=>{
        btn.classList.toggle("liked");
        // let likedArticle = btn.parentElement.parentElement;
        // likesContainer.append(likedArticle);
        if (btn.classList.contains("liked")){
            likeCounter++;
        } else {
            likeCounter--;
        }
        likeCounterContainer.innerText = likeCounter;
        if (likeCounter == 0){
            likeCounterContainer.classList.add("hide");
        } else {
            likeCounterContainer.classList.remove("hide");
        }
    })
})

// räkna shopingcart items

let addToCartButtons = document.querySelectorAll(".add-to-cart");
let cartCounterContainer = document.querySelector(".item-counter");
let cartItemCounter = 0;

addToCartButtons.forEach((btn)=>{
    btn.addEventListener("click", ()=>{
        btn.classList.toggle("added-to-cart");

        // some code to add items to cart

        if (btn.classList.contains("added-to-cart")){
            cartItemCounter++;
        } else {
            cartItemCounter--;
        }
        cartCounterContainer.innerText = cartItemCounter;
        if (cartItemCounter == 0){
            cartCounterContainer.classList.add("hide");
        } else {
            cartCounterContainer.classList.remove("hide");
        }
    })
})

// make selected filter-buttons

let filterOptions = document.querySelectorAll(".options input[type='checkbox']");
let selectedFiltersContainer = document.querySelector(".selected-filters");

filterOptions.forEach((option)=>{
    let filterButton = document.createElement("button");
    let xButton = document.createElement("div");
    let buttonName = document.createElement("p");
    xButton.innerHTML = "<i class='fas fa-times'></i>";
    buttonName.innerText = option.name;
    filterButton.append(buttonName);
    filterButton.append(xButton);
    filterButton.classList.add("filter-btn");
    filterButton.classList.add("hide"); 
    selectedFiltersContainer.append(filterButton);
})

// make selected-filter buttons appear on choice

let filterButtonsAll = document.querySelectorAll(".filter-btn");

filterOptions.forEach((option)=>{
    option.addEventListener("change", ()=>{
        filterButtonsAll.forEach((btn)=>{
            if (btn.firstElementChild.innerText == option.name){
                btn.classList.toggle("hide");
            }
        })
    })
})

// remove filter on selected-filter button click

filterButtonsAll.forEach((btn)=>{
    btn.addEventListener("click", ()=>{
        filterOptions.forEach((option)=>{
            if (option.name == btn.firstElementChild.innerText){
                option.checked = false;
            }
        })
        btn.classList.add("hide");
    })
})
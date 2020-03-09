const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let links = document.getElementsByTagName("a");
console.log(links)

links[0].setAttribute("href", siteContent["nav"]["nav-item-1"]);
links[0].textContent = "Services"
links[0].style.color = "green"

links[1].setAttribute("href", siteContent["nav"]["nav-item-2"]);
links[1].textContent = "Product"
links[1].style.color = "green"

links[2].setAttribute("href", siteContent["nav"]["nav-item-3"]);
links[2].textContent = "Vision"
links[2].style.color = "green"

links[3].setAttribute("href", siteContent["nav"]["nav-item-4"]);
links[3].textContent = "Features"
links[3].style.color = "green"

links[4].setAttribute("href", siteContent["nav"]["nav-item-5"]);
links[4].textContent = "About"
links[4].style.color = "green"

links[5].setAttribute("href", siteContent["nav"]["nav-item-6"]);
links[5].textContent = "Contact"
links[5].style.color = "green"


const newNavItem1 = document.createElement('a');
newNavItem1.textContent = "Pizza"
newNavItem1.style.color = "green"

const addOne = document.querySelector('nav')
addOne.append(newNavItem1)

const newNavItem2 = document.createElement('a');
newNavItem2.textContent = "Dog"
newNavItem2.style.color = "green"

addOne.prepend(newNavItem2)




// main-Image
let img = document.getElementById("cta-img");
img.setAttribute("src", siteContent["cta"]["img-src"])


let ctah1 = document.querySelector("h1");
ctah1.textContent = siteContent["cta"]["h1"];
ctah1.style.width = "px";




let btn = document.querySelector("button");

btn.textContent = siteContent["cta"]["button"];

let h4 = document.querySelectorAll("h4")
console.log(h4)

let info = document.querySelectorAll("p");
console.log(info)

h4[0].textContent = siteContent["main-content"]["features-h4"]
info[0].textContent = siteContent["main-content"]["features-content"];

h4[1].textContent = siteContent["main-content"]["about-h4"]
info[1].textContent = siteContent["main-content"]["about-content"]

middleimg = document.getElementById("middle-img")
middleimg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

h4[2].textContent = siteContent["main-content"]["services-h4"]
info[2].textContent = siteContent["main-content"]["services-content"]

h4[3].textContent = siteContent["main-content"]["product-h4"]
info[3].textContent = siteContent["main-content"]["product-content"];

h4[4].textContent = siteContent["main-content"]["vision-h4"]
info[4].textContent = siteContent["main-content"]["vision-content"]


let contacth4 = document.querySelectorAll("h4");
console.log(contacth4);

h4[5].textContent = siteContent["contact"]["contact-h4"]
info[5].textContent = siteContent["contact"]["address"]

info[6].textContent = siteContent["contact"]["phone"]

info[7].textContent = siteContent["contact"]["email"]

info[8].textContent = siteContent["footer"]["copyright"]


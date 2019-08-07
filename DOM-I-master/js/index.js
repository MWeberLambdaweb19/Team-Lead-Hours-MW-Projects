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

// This is the updated navbar
const navbar = document.querySelectorAll("header nav a")

navbar.forEach(function(link, i) {
  link.textContent = siteContent["nav"][`nav-item-${i+1}`]
  link.style.color = "green"
})

// This is the updated Call To Action

const ctaH1 = document.querySelector("h1")
ctaH1.append(siteContent["cta"]["h1"]);

const ctaButton = document.querySelector("button")
ctaButton.append(siteContent["cta"]["button"]);

const ctaImg = document.getElementById("cta-img")
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);

// The main content 

const middleImg = document.getElementById("middle-img")
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

const topH4 = document.querySelectorAll(".top-content .text-content h4")
topH4[0].textContent = siteContent["main-content"]["features-h4"] 
topH4[1].textContent = siteContent["main-content"]["about-h4"]

const topContent = document.querySelectorAll(".top-content .text-content p")
topContent[0].textContent = siteContent["main-content"]["features-content"]
topContent[1].textContent = siteContent["main-content"]["about-content"]

const bottomH4 = document.querySelectorAll(".bottom-content .text-content h4")
bottomH4[0].textContent = siteContent["main-content"]["services-h4"]
bottomH4[1].textContent = siteContent["main-content"]["product-h4"]
bottomH4[2].textContent = siteContent["main-content"]["vision-h4"]

const bottomContent = document.querySelectorAll(".bottom-content .text-content p");
bottomContent[0].textContent = siteContent["main-content"]["services-content"];
bottomContent[1].textContent = siteContent["main-content"]["product-content"];
bottomContent[2].textContent = siteContent["main-content"]["vision-content"];

// Updating the contact info

const contactH4 = document.querySelector(".contact h4")
contactH4.textContent = siteContent["contact"]["contact-h4"]

const contactInfo = document.querySelectorAll(".contact p");
contactInfo[0].textContent = siteContent["contact"]["address"];
contactInfo[1].textContent = siteContent["contact"]["phone"];
contactInfo[1].style.marginBottom = "1.2rem";
contactInfo[2].textContent = siteContent["contact"]["email"];
contactInfo[2].style.marginBottom = "2rem";

// Updating the footer

const footerText = document.querySelector("footer p")
footerText.append(siteContent["footer"]["copyright"])

// Creating new elements

const NewLink1 = document.createElement("a")
NewLink1.textContent = "Home"
NewLink1.style.color = "green"

const NewLink2 = document.createElement("a")
NewLink2.textContent = "Login"
NewLink2.style.color = "green"

// Adding elements to navigation

const navUpdate = document.querySelector("nav")

navUpdate.prepend(NewLink1);
navUpdate.appendChild(NewLink2);
navUpdate.children[0].style.color = "red"
navUpdate.children[navUpdate.children.length -1].style.color = "red"

console.log(navUpdate.children)

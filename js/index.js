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


//HEADER
//nav
const navLink = document.querySelectorAll('nav a');
let count = 1;
navLink.forEach(item => {
  item.textContent = siteContent.nav[`nav-item-${count}`];
  count++;
});

const mainHeader = document.querySelector('nav a').style.color = 'green';
const blogLink = document.createElement("a");
blogLink.textContent = "Blog";
blogLink.href = "#";
document.querySelector('nav').appendChild(blogLink);

const buyNow = document.createElement("a");
buyNow.textContent = "Buy Now!";
buyNow.href = "#";
document.querySelector('nav').prepend(buyNow);

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

//CTA
//CTA - h1
let ctaTitle = document.querySelector(".cta-text h1");
ctaTitle.textContent =  'Dom is awesome';
ctaTitle.innerHTML = "Dom <br> IS <br> Awesome";

//CTA - Image   
let bannerImage = document.querySelector("#cta-img");
bannerImage.setAttribute('src',siteContent["cta"]["img-src"])

//CTA - Button
let ctaButton = document.querySelector(".cta-text button");
ctaButton.textContent = siteContent["cta"]["button"];
ctaButton.style.color = "black"; 

//MAIN CONTENT
//add features title
let featuresTitle = document.querySelector(".top-content .text-content h4");
featuresTitle.textContent = siteContent["main-content"]["features-h4"];

//add features text 
let featuresText = document.querySelector('.top-content .text-content p');
featuresText.textContent = siteContent["main-content"]["features-content"]

//add features title copy for About 
let topContent = document.querySelector(".top-content .text-content");
const topRightContent = topContent.cloneNode(true);
document.querySelector(".top-content").appendChild(topRightContent);

//replace class for second text-content
topRightContent.classList.replace('text-content','text-content2');

//update about title
let aboutTitle = document.querySelector(".text-content2 h4");
aboutTitle.textContent = siteContent["main-content"]["about-h4"];

//update about text
let aboutText = document.querySelector(".text-content2 p");
aboutText.textContent = siteContent["main-content"]["about-content"];

//add middle image 
let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src',siteContent["main-content"]["middle-img-src"]);

//bottom Content 

let bottomColumn = document.querySelector(".bottom-content .text-content");

let servicesTitle = document.querySelector(".bottom-content .text-content h4");
servicesTitle.textContent = siteContent["main-content"]["services-h4"]

let servicesText = document.querySelector('.bottom-content .text-content p');
servicesText.textContent = siteContent["main-content"]["services-content"];

const middleColumn = bottomColumn.nextElementSibling;

middleColumn.classList.replace("text-content","text-content-bottom-middle");

let productTitle = document.querySelector(".bottom-content .text-content-bottom-middle h4");
productTitle.textContent = siteContent["main-content"]["product-h4"];

let productText = document.querySelector(".bottom-content .text-content-bottom-middle p");
productText.textContent = siteContent["main-content"]["product-content"];

let rightColumn = middleColumn.nextElementSibling;

rightColumn.classList.replace("text-content", "text-content-bottom-right");

let visionTitle = document.querySelector(".bottom-content .text-content-bottom-right h4");
visionTitle.textContent = siteContent['main-content']['vision-h4'];

let visionText = document.querySelector('.bottom-content .text-content-bottom-right p');
visionText.textContent = siteContent['main-content']['vision-content'];

// contact
let contactTitle = document.querySelector('.contact h4');
contactTitle.textContent = siteContent['contact']['contact-h4'];

let contactAddy = document.querySelector('.contact p');
contactAddy.textContent = siteContent['contact']['address'];
contactAddy.innerHTML = "123 Way 456 Street <br> Somewhere, USA"

let contactNum = contactAddy.nextElementSibling;
contactNum.textContent = siteContent['contact']['phone'];

let contactEmail = contactNum.nextElementSibling;
contactEmail.textContent = siteContent['contact']['email'];

//footer

let footer = document.querySelector('footer p');
footer.textContent = siteContent['footer']['copyright']
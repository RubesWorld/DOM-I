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

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

//CTA
//CTA - h1
let ctaTitle = document.querySelector(".cta-text h1");
ctaTitle.textContent = siteContent["cta"]["h1"];

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

let servicesTitle = document.querySelector(".bottom-content .text-content h4");
servicesTitle.textContent = siteContent["main-content"]["services-h4"]

let servicesText = document.querySelector('.bottom-content .text-content p');
servicesText.textContent = siteContent["main-content"]["services-content"];


// footer 
let footerh4 = document.querySelector
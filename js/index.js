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

let navA = document.querySelectorAll('nav a');
navA.forEach((element, index) => {
  element.textContent = siteContent["nav"][`nav-item-${index + 1}`];
})

let h1 = document.querySelector('h1');
h1.textContent = siteContent["cta"]["h1"];

let ctaImg = document.querySelector('#cta-img');
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);
ctaImg.setAttribute('alt', 'Image of a code snippet.');

let button = document.querySelector('button');
button.textContent = siteContent["cta"]["button"];

let middleImg = document.querySelector("#middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);
middleImg.setAttribute('alt', 'Image of code snippets across the screen');

let textContentHeader = document.querySelectorAll('.text-content h4');
textContentHeader[0].textContent = 'Features';
textContentHeader[1].textContent = 'About';
textContentHeader[2].textContent = 'Services';
textContentHeader[3].textContent = 'Product';
textContentHeader[4].textContent = 'Vision';

let textContent = document.querySelectorAll('.text-content p');
textContent[0].textContent = siteContent['main-content']['features-content'];
textContent[1].textContent = siteContent['main-content']['about-content'];
textContent[2].textContent = siteContent['main-content']['services-content'];
textContent[3].textContent = siteContent['main-content']['product-content'];
textContent[4].textContent = siteContent['main-content']['vision-content'];

let footer = document.querySelector("footer");
footer.textContent = siteContent["footer"]["copyright"];

// Creating Child Elements for Nav and Changing Color

const navParent = document.querySelector('nav');

let appendChild1 = document.createElement('a');
appendChild1.textContent = 'Blog';

let appendChild2 = document.createElement('a');
appendChild2.textContent = 'Work'

navParent.appendChild(appendChild1);
navParent.appendChild(appendChild2);

const navLinks = document.querySelectorAll('nav a');

navLinks.forEach((element) => {
  element.style.color = 'green';
})
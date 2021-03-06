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

// Nav Section
let nav = document.querySelectorAll('.container nav a');
nav.forEach((x, i)=> {
 x.textContent = Object.values(siteContent.nav)[i];
 x.style.color = "green";
});

let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


//CTA Section
const ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);

const ctaHOne = document.querySelector('.cta h1');
ctaHOne.textContent = 'DOM Is Awesome';

const ctaButton = document.querySelector('.cta button');
ctaButton.textContent = 'Get Started';

//Main Content Section
const mainImg = document.querySelector('.middle-img');
mainImg.src = 'img/mid-page-accent.jpg';

const featuresH = document.querySelector('.top-content .text-content h4');
featuresH.textContent = "Features";

const featuresP = document.querySelector('.top-content .text-content p');
featuresP.textContent = (siteContent["main-content"]["features-content"]);

const aboutH = document.querySelectorAll('.top-content .text-content h4')[1];
aboutH.textContent = "About";

const aboutP = document.querySelectorAll ('.top-content .text-content p')[1];
aboutP.textContent = (siteContent["main-content"]["about-content"]);

const  servicesH = document.querySelector('.bottom-content .text-content h4');
servicesH.textContent = "Services";

const servicesP = document.querySelectorAll('.bottom-content .text-content p')[0];
servicesP.textContent = (siteContent["main-content"]["services-content"]);

const productH = document.querySelectorAll('.bottom-content .text-content h4')[1];
productH.textContent = "Product";

const productP = document.querySelectorAll('.bottom-content .text-content p')[1];
productP.textContent = (siteContent["main-content"]["product-content"]);

const visionH = document.querySelectorAll('.bottom-content .text-content h4')[2];
visionH.textContent = 'Vision';

const visionP = document.querySelectorAll('.bottom-content .text-content p')[2];
visionP.textContent = (siteContent["main-content"]["vision-content"]);

//Contact Section
document.querySelector('.contact h4').textContent = Object.values(siteContent.contact)[0];

const contactFirstP = document.querySelector('.contact p')
contactFirstP.textContent= `123 Way 456 Street Somewhere, USA`

document.querySelectorAll('.contact p')[1].textContent = Object.values(siteContent.contact)[2];

document.querySelectorAll('.contact p')[2].textContent =Object.values(siteContent.contact)[3];


//Footer
document.querySelector('footer p').textContent= Object.values(siteContent.footer);


//Append and Prepend

const newATag = document.createElement('a');
newATag.textContent = "Jobs";
const newerATag = document.createElement('a');
newerATag.textContent= "Welcome";
const navContent = document.querySelector('nav');
navContent.append(newATag);
navContent.prepend(newerATag);

//Stretch

const btn = document.createElement('button');
btn.innerHTML = "Click for Color";

let lastP =document.getElementsByTagName("body")[0];
lastP.appendChild(btn);


function random(number) {
  return Math.floor(Math.random()*(number+1));
}

btn.onclick = function() {
  var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.body.style.backgroundColor = rndCol;
}
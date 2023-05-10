let items = [
  {
    img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-1.jpeg",
    name: "Buttermilk Pancakes",
    price: "$15.99",
    description:
      "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
    tag: "breakfast",
  },
  {
    img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-7.jpeg",
    name: "Bacon Overflow",
    price: "$8.99",
    description:
      "carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird",
    tag: "breakfast",
  },
  {
    img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-4.jpeg",
    name: "Country Delight",
    price: "$20.99",
    description:
      "Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut,",
    tag: "breakfast",
  },
  {
    img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-2.jpeg",
    name: "Diner Double",
    price: "$13.99",
    description:
      "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats",
    tag: "lunch",
  },
  {
    img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-8.jpeg",
    name: "American Classic",
    price: "$12.99",
    description:
      "on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut",
    tag: "lunch",
  },
  {
    img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-5.jpeg",
    name: "Egg Attack",
    price: "$22.99",
    description:
      "franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up",
    tag: "lunch",
  },
  {
    img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-3.jpeg",
    name: "Godzilla Milkshake",
    price: "$6.99",
    description:
      "ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.",
    tag: "shakes",
  },
  {
    img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-9.jpeg",
    name: "Quarantine Buddy",
    price: "$16.99",
    description:
      "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.",
    tag: "shakes",
  },
  {
    img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-6.jpeg",
    name: "Oreo Dream",
    price: "$18.99",
    description:
      "Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday",
    tag: "shakes",
  },
  {
    img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-10.jpeg",
    name: "Steak Dinner",
    price: "$39.99",
    description:
      "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.",
    tag: "dinner",
  },
];
const sectionEl = document.getElementById("menu-items");
const brkfstBtnEl = document.getElementById("breakfast");
const lunchBtnEl = document.getElementById("lunch");
const shakesBtnEl = document.getElementById("shakes");
const dinnerBtnEl = document.getElementById("dinner");
const allBtnEl = document.getElementById("all");

//console.log(shakesBtnEl);

let Elements = [];
let lunchElements = [];
let shakesElements = [];
let dinnerElements = [];
let divEl, menuItem, imgEl, labelEl, spanEl, h5EL, pEL;

function displayElements(arrayOfElements) {
  sectionEl.innerHTML = "";
  breakfastElements = arrayOfElements.filter((obj) => {
    if (obj.tag == "breakfast") {
      return obj;
    }
  });
  lunchElements = arrayOfElements.filter((obj) => {
    if (obj.tag == "lunch") {
      return obj;
    }
  });
  shakesElements = arrayOfElements.filter((obj) => {
    if (obj.tag == "shakes") {
      return obj;
    }
  });
  dinnerElements = arrayOfElements.filter((obj) => {
    if (obj.tag == "dinner") {
      return obj;
    }
  });
  // allElements = items;
}

function elementCreation(objEl) {
  menuItem = document.createElement("article");
  divEl = document.createElement("div");
  imgEl = document.createElement("img");
  labelEl = document.createElement("label");
  spanEl = document.createElement("spanEl");
  h5EL = document.createElement("h5");
  pEL = document.createElement("p");
  menuItem.appendChild(divEl);
  menuItem.appendChild(imgEl);
  //menuItem.replaceChildren();
  menuItem.appendChild(labelEl);
  menuItem.appendChild(spanEl);
  menuItem.appendChild(h5EL);
  menuItem.appendChild(pEL);
  sectionEl.appendChild(menuItem);
  menuItem.id = "articleDiv";
  return (
    (imgEl.src = `${objEl.img}`),
    (imgEl.className = "images"),
    (labelEl.textContent = `${objEl.name}`),
    (spanEl.textContent = `${objEl.price}`),
    (h5EL.textContent = "........................"),
    (pEL.textContent = `${objEl.description}`)
  );
  //return labelEl.innerText;
}

allBtnEl.addEventListener("click", () => {
  //displayElements(items);
  items.forEach(elementCreation);
  // = [];
});

brkfstBtnEl.addEventListener("click", () => {
  //sectionEl.removeChild();
  //menuItemEl = document.getElementById("articleDiv");
  displayElements(items);
  //sectionEl.removeChild(menuItemEl);
  breakfastElements.forEach(elementCreation);
  breakfastElements = [];
});

lunchBtnEl.addEventListener("click", () => {
  displayElements(items);
  lunchElements.forEach(elementCreation);
  lunchElements = [];
});

shakesBtnEl.addEventListener("click", () => {
  displayElements(items);
  shakesElements.forEach(elementCreation);
  shakesElements = [];
});

dinnerBtnEl.addEventListener("click", () => {
  displayElements(items);
  dinnerElements.forEach(elementCreation);
  dinnerElements = [];
});

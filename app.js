const items = [
  {
    img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-1.jpeg",
    name: "Buttermilk Pancakes",
    price: "$15.99",
    description:
      "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
    tags: ["breakfast"],
  },
  {
    img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-7.jpeg",
    name: "Bacon Overflow",
    price: "$8.99",
    description:
      "carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird",
    tags: ["breakfast"],
  },
  {
    img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-4.jpeg",
    name: "Country Delight",
    price: "$20.99",
    description:
      "Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut,",
    tags: ["breakfast"],
  },
  {
    img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-2.jpeg",
    name: "Diner Double",
    price: "$13.99",
    description:
      "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats",
    tags: ["lunch"],
  },
  {
    img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-8.jpeg",
    name: "American Classic",
    price: "$12.99",
    description:
      "on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut",
    tags: ["lunch"],
  },
  {
    img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-5.jpeg",
    name: "Egg Attack",
    price: "$22.99",
    description:
      "franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up",
    tags: ["lunch"],
  },
  {
    img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-3.jpeg",
    name: "Godzilla Milkshake",
    price: "$6.99",
    description:
      "ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.",
    tags: ["shakes", "breakfast"],
  },
  {
    img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-9.jpeg",
    name: "Quarantine Buddy",
    price: "$16.99",
    description:
      "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.",
    tags: ["shakes"],
  },
  {
    img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-6.jpeg",
    name: "Oreo Dream",
    price: "$18.99",
    description:
      "Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday",
    tags: ["shakes"],
  },
  {
    img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-10.jpeg",
    name: "Steak Dinner",
    price: "$39.99",
    description:
      "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.",
    tags: ["dinner"],
  },
];

const rootEl = document.getElementById("menu-items");

const allBtnEl = document.getElementById("all");
const brkfstBtnEl = document.getElementById("breakfast");
const lunchBtnEl = document.getElementById("lunch");
const dinnerBtnEl = document.getElementById("dinner");
const shakesBtnEl = document.getElementById("shakes");

const filterItems = (items, tag) => {
  if (tag == "all") {
    return items;
  }

  return items.filter((item) => {
    return item.tags.includes(tag);
  });
};

const addMenuItem = (item) => {
  const menuItem = document.createElement("article");

  const imgEl = document.createElement("img");
  imgEl.src = item.img;
  imgEl.className = "images";

  const labelEl = document.createElement("label");
  labelEl.textContent = item.name;

  const spanEl = document.createElement("spanEl");
  spanEl.textContent = item.price;

  const h5EL = document.createElement("h5");
  h5EL.textContent = "........................";

  const pEL = document.createElement("p");
  pEL.textContent = item.description;

  menuItem.appendChild(imgEl);
  menuItem.appendChild(labelEl);
  menuItem.appendChild(spanEl);
  menuItem.appendChild(h5EL);
  menuItem.appendChild(pEL);

  rootEl.appendChild(menuItem);
};

const clearList = () => {
  rootEl.innerHTML = "";
};

const renderItems = (menuItems) => {
  menuItems.forEach(addMenuItem);
};

const onClickFilter = (tag) => {
  clearList();

  const filteredItems = filterItems(items, tag);

  renderItems(filteredItems);
};

allBtnEl.addEventListener("click", () => {
  onClickFilter("all");
});

brkfstBtnEl.addEventListener("click", () => {
  onClickFilter("breakfast");
});

lunchBtnEl.addEventListener("click", () => {
  onClickFilter("lunch");
});

shakesBtnEl.addEventListener("click", () => {
  onClickFilter("shakes");
});

dinnerBtnEl.addEventListener("click", () => {
  onClickFilter("dinner");
});

document.addEventListener("DOMContentLoaded", () => {
  onClickFilter("all");
});

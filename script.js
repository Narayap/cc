window.addEventListener("DOMContentLoaded", init);

const endpoint =
  "https://kaiak.dk/wordpress/wp-json/wp/v2/item?_embed";

function init(event) {
  getData();
}

async function getData() {
  let result = await fetch(endpoint);
  handleProductList(await result.json());
}

function handleProductList(data) {
  data.forEach(showProduct);
}

function showProduct(item) {
  console.log(item);

  //   grab the template
  const template = document.querySelector(".product_template").content;


  //   cloning the template
  const copy = template.cloneNode(true);

  // changing the...

  // product name
  copy.querySelector(".product_name").textContent = item.item_id;

  //   img

  copy
    .querySelector("img")
    .setAttribute(
      "src",
      item.picture["guid"]
    );

   // grab parent
   const parent = document.querySelector(".productlist_container");

   // append
   parent.appendChild(copy);
}
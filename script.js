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
}
  //   grab the template
//   const template = document.querySelector("#productCard").content;

//   //   cloning the template
//   const copy = template.cloneNode(true);

//   // changing the...

//   // brandname
//   copy.querySelector(".brandname2").textContent = bike.brand_name;

//   // productname
//   copy.querySelector(".productname").textContent = bike.product_name;

//   // price
//   copy.querySelector(".price").textContent = `$${bike.price}`;

//   // in_stock
//   copy.querySelector(".stock").textContent = bike.in_stock;


//   //   img

//   copy
//     .querySelector("img")
//     .setAttribute(
//       "src",
//       bike._embedded["wp:featuredmedia"][0].media_details.sizes.full
//         .source_url
//     );

//   // grab parent
//   const parent = document.querySelector(".productlist_container");

//   // append
//   parent.appendChild(copy);

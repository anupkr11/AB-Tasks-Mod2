const contents = document.createElement("div");

async function eve() {
  await axios
    .get("https://dummyjson.com/products")
    .then((res) => {
      console.log(res.data.products);
      displayCards(res.data.products);
    })
    .catch((err) => {
      console.log(err);
    });
}

function displayCards(data) {
    data.forEach((ele) => {
        let card = document.createElement("div");
        let img = document.createElement("img");
        let titl = document.createElement("h2");
        let desc = document.createElement("p");
        let price = document.createElement("p");
        card.setAttribute("class", "card");
        img.src = ele.thumbnail;
        titl.innerText = ele.title;
        desc.innerText = ele.description;
        price.innerText = `Price: $${ele.price}`;
        card.appendChild(img);
        card.appendChild(titl);
        card.appendChild(desc);
        card.appendChild(price);
        contents.appendChild(card);
        document.getElementById("content").appendChild(contents);
    });
}

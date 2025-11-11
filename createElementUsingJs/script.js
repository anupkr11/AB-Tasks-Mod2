const container1 = document.querySelector("#listContainer");

const ul = document.createElement("ul");

for (let i = 1; i <= 10; i++) {
  const li = document.createElement("li");  
  li.textContent = `Item ${i}`;             
  ul.appendChild(li);             
}

container1.appendChild(ul);




const container2 = document.querySelector("#container2");
const newDiv = document.createElement("div");

const image = document.createElement("img");
image.src = "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg"; 
image.alt = "Image";

const heading = document.createElement("h3");
heading.textContent = "This is Heading";

const paragraph = document.createElement("p");
paragraph.textContent = "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

newDiv.appendChild(image);
newDiv.appendChild(heading);
newDiv.appendChild(paragraph);

container2.appendChild(newDiv);


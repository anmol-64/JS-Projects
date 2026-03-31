const fruits = [
  "Apple",
  "Banana",
  "Mango",
  "Grapes",
  "Avocado",
  "Orange",
  "Pineapple",
  "Strawberry",
];

const searchInput = document.getElementById("search");
const list = document.getElementById("list");

function displayItems(items) {
  list.innerHTML = "";

  if (items.length === 0) {
    list.innerHTML = "<li>No results found</li>";
    return;
  }

  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  });
}

displayItems(fruits);

searchInput.addEventListener("input", () => {
  const searchValue = searchInput.value.toLowerCase();

  const filtered = fruits.filter((fruit) =>
    fruit.toLowerCase().includes(searchValue),
  );

  displayItems(filtered);
});

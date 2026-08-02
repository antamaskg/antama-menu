fetch("menu.json")
  .then(response => response.json())
  .then(menu => {

    const products = document.getElementById("products");

    menu["Ορεκτικά"].forEach(item => {

      products.innerHTML += `
        <div class="card">
          <img src="${item.image}" alt="${item.name}">
          <div class="card-body">
            <h3>${item.name}</h3>
            <span class="price">${item.price}</span>
          </div>
        </div>
      `;

    });

  });

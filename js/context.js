fetch("../json/context.json")
  .then((res) => res.json())
  .then((data) => {
    const container = document.getElementById("contextContainer");

    data.context.forEach((item, index) => {
      const col = document.createElement("div");
      col.className = "col-12 col-md-6 mb-4 d-flex";

      const peekPreview = item.peek
        ? item.peek.slice(0, 250) + (item.peek.length > 250 ? "..." : "")
        : "";

      col.innerHTML = `
        <a href="./contextcard.html?id=${index}" style="text-decoration: none; color: inherit; flex: 1;">
          <div class="card shadow-sm h-100 d-flex flex-column">

            <img src="${item.image}" class="card-img-top"
                 style="height: 100%; aspect-ratio: 16/9; object-fit: cover;" />

            <div class="card-body d-flex flex-column">
              <h5 class="card-title" style="font-size: 1.5rem; font-weight: 700;">${item.title}</h5>
              <p class="text-muted">${item.date}</p>

              <p class="card-text" style="flex-grow: 1;">${peekPreview}</p>
            </div>

          </div>
        </a>
      `;

      container.appendChild(col);
    });
  });

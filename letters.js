fetch("./letters.json")
  .then((response) => response.json())
  .then((data) => {
    const container = document.getElementById("lettersContainer");

    data.letters.forEach((letter, index) => {
      const cardCol = document.createElement("div");
      cardCol.className = "col-12 col-md-6";
      const peekPreview = letter.peek
        ? letter.peek.slice(0, 300) + (letter.peek.length > 300 ? "..." : "")
        : "";

      cardCol.innerHTML = `
        <a href="./lettercard.html?id=${index}" style="text-decoration: none; color: inherit;">
          <div class="card shadow-sm article-card" h-25">
            <img 
              src="${
                letter.image ||
                "https://via.placeholder.com/400x250?text=No+Image"
              }"
              class="card-img-top"
              alt="${letter.name}"
              style="width: 100%; height: 60%; object-fit: cover;"
            />
            <div class="card-body">
              <h5 class="card-title" style="font-size: 1.5rem;">${
                letter.name
              }</h5>
              <p class="card-text text-muted">By ${letter.author} • ${letter.date}</p>
              <p class="card-text">${peekPreview}</p>
            </div>
          </div>
        </a>
      `;

      container.appendChild(cardCol);
    });
  });

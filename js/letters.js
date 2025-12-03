fetch("../json/letters.json")
  .then((response) => response.json())
  .then((data) => {
    const container = document.getElementById("lettersContainer");

    data.letters.forEach((letter, index) => {
      const cardCol = document.createElement("div");
      cardCol.className = "col-12 col-md-6 mb-4";

      const peekPreview = letter.peek
        ? letter.peek.slice(0, 300) + (letter.peek.length > 300 ? "..." : "")
        : "";

      cardCol.innerHTML = `
        <a href="../html/lettercard.html?id=${index}" style="text-decoration: none; color: inherit;">
          <div class="card shadow-sm article-card h-100 d-flex flex-column">
            <div class="image-wrapper" style="width: 100%;">
              <img 
                src="${
                  letter.image ||
                  "https://via.placeholder.com/400x250?text=No+Image"
                }"
                class="card-img-top"
                alt="${letter.name}"
                style="aspect-ratio: 16/9; object-fit: cover; height: 100%;"
              />
            </div>

            <div class="card-body" style="padding-bottom: 1.5rem; flex-grow: 1;">
              <h5 class="card-title" style="font-size: 1.5rem;">${
                letter.name
              }</h5>
              <p class="card-text text-muted">By ${letter.author} • ${
        letter.date
      }</p>
              <p class="card-text">${peekPreview}</p>
            </div>

          </div>
        </a>
      `;

      container.appendChild(cardCol);
    });
  });

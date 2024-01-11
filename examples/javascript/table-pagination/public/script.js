document.addEventListener("DOMContentLoaded", function () {
  const tableBody = document
    .getElementById("dataTable")
    .getElementsByTagName("tbody")[0];
  const paginationDiv = document.getElementById("pagination");

  const data = Array.from({ length: 100 }, (_, i) => [
    `Data ${i + 1}-1`,
    `Data ${i + 1}-2`,
    `Data ${i + 1}-3`,
  ]);
  const rowsPerPage = 10;
  let currentPage = 1;

  function renderTable(page) {
    tableBody.innerHTML = "";
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    const pageData = data.slice(start, end);

    pageData.forEach((rowData) => {
      const row = tableBody.insertRow();
      rowData.forEach((cellData) => {
        const cell = row.insertCell();
        cell.textContent = cellData;
      });
    });
  }

  function renderPagination() {
    paginationDiv.innerHTML = "";
    const pageCount = Math.ceil(data.length / rowsPerPage);
    for (let i = 1; i <= pageCount; i++) {
      const btn = document.createElement("button");
      btn.textContent = i;
      btn.className = "pagination-btn";
      btn.addEventListener("click", () => {
        currentPage = i;
        renderTable(currentPage);
        updatePaginationButtons();
      });
      paginationDiv.appendChild(btn);
    }
    updatePaginationButtons();
  }

  function updatePaginationButtons() {
    const buttons = paginationDiv.getElementsByClassName("pagination-btn");
    for (let i = 0; i < buttons.length; i++) {
      if (parseInt(buttons[i].textContent) === currentPage) {
        buttons[i].classList.add("current-page");
      } else {
        buttons[i].classList.remove("current-page");
      }
    }
  }

  renderTable(currentPage);
  renderPagination();
});

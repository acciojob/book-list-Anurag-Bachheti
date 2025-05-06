document.getElementById("submit").addEventListener("click", function (e) {
  e.preventDefault(); // Prevent form reload

  let title = document.getElementById("title").value.trim();
  let author = document.getElementById("author").value.trim();
  let isbn = document.getElementById("isbn").value.trim();

  if (!title || !author || !isbn) {
    alert("Please fill all fields.");
    return;
  }
	
	let table = document.getElementById("book-list");

	let newRow = document.createElement("tr");

	newRow.innerHTML = `
	<td>${title}</td>
	<td>${author}</td>
	<td>${isbn}</td>
	<td><button class="delete">Clear</button></td>
	`;
	  table.appendChild(newRow);

	document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("isbn").value = "";
});

document.getElementById("book-list").addEventListener("click", function (e) {
  if (e.target.classList.contains("delete")) {
    let row = e.target.closest("tr");
    row.remove();
  }
});
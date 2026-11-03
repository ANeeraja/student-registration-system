const form = document.getElementById("studentForm");
const table = document.getElementById("studentTable");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const course = document.getElementById("course").value;

    const row = `
        <tr>
            <td>${name}</td>
            <td>${email}</td>
            <td>${course}</td>
        </tr>
    `;

    table.innerHTML += row;

    form.reset();
});
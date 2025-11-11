const form = document.getElementById("userForm");
const output = document.getElementById("output");


form.addEventListener("submit", function(e) {
    e.preventDefault();
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const email = document.getElementById("email").value;
  const salary = document.getElementById("salary").value;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  isNaN(salary) || !emailRegex.test(email) ? alert("please enter valid input") :output.innerHTML = `
    <h3>User Data:</h3>
    <p>Name:${name}</p>
    <p>Age:${age}</p>
    <p>Email:${email}</p>
    <p>Salary:₹${salary}</p>
  `;

});

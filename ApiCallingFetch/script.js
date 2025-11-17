document.getElementById("registerForm").addEventListener("submit", async function (e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;

    const data = {
        username: username,
        email: email
    };

    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        const result = await res.json();
        console.log("Server Response:", result);

        document.getElementById("message").textContent = "Account Registered";

    } catch (error) {
        console.error(error);
        document.getElementById("message").textContent = "Wrong";
    }
});

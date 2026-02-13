document.getElementById("donorForm").addEventListener("submit", function(e){
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", document.getElementById("name").value);
    formData.append("email", document.getElementById("email").value);
    formData.append("phone", document.getElementById("phone").value);
    formData.append("organ", document.getElementById("organ").value);
    formData.append("message", document.getElementById("message").value);

    fetch("register.php", {
        method: "POST",
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        alert(data);
        document.getElementById("donorForm").reset();
    });
});

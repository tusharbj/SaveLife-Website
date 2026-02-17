// Mobile Menu Toggle
const menu = document.getElementById("mobile-menu");
const navList = document.querySelector(".nav-list");


menu.addEventListener("click", () => {
    navList.classList.toggle("active");
});

// Form Submission
document.getElementById("donorForm").addEventListener("submit", function(e){
    e.preventDefault();

    const formData = new FormData(this);

    fetch("register.php", {
        method: "POST",
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        alert(data);
        this.reset();
    })
    .catch(error => {
        alert("Something went wrong. Please try again.");
    });
});




document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("login-form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        window.location.href = "login.html";
    });

    const links = document.querySelectorAll("a.button");
    links.forEach(link => {
        link.addEventListener("click", function (e) {
            const href = link.getAttribute("href");
            if (href && href !== "#") {
                window.location.href = href;
            }
        });
    });
});

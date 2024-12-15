document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();


        const usuario = {
            email: document.getElementById("recSenha").value, 
        };

       
        enviarEmail(usuario);
    });

    function enviarEmail(usuario) {
        fetch("URL_DO_SEU_BACKEND", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(usuario),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(
                        "Erro na resposta do servidor: " + response.statusText
                    );
                }
                return response.json();
            })
            .then((data) => {
                alert("Email enviado com sucesso!");
                console.log("Resposta do backend:", data);
            })
            .catch((error) => {
                console.error("Erro ao enviar os dados:", error);
                alert("Ocorreu um erro ao tentar enviar o email.");
            });
    }
});

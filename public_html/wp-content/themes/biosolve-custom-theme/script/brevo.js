
    document.getElementById("contact-form").addEventListener("submit", async function (event) {
    event.preventDefault();

    let formData = {
        "email": document.getElementById("email").value,
        "attributes": {
            "NOME": document.getElementById("firstName").value,
            "SOBRENOME": document.getElementById("lastName").value,
            "SMS": document.getElementById("phone").value,
            "MENSAGEM": document.getElementById("message").value
        },
        "listIds": [6], // Substitua 6 pelo ID correto da sua lista
        "updateEnabled": true // Atualiza o contato se já existir
    };

    let responseMessage = document.getElementById("response-message");

    try {
        let response = await fetch("https://api.brevo.com/v3/contacts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "api-key":"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"
            },
            body: JSON.stringify(formData)
        });

        let result = await response.json();

        if (response.ok) {
            responseMessage.innerText = "Mensagem enviada com sucesso!";
            responseMessage.style.color = "green";
        } else {
            responseMessage.innerText = "Erro ao conectar com o servidor. " + (result.message || "");
            responseMessage.style.color = "red";
        }
    } catch (error) {
        responseMessage.innerText = "Erro ao conectar com o servidor.";
        responseMessage.style.color = "red";
    }
});


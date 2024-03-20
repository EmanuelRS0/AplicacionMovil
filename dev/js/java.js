document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("message-form");
    const messageInput = document.getElementById("message");
    const chatMessages = document.getElementById("chat-messages");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const messageContent = messageInput.value.trim();
        if (messageContent === "") return;

        appendMessage("sender", messageContent);
        messageInput.value = "";
    });

    function appendMessage(senderType, messageContent) {
        const messageDiv = document.createElement("div");
        messageDiv.classList.add("message", senderType);

        const messageContentSpan = document.createElement("span");
        messageContentSpan.classList.add("message-content");
        messageContentSpan.textContent = messageContent;

        messageDiv.appendChild(messageContentSpan);
        chatMessages.appendChild(messageDiv);

        // Auto-scroll to the bottom of chat messages
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
});

let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function mostrarSlide() {
    slides.forEach(slide => slide.style.display = "none");
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex - 1].style.display = "block";
    setTimeout(mostrarSlide, 2000); // Cambiar imagen cada 2 segundos (2000 milisegundos)
}

mostrarSlide();

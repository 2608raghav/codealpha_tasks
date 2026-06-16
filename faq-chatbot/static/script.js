async function sendMessage() {

    const input =
        document.getElementById("user-input");

    const message = input.value;

    if(message.trim()===""){
        return;
    }

    const chatBox =
        document.getElementById("chat-box");

    chatBox.innerHTML +=
        `<div class="user">
            <b>You:</b> ${message}
        </div>`;

    const response = await fetch("/chat", {

        method:"POST",

        headers:{
            "Content-Type":"application/json"
        },

        body:JSON.stringify({
            message:message
        })
    });

    const data = await response.json();

    chatBox.innerHTML +=
        `<div class="bot">
            <b>Bot:</b> ${data.response}
        </div>`;

    input.value = "";

    chatBox.scrollTop =
        chatBox.scrollHeight;
}
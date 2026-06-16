const translateBtn = document.getElementById("translateBtn");
const copyBtn = document.getElementById("copyBtn");
const speakBtn = document.getElementById("speakBtn");

translateBtn.addEventListener("click", async () => {

    const text = document.getElementById("inputText").value;
    const source = document.getElementById("sourceLanguage").value;
    const target = document.getElementById("targetLanguage").value;

    if (!text.trim()) {
        alert("Please enter text");
        return;
    }

    try {

        const response = await fetch("/translate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                text,
                source,
                target
            })
        });

        const data = await response.json();

        document.getElementById("translatedText").value =
            data.translatedText;

    } catch (error) {
        console.error(error);
        alert("Translation failed");
    }

});

copyBtn.addEventListener("click", () => {

    const translatedText =
        document.getElementById("translatedText");

    translatedText.select();

    navigator.clipboard.writeText(
        translatedText.value
    );

    alert("Copied!");
});

speakBtn.addEventListener("click", () => {

    const text =
        document.getElementById("translatedText").value;

    if (!text) return;

    const speech =
        new SpeechSynthesisUtterance(text);

    speechSynthesis.speak(speech);
});
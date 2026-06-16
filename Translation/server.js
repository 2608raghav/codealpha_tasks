const express = require("express");
const cors = require("cors");
const path = require("path");
const translate = require("@vitalets/google-translate-api").translate;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.post("/translate", async (req, res) => {
    try {
        const { text, source, target } = req.body;

        const result = await translate(text, {
            from: source,
            to: target
        });

        res.json({
            translatedText: result.text
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: "Translation failed"
        });
    }
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
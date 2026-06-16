# FAQ Chatbot using NLP

## Overview

The FAQ Chatbot is an NLP-based chatbot that answers user queries by matching them with a predefined FAQ dataset. The chatbot uses TF-IDF vectorization and Cosine Similarity to find the most relevant answer.

## Features

* Natural language question matching
* FAQ dataset support
* TF-IDF vectorization
* Cosine similarity-based answer retrieval
* Interactive chatbot interface
* Fast response generation

## Technologies Used

### Frontend

* HTML
* CSS
* JavaScript

### Backend

* Python
* Flask

### NLP Libraries

* Scikit-learn
* NLTK

## Project Structure

faq-chatbot/
│
├── static/
│ ├── style.css
│ └── script.js
│
├── templates/
│ └── index.html
│
├── faq_data.json
├── chatbot.py
├── app.py
├── requirements.txt
└── README.md

## Installation

1. Clone the repository.

2. Install dependencies:

```bash
pip install -r requirements.txt
```

3. Run the application:

```bash
python app.py
```

4. Open the browser:

```text
http://127.0.0.1:5000
```

## Working

1. User enters a question.
2. The question is converted into TF-IDF vectors.
3. Cosine similarity is calculated against FAQ questions.
4. The most relevant FAQ is identified.
5. The corresponding answer is displayed to the user.

## NLP Techniques Used

* Text preprocessing
* TF-IDF Vectorization
* Cosine Similarity
* Intent Matching

## Future Enhancements

* Database integration
* Voice-based chatbot
* Multi-language support
* AI-powered responses using LLMs
* User authentication

## Author

Raghav Gupta

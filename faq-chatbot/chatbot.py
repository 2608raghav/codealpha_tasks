import json

from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

with open("faq_data.json", "r") as file:
    faqs = json.load(file)

questions = [faq["question"] for faq in faqs]

vectorizer = TfidfVectorizer()

question_vectors = vectorizer.fit_transform(questions)


def get_answer(user_question):

    user_vector = vectorizer.transform([user_question])

    similarity = cosine_similarity(
        user_vector,
        question_vectors
    )

    best_match = similarity.argmax()

    score = similarity[0][best_match]

    if score < 0.3:
        return "Sorry, I couldn't find a relevant answer."

    return faqs[best_match]["answer"]
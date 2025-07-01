# sentiment-analysis-app-of-text-message
The Sentiment Analysis App is a web application designed to evaluate the emotional tone of user-generated text using Natural Language Processing (NLP) techniques. It classifies sentiments as positive, negative, or neutral, providing valuable insights into user opinions and feelings.  
# VibeVerdict - Sentiment Text Analyzer

## 🧠 About the Project

**VibeVerdict** is a lightweight web application that leverages **Natural Language Processing (NLP)** to analyze the emotional tone of text input. It identifies whether a user's sentiment is **positive**, **negative**, or **neutral**, providing quick insight into written expressions.

## 🔍 Features

- Analyze sentiment of user-provided text in real-time
- Classifies sentiment as: 👍 Positive | 😐 Neutral | 👎 Negative
- Built using:
  - Python (Flask)
  - JavaScript (Client-side logic)
  - HTML/CSS (User interface)
  - NLP techniques and pre-trained models

## 🚀 How It Works

1. User submits text via the web interface.
2. The Python backend (Flask) processes the text.
3. NLP model evaluates sentiment.
4. The result is sent back and displayed dynamically using JavaScript.

## 📁 Project Structure

📦 VibeVerdict/
├── app.py # Flask backend for sentiment analysis
├── script.js # Handles client-side interaction
├── style.css # Styles for the frontend
└── README.md # Project documentation

markdown
Copy
Edit

## 🛠️ Technologies Used

- **Python** (Flask)
- **Natural Language Toolkit (NLTK)** or similar NLP library
- **JavaScript** (AJAX/Fetch API)
- **HTML5/CSS3**

## 💡 Usage

1. Clone the repo:
   ```bash
   git clone https://github.com/your-username/VibeVerdict.git
   cd VibeVerdict
Install dependencies:

bash
Copy
Edit
pip install flask nltk
Run the app:

bash
Copy
Edit
python app.py
Open your browser at http://localhost:5000 and start analyzing!

📌 Future Enhancements
Add support for multilingual text

Visualize sentiment score over time

Store and compare user entries

📄 License
This project is open-source and available under the MIT License.

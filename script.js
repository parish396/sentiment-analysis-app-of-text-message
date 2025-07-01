function analyzeSentiment() {
    const inputText = document.getElementById('inputText').value;

    fetch('http://localhost:5000/analyze', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text: inputText })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('result').textContent = 'Sentiment: ' + data.sentiment;
    })
    .catch(error => {
        document.getElementById('result').textContent = 'Error: ' + error.message;
    });
}

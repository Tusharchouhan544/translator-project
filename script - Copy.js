async function translateText() {
    const inputText = document.getElementById('inputText').value.trim();
    const sourceLang = document.getElementById('sourceLang').value;
    const targetLang = document.getElementById('targetLang').value;
  
    if (!inputText) {
      document.getElementById('outputText').innerText = "Please enter text to translate.";
      return;
    }
  
    const encodedText = encodeURIComponent(inputText);
    const apiUrl = `https://lingva.ml/api/v1/${sourceLang}/${targetLang}/${encodedText}`;
  
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
  
      if (data.translation) {
        document.getElementById('outputText').innerText = data.translation;
      } else {
        document.getElementById('outputText').innerText = "Translation failed.";
      }
    } catch (error) {
      console.error("API error:", error);
      document.getElementById('outputText').innerText = "Error during translation. Try again.";
    }
  }
  
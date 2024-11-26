// Hash map from the image
const hashMap = {
    'A': 'ㄱ', 'B': '乡', 'C': 'デ', 'D': '丁',
    'E': '田', 'F': 'ム', 'G': '且', 'H': '卩',
    'I': '亥', 'J': '彡', 'K': '亓', 'L': 'チ',
    'M': 'ヌ', 'N': '又', 'O': 'そ', 'P': '乚',
    'Q': '勹', 'R': '弓', 'S': '己', 'T': '卜',
    'U': '尸', 'V': 'イ', 'W': '廾', 'X': '〆',
    'Y': '卅', 'Z': '歹'
};

const reverseHashMap = Object.fromEntries(Object.entries(hashMap).map(([key, value]) => [value, key]));

// Dark Mode Toggle
const darkModeButton = document.getElementById("dark-mode-btn");
darkModeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    darkModeButton.textContent = document.body.classList.contains("dark-mode")
        ? "Dark Mode"
        : "Light Mode";
});

// Encryption
document.getElementById("encrypt-btn").addEventListener("click", () => {
    const inputText = document.getElementById("input-text").value.toUpperCase();
    const encryptedText = [...inputText].map(char => hashMap[char] || char).join(" ");
    document.getElementById("output-text").value = encryptedText;
});

// Decryption
document.getElementById("decrypt-btn").addEventListener("click", () => {
    const inputText = document.getElementById("input-text").value.split(" ");
    const decryptedText = inputText.map(word => reverseHashMap[word.trim()] || word).join("");
    document.getElementById("output-text").value = decryptedText;
});

// Voice Input
document.getElementById("voice-btn").addEventListener("click", () => {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = "en-US";
    recognition.onresult = (event) => {
        const spokenText = event.results[0][0].transcript.toUpperCase();
        document.getElementById("input-text").value = spokenText;
    };
    recognition.start();
});

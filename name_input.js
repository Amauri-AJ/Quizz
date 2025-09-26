function greet() {
    const name = document.getElementById('nameInput').value.trim();
    const greetingDiv = document.getElementById('greeting');

    if (name === "") {
        greetingDiv.textContent = "Please enter your name.";
        greetingDiv.style.color = "#ffcccc";
    } else {
        greetingDiv.textContent = `Hello, ${name}! Nice to meet you!`;
        greetingDiv.style.color = "#ffffff";
    }
}

function showMessage() {
    const messageElement = document.getElementById('dogGif');
    messageElement.hidden = true;
}

function yes() {
    // Inhalt des fullscreen Divs leeren, aber den Hintergrund beibehalten
    const fullscreenElement = document.querySelector('.fullscreen');
    fullscreenElement.innerHTML = ''; // Entfernt nur den Inhalt der fullscreen Div

    // Neues GIF hinzufügen
    const newGif = document.createElement('img');
    newGif.src = 'cat-jumping.gif'; // Pfad zum neuen GIF
    newGif.className = 'catGif'; // Klasse für Styling

    const newText = document.createElement('h1');
    newText.textContent = "Yuppieee";

    const newComment = document.createElement('h2');
    newComment.textContent = "Freu michhh";

    // Neues GIF ins fullscreen Div einfügen
    fullscreenElement.appendChild(newGif);
    fullscreenElement.appendChild(newText);
    fullscreenElement.appendChild(newComment);


}

function moveButton() {
    // Liste der möglichen Zielpositionen
    const zielOrte = ['zielOrt1', 'zielOrt2'];

    // Zufällige Auswahl eines Zielorts
    const randomIndex = Math.floor(Math.random() * zielOrte.length);
    const targetId = zielOrte[randomIndex];

    // Zielort-Element holen
    const target = document.getElementById(targetId);

    // Button holen
    const button = document.getElementById('moveButton');

    // Berechne die zufällige Position innerhalb des Zielorts
    const targetRect = target.getBoundingClientRect();

    // Berechne eine zufällige Position innerhalb des Zielorts
    const randomX = targetRect.left + Math.random() * targetRect.width - button.offsetWidth;
    const randomY = targetRect.top + Math.random() * targetRect.height - button.offsetHeight;

    // Setze die Position des Buttons auf die zufällige Position
    button.style.position = 'absolute';
    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
}

function no() {
    
}
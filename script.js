// Récupère le dictionnaire depuis le Local Storage ou initialise un dictionnaire vide avec quelques mots par défaut
let knownWords = JSON.parse(localStorage.getItem('zlazekDictionary')) || {
    "bonjour": "zlazek-bon",
    "chat": "zlazek-chaton",
    "maison": "zlazek-domu"
    // Ajoute ici d'autres mots par défaut si nécessaire
};

// Fonction pour sauvegarder le dictionnaire dans le Local Storage
function saveDictionary() {
    localStorage.setItem('zlazekDictionary', JSON.stringify(knownWords));
}

document.getElementById('translateButton').addEventListener('click', function () {
    const inputWord = document.getElementById('inputWord').value.trim().toLowerCase();
    const resultMessage = document.getElementById('resultMessage');

    if (inputWord === "") {
        // 3e situation : Pas de mot entré
        resultMessage.textContent = "Entrez un mot pour le traduire en Zlazek.";
        resultMessage.style.color = "red";
    } else if (knownWords[inputWord]) {
        // 2e situation : Le mot est connu
        resultMessage.textContent = `Traduction : ${knownWords[inputWord]}`;
        resultMessage.style.color = "green";
    } else {
        // 1er situation : Le mot est inconnu
        const newWord = prompt("Mot inconnu. Entrez la traduction du mot :");
        if (newWord) {
            knownWords[inputWord] = newWord; // Ajoute le nouveau mot et sa traduction
            saveDictionary(); // Sauvegarde le dictionnaire mis à jour dans le Local Storage
            resultMessage.textContent = `Nouveau mot ajouté ! Traduction : ${newWord}`;
            resultMessage.style.color = "blue";
        } else {
            resultMessage.textContent = "Aucune traduction ajoutée.";
            resultMessage.style.color = "orange";
        }
    }
});

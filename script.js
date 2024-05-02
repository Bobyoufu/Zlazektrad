// Définition du dictionnaire avec quelques traductions
let dictionary = {
    "bonjour": "gzu",
};

// Fonction pour traduire le texte
function translate() {
    // Récupération du texte entré par l'utilisateur
    let inputText = document.getElementById("inputText").value.toLowerCase();
    // Division du texte en mots individuels
    let words = inputText.split(" ");
    let outputText = "";

    // Parcours des mots dans le texte d'entrée
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        // Vérifie si le mot est présent dans le dictionnaire
        if (dictionary.hasOwnProperty(word)) {
            outputText += dictionary[word] + " "; // Ajoute la traduction au texte de sortie
        } else {
            outputText += "Traduction ? "; // Si le mot n'est pas dans le dictionnaire, demande une traduction
        }
    }

    // Affichage du texte traduit
    document.getElementById("outputText").innerText = outputText;
}

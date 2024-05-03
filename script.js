// Définition du dictionnaire avec quelques traductions
let dictionary = {
    "bonjour": "gzu",
};

// Fonction pour traduire le texte
function traduire() {
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
            // Si le mot n'est pas dans le dictionnaire, demande une traduction à l'utilisateur
            let newTranslation = prompt("Traduction pour '" + word + "' ?");
            if (newTranslation !== null && newTranslation !== "") {
                dictionary[word] = newTranslation; // Ajoute le mot et sa traduction au dictionnaire
                outputText += newTranslation + " ";
            } else {
                outputText += "Traduction ? ";
            }
        }
    }

    // Affichage du texte traduit
    document.getElementById("outputText").innerText = outputText;
}

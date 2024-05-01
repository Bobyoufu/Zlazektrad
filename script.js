// Définition du dictionnaire avec quelques traductions
let dictionary = {
    "bonjour": "hello",
    "au revoir": "goodbye"
};

// Fonction pour traduire le texte
function translate() {
    // Récupération du texte entré par l'utilisateur
    let inputText = document.getElementById("inputText").value.toLowerCase();
    // Division du texte en mots individuels
    let words = inputText.split(" ");
    let outputText = "";

    // Pour chaque mot dans le texte
    for (let word of words) {
        // Vérifie si le mot est dans le dictionnaire
        if (dictionary.hasOwnProperty(word)) {
            // Si le mot est dans le dictionnaire, ajoute sa traduction à la sortie
            outputText += dictionary[word] + " ";
        } else {
            // Si le mot n'est pas dans le dictionnaire, demande une traduction à l'utilisateur
            let translation = prompt(`Traduction de '${word}' :`);
            // Ajoute le mot et sa traduction au dictionnaire
            dictionary[word] = translation;
            // Ajoute la traduction (ou le mot original si aucune traduction n'est fournie) à la sortie
            outputText += (translation || word) + " ";
        }
    }

    // Affichage du texte traduit
    document.getElementById("outputText").textContent = outputText;
}

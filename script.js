// Définition du dictionnaire vide
let dictionary = {};

// Code JavaScript pour la traduction
function traduire() {
    let inputText = document.getElementById("inputText").value.toLowerCase();
    let words = inputText.split(" ");
    let outputText = "";

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        if (dictionary.hasOwnProperty(word)) {
            outputText += dictionary[word] + " ";
        } else {
            let newTranslation = prompt("Traduction pour '" + word + "' ?");
            if (newTranslation !== null && newTranslation !== "") {
                dictionary[word] = newTranslation;
                outputText += newTranslation + " ";
                // Mettre à jour le dictionnaire sur GitHub
                mettreAJourDictionnaireGitHub(word, newTranslation);
            } else {
                outputText += "Traduction ? ";
            }
        }
    }

    document.getElementById("outputText").innerText = outputText;
}

// Fonction pour mettre à jour le dictionnaire sur GitHub
function mettreAJourDictionnaireGitHub(mot, traduction) {
    // Définir l'URL de votre fichier texte sur GitHub
    let urlFichierTexte = "https://raw.githubusercontent.com/Bobyoufu/Zlazektrad/main/dictionary.txt";

    // Récupérer le contenu actuel du fichier texte
    fetch(urlFichierTexte)
    .then(response => response.text())
    .then(data => {
        // Ajouter la nouvelle traduction au contenu existant
        let nouveauContenu = data + "\n" + mot + "=" + traduction;

        // Envoyer une requête POST pour mettre à jour le fichier texte sur GitHub
        fetch(urlFichierTexte, {
            method: 'PUT',
            body: nouveauContenu,
            headers: {
                'Content-Type': 'text/plain',
            }
        });
    });
}

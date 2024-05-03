let dictionary; // Déclaration de la variable dictionary pour stocker les traductions

// Charger le dictionnaire depuis le fichier JSON au démarrage de la page
fetch('dictionary.json')
    .then(response => response.json())
    .then(data => {
        dictionary = data; // Stocker les données du JSON dans la variable dictionary
    });

// Fonction pour traduire le texte
function traduire() {
    let inputText = document.getElementById("inputText").value.toLowerCase();
    let words = inputText.split(" ");
    let outputText = "";

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        if (dictionary.hasOwnProperty(word)) {
            outputText += dictionary[word] + " ";
        } else {
            outputText += "Traduction ? ";
        }
    }

    document.getElementById("outputText").innerText = outputText;
}

// Fonction pour ajouter une nouvelle traduction et mettre à jour le fichier JSON
function ajouterTraduction(mot, traduction) {
    dictionary[mot] = traduction; // Ajouter la nouvelle traduction au dictionnaire en mémoire
    // Mettre à jour le fichier JSON avec les nouvelles données
    fetch('dictionary.json', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(dictionary),
    });
}

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
        if (word in dictionary) { // Utilisation de l'opérateur "in" pour vérifier si le mot est dans le dictionnaire
            outputText += dictionary[word] + " ";
        } else {
            // Afficher le champ de texte et le bouton d'ajout
            document.getElementById("nouvelleTraduction").style.display = "block";
            document.getElementById("boutonAjouter").style.display = "block";
            return; // Arrêter la fonction ici si la traduction est inconnue
        }
    }

    document.getElementById("outputText").innerText = outputText;
}

// Fonction pour ajouter une nouvelle traduction et mettre à jour le fichier JSON
function ajouterTraduction() {
    let nouveauMot = document.getElementById("inputText").value.toLowerCase();
    let nouvelleTraduction = document.getElementById("nouvelleTraduction").value;

    // Ajouter la nouvelle traduction au dictionnaire en mémoire
    dictionary[nouveauMot] = nouvelleTraduction;

    // Mettre à jour le fichier JSON avec les nouvelles données
    fetch('dictionary.json', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(dictionary),
    });

    // Cacher le champ de texte et le bouton d'ajout
    document.getElementById("nouvelleTraduction").style.display = "none";
    document.getElementById("boutonAjouter").style.display = "none";

    // Traduire à nouveau le texte avec la nouvelle traduction ajoutée
    traduire();
}


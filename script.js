// Vérifie s'il existe déjà des traductions dans localStorage, sinon en crée une
let translations = JSON.parse(localStorage.getItem('zlazekTranslations')) || {};

// Fonction pour afficher la traduction ou demander une nouvelle traduction
document.getElementById('translateBtn').addEventListener('click', function () {
    const word = document.getElementById('wordInput').value.trim().toLowerCase();
    
    if (word === "") {
        document.getElementById('translationOutput').innerText = "Entrez un mot à traduire.";
        document.getElementById('newWordSection').style.display = "none";
        return;
    }

    if (translations[word]) {
        // Si le mot est déjà dans la base, affiche la traduction
        document.getElementById('translationOutput').innerText = `Traduction: ${translations[word]}`;
        document.getElementById('newWordSection').style.display = "none";
    } else {
        // Sinon, affiche la section pour entrer une nouvelle traduction
        document.getElementById('translationOutput').innerText = `Le mot "${word}" est inconnu.`;
        document.getElementById('newWordSection').style.display = "block";
    }
});

// Sauvegarde la nouvelle traduction
document.getElementById('saveTranslationBtn').addEventListener('click', function () {
    const word = document.getElementById('wordInput').value.trim().toLowerCase();
    const newTranslation = document.getElementById('newTranslation').value.trim();
    
    if (newTranslation === "") {
        alert("Veuillez entrer une traduction.");
        return;
    }

    // Sauvegarde la nouvelle traduction dans l'objet translations
    translations[word] = newTranslation;
    
    // Met à jour localStorage
    localStorage.setItem('zlazekTranslations', JSON.stringify(translations));

    // Affiche la nouvelle traduction et cache la section d'ajout
    document.getElementById('translationOutput').innerText = `Traduction sauvegardée: ${newTranslation}`;
    document.getElementById('newWordSection').style.display = "none";
    
    // Efface les champs
    document.getElementById('newTranslation').value = "";
    document.getElementById('wordInput').value = "";
});

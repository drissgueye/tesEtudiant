// 1. Sélection des éléments
let input = document.getElementById("tacheInput");
let bouton = document.getElementById("ajouterBtn");
let liste = document.getElementById("listeTaches");

// 2. Fonction pour ajouter une tâche
function ajouterTache() {

   // récupérer la valeur
   let texte = input.value;

   // empêcher tâche vide
   if (texte === "") {
       alert("Veuillez entrer une tâche !");
       return;
   }

   // créer un li
   let li = document.createElement("li");
   li.textContent = texte;

   // événement pour marquer comme terminé
   li.addEventListener("click", function() {
       li.classList.toggle("terminee");
   });

   // créer bouton supprimer
   let btnSupprimer = document.createElement("button");
   btnSupprimer.textContent = "Supprimer";

   // événement supprimer
   btnSupprimer.addEventListener("click", function() {
       li.remove();
   });

   // ajouter bouton dans li
   li.appendChild(btnSupprimer);

   // ajouter li dans la liste
   liste.appendChild(li);

   // vider input
   input.value = "";
}

// 3. événement click sur bouton ajouter
bouton.addEventListener("click", ajouterTache);

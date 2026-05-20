
// requête -> pose une question au json

fetch("sneakers1.json")
    // quand tu obtiens une réponse
    .then(rep => rep.json())
    // derrière "data" -> toutes la donnée du json
    //LA DONNEE DU JSON N'EXISTE QU'ICI
    .then(data => {
        console.log(data);
        //afficher Produit()
        afficherProduits(data.produits)
        //afficher Temoignage()
        afficherTemoignages(data.temoignages)
        //afficher Services()
        afficherServices(data.services)
    });

function afficherProduits(listeProduits) {
    listeProduits.forEach(produit => {
        console.log(produit)
        document.querySelector("#produitsContainer").innerHTML += ` <div>
                <img src="${produit.image}" alt="">

                <h3>${produit.nom}</h3>
                <p>${produit.description}</p>


            </div>`
    });
}
//role: afficher les témoignages
//paramètre : listes des témoignages
//return : rien 

function afficherTemoignages(listeTemoignages){
    // chercher les témoignages 1 par 1
    // quand j'en aurait trouvé 1 -> envoi dans l'html le témoignage
    listeTemoignages.forEach(temoignage => {
        console.log(temoignage)
        document.querySelector("#temoignageContainer").innerHTML += `<div>
                <h3>${temoignage.prenom}</h3>

                <h4>Expérience : ${temoignage.typeExperience}</h4>

                <p>${temoignage.commentaire} </p>

                <p>${temoignage.note}</p>

            </div>`
    })

    };
//role: afficher les services
// parametre : listes des services
// return: rien car elle affiche 
function afficherServices(listeServices){
    listeServices.forEach(service => {
        console.log(service)
        document.querySelector("#servicesContainer").innerHTML += `<div>
                <h3>${service.nom}</h3>
                <p>${service.description} </p>
            </div>
`
    })

}
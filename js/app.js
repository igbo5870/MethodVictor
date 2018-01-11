/* global $ */
// **************************************************************************
(function main () {
  var team = []                                          // Liste pour les équipes
  var oldTeam = []                                       // Liste pour les équipes déjà créer
  var student = ['Grégory', 'Céline', 'Corentin', 'Ilham',
    'David', 'Ana', 'Florian', 'Antoine', 'Frédéric',
    'Christelle', 'Fabrice', 'Joris', 'Matheo', 'Ruud',
    'Vanessa']                                           // liste d'élève
  var nbreTeam = 6                                       // Nombre d'équipe
  var aleatoire                                          // Nombre aléatoire
  var nbreStudent = Math.round(student.length / nbreTeam) // Nombre d'étudient par équipe
  var buffer = []

  /**
   * Choisir un apprenant aléatoire
   * @return {string} Retourne le nom de l'apprenant
   */
  function getApprenant () {
    aleatoire = Math.floor(Math.random() * (student.length))
    return student[aleatoire]
  }

  /**
   * Créer un talbeau comprenant  La liste des équipes
   * @param  {number} nbreTeam    Le nombre d'équipe choisis
   * @param  {number} nbreStudend Le nombre de personne à répartir
   * @return {array}              La Liste des équipes
   */
  function createTeam (nbreTeam, nbreStudend) {
    for (var j = 0; j < nbreTeam; j++) {      // Répete N fois suivant le nombre d'équipe
      buffer = []                             // Remet le buffer à zéro
      for (var i = 0; i < nbreStudent; i++) { // Répete N fois suivant le nombre d'étudiant par équipe
        buffer.push(getApprenant())
        student.splice(aleatoire, 1)
      }
      team.push(buffer)
    }
    console.log(team)
  }

  // *******************
  createTeam(nbreTeam)        //
  // *******************
})()

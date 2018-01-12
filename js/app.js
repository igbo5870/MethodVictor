/* global $ */
// **************************************************************************
(function main () {
  var team = []                                          // Liste pour les équipes
  var oldTeam = []                                       // Liste pour les équipes déjà créer
  var student = ['Grégory', 'Céline', 'Corentin', 'Ilham',
    'David', 'Ana', 'Florian', 'Antoine', 'Frédéric',
    'Christelle', 'Fabrice', 'Joris', 'Matheo', 'Ruud',
    'Vanessa']                                           // liste d'élève
  var absent = []
  var nbreTeam = 10                                       // Nombre d'équipe
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
        addStudent()
      }
      team.push(buffer)
    }
    console.log(team)
  }
  /**
   * Ajoute un apprenant dans la liste des apprenants
   */
  function addStudent () {
    // student.push($('class').val())

    if (student.length === 1 && team[0].length <= 2) {
      var last = team[team.length - 1].push(student[0])
      student = []
    }
  }

  function setOldTeam () {
    var date = new Date()
    // Ajout de la date de création des teams.
    var days = date.getDate()
    var month = '-' + date.getMonth() + 1
    var years = '-' + date.getFullYear()
    team.push(days + month + years)
    oldTeam.push(team)
    console.log(oldTeam)
  }

  setOldTeam()
  /**
   * Supprime un apprenant de la liste des présents
   * @param  {string} name Nom de l'apprenant
   */
  function setAbsent (name) {
    absent.push(name)
    student.splice(name, 1)
  }

  /**
   * Supprime un apprenant dans la liste des absents
   * @param {string} name [description]
   */
  function setPresent (name) {
    student.push(name)
    absent.splice(name, 1)
  }

  // Récupérer les id du html
  $('#idname').on('click', function () {
    console.log('Click')
  })
  // *******************
  createTeam(nbreTeam)        //
  // *******************
})()

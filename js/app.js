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
  var nbreTeam = 3                                       // Nombre d'équipe
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
      console.log(last)
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

  function getPresent () {
    // Ajout de la carte de la personne absente / création de l'html /
    // ****************************************
    for (var i = 0; i < student.length; i++) {
      console.log(student[i])
      $('.cardFull').append(
          '<div class="card">' +
            '<img src="http://icdn.pro/images/fr/c/h/champignon-super-icone-8317-128.png">' +
            '<p>' + student[i] + '</p>' +
            '<input id="checkBox" type="checkbox">' +
          '</div>')
    }

    if ($('.cardFull2 input').is(':checked')) {
      $('input[type=checkbox]:checked').each(function () {
        student.push($(this).val())
      })
      // console.log($('input:checked').val())
    }
    console.log(absent)
  }
  getPresent()

  /**
   * Recupère les absents parmis la liste des apprenants et
   * les affiches sur le tableau absents
   * @return {[type]} [description]
   */
  function getAbsent () {
    if ($('.cardFull input').is(':checked')) {
      $('input[type=checkbox]:checked').each(function () {
        absent.push($(this).val())

        // Ajout de la carte de la personne absente / création de l'html /
        // ****************************************
        $('.cardFull2').append(
          '<div class="cardFull">' +
            '<div class="card">' +
              '<img src="http://icdn.pro/images/fr/c/h/champignon-super-icone-8317-128.png">' +
              '<p>' + $(this).val() + '</p>' +
              '<input id="checkBox" type="checkbox">' +
            '</div>' +
          '</div>')
      })

      // console.log($('input:checked').val())
    }
    console.log(absent)
  }

    // Quel input est check ? valeur de l'input
    // si c'est check j'affiche une image

  getAbsent()

  // *******************
  createTeam(nbreTeam)        //
  // *******************
})()

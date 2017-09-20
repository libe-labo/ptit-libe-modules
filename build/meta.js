var required = function (input) {
  return input ? true : 'Veuillez remplir le champ'
}

module.exports = [
  {
    type: 'input',
    name: 'name',
    message: 'Nom du module',
    validate: (input) => required(input)
  },
  {
    type: 'input',
    name: 'numero',
    message: 'Numéro du Ptit Libé',
    validate (input) {
      return !isNaN(parseInt(input)) ? input ? true : 'Veuillez remplir le champ' : 'Veuillez entrer un chiffre'
    },
    filter: Number
  },
  {
    type: 'list',
    name: 'module',
    message: 'Quel type de module?',
    choices: [
      {
        name: 'Quiz',
        value: 'quiz',
        short: 'QUiz'
      },
      {
        name: 'Diaporama',
        value: 'diaporama',
        short: 'Diaporama'
      },
      {
        name: 'Carte cliquable',
        value: 'carte',
        short: 'Carte cliquable'
      },
      {
        name: 'Switch bouton',
        value: 'switch',
        short: 'Switch bouton'
      }
    ]
  },
  {
    type: 'input',
    name: 'sheet',
    message: 'ID du sheet',
    validate: (input) => required(input),
    when (answers) {
      return answers.module !== 'carte' 
    }
  },
  {
    type: 'confirm',
    name: 'isLeaf',
    message: 'Est ce qu\'il y a plusieur feuilles dans le sheet ?',
    validate: (input) => required(input),
    when (answers) {
      return answers.module !== 'carte'
    }
  },
  {
    type: 'input',
    name: 'leaf',
    message: 'Nom de la feuille à traiter',
    validate: (input) => required(input),
    when (answers) {
      return answers.isLeaf 
    }
  },
  {
    type: 'input',
    name: 'imageSvg',
    message: 'Nom du fichier svg',
    validate: (input) => required(input),
    when (answers) {
      return answers.module === 'carte' 
    }
  },
  {
    type: 'input',
    name: 'mainColor',
    message: 'Couleur principale (1)',
    validate: (input) => required(input)
  },
  {
    type: 'input',
    name: 'sideColor',
    message: 'Couleur secondaire (2)',
    validate: (input) => required(input)
  },
  {
    type: 'input',
    name: 'ligthColor',
    message: 'Couleur opacité resuite (4)',
    default: '#ffffff',
    validate: (input) => required(input)
  }
]
const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://saqlain-shah.netlify.app/',
  title: 'Saqlain Shah.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Syed Saqlain Abbas',
  role: 'MERN Stack Developer',
  description:
    "As a MERN Stack developer, passionate about learning new technologies and working with teams to create user-friendly web applications. Over 1 and half years of experience in web development, including front-end and back-end technologies. Eager to develop skills in a fast-paced environment and contribute to a company's success.",
  resume:
    'https://drive.google.com/file/d/1Rdroi7MlACj-ZcCtAfgw2rk__ZCnMPOp/view?usp=share_link',
  social: {
    linkedin: 'https://linkedin.com/in/saqlain-shah',
    github: 'https://github.com/saqlain-shah',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'RINOR Version 3',
    description: 'RINOR is a leading travel agency in Skardu',
    stack: ['React ', ' Typescript ', ' TailwindCSS'],
    sourceCode: 'https://github.com/saqlain-shah',
    livePreview: 'http://rinor.pk/',
  },
  {
    name: 'RINOR Version 2',
    description:
      'Rinor Website Second release the converted form of HTML and LESS template into react functional component ',
    stack: ['React  ', ' HTML ', ' LESS (CSS) '],
    sourceCode: 'https://github.com/saqlain-shah/react-less-rinor-site',
    livePreview: 'https://rinor.netlify.app',
  },
  {
    name: 'Naynawa Travel and Tours',
    description: 'tourism related website ',
    stack: ['HTML', ' CSS'],
    sourceCode: 'https://github.com/saqlain-shah/naynawa',
    livePreview: 'naynawa-pk.netlify.app/',
  },
  {
    name: 'Polka Verse',
    description:
      'The Polkaverse is the first contemporary blockchain based Free to Play and Earn Game. Its an open and decentralised virtual universe built using UNITY and CRYENGINE',
    stack: ['React', 'Material-UI'],
    sourceCode: 'https://github.com/saqlain-shah/polkaverse/tree/master',
    livePreview: 'http://polkaverse.info/',
  },
  {
    name: 'Wheather App ',
    description:
      'Location-based, real-time local weather forecast Web application',
    stack: ['Typescript', ' ReactJS', 'CSS'],
    sourceCode: 'https://github.com/saqlain-shah/ReactTS-wheather-app',
    livePreview: 'https://github.com/saqlain-shah/ReactTS-wheather-app',
  },
  {
    name: 'Todos App ',
    description:
      'ToDo List App is a kind of app that generally used to maintain our day-to-day tasks or list everything that we have to do, with the most important tasks at the top of the list, and the least important tasks at the bottom. It is helpful in planning our daily schedules.  ',
    stack: ['Typescript', ' ReactJS', 'CSS'],
    sourceCode: 'https://github.com/saqlain-shah/ReactTS-wheather-app',
    livePreview: 'https://todos-app-typescript.netlify.app',
  },

  {
    name: 'Wizard Form ',
    description:
      'Baltistan Tours Pakistan is a well established, reliable and competitively priced Trekking & Tours Organization ',
    stack: ['CMS', ' Wordpress'],
    sourceCode: 'https://github.com/saqlain-shah/MUI-React-Multi-Stepper-Forms',
    livePreview: 'wizard-forms.netlify.app',
  },
  {
    name: 'Multi Step Booking Form ',
    description: 'Multi Step Flight Reservation Booking Form ',
    stack: ['MERN Stack'],
    sourceCode: 'https://github.com/saqlain-shah/MUI-React-Multi-Stepper-Forms',
    livePreview: '',
  },
  {
    name: 'FYP ',
    description:
      'RestAPIs of CRUD operation for Hotel Booking Management System ',
    stack: ['NodeJS, ExpressJS, MongoDB, Mongoose'],
    sourceCode: 'https://github.com/saqlain-shah/FYP/tree/main',
    livePreview: '',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'SASS',
  'TailwindCSS',
  'Material UI',
  'JavaScript',
  'TypeScript',
  'React',
  'NodeJS',
  'ExpressJS',
  'MongoDB',
  'Mongoose',
  'Git',
  'NPM',
  'Webpack',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'saqlainshahbaltee@gmail.com',
}

export { header, about, projects, skills, contact }

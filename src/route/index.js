// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()
// ================================================================
// var address = 'Ukraine, Kyiv, 123456'

var header = {
  name: {
    firstname: 'Ivan',
    lastname: 'Ivanov',
  },
  position: 'Junior Fullstack JS Developer',
  salary: '$600 в місяць',
  address: 'Ukraine, Kyiv',
}

var footer = {
  social: {
    email: {
      text: 'Ivanov@mail.com',
      href: 'mailto:Ivanov@mail.com',
    },
    phone: {
      text: '+380670000123',
      href: 'tel:+380670000123',
    },
    linkedin: {
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/in/dmytro-test',
    },
  },
}

// ================================================================
// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})
// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: 'Resume | Summary',
    },

    header,

    main: {
      summary: {
        title: 'Summary',
        text: `Open-minded for new technologies, with 1 years 
						of experience in development. 
						Whenever I start to work on a new project 
						I learn the domain and try to understand 
						the idea of the project. Good team player, 
						every colleague is a friend to me.`,
      },

      experience: {
        title: 'Experience',
        text: `Pet project for parsing sport betting data 
						from different platforms ( odds ) and sport statistics 
						( tournament position, goals etc), analyzing by simple 
						mathematics models and preparing probability for such 
						events like: money line - first win / draw / second win, totals etc.`,
      },
    },

    footer,
  })
})

// ================================================================
router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: 'Resume | Skills',
    },

    header,

    main: {
      skills: [
        {
          name: 'HTML',
          point: 10,
          isTop: true,
        },
        {
          name: 'Handlebars',
          point: 10,
          isTop: true,
        },
        {
          name: 'VS Code & NPM',
          point: 9,
          isTop: false,
        },
        {
          name: 'Git & Terminal',
          point: 7,
        },
        {
          name: 'React.js',
          point: 0,
        },
        {
          name: 'PHP',
          point: null,
        },
      ],

      hobbies: [
        {
          name: 'Sleeping',
          isMain: false,
        },
        {
          name: 'Singing in the shower',
          isMain: true,
        },
        {
          name: 'Having fun',
          isMain: true,
        },
      ],
    },

    footer,
  })
})

// ================================================================
router.get('/education', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: 'Resume | Education',
    },

    header,

    main: {
      educations: [
        {
          name: 'School',
          isEnd: true,
        },
        {
          name: 'College',
          isEnd: true,
        },
        {
          name: 'University',
          isEnd: false,
        },
        {
          name: 'Full stack developer Courses',
          isEnd: false,
        },
      ],

      certificates: [
        {
          name: 'Cert-1',
          id: 111,
        },
        {
          name: 'Cert-2',
          id: 222,
        },
        {
          name: 'Cert-3',
          id: 333,
        },
      ],
    },

    footer,
  })
})

// ================================================================
router.get('/work', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('work', {
    // ↙ сюди вводимо JSON дані

    layout: 'big',

    page: {
      title: 'Resume | Work',
    },

    header,

    main: {
      works: [
        {
          position: 'Junior Fullstack Developer',
          company: {
            name: 'IT Brains',
            url: 'https://it-brains.com.ua/',
          },
          duration: {
            from: '23.03.2023',
            to: null,
          },
          projectAmount: 3,

          projects: [
            {
              name: 'Resume',
              url: 'https://resume.com.ua/',
              about:
                'AirBNB competitor. High load competitor for searching appartments',
              stacks: [
                {
                  name: 'React.js',
                },
                {
                  name: 'HTML / CSS',
                },
                {
                  name: 'Nodejs',
                },
              ],
              stackAmount: 3,
              awards: [
                {
                  name: 'Background verification - is a feature that provides to prove that they are real persons',
                },
                {
                  name: 'Preparing SEO optimized pages',
                },
              ],
              awardAmount: 2,
            },
          ],
        },
      ],
    },

    footer,
  })
})

// Підключаємо роутер до бек-енду
module.exports = router

// {
//   position: 'Junior Fullstack Developer',
//   company: {
//     name: 'IT Brains',
//     url: 'https://it-brains.com.ua/',
//   },
//   duration: {
//     from: '10.10.2022',
//     to: '22.03.2023',
//   },
//   projectAmount: 2,
// },

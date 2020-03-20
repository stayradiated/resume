import Head from 'next/head'

import * as Icons from '../components/icons'

const WORK_EXPERIENCE = [
  {
    company: 'Mish Guru',
    role: 'Senior Software Developer',
    date: 'Dec 2016 — Nov 2019',
    description:
      'Helped to develop both the front and back end of the Mish Guru product. Build out a brand new front-end using React and Apollo, planning and implementing a GraphQL API, and maintaining a large collection of microservices.',
  },
  {
    company: 'Spark Ventures',
    role: 'Software Developer',
    date: 'Jul 2015 — Dec 2016',
    description:
      'Working as a full-stack developer on the Lightbox website. Helped convert the site from Angular to React, Redux, Webpack, setup a GraphQL API to improve performance and setup a CI system to improve productivity.',
  },
  {
    company: 'Crimson Consulting',
    role: 'Web Developer',
    date: 'May 2016 — Nov 2016',
    description:
      'Contracted by Crimson to build a brand new marketing site, using React with server side rendering on Node.js. Also helped to build a single-sign- on account system with Auth0 and Discourse.',
  },
  {
    company: 'John Paul College Rotorua',
    role: 'Web Developer',
    date: 'Jul 2014 — Apr 2015',
    description:
      'Creation of a complete website solution using the SilverStripe CMS. Features include a modern new design, a landing page, multilingual content, KAMAR calendar integration and a photo gallery.',
  },
  {
    company: 'Pantry d’Or',
    role: 'Web Developer',
    date: 'May 2014 — Dec 2014',
    description:
      'Website design and development using the SilverStripe CMS, with fresh content loaded from their Facebook page. Project also included designing their logo, business cards, street signs and several other items.',
  },
]

const EDUCATION = {
  about:
    'I am a quick learner, and love to solve problems. I taught myself to write and release software, and continue to learn through experimentation and creativity.',
  history: [
    {
      institution: 'Waiariki Institute of Technology',
      degree: 'Bachelor of Computing, Communications and Technology',
      date: 'Jan 2012 — Dec 2014',
    },
  ],
}

const Home = () => (
  <div className="container">
    <Head>
      <title>George Czabania</title>
      <link rel="icon" href="/favicon.ico" />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/kognise/water.css@latest/dist/light.min.css"
      />
      <link
        rel="stylesheet"
        href="//brick.freetls.fastly.net/Source+Sans+Pro:400,600,700/Libre+Bodoni:700"
      />
    </Head>

    <main>
      <h1>George Czabania</h1>

      <ul className="links">
        <li>
          <Icons.CodeIcon />
          <a href="https://github.com/stayradiated">stayradiated</a>
        </li>
        <li>
          <Icons.BrowserIcon />
          <a href="https://george.czabania.com">george.czabania.com</a>
        </li>
        <li>
          <Icons.MailIcon />
          <a href="mailto:george@czabania.com">george@czabania.com</a>
        </li>
      </ul>

      <h2>About</h2>

      <p>
        I grew up in New Zealand, love to travel, open source, helping people
        through technology.
      </p>

      <h2>Work Experience</h2>

      {WORK_EXPERIENCE.map((item) => (
        <div>
          <header>
            <h3>{item.company}</h3>
            <h4>{item.role}</h4>
            <date>{item.date}</date>
          </header>
          <p>{item.description}</p>
        </div>
      ))}

      <h2>Education</h2>

      <p>{EDUCATION.about}</p>

      {EDUCATION.history.map((item) => (
        <div>
          <header>
            <h3>{item.institution}</h3>
            <h4>{item.degree}</h4>
            <date>{item.date}</date>
          </header>
        </div>
      ))}

      <h2>Skills</h2>

      <p>
        Right now, if I was to start a new project.
        <br />
        I would develop a design using Figma.
        <br />
        Build the front-end using React, with Typescript and Next.js.
        <br />
        The back-end would be running on Node.js, with a GraphQL API (via
        Apollo).
        <br />I would use Git, and Yarn Workspaces. Deploy it as a Docker
        container to Google CloudRun.
      </p>
    </main>

    <style global jsx>{`
      body {
        background: #dff9fb;
        max-width: 38em;
      }
    `}</style>

    <style jsx>{`
      .container {
        background: #fff;
        font-family: 'Source Sans Pro';
        padding: 3em;
        border-radius: 4px;
      }

      h1 {
        font-family: 'Libre Bodoni';
        text-align: center;
        font-size: 3em;
        color: #30336b;
        padding-bottom: 0.2em;
        border-bottom: 3px double #30336b;
      }

      h2 {
        text-transform: uppercase;
        text-align: center;
        font-size: 1em;
        font-weight: 700;
        color: #30336b;
        margin-top: 2em;
        padding-bottom: 0.5em;
        border-bottom: 1px dashed #34ace0;
      }

      h3 {
        margin: 0;
      }

      h4 {
        margin: 0;
        color: #535c68;
      }

      hr {
        border-top: 1px dotted #aaa69d;
      }

      a {
        color: #686de0;
      }

      a[href^='mailto']:before {
        content: '';
      }

      header {
        display: grid;
        grid-template:
          'title date'
          'subtitle subtitle';
      }

      header h3 {
        grid-area: title;
      }

      header h4 {
        grid-area: subtitle;
      }

      header date {
        grid-area: date;
        text-align: right;
      }

      header + p {
        margin-top: 0;
      }

      .links {
        display: flex;
        justify-content: space-between;
        padding: 0;
        line-height: 1.2em;
      }
      .links li {
        list-style-type: none;
      }
      .links li a {
        margin-left: 1.5em;
      }

      @media (max-width: 600px) {
        .container {
          padding: 1em;
        }
        header {
          display: block;
        }
      }
    `}</style>
  </div>
)

export default Home

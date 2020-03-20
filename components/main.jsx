import Head from 'next/head'

import * as Icons from '../components/icons'

const WORK_EXPERIENCE = [
  {
    company: 'Mish Guru',
    role: 'Senior Software Developer',
    date: 'Dec 2016 — Nov 2019',
    description:
      'Helped to develop both the front and back end of the Mish Guru product. Build out a brand new front-end using React and Apollo, planning and implementing a GraphQL API, and maintaining a large collection of microservices.',
    tags: [
      'TypeScript',
      'Node.js',
      'GraphQL',
      'React',
      'MySQL',
      'Kubernetes',
      'AWS',
    ],
  },
  {
    company: 'Spark Ventures',
    role: 'Software Developer',
    date: 'Jul 2015 — Dec 2016',
    description:
      'Working as a full-stack developer on the Lightbox website. Helped convert the site from Angular to React, Redux, Webpack, setup a GraphQL API to improve performance and setup a CI system to improve productivity.',
    tags: [
      'JavaScript',
      'Node.js',
      'GraphQL',
      'React',
      'Angular',
      'AWS',
    ]
  },
  {
    company: 'Crimson Consulting',
    role: 'Web Developer',
    date: 'May 2016 — Nov 2016',
    description:
      'Contracted by Crimson to build a brand new marketing site, using React with server side rendering on Node.js. Also helped to build a single-sign- on account system with Auth0 and Discourse.',
    tags: [
      'JavaScript',
      'React',
      'Node.js',
      'Contentful',
      'Auth0',
    ]
  },
  {
    company: 'John Paul College Rotorua',
    role: 'Web Developer',
    date: 'Jul 2014 — Apr 2015',
    description:
      'Creation of a complete website solution using the SilverStripe CMS. Features include a modern new design, a landing page, multilingual content, KAMAR calendar integration and a photo gallery.',
    tags: [
      'PHP',
      'JavaScript',
      'SilverStripe',
    ]
  },
  {
    company: 'Pantry d’Or',
    role: 'Web Developer',
    date: 'May 2014 — Dec 2014',
    description:
      'Website design and development using the SilverStripe CMS, with fresh content loaded from their Facebook page. Project also included designing their logo, business cards, street signs and several other items.',
    tags: [
      'PHP',
      'JavaScript',
      'SilverStripe',
    ]
  },
]

const EDUCATION = [
  {
    institution: 'Waiariki Institute of Technology',
    degree: 'Bachelor of Computing, Communications and Technology',
    date: 'Jan 2012 — Dec 2014',
    description:
      'Course topics included database development and administration, technical writing, advanced programming, hardware technology, quality assurance, systems analysis and project management.',
  },
]

const Home = () => (
  <div className="container">
    <Head>
      <title>George Czabania</title>
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/kognise/water.css@latest/dist/light.min.css"
      />
      <link
        rel="stylesheet"
        href="//brick.freetls.fastly.net/Source+Sans+Pro:400,700/Libre+Bodoni:700"
      />
    </Head>

    <a className='pdf' href='./george-czabania-resume.pdf'>PDF</a>

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

      <h2>Summary</h2>

      <p>
        I grew up in New Zealand, love to travel, open source, helping people
        through technology.
        <br />I am a quick learner, and love to solve problems. I taught myself
        to write and release software, and continue to learn through
        experimentation and creativity.
      </p>

      <h2>Experience</h2>

      {WORK_EXPERIENCE.map((item, index) => (
        <div key={index}>
          <header>
            <h3>{item.company}</h3>
            <h4>{item.role}</h4>
            <date>{item.date}</date>
          </header>
          <p>{item.description}</p>
          <div className="tags">
            {item.tags &&
              item.tags.map((tag) => <span className="tag">{tag}</span>)}
          </div>
        </div>
      ))}

      <h2>Education</h2>

      {EDUCATION.map((item, index) => (
        <div key={index}>
          <header>
            <h3>{item.institution}</h3>
            <h4>{item.degree}</h4>
            <date>{item.date}</date>
          </header>
          <p>{item.description}</p>
        </div>
      ))}
    </main>

    <style global jsx>{`
      @media only screen {
        body {
          background: #dff9fb;
          max-width: 38em;
        }
      }
      @media only print {
        body {
          max-width: none;
        }
      }
    `}</style>

    <style jsx>{`
      .container {
        background: #fff;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
        font-family: 'Source Sans Pro';
        padding: 1em 3em;
        border-radius: 4px;
        margin-top: 3em;
        margin-bottom: 10em;
        position: relative;
      }

      .pdf {
        display: block;
        position: absolute;
        top: -3em;
        right: 0;

        border-radius: 2px;
        text-transform: uppercase;
        font-weight: 800;
        color: #7fb3c6;
        border: 1px solid #7fb3c6;
        font-size: 0.6em;
        width: 3em;
        height: 2em;
        text-align: center;
        line-height: 2em;
      }
      .pdf:hover {
        text-decoration: none;
        background: #7fb3c6;
        color: #fff;
      }

      h1 {
        font-family: 'Libre Bodoni';
        text-align: center;
        font-size: 3em;
        color: #30336b;
        height: 1.15em;
        text-shadow: 2px 2px #FFF, 2px -2px #FFF, -2px 2px #FFF, -2px -2px #FFF;
        border-bottom: 3px double #30336b;
        margin: 0;
      }

      h2 {
        text-transform: uppercase;
        font-size: 0.8em;
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
        margin: 0;
      }

      .links {
        display: flex;
        justify-content: space-between;
        padding: 0;
        line-height: 1.1em;
      }
      .links li {
        list-style-type: none;
        font-size: 0.9em;
      }
      .links li a {
        margin-left: 1.7em;
        color: #30336b;
      }

      .tags {
        display: flex;
        flex-wrap: wrap;
        margin-top: 0.5em;
        margin-bottom: 1em;
      }
      .tag {
        font-size: 0.8em;
        margin-right: 0.2em;
        margin-bottom: 0.2em;
        padding: 0 0.4em;
        background: #e3fdff;
        border-radius: 2px;
      }

      @media (max-width: 500px) {
        h1 { font-size: 2em; height: auto; }

        .links {
          display: block;
        }
        .links li {
          padding: 0.5em 0;
        }

        .container {
          padding: 0.8em;
        }

        header {
          display: block;
          margin-bottom: 0.5em;
        }
      }

      @media only print {
        .container {
          box-shadow: none;
          padding: 0;
        }
        .pdf {
          display: none;
        }
      }
    `}</style>
  </div>
)

export default Home

import Head from 'next/head'
import { Icon } from 'react-icons-kit'
import { github } from 'react-icons-kit/entypo/github'
import { compass } from 'react-icons-kit/entypo/compass'
import { mail } from 'react-icons-kit/entypo/mail'
import unified from 'unified'
import parse from 'remark-parse'
import remark2react from 'remark-react'

const SUMMARY = `
A self-motivated developer from New Zealand with a passion for developing web
applications and using technology to solve problems. I have years of experience
as a full-stack developer and designing aesthetic user interfaces.
`

const EXPERIENCE = [
  {
    company: 'Mish Guru',
    role: 'Senior Software Developer',
    date: 'Dec 2016 — Nov 2019',
    description: `
- Developing features for both the front-end and back-end. Responsible for gathering requirements, planning and estimating work required.
- Lead the migration of a large REST API service into a scaleable, maintainable and high performance GraphQL API.
- Championed processes to improve communication between team members across multiple timezones, and developed internal Slack integrations to increase productivity.
- Transforming video clips, reverse engineering applications, integrating with third party APIs in a responsible and fault tolerant manner.
    `,
    tags: [
      'TypeScript',
      'GraphQL',
      'React',
      'Node.js',
      'MySQL',
      'Kubernetes',
      'AWS',
    ],
  },
  {
    company: 'Spark Ventures / Lightbox',
    role: 'Software Developer',
    date: 'Jul 2015 — Dec 2016',
    description: `
- Working as a full-stack developer on the Lightbox website.
- Helped to iteratively migrate the front-end from Angular to React.
- Developing smooth, responsive and interactive components for a .
- Implemented a CI/CD system to improve productivity.
- Researched, presented and convinced the team to adopt to GraphQL. Used it to wrap multiple 3rd party REST APIs to improve client performance.
- Released the first open source project for the company. Worked with management to sort out licensing and document the procedure.
- Implemented several features using 3rd party integrations, including live chat, payment processing, and DRM video playback.
    `,
    tags: [
      'JavaScript',
      'Node.js',
      'GraphQL',
      'React',
      'Redux',
      'Silverlight',
      'Video DRM',
      'Salesforce CRM',
      'AWS',
    ],
  },
  {
    company: 'Crimson Consulting',
    role: 'Web Developer',
    date: 'May 2016 — Nov 2016',
    description: `
- Developed a new marketing website based on existing designs. The site was built with React, and optimized for high performance with server-side rendering.
- Implemented a single-sign-on authentication system using Auth0 and Discourse.
`,
    tags: [
      'JavaScript',
      'React',
      'Server-Side Rendering',
      'Node.js',
      'Contentful',
      'Auth0',
    ],
  },
  {
    company: 'Self-Employed ',
    role: 'Freelance Web Design & Development',
    date: 'Dec 2011 — Jun 2015',
    description: `
- Designing, developing and maintaining websites for several local schools and businesses.
- Development of custom CMS plug-ins for clients that require integration with existing services.
    `,
    tags: [
      'PHP',
      'Apache',
      'JavaScript',
      'SilverStripe',
      'Wordpress',
      'Static Site Generator',
    ],
  },
]

const EDUCATION = [
  {
    institution: 'Waiariki Institute of Technology',
    degree: 'Bachelor of Computing, Communications and Technology',
    date: 'Jan 2012 — Dec 2014',
    description: `
Courses covered web development, database administration, technical writing, quality assurance, systems analysis and project management.
`,
  },
]

const Markdown = (props) => {
  return unified()
    .use(parse)
    .use(remark2react)
    .processSync(props.content).contents
}

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
        href="//brick.freetls.fastly.net/Source+Sans+Pro:400,600,700/Playfair Display:700"
      />
    </Head>

    <a
      className="pdf"
      href="./george-czabania-resume.pdf"
      title="Prefer a PDF? I got you covered."
    >
      PDF
    </a>

    <main>
      <div className="title">
        <h1>George Czabania</h1>

        <ul className="links">
          <li>
            <a href="https://github.com/stayradiated">
              <Icon icon={github} style={{ marginRight: 7 }} />
              stayradiated
            </a>
          </li>
          <li>
            <a href="https://george.czabania.com">
              <Icon icon={compass} style={{ marginRight: 7 }} />
              george.czabania.com
            </a>
          </li>
          <li>
            <a href="mailto:george@czabania.com">
              <Icon icon={mail} style={{ marginRight: 7 }} />
              george@czabania.com
            </a>
          </li>
        </ul>
      </div>

      <div className="sections">
        <section className="summary">
          <h2>Summary</h2>
          <Markdown content={SUMMARY} />
        </section>

        <section className="experience">
          <h2>Experience</h2>

          {EXPERIENCE.map((item, index) => (
            <div key={index}>
              <header>
                <h3>{item.company}</h3>
                <h4>{item.role}</h4>
                <date>{item.date}</date>
              </header>
              <div className="description">
                <Markdown content={item.description} />
              </div>
              <div className="tags">
                {item.tags &&
                  item.tags.map((tag) => <span className="tag">{tag}</span>)}
              </div>
            </div>
          ))}
        </section>

        <section className="education">
          <h2>Education</h2>

          {EDUCATION.map((item, index) => (
            <div key={index}>
              <header>
                <h3>{item.institution}</h3>
                <h4>{item.degree}</h4>
                <date>{item.date}</date>
              </header>
              <div className="description">
                <Markdown content={item.description} />
              </div>
            </div>
          ))}
        </section>
      </div>
    </main>

    <style global jsx>{`
      .description p {
        margin: 0.3em 0;
      }
      .description ul {
        margin: 0.3em 0;
      }

      @media only screen {
        body {
          background: #dff9fb;
          max-width: 38em;
        }
      }
      @media only print {
        body {
          max-width: none;
          margin: 0;
          padding: 0;
          font-size: 0.9em;
        }
      }
    `}</style>

    <style jsx>{`
      .container {
        background: #fff;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
        font-family: 'Source Sans Pro';
        padding: 1em 3em 3em;
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
        width: 4em;
        height: 2em;
        text-align: center;
        line-height: 2em;
      }
      .pdf:hover {
        text-decoration: none;
        background: #7fb3c6;
        color: #fff;
      }

      .title {
      }

      h1 {
        font-family: 'Playfair Display';
        text-align: center;
        font-size: 3em;
        color: #30336b;
        margin: 0;
        position: relative;
        padding: 0.2em 0;
        border-bottom: 3px solid #c4f0ff;
      }

      h2 {
        text-transform: uppercase;
        font-size: 0.8em;
        font-weight: 700;
        color: #30336b;
        margin-top: 2em;
        padding-bottom: 0.5em;
        border-bottom: 1px solid #c4f0ff;
      }

      h3 {
        margin: 0;
        font-weight: 600;
      }

      h4 {
        margin: 0;
        color: #535c68;
        font-weight: 600;
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
        font-size: 0.9em;
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
        h1 {
          font-size: 2em;
          height: auto;
        }

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
          margin: 0;
        }

        .title {
          display: flex;
          justify-content: space-between;
          border-bottom: 3px solid #c4f0ff;
        }
        .title h1 {
          border-bottom: none;
          text-align: center;
        }
        .title .links {
        }

        .sections {
          display: grid;
          grid-template-areas:
            'summary experience'
            'education experience';
          grid-template-columns: 1fr 3fr;
          grid-template-rows: auto 1fr;
          grid-column-gap: 1em;
        }
        section.summary {
          grid-area: summary;
        }
        section.experience {
          grid-area: experience;
        }
        section.education {
          grid-area: education;
        }
        section.education header {
          display: block;
          margin-bottom: 0.5em;
        }

        h2 {
          margin-top: 1em;
        }

        .links {
          display: block;
        }

        .pdf {
          display: none;
        }
      }
    `}</style>
  </div>
)

export default Home

import { NavLink, Route, Routes, useLocation } from 'react-router-dom';
import { profile, projects } from './data/profile';

function HomePage() {
  return (
    <main className="page-shell page-enter">
      <section className="hero-card reveal">
        <div className="hero-copy">
          <p className="eyebrow">Student Portfolio</p>
          <h1>{profile.name}</h1>
          <p className="hero-text">{profile.about}</p>
        </div>
        <div className="profile-card" aria-label="Profile picture section">
          {profile.photo ? (
            <div className="profile-photo-frame">
              <img className="profile-photo" src={profile.photo} alt={`${profile.name} profile`} />
            </div>
          ) : (
            <div className="avatar-circle">{profile.name.charAt(0)}</div>
          )}
          <p>{profile.photo ? 'Profile Picture' : 'Add your photo here later'}</p>
        </div>
      </section>

      <section className="content-grid">
        <article className="info-card reveal" style={{ '--delay': '0.08s' }}>
          <h2>About Me</h2>
          <p>{profile.aboutMe}</p>
        </article>

        <article className="info-card reveal" style={{ '--delay': '0.14s' }}>
          <h2>Research Interests</h2>
          <ul className="chip-list">
            {profile.researchInterests.map((interest) => (
              <li key={interest}>{interest}</li>
            ))}
          </ul>
        </article>

        <article className="info-card reveal" style={{ '--delay': '0.2s' }}>
          <h2>Personal Details</h2>
          <div className="details-list">
            <p>
              <strong>Name:</strong> {profile.name}
            </p>
            <p>
              <strong>Phone:</strong> {profile.phone}
            </p>
            <p>
              <strong>Personal Email:</strong> {profile.personalEmail}
            </p>
            <p>
              <strong>College Email:</strong> {profile.collegeEmail}
            </p>
          </div>
        </article>

        <article className="info-card reveal" style={{ '--delay': '0.26s' }}>
          <h2>Skills</h2>
          <ul className="chip-list">
            {profile.skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </article>
      </section>
    </main>
  );
}

function ProjectsPage() {
  return (
    <main className="page-shell page-enter">
      <section className="page-heading reveal">
        <p className="eyebrow">Projects</p>
        <h1>Things I Have Built</h1>
      </section>

      <section className="project-grid">
        {projects.map((project, index) => (
          <article
            className="project-card reveal"
            key={project.title}
            style={{ '--delay': `${0.08 + index * 0.08}s` }}
          >
            <p className="project-tag">{project.stack}</p>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a className="project-link" href={project.githubUrl} target="_blank" rel="noreferrer">
              Open GitHub Repository
            </a>
          </article>
        ))}
      </section>
    </main>
  );
}

export default function App() {
  const location = useLocation();

  return (
    <div className="app-frame">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />
      <div className="grid-glow" aria-hidden="true" />
      <header className="site-header">
        <div>
          <p className="site-title">{profile.name}</p>
          <p className="site-subtitle">Portfolio Website</p>
        </div>
        <nav className="site-nav">
          <NavLink to="/" end className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            Home
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            Projects
          </NavLink>
        </nav>
      </header>

      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </div>
  );
}

export default function Department({ dept }) {
  return (
    <div className="container">
      <header className="header">
        <h1>{dept.name}</h1>
        <p className="tagline">{dept.tagline}</p>
      </header>

      <main className="main">
        <section className="details">
          <h2>About</h2>
          <p>{dept.description}</p>

          <h3>Contact</h3>
          <p><strong>Email:</strong> <a href={`mailto:${dept.contact.email}`}>{dept.contact.email}</a></p>
          <p><strong>Phone:</strong> {dept.contact.phone}</p>
          <p><strong>Office:</strong> {dept.contact.office}</p>
        </section>

        <section className="faculty">
          <h2>Faculty</h2>
          <ul>
            {dept.faculty.map((f, i) => (
              <li key={i} className="faculty-item">
                <div className="faculty-name">{f.name}</div>
                <div className="faculty-role">{f.role}</div>
                <div className="faculty-email"><a href={`mailto:${f.email}`}>{f.email}</a></div>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="footer">KL University — Department Info (statically generated)</footer>
    </div>
  )
}

export async function getStaticProps() {
  const dept = {
    name: 'Department of Computer Science — KL University',
    tagline: 'Engineering tomorrow with research and education',
    description:
      'The Department of Computer Science at KL University focuses on undergraduate and graduate programs in computer science, AI, and software engineering. We emphasize hands-on learning, research, and industry collaboration.',
    contact: {
      email: 'cs-dept@kluniversity.edu',
      phone: '+91-12345-67890',
      office: 'Building A, Room 101'
    },
    faculty: [
      { name: 'Dr. A. Kumar', role: 'Head of Department', email: 'akumar@kluniversity.edu' },
      { name: 'Prof. S. Rao', role: 'Professor - AI', email: 'srao@kluniversity.edu' },
      { name: 'Dr. L. Mehta', role: 'Associate Professor', email: 'lmehta@kluniversity.edu' },
      { name: 'Ms. P. Singh', role: 'Assistant Professor', email: 'psingh@kluniversity.edu' }
    ]
  }

  return {
    props: { dept }
  }
}

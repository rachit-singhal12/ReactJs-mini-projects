import React, { useState } from 'react';

function Dboard(props) {
  const username = props.username;

  const [internships, setInternships] = useState([
    { id: 1, title: 'Software Engineering Internship', company: 'Example Company 1', location: 'San Francisco, CA', dealing: 'Software Development', requiredSkills: ['JavaScript', 'React', 'Node.js'], startDate : '12-06-2006', duration: '6 months', stipend: '10000'},
    { id: 2, title: 'Marketing Internship', company: 'Example Company 2', location: 'New York, NY', dealing: 'Marketing', requiredSkills: ['Marketing Strategy', 'Social Media Marketing', 'SEO'],startDate : '12-06-2006', duration: '6 months', stipend: '10000' },
    { id: 3, title: 'Data Science Internship', company: 'Example Company 3', location: 'Seattle, WA', dealing: 'Data Analysis', requiredSkills: ['Python', 'Machine Learning', 'Data Visualization'],startDate : '12-06-2006', duration: '6 months', stipend: '10000' }
  ]);
  for (let i = 4; i <= 100; i++) {
    internships.push({ id: i, title: `Internship ${i}`, company: `Example Company ${i}`, location: 'Random Location', dealing: 'Random Dealing', requiredSkills: ['Skill 1', 'Skill 2', 'Skill 3'],startDate : '12-06-2006', duration: '6 months', stipend: '10000' });
  }

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredInternships, setFilteredInternships] = useState(internships);

  const handleSearch = () => {
    const filtered = internships.filter(internship =>
      internship.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      internship.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      internship.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      internship.dealing.toLowerCase().includes(searchQuery.toLowerCase()) ||
      internship.requiredSkills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()))||
      internship.duration.toLowerCase().includes(searchQuery.toLowerCase()) ||
      internship.stipend.toLowerCase().includes(searchQuery.toLowerCase()) 
    );
    setFilteredInternships(filtered);
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f4f4f4', padding: '20px' }}>
      <h1 style={{ textAlign: 'center', color: '#007bff', marginBottom: '20px' }}>Welcome, {username}!</h1>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Search internships..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{ padding: '8px', marginRight: '8px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
        <button onClick={handleSearch} style={{ padding: '8px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Search</button>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
        {filteredInternships.map(internship => (
          <div key={internship.id} style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '20px', backgroundColor: '#fff' }}>
            <h3 style={{ color: '#007bff' }}>{internship.title}</h3>
            <p><strong>Company:</strong> {internship.company}</p>
            <p><strong>Location:</strong> {internship.location}</p>
            <p><strong>Dealing:</strong> {internship.dealing}</p>
            <p><strong>Required Skills:</strong> {internship.requiredSkills.join(', ')}</p>
            <p><strong>Start Date:</strong> {internship.startDate}{'  '}
            <strong>Duration:</strong> {internship.duration}</p>
            <p><strong>Stipend:</strong> {internship.stipend}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dboard;

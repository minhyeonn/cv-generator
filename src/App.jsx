import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, Briefcase, GraduationCap, Code, Award } from 'lucide-react';

const myCV = {
  name: "John Doe",
  title: "Frontend Developer",
  email: "john.doe@email.com",
  phone: "+1 (555) 123-4567",
  location: "San Francisco, CA",
  summary: "I'm a new developer who loves building websites with React!",
  
  jobs: [
    {
      company: "Tech Startup",
      position: "Junior Developer",
      startDate: "2023-01",
      endDate: "Present",
      description: "I work on React components and help fix bugs. Learning a lot every day!"
    },
    {
      company: "Local Business",
      position: "Web Developer Intern",
      startDate: "2022-06",
      endDate: "2022-12",
      description: "Built simple websites and learned HTML, CSS, and JavaScript basics."
    }
  ],
  
  education: [
    {
      school: "State University",
      degree: "Computer Science",
      year: "2022",
      gpa: "3.5"
    }
  ],
  
  projects: [
    {
      name: "My Portfolio Website",
      description: "Built my first React website to show my projects",
      tech: ["React", "CSS", "JavaScript"]
    },
    {
      name: "Todo App",
      description: "Simple todo app following a YouTube tutorial",
      tech: ["React", "useState", "Local Storage"]
    }
  ],
  
  skills: ["HTML", "CSS", "JavaScript", "React", "Git", "VS Code"]
};

function CVApp() {
  const [currentView, setCurrentView] = useState('home');
  const [isEditing, setIsEditing] = useState(false);
  const [cvData, setCvData] = useState(myCV);

  function handleInputChange(field, value) {
    setCvData({
      ...cvData,
      [field]: value
    });
  }

  function Header() {
    return (
      <div className="border-b-2 border-gray-300 pb-4 mb-6 flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          {isEditing ? (
            <div>
              <input
                type="text"
                value={cvData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="text-3xl font-bold bg-transparent border-b border-gray-400 mb-2 w-full"
              />
              <input
                type="text"
                value={cvData.title}
                onChange={(e) => handleInputChange('title', e.target.value)}
                className="text-xl bg-transparent border-b border-gray-400 w-full"
              />
            </div>
          ) : (
            <div>
              <h1 className="text-3xl font-bold tracking-wide">{cvData.name}</h1>
              <p className="text-xl text-gray-700">{cvData.title}</p>
            </div>
          )}
        </div>
        <div className="mt-4 md:mt-0 text-right space-y-1">
          <div>
            <Mail className="inline w-4 h-4 mr-1 text-gray-500" />
            {isEditing ? (
              <input
                type="email"
                value={cvData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="bg-transparent border-b border-gray-400"
              />
            ) : (
              <span>{cvData.email}</span>
            )}
          </div>
          <div>
            <Phone className="inline w-4 h-4 mr-1 text-gray-500" />
            {isEditing ? (
              <input
                type="text"
                value={cvData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className="bg-transparent border-b border-gray-400"
              />
            ) : (
              <span>{cvData.phone}</span>
            )}
          </div>
          <div>
            <MapPin className="inline w-4 h-4 mr-1 text-gray-500" />
            {isEditing ? (
              <input
                type="text"
                value={cvData.location}
                onChange={(e) => handleInputChange('location', e.target.value)}
                className="bg-transparent border-b border-gray-400"
              />
            ) : (
              <span>{cvData.location}</span>
            )}
          </div>
        </div>
      </div>
    );
  }

  function SummarySection() {
    return (
      <div className="mb-6">
        <h2 className="uppercase text-gray-700 font-semibold tracking-wider text-sm mb-1">Profile</h2>
        {isEditing ? (
          <textarea
            value={cvData.summary}
            onChange={(e) => handleInputChange('summary', e.target.value)}
            className="w-full bg-transparent border border-gray-300 p-2 rounded"
            rows="2"
          />
        ) : (
          <p className="text-gray-800">{cvData.summary}</p>
        )}
      </div>
    );
  }

  function WorkSection() {
    return (
      <div className="mb-6">
        <h2 className="uppercase text-gray-700 font-semibold tracking-wider text-sm mb-2">Experience</h2>
        {cvData.jobs.map((job, index) => (
          <div key={index} className="flex flex-col md:flex-row md:justify-between mb-4">
            <div>
              <span className="font-bold text-lg">{job.position}</span>
              <span className="text-gray-600 ml-2">@ {job.company}</span>
              <p className="text-gray-700 mt-1">{job.description}</p>
            </div>
            <div className="text-gray-500 text-sm md:text-right mt-1 md:mt-0 min-w-[120px]">
              {job.startDate} – {job.endDate}
            </div>
          </div>
        ))}
      </div>
    );
  }

  function EducationSection() {
    return (
      <div className="mb-6">
        <h2 className="uppercase text-gray-700 font-semibold tracking-wider text-sm mb-2">Education</h2>
        {cvData.education.map((edu, index) => (
          <div key={index} className="flex flex-col md:flex-row md:justify-between mb-2">
            <div>
              <span className="font-bold">{edu.degree}</span>
              <span className="text-gray-600 ml-2">@ {edu.school}</span>
            </div>
            <div className="text-gray-500 text-sm md:text-right min-w-[120px]">
              Graduated: {edu.year} | GPA: {edu.gpa}
            </div>
          </div>
        ))}
      </div>
    );
  }

  function ProjectsSection() {
    return (
      <div className="mb-6">
        <h2 className="uppercase text-gray-700 font-semibold tracking-wider text-sm mb-2">Projects</h2>
        {cvData.projects.map((project, index) => (
          <div key={index} className="mb-2">
            <span className="font-bold">{project.name}</span>
            <span className="text-gray-600 ml-2">{project.tech.join(', ')}</span>
            <p className="text-gray-700">{project.description}</p>
          </div>
        ))}
      </div>
    );
  }

  function SkillsSection() {
    return (
      <div className="mb-6">
        <h2 className="uppercase text-gray-700 font-semibold tracking-wider text-sm mb-3 border-b border-gray-200 pb-1">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {cvData.skills.map((skill, index) => (
            <span key={index} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-md text-sm font-medium">
              {skill}
            </span>
          ))}
        </div>
      </div>
    );
  }

  function Navigation() {
    return (
      <div className="bg-gray-800 text-white p-4 mb-6 print:hidden">
        <div className="flex gap-4">
          <button
            onClick={() => setCurrentView('home')}
            className={`px-4 py-2 rounded ${currentView === 'home' ? 'bg-blue-600' : 'bg-gray-600'}`}
          >
            CV Preview
          </button>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className={`px-4 py-2 rounded ${isEditing ? 'bg-green-600' : 'bg-gray-600'}`}
          >
            {isEditing ? 'Save Changes' : 'Edit CV'}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 print:bg-white">
      <Navigation />
      <div className="max-w-4xl mx-auto bg-white shadow-lg print:shadow-none print:max-w-none">
        <div className="p-8 print:p-6">
          <Header />
          <SummarySection />
          <WorkSection />
          <EducationSection />
          <ProjectsSection />
          <SkillsSection />
        </div>
      </div>
    </div>
  );
}


export default CVApp;
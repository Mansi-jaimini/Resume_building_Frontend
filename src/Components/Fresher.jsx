import { useState } from "react";
import React from "react";

var count = 0;
const Fresher=()=>{
    const [formData,setFormData]=useState({
        name: '',
        email: '',
        phone: '',
        linkedIn: '',
        github: '',
        objective: '',
        education:[{ course: '', university: '', city: '' ,startyear:'',endyear:'',percent:''}],
        skills: [{ programmingLanguages: '', frameworks: '', databases: '',tools:'',other:''}],
        projects: [{ title: '', description: '', technologies: '' }],
        internships: [{ company: '', city: '', duration: '', tasks: '' }],
        certifications: [{ name: '', organization: '', year: '' }],
        achievements: '',
        extracurricular: '',
    })

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
    const handleAddSkills = () => {
   
    };
    const handleAddEducation = () => {
      setFormData({
        ...formData,
        education: [...formData.education, { course: '', university: '', city: '' ,startyear:'',endyear:'',percent:''}],
      });
    };
  const handleAddProject = () => {
    setFormData({
      ...formData,
      projects: [...formData.projects, { title: '', description: '', technologies: '' }],
    });
  };

  const handleAddInternship = () => {
    setFormData({
      ...formData,
      internships: [...formData.internships, { company: '', city: '', duration: '', tasks: '' }],
    });
  };

  const handleAddCertification = () => {
    setFormData({
      ...formData,
      certifications: [...formData.certifications, { name: '', organization: '', year: '' }],
    });
  };
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Form Data Submitted:', formData);
      // You can also send the form data to your server here
    };
    return(
      <>
      <h2 className="text-2xl font-bold mb-4 text-center">Fresher's Resume Form</h2>
        <form  className="max-w-4xl mx-auto p-8 bg-white shadow-md rounded-lg" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label className="block">Full Name :</label>
            <input 
            type="text"
            name="name"
            value={formData.name}
            required
            onChange={handleChange}
            placeholder="enter your full name"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
             <label className="block">Email Id :</label>
            <input 
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="enter your email id"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
             <label className="block">Phone No.:</label>
            <input 
            type="num"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="enter your phone no."
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
             <label className="block">linkedIn:</label>
            <input 
            type="url"
            name="linkedIn"
            value={formData.linkedIn}
            onChange={handleChange}
            required
            placeholder="enter your linkedIn Id"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
             <label className="block">Github :</label>
            <input 
            type="url"
            name="github"
            value={formData.github}
            onChange={handleChange}
            placeholder="enter your github link "
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
            </div>
            <h2 className="text-2xl font-bold mt-8 mb-4">Objective</h2>
            <label className="block" >Objective :</label>
            <textarea 
            type="text"
            name="objective"
            value={formData.objective}
            onChange={handleChange}
            placeholder="enter about you"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
            <h2 className="text-2xl font-bold mt-8 mb-4">Education</h2>
      {formData.education.map((education, index) => (
        <div key={index} className="mb-4 p-4 border border-gray-300 rounded-lg" >
          <label className="block">
           Education course :
            <input
              type="text"
              name="course"
              value={education.course}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </label>
          <label className="block">
            University :
            <input
              type="text"
              name="university"
              value={education.university}
              //onChange={(e) => handleProjectChange(index, e)}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            ></input>
          </label>
          <label className="block">
            City :
            <input
              type="text"
              name="city"
              value={education.city}
             // onChange={(e) => handleProjectChange(index, e)}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </label>
          <label className="block">
           Start Year :
            <input
              type="date"
              name="startyear"
              value={education.startyear}
             // onChange={(e) => handleProjectChange(index, e)}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </label>
          <label className="block">
           End Year :
            <input
              type="date"
              name="endyear"
              value={education.endyear}
             // onChange={(e) => handleProjectChange(index, e)}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </label>
          <label className="block">
            Percent :
            <input
              type="percent"
              name="Percent"
              value={education.percent}
             // onChange={(e) => handleProjectChange(index, e)}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </label>
        </div>
      ))}
       <button
        type="button"
        onClick={handleAddEducation}
        className="mb-4 p-2 bg-blue-500 text-white rounded-md"
      >
        Add Education
      </button>
       <h2 className="text-2xl font-bold mt-8 mb-4">Skills</h2>
      {formData.education.map((skills, index) => (
        <div key={index} className="mb-4 p-4 border border-gray-300 rounded-lg"
        multiple={true}>
          <label className="block">
           programmingLanguages :
            <select
              type="text"
              name="course"
              value={skills.programmingLanguages}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            >
              <option value=''>Select languages</option>
              <option>C</option>
              <option>C++</option>
              <option>JAVA</option>
              <option>PYTHON</option>
              <option>RUBY</option>
              <option>JAVASRIPT</option>
              <option>NODEJS</option>
              <option>C#</option>
              <option>PHP</option>
              <option>TypeScript</option>
              <option>SQL</option>
              </select>
          </label>
          <button
        type="button"
        onClick={handleAddSkills}
        className="mb-4 p-2 bg-blue-500 text-white rounded-md"
      >
        Add
      </button>
          <label className="block">
            frameworks :
            <select
              type="text"
              name="frameworks"
              value={skills.frameworks}
              //onChange={(e) => handleProjectChange(index, e)}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              >
                <option value=''>Select frameworks</option>
              <option>React</option>
              <option>Angular</option>
              <option>Vue.js</option>
              <option>Express.js</option>
              <option>Node.js</option>
              <option>Django</option>
              <option>NODEJS</option>
              <option>Next.js</option>
              <option>Tornado</option>
              <option>Flask</option>
              <option>ASP.NET</option>
              <option>Hibernate</option>
              <option>Blazor</option>
              <option>Ruby on Rails</option>
              <option>Sinatra</option>
              <option>Spring Boot</option>
              <option>Laravel</option>
              <option>Rocket</option>
              </select>
          </label>
          <button
        type="button"
        className="mb-4 p-2 bg-blue-500 text-white rounded-md"
      >
        Add
      </button>
          <label className="block">
           Databases:
            <select
              type="text"
              name="databases"
              value={skills.databases}
             // onChange={(e) => handleProjectChange(index, e)}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              >
              <option value=''>Select databases</option>
              <option >MySQL</option>
              <option>PostgreSQL</option>
              <option>SQLite</option>
              <option>Microsoft SQL Server</option>
              <option>RUBY</option>
              <option>Oracle Database</option>
              <option>MongoDB</option>
              <option>Firebase Firestore</option>
              <option>Cassandra</option>
              <option>ArangoDB</option>
              <option>Neo4j</option>
              <option>Neo4j</option>
              <option>Redis</option>
              <option>CouchDB</option>
              </select>
          </label>
        <button
        type="button"
        className="mb-4 p-2 bg-blue-500 text-white rounded-md"
      >
        Add
      </button>
          <label className="block">
            Tools :
            <select
              type="text"
              name="tools"
              value={skills.tools}
             // onChange={(e) => handleProjectChange(index, e)}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              > 
            <option value=''>Select tools</option>
            <option >GitHub</option>
            <option>GitLab</option>
            <option>Bitbucket</option>
            <option>Visual Studio Code</option>
            <option> IntelliJ IDEA</option>
            <option>PyCharm</option>
            <option>Eclipse</option>
            <option>Sublime Text</option>
            <option>Slack</option>
            <option>Docker</option>
            <option>Jenkins</option>
            <option>CircleCI</option>
            <option>Redis</option>
            <option>GitHub Actions</option>
            <option>Trello</option>
            <option>Mocha</option>
            <option>Parcel</option>
            <option>PyTest</option>
            <option>webpack</option>
            </select>
          </label>
          <button
        type="button"
        className="mb-4 p-2 bg-blue-500 text-white rounded-md"
      >
        Add
      </button>
          <label className="block">
            Other :
            <input
              type="text"
              name="other"
              value={skills.other}
             // onChange={(e) => handleProjectChange(index, e)}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </label>
          <button
        type="button"
        className="mb-4 p-2 bg-blue-500 text-white rounded-md"
      >
        Add
      </button>
        </div>
      ))}
      <h2 className="text-2xl font-bold mt-8 mb-4">Projects</h2>
      {formData.projects.map((project, index) => (
        <div key={index} className="mb-4 p-4 border border-gray-300 rounded-lg">
          <label className="block">
            Project Title:
            <input
              type="text"
              name="title"
              value={project.title}
              // onChange={(e) => handleProjectChange(index, e)}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </label>
          <label className="block">
            Description:
            <textarea
              name="description"
              value={project.description}
              // onChange={(e) => handleProjectChange(index, e)}
               className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            ></textarea>
          </label>
          <label className="block">
            Technologies:
            <input
              type="text"
              name="technologies"
              value={project.technologies}
               //onChange={(e) => handleProjectChange(index, e)}
               className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </label>
        </div>
      ))}
      <button
        type="button"
         onClick={handleAddProject}
         className="mb-4 p-2 bg-blue-500 text-white rounded-md"
      >
        Add Another Project
      </button>

      <h2 className="text-2xl font-bold mt-8 mb-4">Experience/Internships</h2>
      {formData.internships.map((internship, index) => (
        <div key={index} className="mb-4 p-4 border border-gray-300 rounded-lg">
          <label className="block">
            Company:
            <input
              type="text"
              name="company"
              value={internship.company}
              // onChange={(e) => handleInternshipChange(index, e)}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </label>
          <label className="block">
            City:
            <input
              type="text"
              name="city"
              value={internship.city}
              // onChange={(e) => handleInternshipChange(index, e)}
               className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </label>
          <label className="block">
            Duration:
            <input
              type="text"
              name="duration"
              value={internship.duration}
              // onChange={(e) => handleInternshipChange(index, e)}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </label>
          <label className="block">
            Specific Tasks/Projects:
            <textarea
              name="tasks"
              value={internship.tasks}
              // onChange={(e) => handleInternshipChange(index, e)}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            ></textarea>
          </label>
        </div>
      ))}
      <button
        type="button"
         onClick={handleAddInternship}
        className="mb-4 p-2 bg-blue-500 text-white rounded-md"
      >
        Add Another Internship
      </button>

      <h2 className="text-2xl font-bold mt-8 mb-4">Certifications</h2>
      {formData.certifications.map((certification, index) => (
        <div key={index} className="mb-4 p-4 border border-gray-300 rounded-lg">
          <label className="block">
            Certification Name:
            <input
              type="text"
              name="name"
              value={certification.name}
              // onChange={(e) => handleCertificationChange(index, e)}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </label>
          <label className="block">
            Issuing Organization:
            <input
              type="text"
              name="organization"
              value={certification.organization}
              // onChange={(e) => handleCertificationChange(index, e)}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </label>
          <label className="block">
            Year:
            <input
              type="text"
              name="year"
              value={certification.year}
             // onChange={(e) => handleCertificationChange(index, e)}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </label>
        </div>
      ))}
      <button
        type="button"
         onClick={handleAddCertification}
        className="mb-4 p-2 bg-blue-500 text-white rounded-md"
      >
        Add Another Certification
      </button>

      <h2 className="text-2xl font-bold mt-8 mb-4">Achievements</h2>
      <label className="block">
        Achievements:
        <textarea
          name="achievements"
          value={formData.achievements}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
        ></textarea>
      </label>
      <h2 className="text-2xl font-bold mt-8 mb-4">Extracurricular Activities</h2>
      <label className="block">
        Extracurricular Activities:
        <textarea
          name="extracurricular"
          value={formData.extracurricular}
         onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
        ></textarea>
      </label>

      {/* <h2 className="text-2xl font-bold mt-8 mb-4">References</h2>
      <label className="block">
        Available upon request.
      </label> */}

      <button
        type="submit"
        className="mt-8 p-2 bg-green-500 text-white rounded-md w-full"
      >
        Submit
      </button>
        </form>
        </>
    )
}
export default Fresher;
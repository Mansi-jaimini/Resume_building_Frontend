import React from 'react';

function ResumeReview() {
  return (
    <div className="container mx-auto p-5">
      <div className="resume_review h-[11.7in] w-[8.3in] p-6 border rounded-lg shadow-md bg-white mx-auto flex flex-col">
        <div className="flex items-center mb-5">
          <div className="w-1/4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-32 w-24 border border-gray-300"
              viewBox="0 0 64 64"
              preserveAspectRatio="xMidYMid meet"
            >
              <g>
                <path fill="#231F20" d="M62.242,47.758l0.014-0.014c-5.847-4.753-12.84-8.137-20.491-9.722C44.374,35.479,46,31.932,46,28
		c1.657,0,3-1.343,3-3v-2c0-0.886-0.391-1.673-1-2.222V12c0-6.627-5.373-12-12-12h-8c-6.627,0-12,5.373-12,12v8.778
		c-0.609,0.549-1,1.336-1,2.222v2c0,1.657,1.343,3,3,3c0,3.932,1.626,7.479,4.236,10.022c-7.652,1.586-14.646,4.969-20.492,9.722
		l0.014,0.014C0.672,48.844,0,50.344,0,52v8c0,2.211,1.789,4,4,4h56c2.211,0,4-1.789,4-4v-8C64,50.344,63.328,48.844,62.242,47.758z
		 M20,28v-1c0-0.553-0.447-1-1-1h-1c-0.553,0-1-0.447-1-1v-2c0-0.553,0.447-1,1-1h1c0.553,0,1-0.447,1-1v-1v-1c0-2.209,1.791-4,4-4
		c2.088,0,3.926-1.068,5-2.687C30.074,13.932,31.912,15,34,15h6c2.209,0,4,1.791,4,4v1v1c0,0.553,0.447,1,1,1h1c0.553,0,1,0.447,1,1
		v2c0,0.553-0.447,1-1,1h-1c-0.553,0-1,0.447-1,1v1c0,6.627-5.373,12-12,12S20,34.627,20,28z M24.285,39.678
		C26.498,41.143,29.147,42,32,42s5.502-0.857,7.715-2.322c1.66,0.281,3.297,0.63,4.892,1.084C41.355,43.983,36.911,46,31.973,46
		c-4.932,0-9.371-2.011-12.621-5.226C20.96,40.315,22.61,39.961,24.285,39.678z"/>
                <path fill="#231F20" d="M24.537,21.862c0.475,0.255,1.073,0.068,1.345-0.396C25.91,21.419,26.18,21,26.998,21
		c0.808,0,1.096,0.436,1.111,0.458C28.287,21.803,28.637,22,28.999,22c0.154,0,0.311-0.035,0.457-0.111
		c0.491-0.253,0.684-0.856,0.431-1.347C29.592,19.969,28.651,19,26.998,19c-1.691,0-2.618,0.983-2.9,1.564
		C23.864,21.047,24.063,21.609,24.537,21.862z"/>
                <path fill="#231F20" d="M34.539,21.862c0.475,0.255,1.073,0.068,1.345-0.396C35.912,21.419,36.182,21,37,21
		c0.808,0,1.096,0.436,1.111,0.458C38.289,21.803,38.639,22,39.001,22c0.154,0,0.311-0.035,0.457-0.111
		c0.491-0.253,0.684-0.856,0.431-1.347C39.594,19.969,38.653,19,37,19c-1.691,0-2.618,0.983-2.9,1.564
		C33.866,21.047,34.065,21.609,34.539,21.862z"/>
              </g>
            </svg>
          </div>
          <div className="w-3/4 text-center">
            <h1 className="text-4xl font-bold text-gray-800">John Doe</h1>
            <h2 className="text-xl text-gray-600">Python Developer</h2>
            <p className="text-gray-500">john.doe@example.com | (123) 456-7890 | LinkedIn: linkedin.com/in/johndoe</p>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-lg font-semibold border-b pb-1 text-gray-800">Summary</h3>
          <p className="text-gray-600">
            Experienced Python Developer with 5+ years in building scalable web applications. Proficient in Django, Flask, and RESTful APIs, with strong problem-solving skills.
          </p>
        </div>

        <div className="mt-5">
          <h3 className="text-lg font-semibold border-b pb-1 text-gray-800">Technical Skills</h3>
          <ul className="list-disc list-inside text-gray-600">
            <li>Languages: Python, JavaScript, SQL</li>
            <li>Frameworks: Django, Flask, React</li>
            <li>Databases: PostgreSQL, MongoDB</li>
            <li>Tools: Git, Docker, AWS</li>
            <li>Methodologies: Agile, Scrum</li>
          </ul>
        </div>

        <div className="mt-5">
          <h3 className="text-lg font-semibold border-b pb-1 text-gray-800">Professional Experience</h3>
          <div className="mb-4">
            <h4 className="font-semibold text-gray-700">Senior Python Developer</h4>
            <p className="text-gray-500">ABC Corp, New York, NY | Jan 2021 - Present</p>
            <ul className="list-disc list-inside text-gray-600">
              <li>Led the development of a high-traffic e-commerce platform using Django.</li>
              <li>Implemented automated CI/CD pipelines, reducing deployment times by 50%.</li>
              <li>Conducted code reviews, ensuring adherence to coding standards.</li>
            </ul>
          </div>
          <div className="mb-4">
            <h4 className="font-semibold text-gray-700">Python Developer</h4>
            <p className="text-gray-500">XYZ Ltd, San Francisco, CA | Jan 2018 - Dec 2020</p>
            <ul className="list-disc list-inside text-gray-600">
              <li>Developed RESTful APIs and integrated third-party services.</li>
              <li>Collaborated with UX designers to enhance user experience.</li>
              <li>Participated in Agile ceremonies and contributed to sprint planning.</li>
            </ul>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-lg font-semibold border-b pb-1 text-gray-800">Education</h3>
          <div className="text-gray-600">
            <h4 className="font-semibold">Bachelor of Science in Computer Science</h4>
            <p className="text-gray-500">University of California, Berkeley | Graduated May 2017</p>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-lg font-semibold border-b pb-1 text-gray-800">Certifications</h3>
          <ul className="list-disc list-inside text-gray-600">
            <li>Certified Python Developer - Python Institute</li>
            <li>AWS Certified Solutions Architect - Amazon</li>
            <li>Scrum Master Certification - Scrum Alliance</li>
          </ul>
        </div>
      </div>

      <div className="buttons flex justify-center mt-4 space-x-4">
        <button className="border-2 h-10 px-4 rounded-md bg-yellow-500 text-white shadow-md hover:bg-yellow-600">
          Edit Resume
        </button>
        <button className="border-2 h-10 px-4 rounded-md bg-blue-500 text-white shadow-md hover:bg-blue-600">
          Download Resume
        </button>
      </div>
    </div>
  );
}

export default ResumeReview;

// // src/About.js
// import React from 'react';

// const teamMembers = [
//   {
//     name: 'John Doe',
//     photo: 'path/to/photo1.jpg',
//     linkedin: 'https://www.linkedin.com/in/johndoe',
//     description: 'John is a skilled developer specializing in frontend technologies.',
//   },
//   {
//     name: 'Jane Smith',
//     photo: 'path/to/photo2.jpg',
//     linkedin: 'https://www.linkedin.com/in/janesmith',
//     description: 'Jane excels in backend development and database management.',
//   },
//   // Add more team members as needed
//   {
//     name: 'Alice Brown',
//     photo: 'path/to/photo3.jpg',
//     linkedin: 'https://www.linkedin.com/in/alicebrown',
//     description: 'Alice has a strong background in UI/UX design.',
//   },
//   {
//     name: 'Bob Johnson',
//     photo: 'path/to/photo4.jpg',
//     linkedin: 'https://www.linkedin.com/in/bobjohnson',
//     description: 'Bob is an expert in API development and integration.',
//   },
//   {
//     name: 'Charlie Davis',
//     photo: 'path/to/photo5.jpg',
//     linkedin: 'https://www.linkedin.com/in/charliedavis',
//     description: 'Charlie focuses on data analytics and machine learning.',
//   },
//   {
//     name: 'Eve Wilson',
//     photo: 'path/to/photo6.jpg',
//     linkedin: 'https://www.linkedin.com/in/evwilsont',
//     description: 'Eve manages project workflows and team collaboration.',
//   }
// ];

// const About = () => {
//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold text-center mb-6">Meet the Team</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {teamMembers.map((member, index) => (
//           <div key={index} className="bg-white p-4 rounded-lg shadow-md">
//             <img
//               src={member.photo}
//               alt={member.name}
//               className="w-full h-48 object-cover rounded-t-lg"
//             />
//             <div className="text-center mt-4">
//               <h2 className="text-xl font-semibold">{member.name}</h2>
//               <p className="text-gray-600">{member.description}</p>
//               <a
//                 href={member.linkedin}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-blue-500 mt-2 inline-block"
//               >
//                 LinkedIn Profile
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="mt-12 text-center">
//         <h2 className="text-2xl font-bold mb-4">Project Description</h2>
//         <p className="text-gray-700">
//           Our project is a Chat Bot designed to assist students with information about colleges, their pincodes, and establishment years. This chatbot aims to simplify the process of finding relevant educational details and answering queries about institutions.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default About;

// src/About.js
import React from 'react';
import './About.css'; // Import a CSS file for custom styles
const teamMembers = [
    {
      name: 'Aryan',
      photo: 'path/to/photo1.jpg',
      linkedin: 'https://www.linkedin.com/in/johndoe',
      description: 'Aryan is a skilled developer specializing in DataScience technologies.',
    },
    {
      name: 'Prince',
      photo: 'path/to/photo2.jpg',
      linkedin: 'https://www.linkedin.com/in/janesmith',
      description: 'Jane excels in backend development and database management.',
    },
    // Add more team members as needed
    {
      name: 'Hanshul',
      photo: 'path/to/photo3.jpg',
      linkedin: 'https://www.linkedin.com/in/alicebrown',
      description: 'Alice has a strong background in UI/UX design.',
    },
    {
      name: 'Ajay Bhaskar',
      photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc0I8mx4049IxECuE0WPQyAuWS8q5tMu4o8Q&s',
      linkedin: 'https://www.linkedin.com/in/bobjohnson',
      description: 'Ajay Bhaskar is an expert in Full Stack Development Using MERN',
    },
    {
      name: 'Mahesh',
      photo: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSBnDOhJoKGTLWetfGZajHJ5AbQKAprUQ4WsEpQtEs53NYC0OJD',
      linkedin: 'https://www.linkedin.com/in/charliedavis',
      description: 'Mahesh focuses on Web Development And API Integration',
    },
    {
      name: 'Eve Wilson',
      photo: 'https://upload.wikimedia.org/wikipedia/en/2/27/Kushi_Theatrical_Poster.jpg',
      linkedin: 'https://www.linkedin.com/in/evwilsont',
      description: 'Eve manages project workflows and team collaboration.',
    }
  ];

const About = () => {
  return (
    <div className="about-container bg-gray-100 p-8">
      <h1 className="about-title">Meet the Team</h1>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <img
              src={member.photo}
              alt={member.name}
              className="member-photo"
            />
            <div className="member-info">
              <h2 className="member-name">{member.name}</h2>
              <p className="member-description">{member.description}</p>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="linkedin-link"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="project-description">
        <h2 className="description-title">Project Description</h2>
        <p className="description-text">
          Our project is a Chat Bot designed to assist students with information about colleges, their pincodes, and establishment years. This chatbot aims to simplify the process of finding relevant educational details and answering queries about institutions.
        </p>
      </div>
    </div>
  );
};

export default About;


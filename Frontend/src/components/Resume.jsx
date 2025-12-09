import React from "react";
import "daisyui/dist/full.css";
import { FaGithub, FaLinkedin, FaPhone, FaEnvelope } from "react-icons/fa";
import { jsPDF } from "jspdf";
import { useRef } from "react";

const Resume = ({ data }) => {
  const resumeRef = useRef(null);

  const handleDownloadPdf = () => {
    const doc = new jsPDF();
    
    let yPosition = 20;
    const pageHeight = doc.internal.pageSize.height;
    const margin = 20;
    const lineHeight = 6;
    const maxWidth = 170;
    
    // Helper function to add text with word wrapping
    const addWrappedText = (text, x, y, maxWidth, fontSize = 10, lineSpacing = 6) => {
      doc.setFontSize(fontSize);
      const lines = doc.splitTextToSize(text || '', maxWidth);
      doc.text(lines, x, y);
      return y + (lines.length * lineSpacing);
    };
    
    // Helper function to check if we need a new page
    const checkNewPage = (requiredSpace) => {
      if (yPosition + requiredSpace > pageHeight - margin) {
        doc.addPage();
        yPosition = margin;
      }
    };
    
    // Helper function to add section header with line
    const addSectionHeader = (title, y) => {
      doc.setFontSize(14);
      doc.setFont(undefined, 'bold');
      doc.setTextColor(40, 40, 40);
      doc.text(title, margin, y);
      
      // Add underline
      doc.setDrawColor(100, 100, 100);
      doc.setLineWidth(0.5);
      doc.line(margin, y + 2, margin + maxWidth, y + 2);
      
      return y + 12;
    };
    
    // Helper function to add bullet point
    const addBulletPoint = (text, x, y, maxWidth, fontSize = 10) => {
      doc.setFontSize(fontSize);
      doc.setFont(undefined, 'normal');
      doc.text('•', x, y);
      const lines = doc.splitTextToSize(text || '', maxWidth - 10);
      doc.text(lines, x + 8, y);
      return y + (lines.length * 5.5);
    };
    
    try {
      // Header Section - Professional styling
      doc.setFillColor(45, 55, 72); // Dark blue background
      doc.rect(0, 0, 210, 35, 'F'); // Header background
      
      doc.setTextColor(255, 255, 255); // White text
      doc.setFontSize(24);
      doc.setFont(undefined, 'bold');
      doc.text(data.personalInformation.fullName, margin, 20);
      
      doc.setFontSize(12);
      doc.setFont(undefined, 'normal');
      if (data.personalInformation.location) {
        doc.text(data.personalInformation.location, margin, 28);
      }
      
      // Contact Information in header - Fixed symbols
      doc.setFontSize(10);
      let contactY = 20;
      if (data.personalInformation.email) {
        doc.text(`Email: ${data.personalInformation.email}`, 120, contactY);
        contactY += 5;
      }
      if (data.personalInformation.phoneNumber) {
        doc.text(`Phone: ${data.personalInformation.phoneNumber}`, 120, contactY);
        contactY += 5;
      }
      if (data.personalInformation.gitHub) {
        doc.text(`GitHub: Profile Available`, 120, contactY);
        contactY += 5;
      }
      if (data.personalInformation.linkedIn) {
        doc.text(`LinkedIn: Profile Available`, 120, contactY);
      }
      
      yPosition = 50; // Start content below header
      doc.setTextColor(0, 0, 0); // Reset to black text
      
      // Summary Section
      if (data.summary) {
        checkNewPage(30);
        yPosition = addSectionHeader('PROFESSIONAL SUMMARY', yPosition);
        
        doc.setFontSize(11);
        doc.setFont(undefined, 'normal');
        yPosition = addWrappedText(data.summary, margin, yPosition, maxWidth, 11, 6);
        yPosition += 15;
      }
      
      // Skills Section - Two column layout
      if (data.skills && data.skills.length > 0) {
        checkNewPage(40);
        yPosition = addSectionHeader('CORE COMPETENCIES', yPosition);
        
        doc.setFontSize(10);
        doc.setFont(undefined, 'normal');
        
        const skillsPerColumn = Math.ceil(data.skills.length / 2);
        const leftColumnSkills = data.skills.slice(0, skillsPerColumn);
        const rightColumnSkills = data.skills.slice(skillsPerColumn);
        
        let leftY = yPosition;
        let rightY = yPosition;
        
        // Left column
        leftColumnSkills.forEach(skill => {
          leftY = addBulletPoint(`${skill.title} - ${skill.level}`, margin, leftY, 80, 10);
        });
        
        // Right column
        rightColumnSkills.forEach(skill => {
          rightY = addBulletPoint(`${skill.title} - ${skill.level}`, margin + 90, rightY, 80, 10);
        });
        
        yPosition = Math.max(leftY, rightY) + 10;
      }
      
      // Experience Section - Fixed alignment
      if (data.experience && data.experience.length > 0) {
        checkNewPage(40);
        yPosition = addSectionHeader('PROFESSIONAL EXPERIENCE', yPosition);
        
        data.experience.forEach((exp, index) => {
          checkNewPage(35);
          
          // Job title and company
          doc.setFontSize(12);
          doc.setFont(undefined, 'bold');
          doc.setTextColor(30, 30, 30);
          doc.text(`${exp.jobTitle}`, margin, yPosition);
          yPosition += 7;
          
          doc.setFontSize(11);
          doc.setFont(undefined, 'bold');
          doc.setTextColor(70, 70, 70);
          doc.text(`${exp.company}`, margin, yPosition);
          
          // Duration and location (right aligned)
          doc.setFont(undefined, 'italic');
          doc.setFontSize(10);
          doc.text(`${exp.duration}`, margin + 120, yPosition);
          yPosition += 6;
          
          doc.setFont(undefined, 'normal');
          doc.setTextColor(100, 100, 100);
          doc.text(`${exp.location}`, margin + 120, yPosition);
          yPosition += 8;
          
          // Responsibilities - Fixed alignment
          if (exp.responsibility) {
            doc.setTextColor(0, 0, 0);
            doc.setFont(undefined, 'normal');
            doc.setFontSize(10);
            yPosition = addBulletPoint(exp.responsibility, margin, yPosition, maxWidth - 5, 10);
          }
          
          yPosition += 8;
        });
      }
      
      // Education Section
      if (data.education && data.education.length > 0) {
        checkNewPage(30);
        yPosition = addSectionHeader('EDUCATION', yPosition);
        
        data.education.forEach(edu => {
          checkNewPage(20);
          
          doc.setFont(undefined, 'bold');
          doc.setFontSize(11);
          doc.setTextColor(30, 30, 30);
          doc.text(`${edu.degree}`, margin, yPosition);
          yPosition += 6;
          
          doc.setFont(undefined, 'normal');
          doc.setFontSize(10);
          doc.setTextColor(70, 70, 70);
          doc.text(`${edu.university}`, margin, yPosition);
          
          // Graduation year (right aligned)
          doc.setFont(undefined, 'italic');
          doc.text(`Class of ${edu.graduationYear}`, margin + 120, yPosition);
          yPosition += 6;
          
          doc.setTextColor(100, 100, 100);
          doc.text(`${edu.location}`, margin, yPosition);
          yPosition += 12;
        });
      }
      
      // Projects Section
      if (data.projects && data.projects.length > 0) {
        checkNewPage(30);
        yPosition = addSectionHeader('KEY PROJECTS', yPosition);
        
        data.projects.forEach(proj => {
          checkNewPage(25);
          
          doc.setFont(undefined, 'bold');
          doc.setFontSize(11);
          doc.setTextColor(30, 30, 30);
          doc.text(`${proj.title}`, margin, yPosition);
          yPosition += 7;
          
          if (proj.description) {
            doc.setFont(undefined, 'normal');
            doc.setFontSize(10);
            doc.setTextColor(0, 0, 0);
            yPosition = addWrappedText(proj.description, margin + 5, yPosition, maxWidth - 10, 10, 5.5);
          }
          
          if (proj.technologiesUsed && proj.technologiesUsed.length > 0) {
            doc.setFont(undefined, 'italic');
            doc.setFontSize(9);
            doc.setTextColor(100, 100, 100);
            yPosition = addWrappedText(`Technologies: ${proj.technologiesUsed.join(', ')}`, margin + 5, yPosition + 3, maxWidth - 10, 9, 5);
          }
          
          yPosition += 8;
        });
      }
      
      // Certifications Section
      if (data.certifications && data.certifications.length > 0) {
        checkNewPage(30);
        yPosition = addSectionHeader('CERTIFICATIONS', yPosition);
        
        data.certifications.forEach(cert => {
          checkNewPage(15);
          
          doc.setFont(undefined, 'bold');
          doc.setFontSize(10);
          doc.setTextColor(30, 30, 30);
          doc.text(`${cert.title}`, margin, yPosition);
          
          // Year (right aligned)
          doc.setFont(undefined, 'normal');
          doc.setTextColor(100, 100, 100);
          doc.text(`${cert.year}`, margin + 140, yPosition);
          yPosition += 5;
          
          doc.setFont(undefined, 'italic');
          doc.setFontSize(9);
          doc.text(`${cert.issuingOrganization}`, margin, yPosition);
          yPosition += 10;
        });
      }
      
      // Achievements Section
      if (data.achievements && data.achievements.length > 0) {
        checkNewPage(30);
        yPosition = addSectionHeader('ACHIEVEMENTS & AWARDS', yPosition);
        
        data.achievements.forEach(ach => {
          checkNewPage(20);
          
          doc.setFont(undefined, 'bold');
          doc.setFontSize(10);
          doc.setTextColor(30, 30, 30);
          doc.text(`${ach.title}`, margin, yPosition);
          
          // Year (right aligned)
          doc.setFont(undefined, 'italic');
          doc.setTextColor(100, 100, 100);
          doc.text(`${ach.year}`, margin + 140, yPosition);
          yPosition += 6;
          
          if (ach.extraInformation) {
            doc.setFont(undefined, 'normal');
            doc.setFontSize(9);
            doc.setTextColor(70, 70, 70);
            yPosition = addWrappedText(ach.extraInformation, margin + 5, yPosition, maxWidth - 10, 9, 5);
          }
          
          yPosition += 8;
        });
      }
      
      // Languages and Interests - Fixed alignment
      let hasLanguages = data.languages && data.languages.length > 0;
      let hasInterests = data.interests && data.interests.length > 0;
      
      if (hasLanguages || hasInterests) {
        checkNewPage(30);
        let startY = yPosition;
        
        if (hasLanguages) {
          doc.setFontSize(12);
          doc.setFont(undefined, 'bold');
          doc.setTextColor(40, 40, 40);
          doc.text('LANGUAGES', margin, yPosition);
          
          // Add underline for Languages
          doc.setDrawColor(100, 100, 100);
          doc.setLineWidth(0.5);
          doc.line(margin, yPosition + 2, margin + 70, yPosition + 2);
          yPosition += 10;
          
          doc.setFont(undefined, 'normal');
          doc.setFontSize(10);
          doc.setTextColor(0, 0, 0);
          const languagesText = data.languages.map(lang => lang.name).join(' • ');
          yPosition = addWrappedText(languagesText, margin, yPosition, 70, 10, 5.5);
        }
        
        if (hasInterests) {
          let interestsY = startY;
          
          doc.setFontSize(12);
          doc.setFont(undefined, 'bold');
          doc.setTextColor(40, 40, 40);
          doc.text('INTERESTS', margin + 100, interestsY);
          
          // Add underline for Interests
          doc.setDrawColor(100, 100, 100);
          doc.setLineWidth(0.5);
          doc.line(margin + 100, interestsY + 2, margin + 170, interestsY + 2);
          interestsY += 10;
          
          doc.setFont(undefined, 'normal');
          doc.setFontSize(10);
          doc.setTextColor(0, 0, 0);
          const interestsText = data.interests.map(interest => interest.name).join(' • ');
          addWrappedText(interestsText, margin + 100, interestsY, 70, 10, 5.5);
        }
        
        yPosition = Math.max(yPosition, startY + 25);
      }
      
      // Save the PDF
      doc.save(`${data.personalInformation.fullName}_Professional_Resume.pdf`);
      
    } catch (error) {
      console.error("Error generating PDF:", error);
      alert("There was an error generating the PDF. Please try again.");
    }
  };

  return (
    <>
      <div
        ref={resumeRef}
        className="max-w-4xl  mx-auto shadow-2xl rounded-lg p-8 space-y-6 bg-base-100 text-base-content border border-gray-200 dark:border-gray-700 transition-all duration-300"
      >
        {/* Header Section */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold text-primary">
            {data.personalInformation.fullName}
          </h1>
          <p className="text-lg text-gray-500">
            {data.personalInformation.location}
          </p>

          <div className="flex justify-center space-x-4 mt-2">
            {data.personalInformation.email && (
              <a
                href={`mailto:${data.personalInformation.email}`}
                className="flex items-center text-secondary hover:underline"
              >
                <FaEnvelope className="mr-2" /> {data.personalInformation.email}
              </a>
            )}
            {data.personalInformation.phoneNumber && (
              <p className="flex items-center text-gray-500">
                <FaPhone className="mr-2" />{" "}
                {data.personalInformation.phoneNumber}
              </p>
            )}
          </div>

          <div className="flex justify-center space-x-4 mt-2">
            {data.personalInformation.gitHub && (
              <a
                href={data.personalInformation.gitHub}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-700 flex items-center"
              >
                <FaGithub className="mr-2" /> GitHub
              </a>
            )}
            {data.personalInformation.linkedIn && (
              <a
                href={data.personalInformation.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 flex items-center"
              >
                <FaLinkedin className="mr-2" /> LinkedIn
              </a>
            )}
          </div>
        </div>

        <div className="divider"></div>

        {/* Summary Section */}
        <section>
          <h2 className="text-2xl font-semibold text-secondary">Summary</h2>
          <p className="text-gray-700 dark:text-gray-300">{data.summary}</p>
        </section>

        <div className="divider"></div>

        {/* Skills Section */}
        <section>
          <h2 className="text-2xl font-semibold text-secondary">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-2">
            {data.skills.map((skill, index) => (
              <div
                key={index}
                className="badge badge-outline badge-lg px-4 py-2"
              >
                {skill.title} -{" "}
                <span className="ml-1 font-semibold">{skill.level}</span>
              </div>
            ))}
          </div>
        </section>

        <div className="divider"></div>

        {/* Experience Section */}
        <section>
          <h2 className="text-2xl font-semibold text-secondary">Experience</h2>
          {data.experience.map((exp, index) => (
            <div
              key={index}
              className="mb-4 p-4 rounded-lg shadow-md bg-base-200 border border-gray-300 dark:border-gray-700"
            >
              <h3 className="text-xl font-bold">{exp.jobTitle}</h3>
              <p className="text-gray-500">
                {exp.company} | {exp.location}
              </p>
              <p className="text-gray-400">{exp.duration}</p>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                {exp.responsibility}
              </p>
            </div>
          ))}
        </section>

        <div className="divider"></div>

        {/* Education Section */}
        <section>
          <h2 className="text-2xl font-semibold text-secondary">Education</h2>
          {data.education.map((edu, index) => (
            <div
              key={index}
              className="mb-4 p-4 rounded-lg shadow-md bg-base-200 border border-gray-300 dark:border-gray-700"
            >
              <h3 className="text-xl font-bold">{edu.degree}</h3>
              <p className="text-gray-500">
                {edu.university}, {edu.location}
              </p>
              <p className="text-gray-400">
                🎓 Graduation Year: {edu.graduationYear}
              </p>
            </div>
          ))}
        </section>

        <div className="divider"></div>

        {/* Certifications Section */}
        <section>
          <h2 className="text-2xl font-semibold text-secondary">
            Certifications
          </h2>
          {data.certifications.map((cert, index) => (
            <div
              key={index}
              className="mb-4 p-4 rounded-lg shadow-md bg-base-200 border border-gray-300 dark:border-gray-700"
            >
              <h3 className="text-xl font-bold">{cert.title}</h3>
              <p className="text-gray-500">
                {cert.issuingOrganization} - {cert.year}
              </p>
            </div>
          ))}
        </section>

        <div className="divider"></div>

        {/* Projects Section */}
        <section>
          <h2 className="text-2xl font-semibold text-secondary">Projects</h2>
          {data.projects.map((proj, index) => (
            <div
              key={index}
              className="mb-4 p-4 rounded-lg shadow-md bg-base-200 border border-gray-300 dark:border-gray-700"
            >
              <h3 className="text-xl font-bold">{proj.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {proj.description}
              </p>
              <p className="text-gray-500">
                🛠 Technologies: {proj.technologiesUsed.join(", ")}
              </p>
              {proj.githubLink && (
                <a
                  href={proj.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  🔗 GitHub Link
                </a>
              )}
            </div>
          ))}
        </section>

        <div className="divider"></div>

        {/* Achievements Section */}
        <section>
          <h2 className="text-2xl font-semibold text-secondary">
            Achievements
          </h2>
          {data.achievements.map((ach, index) => (
            <div
              key={index}
              className="mb-4 p-4 rounded-lg shadow-md bg-base-200 border border-gray-300 dark:border-gray-700"
            >
              <h3 className="text-xl font-bold">{ach.title}</h3>
              <p className="text-gray-500">{ach.year}</p>
              <p className="text-gray-600 dark:text-gray-300">
                {ach.extraInformation}
              </p>
            </div>
          ))}
        </section>

        <div className="divider"></div>

        {/* Languages Section */}
        <section>
          <h2 className="text-2xl font-semibold text-secondary">Languages</h2>
          <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
            {data.languages.map((lang, index) => (
              <li key={index}>{lang.name}</li>
            ))}
          </ul>
        </section>

        <div className="divider"></div>

        {/* Interests Section */}
        <section>
          <h2 className="text-2xl font-semibold text-secondary">Interests</h2>
          <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
            {data.interests.map((interest, index) => (
              <li key={index}>{interest.name}</li>
            ))}
          </ul>
        </section>
      </div>

      <section className="flex justify-center mt-4 ">
        <div onClick={handleDownloadPdf} className="btn btn-primary">
          Print
        </div>
      </section>
    </>
  );
};

export default Resume;
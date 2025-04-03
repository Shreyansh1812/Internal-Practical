import { useEffect, useState } from "react";

const ResumeTable = () => {
  const [resumes, setResumes] = useState([]);

  const fetchResumes = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/resumes");
      const data = await res.json();
      setResumes(data);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  useEffect(() => {
    fetchResumes();
  }, []);

  return (
    <table border="1">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Resume</th>
        </tr>
      </thead>
      <tbody>
        {resumes.map((resume) => (
          <tr key={resume._id}>
            <td>{resume.name}</td>
            <td>{resume.email}</td>
            <td>
              <a href={resume.resumeUrl} target="_blank" rel="noopener noreferrer">
                View Resume
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ResumeTable;

import ResumeForm from "../Komponents/ResumeForm";
import ResumeTable from "../Komponents/ResumeTable";
import { useState } from "react";

const Home = () => {
  const [refresh, setRefresh] = useState(false);

  const handleUploadSuccess = () => {
    setRefresh(!refresh);
  };

  return (
    <div>
      <h1>Resume Portal</h1>
      <ResumeForm onUpload={handleUploadSuccess} />
      <ResumeTable key={refresh} />
    </div>
  );
};

export default Home;

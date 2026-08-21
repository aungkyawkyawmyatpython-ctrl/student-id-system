import {QRCodeCanvas} from "qrcode.react";
import {BrowserRouter, Routes, Route, useParams} from "react-router-dom";
import students from "./students";

const WEBSITE_URL = "https://student-id-system-three.vercel.app";
function StudentPage(){
  const {studentId} = useParams();
  const student = students[studentId];

  if(!student){
    return <h1>Student Not Found</h1>;
  }
  return(
    <div className="page">
      <div className="student-card">
        <div className="school-header">
          <h2>VIRYA PRIVATE SCHOOL</h2>
          <p>STUDENT PROFILE</p>
        </div>
        
        <div className="student-photo">
          <img
            src = {student.photo}
            alt = {student.name}
          />
        </div>
        <h1>{student.name}</h1>
        <div className="student-id">
          {student.id}
        </div>

        <div className="information">
          <div className="info-item">
            <span className="label">CLASS</span>
            <span className="value">
              {student.className}
            </span>
          </div>
        <div className = "info-item">
          <span className = "label">STATUS</span>
          <span className = "value status">
            {student.status}
          </span>
        </div>
        </div>
        <div className="verified">
          ✓ VERIFIED STUDENT
        </div>
        <div className="qr-code">
          <QRCodeCanvas
            value = {`${WEBSITE_URL}/student/${student.id}`}
            size={150}
          />
          <p>Scan to verify student</p>
        </div>
      </div>
    </div>
  );
}

function App(){
  return(
    <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={<h1>Student ID System</h1>}
      />
      <Route
        path="/student/:studentId"
        element={<StudentPage />}
      />
    </Routes>
    </BrowserRouter>
  );
}
export default App;
import {BrowserRouter, Routes, Route, useParams} from "react-router-dom";
import students from "./students";

function StudentPage(){
  const {studentId} = useParams();
  const student = students[studentId];

  if(!student){
    return <h1>Student Not Found</h1>;
  }
  return(
    <div className="Page">
      <div className="Student-Card">
        <h2>VIRYA PRIVATE SCHOOL</h2>
        <div className="photo">
          PHOTO
        </div>
        <h1>{student.name}</h1>
        <div className="Information">
          <p>
            <strong>Student ID:</strong>
            <span>{student.id}</span>
          </p>
          <p>
            <strong>Class:</strong>
            <span>{student.className}</span>
          </p>
          <p>
            <strong>Status:</strong>
            <span>{student.status}</span>
          </p>

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
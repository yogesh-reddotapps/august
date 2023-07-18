import { Radio, Space, Divider } from "antd";
import React, { useEffect } from "react";
import { useState } from "react";
import { CheckCircleFilled } from "@ant-design/icons";
import { UploadFileIcon } from "assets/svg/icon";
import { API_BASE_URL } from "constants/ApiConstant";
import axios from "axios";
let styles = {
  files: {
    listStyle: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "13px",
    border: "1px solid lightblue",
    padding: "10px",
    borderRadius: "9px",
    background: "#0093ff0a",
  },
  uploadFile: {
    position: "absolute",
    width: "100%",
    height: "100%",
    opacity: 0,
  },

  // Add the new styles here:

  ".uploadFile::-webkit-file-upload-button": {
    visibility: "hidden",
  },

  ".uploadFile::before": {
    content: "'Drag & Drop'",
    display: "inline-block",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    cursor: "pointer",
  },

  ".uploadFile:hover::before": {
    backgroundColor: "#ccc",
  },
};
const selectedFiles = [
  {
    name: "file.pdf",
    timeStamp: "Uploaded 10 days ago",
  },
  {
    name: "file2.pdf",
    timeStamp: "Uploaded 10 days ago",
  },
];
function Submission() {
  const [assignmentType, setAssignmentType] = useState("MCQ");
  const [question, setQuestion] = useState([
    // {
    //   question:
    //     "1. What is the leading cause of construction workh5lace fatalities?",
    //   options: ["Option A", "Option B", "Option C", "Option D"],
    //   value: "Option A",
    // },
    // {
    //   question:
    //     "1. What is the leading cause of construction workh5lace fatalities?",
    //   options: ["Option A", "Option B", "Option C", "Option D"],
    //   value: "Option B",
    // },
  ]);
  const onChange = (ind, e) => {
    const updatedQuestions = [...question];
    updatedQuestions[ind] = {
      ...updatedQuestions[ind],
      value: e.target.value,
    };
    setQuestion(updatedQuestions);
  };

  useEffect(()=>{
    getSubmission();
  },[])
const getSubmission = ()=>{
  axios
.get(
  `${API_BASE_URL}/view-submission/14/16`,//assesmentId/studentId
  {
    headers: {
      "Content-Type": "application/json",
    },
  }
)
.then((res) => {
  // setmembershipRequestData(res.data);
  console.log(JSON.parse(res.data.data[0].description));
  setQuestion(JSON.parse(res.data.data[0].description));
})
.catch((error) => {
  console.log(error);
});
}
 
  return (
    <div>
      <div className="border rounded p-3 mb-4 bg-white">
        <div>
          <div>
            <div className="d-flex align-items-end flex-column">
              <h5 className="mb-2 bg-success text-white rounded px-2 py-1">
                Completed
              </h5>
            </div>
          </div>
        </div>
        <div
          style={{ background: "#fafafb" }}
          className="mb-4 rounded d-flex align-items-start w-100 p-3 justify-content-between"
        >
          <div
            style={{ gap: "10px" }}
            className="d-flex align-items-start justify-content-between w-100"
          >
            <div>
              <div>
                <img src="/img/Avatar.png" alt="..." />
              </div>
            </div>
            <div>
              <div>
                <h5 className="m-0">Student</h5>
                <h5 className="m-0 text-info">
                  Jane Cooper <img src="/img/female.png" alt="..." />{" "}
                </h5>
              </div>
            </div>
            <Divider style={{ height: "60px" }} type="vertical" />
            <div>
              <div
                style={{ width: "220px" }}
                className="d-flex justify-content-center align-items-start"
              >
                <img
                  className="mt-1"
                  height={30}
                  width={30}
                  src="/img/avatar3.png"
                  alt="img"
                />
                <div>
                  <h5 className="m-0 ml-2">Course</h5>
                  <p className="m-0 ml-2">
                    Workplace Safety and Health in Construction Sites
                  </p>
                </div>
              </div>
            </div>
            <Divider style={{ height: "60px" }} type="vertical" />
            <div>
              <div>
                <h5 className="m-0">Batch ID</h5>
                <p style={{ color: "black" }} className="m-0 text-black">
                  #WS-B1
                </p>
              </div>
            </div>
            <Divider style={{ height: "60px" }} type="vertical" />
            <div>
              <div>
                <h5 className="m-0">Assessment Title</h5>
                <p style={{ color: "black" }} className="m-0 text-black">
                  Assessment 1
                </p>
              </div>
            </div>
            <Divider style={{ height: "60px" }} type="vertical" />
            <div>
              <div>
                <h5 className="m-0">Submission Date</h5>
                <p style={{ color: "black" }} className="m-0 text-black">
                  12 May 2023
                </p>
              </div>
            </div>
            <Divider style={{ height: "60px" }} type="vertical" />
            <div>
              <div>
                <h5 className="m-0">Result</h5>
                <p style={{ color: "black" }} className="m-0 text-black">
                  25/20
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {assignmentType === "MCQ" &&
        question.map((elem, ind) => {
          return (
            <div className="border rounded mb-4 bg-white">
              <div
                className="p-3"
                style={{
                  background: "#add8e636",
                  borderTopLeftRadius: "0.625rem",
                  borderTopRightRadius: "0.625rem",
                }}
              >
                <h4 style={{ color: "#6292FC" }}>Question {ind+1}/{question.length}</h4>
                <h5 style={{ margin: 0 }}>Mark : 1</h5>
              </div>
              <div className="p-3">
                <h5>{elem.title}</h5>
              </div>
              <div className="px-4 pb-3">
                <Radio.Group
                  style={{ width: "600px" }}
                  onChange={(e) => onChange(ind, e)}
                  value={elem.choosen_option}
                >
                  <Space className="w-100" direction="vertical">
                    {elem.options.map((eleme, i) => {
                      return (
                        <div
                          className={
                            elem.correct_option === eleme ? "correctOpt" : "normalOpt"
                          }
                        >
                          <Radio disabled className="p-2" value={eleme}>
                            {i === 0 && <span className="customCircle">A</span>}
                            {i === 1 && <span className="customCircle">B</span>}
                            {i === 2 && <span className="customCircle">C</span>}
                            {i === 3 && <span className="customCircle">D</span>}
                            <h5>
                              {eleme}
                              {elem.value === eleme && (
                                <span className="tick">
                                  <CheckCircleFilled
                                    style={{ color: "#048B4A" }}
                                  />
                                </span>
                              )}
                            </h5>
                          </Radio>
                        </div>
                      );
                    })}
                  </Space>
                </Radio.Group>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Submission;

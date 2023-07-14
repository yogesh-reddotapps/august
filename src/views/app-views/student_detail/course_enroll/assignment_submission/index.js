import React, { useState } from "react";
import { Radio, Space } from "antd";
import { Divider } from "antd";
import { UploadFileIcon } from "assets/svg/icon";
const AssignmentSub = () => {
  const [type, setType] = useState("file");
  const [question, setQuestion] = useState([
    {
      question:
        "1. What is the leading cause of construction workh5lace fatalities?",
      options: ["Option A", "Option B", "Option C", "Option D"],
      value: 2,
    },
    {
      question:
        "1. What is the leading cause of construction workh5lace fatalities?",
      options: ["Option A", "Option B", "Option C", "Option D"],
      value: 3,
    },
  ]);
  const files = {
    listStyle: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: "13px",
    border: "1px solid lightblue",
    padding: "10px",
    borderRadius: "9px",
    background: "#0093ff0a",
  };
  const onChange = (ind, e) => {
    const updatedQuestions = [...question];
    updatedQuestions[ind] = {
      ...updatedQuestions[ind],
      value: e.target.value,
    };
    setQuestion(updatedQuestions);
  };
  return (
    <div>
      <div className="p-3 mb-4 bg-white">
        <div
          style={{ background: "#fafafb" }}
          className="mb-4 rounded d-flex align-items-start w-100 p-3 justify-content-between"
        >
          <div className="d-flex align-items-start justify-content-between w-50">
            {" "}
            <div>
              <div style={{ width: "250px" }}>
                <h5 className="m-0">Course</h5>
                <div className="d-flex justify-content-center align-items-center">
                  <img height={30} width={30} src="/img/avatar3.png" />
                  <p className="m-0 ml-2">
                    Workplace Safety and Health in Construction Sites
                  </p>
                </div>
              </div>
            </div>
            <Divider style={{ height: "60px" }} type="vertical" />
            <div>
              <div>
                <h5 className="m-0">Assignment</h5>
                <p style={{ color: "black" }} className="m-0 text-black">
                  Assignment 1
                </p>
              </div>
            </div>
            <Divider style={{ height: "60px" }} type="vertical" />
            <div>
              <div>
                <h5 className="m-0">Type</h5>
                <p style={{ color: "black" }} className="m-0 text-black">
                  MCQ
                </p>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div className="d-flex align-items-end flex-column">
                <h5 className="m-0 bg-success text-white rounded px-2 py-1">
                  Completed
                </h5>
                <p style={{ color: "black" }} className="m-0 text-black">
                  Since Monday, 1 Jan 2022
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {type == "Descriptive" && (
        <>
          <div className="border p-3 rounded mb-4 bg-white">
            <h5 style={{ color: "#0068B3" }}>Submission Details</h5>
            <p style={{ color: "black" }} className="text-black">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Condimentum diam orci pretium a pharetra, feugiat cursus. Dictumst
              risus, sem egestas odio cras adipiscing vulputate. Nisi, risus in
              suscipit non. Non commodo volutpat, pharetra, vel.Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Condimentum diam orci
              pretium a pharetra, feugiat cursus. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Condimentum diam orci pretium a
              pharetra, feugiat cursus. Dictumst risus, sem egestas odio cras
              adipiscing vulputate. Nisi, risus in suscipit non. Non commodo
              volutpat, pharetra, vel.Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Condimentum diam orci pretium a pharetra, feugiat
              cursus.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Condimentum diam orci pretium a pharetra, feugiat cursus. Dictumst
              risus, sem egestas odio cras adipiscing vulputate. Nisi, risus in
              suscipit non. Non commodo volutpat, pharetra, vel.Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Condimentum diam orci
              pretium a pharetra, feugiat cursus.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Condimentum diam orci pretium a
              pharetra, feugiat cursus. Dictumst risus, sem egestas odio cras
              adipiscing vulputate. Nisi, risus in suscipit non. Non commodo
              volutpat, pharetra, vel.Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Condimentum diam orci pretium a pharetra, feugiat
              cursus.
            </p>
          </div>
        </>
      )}

      {type == "file" && (
        <>
         <div className="border p-3 rounded mb-4 bg-white">
          <li key={"files 1"} className="my-3 w-50" style={files}>
            {" "}
            <UploadFileIcon /><div> files 1 <p>Uploaded 10 days ago</p></div>
          </li>
          <li key={"files 2"} className="my-3 w-50" style={files}>
            {" "}
            <UploadFileIcon /> <div> files 2 <p>Uploaded 10 days ago</p></div>
          </li></div>
        </>
      )}

      {type == "MCQ" &&
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
                <h4 style={{ color: "#6292FC" }}>Question 1/25</h4>
                <h5 style={{ margin: 0 }}>Mark : 1</h5>
              </div>
              <div className="p-3">
                <h5>{elem.question}</h5>
              </div>
              <div className="px-4 pb-3">
                <Radio.Group
                  onChange={(e) => onChange(ind, e)}
                  value={elem.options[elem.value]}
                >
                  <Space direction="vertical">
                    {elem.options.map((eleme, i) => {
                      return (
                        <Radio disabled className="p-2" value={eleme}>
                          {eleme}
                        </Radio>
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
};

export default AssignmentSub;

import { Button, Input } from "antd";
import { UploadFileIcon } from "assets/svg/icon";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
let styles = {
  files: {
    listStyle: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
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
const AwardCert = () => {
    const history = useHistory();
  const { TextArea } = Input;
  const [textareaVal, setTextareaVal] = useState("");
  const [selectedFiles, setSelectedFiles] = useState([]);
  function handleFileSelect(event) {
    const fileList = event.target.files;
    const newSelectedFiles = [];

    for (let i = 0; i < fileList.length; i++) {
      newSelectedFiles.push(fileList[i]);
    }
    //   console.log(selectedFiles)

    setSelectedFiles([...selectedFiles, newSelectedFiles[0]]);
  }
  return (
    <>
      <div className="border rounded p-3 mb-4 bg-white">
        <h5 className="text-info">Award Certificate</h5>

        <div className="mt-4 w-50">
          <h5>Course</h5>
          <Input value={"Workplace Safety and Health in Construction Sites"} />
        </div>
        <div className="mt-4 w-50">
          <h5>Student</h5>
          <Input value={"John Smith"} />
        </div>
        <div className="mt-4 w-50">
          <h5>Medium</h5>
          <Input value={"English"} />
        </div>
        <div className="mt-4 w-50">
          <h5>Course Date</h5>
          <Input value={"14 Feb, 15 Feb 2023"} />
        </div>
        <div className="mt-4 w-50">
          <h5>Remarks</h5>
          <TextArea
            rows={4}
            placeholder="Type Here ..."
            value={textareaVal}
            onChange={(e) => setTextareaVal(e.target.value)}
          />
        </div>
        <div className="mt-4 w-50">
          <h5>Upload Certificate</h5>
          <div className="mt-4">
            <div className="d-flex flex-column justify-content-center align-items-center position-relative uploaddoc">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                fill="none"
                viewBox="0 0 64 64"
              >
                <path
                  fill="#0E7CEB"
                  d="M18.57 15.51l7.86 7a2 2 0 001.33.51H56v34.9A2.93 2.93 0 0153.26 61H5.74A2.93 2.93 0 013 57.92V18a2.85 2.85 0 012.68-3h11.56a2 2 0 011.33.51z"
                ></path>
                <path fill="#D7E6EF" d="M49 57H7V3h42v54z"></path>
                <path
                  fill="#0E7CEB"
                  d="M45 23h16v-6a2 2 0 00-2-2h-6l-8 8z"
                ></path>
                <path fill="#F7FCFF" d="M14 9h42v14H14V9z"></path>
                <path
                  fill="#0E7CEB"
                  d="M25.69 15.51l7.42 7a1.8 1.8 0 001.25.51H61v34.9A2.87 2.87 0 0158.41 61H13.59A2.87 2.87 0 0111 57.92V18a2.79 2.79 0 012.53-3h10.9c.47 0 .922.184 1.26.51z"
                ></path>
                <path
                  fill="#F7FCFF"
                  d="M36 55c7.18 0 13-5.82 13-13s-5.82-13-13-13-13 5.82-13 13 5.82 13 13 13z"
                ></path>
                <path
                  fill="#D7E6EF"
                  d="M52 13H32a1 1 0 000 2h20a1 1 0 000-2zm0 4H37a1 1 0 000 2h15a1 1 0 000-2z"
                ></path>
                <path
                  fill="#44394A"
                  d="M36.5 49.28l6.72-6.72a5.501 5.501 0 00-7.78-7.78l-8.84 8.84a1.002 1.002 0 000 1.42A1 1 0 0028 45l8.84-8.84a3.5 3.5 0 114.95 4.95l-6.71 6.71a1.998 1.998 0 01-3.38-.571A2 2 0 0132.26 45L39 38.32a.5.5 0 01.71 0 .48.48 0 010 .71l-6 6a1 1 0 101.42 1.41l6-6a2.503 2.503 0 00-3.54-3.54l-6.72 6.72a4 4 0 000 5.66 4.003 4.003 0 005.66 0h-.03z"
                ></path>
              </svg>
              <h5 className="mb-0 mt-2">Drag & Drop Files Here</h5>
              <h5 className="mb-0">Or</h5>
              <h5 className="mb-0" style={{ color: "#4096ff" }}>
                Choosen File
              </h5>
              <input
                style={styles.uploadFile}
                className="uploadFile"
                type="file"
                multiple
                onChange={handleFileSelect}
              />
            </div>
            <div className="mt-4">
              {selectedFiles.length > 0 && (
                <ul>
                  {selectedFiles.map((file) => (
                    <li key={file.name} className="my-3" style={styles.files}>
                      {" "}
                      <UploadFileIcon /> {file.name}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-end mt-3">
        <Button>Cancel</Button>
        <Button
          className="bg-info text-white ml-2"
          onClick={() =>
            history.push("/app/curriculam_details/?add=certificate")
          }
        >
          {" "}
          Save
        </Button>
      </div>
    </>
  );
};

export default AwardCert;

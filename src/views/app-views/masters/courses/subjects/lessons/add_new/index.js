import React, { useState } from "react";
import { Select, Input, InputNumber, Button, Radio, Space } from "antd";
import { Link, useHistory } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { AudioUploadImage, DraggableItemDelIcon, LessonTypeArVr, LessonTypeMusic, LessonTypeQuestion, LessonTypeText, LessonTypeVideo } from "assets/svg/icon";
import axios from "axios";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
// https://edu-portal.inkapps.io/api/teacher-course-lesson_item-new
let styles = {
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

const AddNewLesson = () => {
  const history = useHistory();
  const location = useLocation();
  const [lessonType, setLessonType] = useState("0");
  const [estimateTime, setEstimateTime] = useState(0);
  const [senFileVideo, setSenFileVideo] = useState(null);
  const [senFileAudio, setSenFileAudio] = useState(null);
  const [questionTitle, setQuestionTitle] = useState(null)
  const [lessonName, setLessonName] = useState('')
  const [SendFile, setSendFile] = useState(null)
  const [notiText, setNotiText] = useState("");
  const [queOpt, setQueOpt] = useState(1);
  const [videos, setVideos] = useState([]);
  const [ar, setAr] = useState([]);
  const queryParams = new URLSearchParams(location.search);
  const course_id = queryParams.get("course_id");
  const subject_id = queryParams.get("subject_id");
  const [audioElements, setAudioElements] = useState([]);
  const [queOptions, setQueOptions] = useState([
    { text: "" },
    { text: "" },
    { text: "" },
    { text: "" },
  ]);

  const handleAudioUpload = (e) => {
    const files = e.target.files; // Get the selected file(s) from the input element
    setSenFileAudio(files);
    const audioElements = []; // Create an array to hold the audio elements

    // Loop through each selected file and create an audio element
    for (let i = 0; i < files.length; i++) {
      const file = files[i];

      // Create an audio element
      const audioElement = (
        <audio
          className="customAudio"
          key={i}
          src={URL.createObjectURL(file)} // Set the audio source to the local file URL
          controls // Enable audio controls for play, pause, etc.
          style={{ margin: "0 10px 10px 0" }} // Apply inline styles for audio element
        />
      );

      audioElements.push(audioElement); // Push the audio element to the array
    }

    setAudioElements(audioElements); // Update the state with the array of audio elements
  };
  const handleFileUpload = (e) => {
    const files = e.target.files; // Get the selected file(s) from the input element
    setSenFileVideo(files);
    const videoElements = []; // Create an array to hold the video elements
    // Loop through each selected file and create a video element
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const videoElement = (
        <video
          key={i}
          src={URL.createObjectURL(file)} // Set the video source to the local file URL
          controls // Enable video controls for play, pause, etc.
          style={{ maxWidth: "100%", margin: "0 10px 10px 0" }} // Apply inline styles for video element
        />
      );
      videoElements.push(videoElement); // Push the video element to the array
    }

    setVideos(videoElements); // Update the state with the array of video elements
  };
  const handleArUpload = (e) => {
    const files = e.target.files; // Get the selected file(s) from the input element
    setSenFileVideo(files);
    const videoElements = []; // Create an array to hold the video elements
    // Loop through each selected file and create a video element
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const videoElement = (
        <video
          key={i}
          src={URL.createObjectURL(file)} // Set the video source to the local file URL
          controls // Enable video controls for play, pause, etc.
          style={{ maxWidth: "100%", margin: "0 10px 10px 0" }} // Apply inline styles for video element
        />
      );
      videoElements.push(videoElement); // Push the video element to the array
    }

    setAr(videoElements); // Update the state with the array of video elements
  };
  const addOpt = () => {
    // const newValue = Math.max(...queOptions.map(item => item.value)) + 1;
    const newObject = { value: "" };
    setQueOptions([...queOptions, newObject]);
  };
  const deleteOption = (valueToDelete) => {
    // Use filter to create a new array excluding the object to be deleted
    const filteredArray = queOptions.filter((elem, ind) => {
      return ind !== valueToDelete;
    });
    // Update state with the filtered array
    setQueOptions(filteredArray);
  };

  const optionInputChange = (newValue, index) => {
    const updatedOptions = [...queOptions];
    updatedOptions[index] = { text: newValue };
    setQueOptions(updatedOptions);
  };

  const SaveLesson = async () => {
    const formData = new FormData();
    let lesContentData;
    if (lessonType==0) {
      lesContentData=notiText;
    }
    if (lessonType==1) {
      lesContentData=senFileVideo
    }
    if (lessonType==2) {
      lesContentData=senFileAudio
    }
    if (lessonType==3) {
     const queData = {title:questionTitle, image:'placeholder', options:queOptions, correct_option:1,}
      lesContentData=queData
    }
    formData.append("lesson_content", lesContentData);
    formData.append("lesson_type", 0);
    formData.append("estimated_time", estimateTime);
    formData.append("subject_id", subject_id);
    formData.append("course_id",course_id);
    formData.append("board_id", 2);
    formData.append("lesson_name", lessonName);
    const dataObject = {
      lesson_content: SendFile,
      lesson_type: 0,
      estimated_time: estimateTime,
      subject_id: 15,
      course_id: 23,
      board_id: 2,
      lesson_name: lessonName
    };
    
    console.log("dataObject",dataObject);
    let res1 = await axios.post('http://18.140.159.50:3333/api/admin-new-lesson',formData)
    console.log(res1);
    // axios
    //   .post(
    //     "https://edu-portal.inkapps.io/api/teacher-course-lesson_item-new",
    //     formData,
    //     {
    //       headers: {
    //         Authorization:
    //           "Bearer Y2xndnYwcmZsMDAwY3h1OWlmcXpxMW56aA.ChtwxTL_hPLQO_hgHjxhg_h25RjeBSM1L5vXrY65v8wqjf4pAiW_xK7t0xpG",
    //       },
    //     }
    //   )
    //   .then((response) => {
    //     console.log(response.data);
    //   });

    // history.push("/app/masters/courses/subjects/lessons/?add=subject");
  };

  return (
    <>
      <div className="border rounded p-3 mb-4 bg-white">
        <h5 className="text-info mb-4">Add New Lesson</h5>
        <div className="mt-4 w-50">
          <h5>Lesson Name</h5>
          <Input placeholder="Lesson Name" value={lessonName} onChange={(e)=>setLessonName(e.target.value)}/>
        </div>
        <div className="mt-4">
          <h5>Estimated Time (Mins)</h5>
          <InputNumber
            className="w-50"
            value={estimateTime}
            onChange={(e) => setEstimateTime(e)}
          />
        </div>
        <div className="mt-4">
          <h5>Lesson Type</h5>
          <Select
            className="w-50"
            defaultValue={<div className="d-flex align-items-center"> <LessonTypeText /> Text</div>}
            onChange={(val) => setLessonType(val)}
            options={[
              {
                value: "0",
                label: (<div className="d-flex align-items-center"> <LessonTypeText /> Text</div>),
              },
              {
                value: "1",
                label: (<div className="d-flex align-items-center"> <LessonTypeVideo /> Video</div>),
              },
              {
                value: "2",
                label: (<div className="d-flex align-items-center"> <LessonTypeMusic /> Music</div>),
              },
              {
                value: "3",
                label: (<div className="d-flex align-items-center"> <LessonTypeQuestion /> Question</div>),
              },
              {
                value: "4",
                label: (<div className="d-flex align-items-center"> <LessonTypeArVr /> AR/VR</div>),
              },
            ]}
          />
        </div>
      </div>
      {lessonType === "0" && (
        <div className="border rounded p-3 mb-4 bg-white">
          <h5 className="mb-4"><div className="d-flex align-items-center"> <LessonTypeText /> Text</div></h5>
          <ReactQuill
            style={{ height: "200px", marginBottom: "49px" }}
            theme="snow"
            value={notiText}
            onChange={setNotiText}
          />
        </div>
      )}
      {lessonType === "1" && (
        <div className="border rounded p-3 mb-4 bg-white">
          <h5 className="mb-4"><div className="d-flex align-items-center"> <LessonTypeVideo /> Video</div></h5>
          {videos.length != 0 ? (
            <>
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  height: "450px",
                  justifyContent: "center",
                }}
              >
                {videos}
              </div>
              <div className="my-2 d-flex justify-content-center">
                <Button className="text-white bg-info changeVideo">
                  <input
                    style={styles.uploadFile}
                    className="uploadFile"
                    type="file"
                    multiple
                    onChange={handleFileUpload}
                  />
                  Change Video
                </Button>
              </div>
            </>
          ) : (
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
                onChange={handleFileUpload}
              />
            </div>
          )}
        </div>
      )}
      {lessonType === "2" && (
        <div className="border rounded p-3 mb-4 bg-white">
          <h5 className="mb-4"><div className="d-flex align-items-center"> <LessonTypeMusic /> Music</div></h5>
          {audioElements.length == 0 ? (
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
                onChange={handleAudioUpload}
              />
            </div>
          ) : (
            <>
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  height: "450px",
                  justifyContent: "space-around",
                }}
                className="flex-column align-items-center"
              >
                <AudioUploadImage />
                {audioElements} {/* Render the audio elements */}
              </div>
              <div className="my-2 d-flex justify-content-center">
                <Button className="text-white bg-info changeVideo">
                  <input
                    style={styles.uploadFile}
                    className="uploadFile"
                    type="file"
                    multiple
                    onChange={handleAudioUpload}
                  />
                  Change Audio
                </Button>
              </div>
            </>
          )}
        </div>
      )}

      {lessonType === "3" && (
        <div className="border rounded p-3 mb-4 bg-white">
          <div className="w-50">
            <h5><div className="d-flex align-items-center"> <LessonTypeQuestion /> Question</div></h5>
            <Input className="my-4" value={questionTitle} onChange={(e)=>setQuestionTitle(e.target.value)} placeholder="Question Title" />
            <Radio.Group
              onChange={(e) => setQueOpt(e.target.value)}
              value={queOpt}
              className="d-flex flex-column w-100"
            >
              {queOptions &&
                queOptions.map((elem, index) => {
                  return (
                    <Radio className="my-2 customradioInput" value={index}>
                      <Input
                        onChange={(e) =>
                          optionInputChange(e.target.value, index)
                        }
                        value={elem.text}
                        placeholder={`Option ${index + 1}`}
                      />
                      <Button
                        onClick={() => deleteOption(index)}
                        className="p-0 ml-2"
                      >
                        <DraggableItemDelIcon twoToneColor={"#ED2939"} />
                      </Button>
                    </Radio>
                  );
                })}
            </Radio.Group>
          </div>
          <h5
            style={{ cursor: "pointer" }}
            className="my-2 text-info"
            onClick={addOpt}
          >
            {" "}
            + Add New Option{" "}
          </h5>
        </div>
      )}
      {lessonType === "4" && (
        <div className="border rounded p-3 mb-4 bg-white">
          <h5 className="mb-4"><div className="d-flex align-items-center"> <LessonTypeVideo /> AR/VR</div></h5>
          {ar.length != 0 ? (
            <>
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  height: "450px",
                  justifyContent: "center",
                }}
              >
                {ar}
              </div>
              <div className="my-2 d-flex justify-content-center">
                <Button className="text-white bg-info changeVideo">
                  <input
                    style={styles.uploadFile}
                    className="uploadFile"
                    type="file"
                    multiple
                    onChange={handleFileUpload}
                  />
                  Change Video
                </Button>
              </div>
            </>
          ) : (
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
                onChange={handleArUpload}
              />
            </div>
          )}
        </div>
      )}
      <div className="d-flex mt-3 justify-content-end">
        <Button>Cancel</Button>
        <Button className="text-white bg-info ml-3" onClick={SaveLesson}>
          {" "}
          Save{" "}
        </Button>
      </div>
    </>
  );
};

export default AddNewLesson;

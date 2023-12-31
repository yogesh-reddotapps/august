import React, { useEffect, useState } from "react";
import { Select, Input, InputNumber, Button, Radio, Space, Modal } from "antd";
import { Link, useHistory } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import {
  AudioUploadImage,
  DraggableItemDelIcon,
  LessonTypeArVr,
  LessonTypeMusic,
  LessonTypeQuestion,
  LessonTypeText,
  LessonTypeVideo,
} from "assets/svg/icon";
import axios from "axios";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { API_BASE_URL } from "constants/ApiConstant";
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
  const [questionTitle, setQuestionTitle] = useState(null);
  const [lessonName, setLessonName] = useState("");
  const [SendFile, setSendFile] = useState(null);
  const [notiText, setNotiText] = useState("");
  const [queOpt, setQueOpt] = useState(1);
  const [videos, setVideos] = useState([]);
  const [ar, setAr] = useState([]);
  const queryParams = new URLSearchParams(location.search);
  const lesson_id = queryParams.get("lesson_id");
  const course_id = queryParams.get("course_id");
  const subject_id = queryParams.get("subject_id");
  const [audioElements, setAudioElements] = useState([]);
  const [successModal, setSuccessModal] = useState(false);
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

  const uploadApi = async (file) => {
    try {
      const formData = new FormData();
      formData.append("file", file);
  
      const response = await axios.post(`${API_BASE_URL}/upload`, formData);
      console.log('Upload successful!', response.data);
      return response.data.url;
      // Handle successful response here
    } catch (error) {
      console.error('Upload failed!', error);
      // Handle error here
    }
  };
  

  const SaveLesson = async () => {
    const formData = new FormData();
    let lesContentData;
    if (lessonType == 0) {
      lesContentData = notiText;
    }
    if (lessonType == 1) {
      lesContentData =await uploadApi(senFileVideo[0])
      console.log(lesContentData);
      // lesContentData = senFileVideo[0];
    }
    if (lessonType == 2) {
      lesContentData = await uploadApi(senFileAudio[0]);
      // lesContentData = senFileAudio[0];
    }
    if (lessonType == 3) {
      const queData = {
        title: questionTitle,
        image: "placeholder",
        options: queOptions,
        correct_option: 1,
      };
      lesContentData = queData;
    }
    formData.append("lesson_content", lesContentData);
    formData.append("lesson_type", lessonType);
    formData.append("estimated_time", estimateTime);
    formData.append("subject_id", subject_id);
    formData.append("course_id", course_id);
    formData.append("board_id", 2);
    formData.append("lesson_name", lessonName);
    // console.log(senFileVideo);
    // const dataObject = {
    //   lesson_content: SendFile,
    //   lesson_type: lessonType,
    //   estimated_time: estimateTime,
    //   subject_id: 15,
    //   course_id: 23,
    //   board_id: 2,
    //   lesson_name: lessonName
    // };

    // console.log("dataObject",dataObject);
    let res1 = await axios.post(
      `${API_BASE_URL}/admin-new-lesson`,
      formData
    );
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
    setSuccessModal(true);
    setTimeout(() => {
      setSuccessModal(false);
      history.goBack();
    }, 1200);
  };
  const getLesson = async (lesson_id,subject_id) => {
    const res1 = await axios.post(`${API_BASE_URL}/view-lesson`,{
      "lesson_id": lesson_id,
      "subject_id": subject_id
  })
  const data = res1.data.data[0];
  setLessonName(data.lesson_name)
  setEstimateTime(data.estimated_time)
  setLessonType(data.lesson_type.toString())
  if(data.lesson_type===2){
  const audioElement = (
    <audio
      className="customAudio"
      // key={i}
      src={data.lesson_content} // Set the audio source to the local file URL
      controls // Enable audio controls for play, pause, etc.
      style={{ margin: "0 10px 10px 0" }} // Apply inline styles for audio element
    />
  );

  setAudioElements(audioElement)
  }
  
  if(data.lesson_type===1){
   const  videoElements =  <video
          // key={i}
          src={data.lesson_content} // Set the video source to the local file URL
          controls // Enable video controls for play, pause, etc.
          style={{ maxWidth: "100%", margin: "0 10px 10px 0" }} // Apply inline styles for video element
        />
    
    setVideos(videoElements); // Update
  }
  }
  useEffect(() => {
    getLesson(lesson_id,subject_id);
  }, []);

  return (
    <>
      <div className="border rounded p-3 mb-4 bg-white">
        <h5 className="text-info mb-4">
          {lesson_id ? "Edit" : "Add New"} Lesson
        </h5>
        <div className="mt-4 w-50">
          <h5>Lesson Name</h5>
          <Input
            placeholder="Lesson Name"
            value={lessonName}
            onChange={(e) => setLessonName(e.target.value)}
          />
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
            value={lessonType}
            defaultValue={
              <div className="d-flex align-items-center">
                {" "}
                <LessonTypeText /> Text
              </div>
            }
            onChange={(val) => setLessonType(val)}
            options={[
              {
                value: "0",
                label: (
                  <div className="d-flex align-items-center">
                    {" "}
                    <LessonTypeText /> Text
                  </div>
                ),
              },
              {
                value: "1",
                label: (
                  <div className="d-flex align-items-center">
                    {" "}
                    <LessonTypeVideo /> Video
                  </div>
                ),
              },
              {
                value: "2",
                label: (
                  <div className="d-flex align-items-center">
                    {" "}
                    <LessonTypeMusic /> Audio
                  </div>
                ),
              },
              {
                value: "3",
                label: (
                  <div className="d-flex align-items-center">
                    {" "}
                    <LessonTypeQuestion /> Question
                  </div>
                ),
              },
              {
                value: "4",
                label: (
                  <div className="d-flex align-items-center">
                    {" "}
                    <LessonTypeArVr /> AR/VR
                  </div>
                ),
              },
            ]}
          />
        </div>
      </div>
      {lessonType === "0" && (
        <div className="border rounded p-3 mb-4 bg-white">
          <h5 className="mb-4">
            <div className="d-flex align-items-center">
              {" "}
              <LessonTypeText /> Text
            </div>
          </h5>
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
          <h5 className="mb-4">
            <div className="d-flex align-items-center">
              {" "}
              <LessonTypeVideo /> Video
            </div>
          </h5>
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
          <h5 className="mb-4">
            <div className="d-flex align-items-center">
              {" "}
              <LessonTypeMusic /> Audio
            </div>
          </h5>
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
            <h5>
              <div className="d-flex align-items-center">
                {" "}
                <LessonTypeQuestion /> Question
              </div>
            </h5>
            <Input
              className="my-4"
              value={questionTitle}
              onChange={(e) => setQuestionTitle(e.target.value)}
              placeholder="Question Title"
            />
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
          <h5 className="mb-4">
            <div className="d-flex align-items-center">
              {" "}
              <LessonTypeVideo /> AR/VR
            </div>
          </h5>
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
        <Button onClick={() => history.goBack()}>Cancel</Button>
        <Button className="text-white bg-info ml-3" onClick={SaveLesson}>
          {" "}
          Save{" "}
        </Button>
      </div>
      <Modal width={500} footer={null} visible={successModal}>
        <div className="d-flex my-3 align-items-center flex-column justify-content-center">
          {/* <CustomIcon svg={Verified} /> */}
          <svg
            width="65"
            height="64"
            viewBox="0 0 65 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M32.5 0C37.4636 0 42.1609 1.13082 46.358 3.14781C44.64 4.50697 43.0471 5.81176 41.5629 7.06762C38.7358 6.04009 35.6859 5.48012 32.5054 5.48012C25.1823 5.48012 18.5496 8.44852 13.7545 13.2491C8.95396 18.0496 5.98556 24.6769 5.98556 32C5.98556 39.3231 8.95396 45.9504 13.7545 50.7509C18.555 55.5515 25.1823 58.5199 32.5054 58.5199C39.8286 58.5199 46.4613 55.5515 51.2564 50.7509C56.0569 45.9504 59.0253 39.3231 59.0253 32C59.0253 30.2603 58.8568 28.5532 58.536 26.9059C59.9115 25.1118 61.3196 23.3231 62.7603 21.5508C63.8911 24.8236 64.5054 28.3411 64.5054 32C64.5054 40.8345 60.9227 48.8372 55.1327 54.6273C49.3427 60.4173 41.34 64 32.5054 64C23.6709 64 15.6682 60.4173 9.87819 54.6273C4.08274 48.8372 0.5 40.8345 0.5 32C0.5 23.1655 4.08274 15.1628 9.87275 9.37275C15.6628 3.58274 23.6655 0 32.5 0ZM17.5928 26.7428L25.3998 26.6395L25.9815 26.7917C27.5581 27.6996 29.0423 28.738 30.4286 29.9123C31.429 30.7604 32.3858 31.6847 33.2938 32.685C36.0936 28.178 39.0783 24.0408 42.2316 20.2351C45.6838 16.0652 49.3481 12.2813 53.1973 8.82909L53.9584 8.53551H62.4776L60.7596 10.4438C55.4806 16.3099 50.691 22.3717 46.3634 28.6239C42.0359 34.8814 38.165 41.3401 34.7236 47.9891L33.6526 50.055L32.6685 47.9511C30.8527 44.053 28.6781 40.4757 26.0848 37.279C23.4915 34.0822 20.4742 31.2443 16.9567 28.8304L17.5928 26.7428Z"
              fill="#00AB6F"
            />
          </svg>
          <h3 className="font-weight-bold mt-4 text-center">
            New subject created successfully!
          </h3>
        </div>
      </Modal>
    </>
  );
};

export default AddNewLesson;

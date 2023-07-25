import React, { useState } from "react";
import {
  Button,
  Form,
  Input,
  Tabs,
  Radio,
  Select,
  Modal,
  DatePicker,
  Switch,
  message,
} from "antd";
import { PlusOutlined ,CloseCircleOutlined} from "@ant-design/icons";
import { AssessQue, BasicDet, UploadFileIcon } from "assets/svg/icon";
import uploadImage from "middleware/uploadImage";
import axios from "axios";
import { API_BASE_URL } from 'constants/ApiConstant';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect } from "react";
function convertData(data) {
  const convertedData = [];

  data.forEach((item) => {
    // Find the correct option using the OptionSwitch fields
    let correctOption = null;
    for (const optionKey in item) {
      if (optionKey.startsWith("OptionSwitch") && item[optionKey]) {
        correctOption = item[optionKey.replace("Switch", "")];
        break;
      }
    }

    // Create the new formatted item
    const newItem = {
      title: item.Question,
      options: [item.OptionA, item.OptionB, item.OptionC, item.OptionD],
      correct_option: item.correctOption,
      answer_explanation: "",
    };

    // Append the new item to the convertedData array
    convertedData.push(newItem);
  });

  return convertedData;
}
const AddNew = () => {
  const [form] = Form.useForm();
  const history = useHistory()
  const [assignmentData, setAssignmentData] = useState({})
  const searchParams = new URLSearchParams(document.location.search);
  const assignmentId = searchParams.get("assignmentId");
  const lessonId = searchParams.get("lessonId");
  const courseId = searchParams.get("courseId");
  const batchId = searchParams.get("batchId");
  const classId = searchParams.get("classId");
  const subjectId = searchParams.get("subjectId")
  const { TabPane } = Tabs;
  const { TextArea } = Input;
  const [textareaVal, setTextareaVal] = useState("");
  const [adtextareaVal, setAdTextareaVal] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [assType, setAssType] = useState("mcq");
  const [activeTab, setActiveTab] = useState("1");
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [addQue, setAddQue] = useState([
    {
      Question: "",
      OptionA: "",
      OptionB: "",
      OptionC: "",
      OptionD: "",
      OptionSwitchA: "",
      OptionSwitchB: "",
      OptionSwitchC: "",
      OptionSwitchD: "",
    },
  ]);

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
  function handleFileSelect(event) {
    const fileList = event.target.files;
    const newSelectedFiles = [];

    for (let i = 0; i < fileList.length; i++) {
      newSelectedFiles.push(fileList[i]);
    }
    //   console.log(selectedFiles)

    setSelectedFiles([...selectedFiles, newSelectedFiles[0]]);
  }

  const onFinish =async (e) => {
    // return
    if (e.assignment_type==='txt') {
      var url = assignmentId ? assignmentData.url :[]
    for(let i = 0 ;i<selectedFiles.length;i++){
      const img = await uploadImage(selectedFiles[i]);
      url.push(img)
    }
      const data = {
        batch_id:batchId,
        class_id:classId,
        course_id:courseId,
        subject_id:subjectId,
        lesson_id:lessonId,
        status:1,
        description:adtextareaVal,
        url:url,
        assignment_name:e.name,
        assignment_type:e.assignment_type,
        assignment_questions:0,
        assignment_details:textareaVal
      }
      // console.log(data)
      if (assignmentId) {
        const res1 = await axios.put(`${API_BASE_URL}/subjects/lessons/assignments/${assignmentId}`,data)
        console.log(res1);
        return
      }
      const res1 = await axios.post(`${API_BASE_URL}/subjects/lessons/assignments`,data)
      if (res1.status===201) {
        console.log(res1.data.msg);
      message.success(res1.data.msg)
      history.goBack()
    }
      return
    }
   
    const convertedData = convertData(addQue)
    const data = {
      batch_id:batchId,
      class_id:classId,
      course_id:courseId,
      subject_id:subjectId,
      lesson_id:lessonId,
      status:1,
      description:convertedData,
      assignment_name:e.name,
      assignment_type:e.assignment_type,
      assignment_questions:convertedData.length,
      assignment_details:textareaVal
    }
    if (assignmentId) {
      console.log(data);
      // const res1 = await axios.put(`${API_BASE_URL}/subjects/lessons/assignments/${assignmentId}`,data)
      // console.log(res1);
      return
    }
    const res1 = await axios.post(`${API_BASE_URL}/subjects/lessons/assignments`,data)
    if (res1.status===201) {
      console.log(res1.data.msg);
    message.success(res1.data.msg)
    history.goBack()
  }
};
  function handleNextClick() {
    if (activeTab >= 0 && activeTab <= 1) {
      let actnum = Number(activeTab) + 1;
      setActiveTab(actnum.toString());
    }
  }
  function handleBackClick() {
    if (activeTab > 1 && activeTab <= 2) {
      let actnum = Number(activeTab) - 1;
      setActiveTab(actnum.toString());
    }
  }
  const handleOk = () => {
    setTimeout(() => {
      setIsModalOpen(false);
    }, 10000);
  };

  const queData = (data, ind, e) => {
    const updatedQuestions = [...addQue];
    // const updQue = addQue.map((elem, index) => {
    //   if (index == ind) {
    //     if (data=="Question") {
    //       return {
    //         ...elem,Question:e
    //       }
    //     } else if (data=="OptionA") {
    //       return {
    //         ...elem,OptionA:e
    //       }
    //     } else if (data=="OptionSwitchA") {
    //       return {
    //         ...elem,OptionSwitchA:e
    //       }
    //     } else if (data=="OptionSwitchB") {
    //       return {
    //         ...elem,OptionSwitchB:e
    //       }
    //     } else if (data=="OptionSwitchC") {
    //       return {
    //         ...elem,OptionSwitchC:e
    //       }
    //     } else if (data=="OptionSwitchD") {
    //       return {
    //         ...elem,OptionSwitchD:e
    //       }
    //     } else if (data=="OptionB") {
    //       return {
    //         ...elem,OptionB:e
    //       }
    //     } else if (data=="OptionC") {
    //       return {
    //         ...elem,OptionC:e
    //       }
    //     } else if (data=="OptionD") {
    //       return {
    //         ...elem,OptionD:e
    //       }
    //     }
    //   }
    // });
    if (data == "Question") {
      updatedQuestions[ind].Question = e;
    } else if (data == "OptionA") {
      updatedQuestions[ind].OptionA = e;
    } else if (data == "correctOption") {
      updatedQuestions[ind].correctOption = e;
    } else if (data == "OptionSwitchB") {
      updatedQuestions[ind].OptionSwitchB = e;
    } else if (data == "OptionSwitchC") {
      updatedQuestions[ind].OptionSwitchC = e;
    } else if (data == "OptionSwitchD") {
      updatedQuestions[ind].OptionSwitchD = e;
    } else if (data == "OptionB") {
      updatedQuestions[ind].OptionB = e;
    } else if (data == "OptionC") {
      updatedQuestions[ind].OptionC = e;
    } else if (data == "OptionD") {
      updatedQuestions[ind].OptionD = e;
    }
    setAddQue(updatedQuestions);
    console.log(updatedQuestions);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  function handleTabClick(key) {
    setActiveTab(key);
  }
  const addQuestion = () => {
    let newQue = {
      Question: "",
      OptionA: "",
      OptionB: "",
      OptionC: "",
      OptionD: "",
      OptionSwitchA: "",
      OptionSwitchB: "",
      OptionSwitchC: "",
      OptionSwitchD: "",
    };
    setAddQue([...addQue, newQue]);
    console.log(addQue);
  };

  const handleChange = (value) => {
    setAssType(value);
    console.log(`selected ${value}`);
  };
  const delUplFile = (i) => {
    let AfterDeleteFile = selectedFiles.filter((elem,index)=>{
      return index!==i
    })
    setSelectedFiles(AfterDeleteFile);
  }
  const getAssignment = async (id) => {
    const res1 = await axios.get(`http://18.140.159.50:3333/api/subjects/lessons/assignments/${id}`)
    setAssignmentData(res1.data);
    setTextareaVal(res1.data.assignment_details)
    setAdTextareaVal(res1.data.descriptive_content)
    if (res1.data.assignment_type==="mcq") {
      const des = JSON.parse(res1.data.description)
      const convertedData = des.map((item) => {
        const newData = {
          Question: item.title,
          OptionA: item.options[0],
          OptionB: item.options[1],
          OptionC: item.options[2],
          OptionD: item.options[3],
          OptionSwitchA: "",
          OptionSwitchB: "",
          OptionSwitchC: "",
          OptionSwitchD: "",
          correctOption: item.correct_option
        };
        return newData;
      });
      setAddQue(convertedData)
    }
    setAssType(res1.data.assignment_type==="mcq"?"mcq":"txt")
    form.setFieldsValue({
      name:res1.data.assignment_name,
      assignment_type:res1.data.assignment_type==="mcq"?"mcq":"txt"
    })
  }
  useEffect(() => {
    if (assignmentId) {
      getAssignment(assignmentId);
    }
  }, [])
  
  return (
    <div className="tabbarWhite">
      <Form
        layout="vertical"
        onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        form={form}
        name="control-hooks"
      >
        <Tabs activeKey={activeTab} onTabClick={handleTabClick}>
          <TabPane tab={(
        <div className="d-flex justify-content-center">
          <BasicDet className="mr-2 " />
          <span className="ml-2">Basic Details</span>
        </div>
      )} key="1">
            <div className="border rounded p-3 bg-white">
              <div style={{ gap: "60px" }} className="d-flex ">
                <div style={{ width: "45%" }}>
                  <Form.Item name="id" label="Assignment ID">
                    <h4>{assignmentData.id}</h4>
                  </Form.Item>
                  <Form.Item label="Assignment Details">
                    <TextArea
                      rows={4}
                      placeholder="Type Here ..."
                      value={textareaVal}
                      onChange={(e) => setTextareaVal(e.target.value)}
                    />
                  </Form.Item>
                </div>
                <div style={{ width: "45%" }}>
                  <Form.Item name="name" label="Assignment Name">
                    <Input placeholder="Assignment Name" />
                  </Form.Item>
                </div>
              </div>
            </div>
          </TabPane>
          <TabPane tab={(
        <div className="d-flex justify-content-center">
          <AssessQue className="mr-2 " />
          <span className="ml-2">Assignment Questions</span>
        </div>
      )} key="2">
            <div className="border rounded p-3 mt-4 bg-white">
              <div className="my-3 w-50">
                <Form.Item
                  className="w-75"
                  name={`assignment_type`}
                  label={`Assignment Type`}
                >
                  <Select
                    defaultValue="MCQ_Assignment"
                    style={{
                      width: "100%",
                    }}
                    onChange={handleChange}
                    options={[
                      {
                        value: "mcq",
                        label: "MCQ Assignment",
                      },
                      {
                        value: "txt",
                        label: "Readding Assignment",
                      },
                    ]}
                  />
                </Form.Item>
              </div>
            </div>

            {assType !== "mcq" ? (
              <>
                {" "}
                <div className="border rounded p-3 mt-4 bg-white">
                  {/* <div className="my-3 w-50">
                    <Form.Item
                      className="w-75"
                      name={`assignment_title`}
                      label={`Assignment Title`}
                    >
                      <Input
                        placeholder="Type here"
                        //   onChange={(e) =>
                        //     queData("Question", ind, e.target.value)
                        //   }
                      />
                    </Form.Item>
                  </div> */}
                  <div className="my-3 w-50">
                    <Form.Item
                      className="w-75"
                      label={`Assessment Details`}
                    >
                      <TextArea
                        rows={4}
                        placeholder="Type Here ..."
                        value={adtextareaVal}
                        onChange={(e) => setAdTextareaVal(e.target.value)}
                      />
                    </Form.Item>
                  </div>
                </div>
                <div className="border rounded p-3 mt-4 bg-white">
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
                      accept="image/*, .mp4, audio/* , .pdf, .doc, .docx"
                      type="file"
                      multiple
                      onChange={handleFileSelect}
                    />
                  </div>
                  <div className="mt-4">
                    {
                      assignmentData.url && <ul className="p-0" style={{width:'40%'}}>
                      {/* {selectedFiles.map((file,i) => ( */}
                        <li className="my-3" style={styles.files}>
                          <a href={assignmentData.url} target="_blank" rel='noreferrer'>
                          <div className="d-flex align-items-center"><UploadFileIcon /> <span className="ml-2">File 1 </span>  </div>
                          </a>
                        </li>
                      {/* ))} */}
                    </ul>
                    }
                    {selectedFiles.length > 0 && (
                      <ul className="p-0" style={{width:'40%'}}>
                      {selectedFiles.map((file,i) => (
                        <li key={file.name} className="my-3" style={styles.files}>
                          {" "}
                          <div className="d-flex align-items-center"><UploadFileIcon /> <span className="ml-2">{file.name} </span>  </div><span style={{cursor:'pointer'}} onClick={()=>delUplFile(i)}> <CloseCircleOutlined /> </span>
                        </li>
                      ))}
                    </ul>
                    )}
                  </div>
                </div>
              </>
            ) : (
              <>
                {addQue.map((elem, ind) => {
                  return (
                    <>
                      {/* <div className="border rounded p-3 mt-4 bg-white">
                        <div className="my-3 w-50">
                          <Form.Item
                            className="w-75"
                            name={`Question${ind + 1}`}
                            label={`Question ${ind + 1}`}
                          >
                            <Input
                              placeholder="Type here"
                              onChange={(e) =>
                                queData("Question", ind, e.target.value)
                              }
                            />
                          </Form.Item>
                        </div>
                        <div className="d-flex align-items-center justify-content-between my-3 w-50">
                          <Form.Item
                            className="w-75"
                            name={`OptionA${ind + 1}`}
                            label="Option A"
                          >
                            <Input
                              className="w-100"
                              placeholder="Type here"
                              onChange={(e) =>
                                queData("OptionA", ind, e.target.value)
                              }
                            />
                          </Form.Item>
                          <Form.Item>
                            <Switch
                              size="small"
                              onChange={(e) => queData("OptionSwitchA", ind, e)}
                            />
                          </Form.Item>
                        </div>
                        <div className="d-flex align-items-center justify-content-between my-3 w-50">
                          <Form.Item
                            className="w-75"
                            name={`OptionB${ind + 1}`}
                            label="Option B"
                          >
                            <Input
                              className="w-100"
                              placeholder="Type here"
                              onChange={(e) =>
                                queData("OptionB", ind, e.target.value)
                              }
                            />
                          </Form.Item>
                          <Form.Item>
                            <Switch
                              size="small"
                              onChange={(e) => queData("OptionSwitchB", ind, e)}
                            />
                          </Form.Item>
                        </div>
                        <div className="d-flex align-items-center justify-content-between my-3 w-50">
                          <Form.Item
                            className="w-75"
                            name={`OptionC${ind + 1}`}
                            label="Option C"
                          >
                            <Input
                              className="w-100"
                              placeholder="Type here"
                              onChange={(e) =>
                                queData("OptionC", ind, e.target.value)
                              }
                            />
                          </Form.Item>
                          <Form.Item>
                            <Switch
                              size="small"
                              onChange={(e) => queData("OptionSwitchC", ind, e)}
                            />
                          </Form.Item>
                        </div>
                        <div className="d-flex align-items-center justify-content-between my-3 w-50">
                          <Form.Item
                            className="w-75"
                            name={`OptionD${ind + 1}`}
                            label="Option D"
                          >
                            <Input
                              className="w-100"
                              placeholder="Type here"
                              onChange={(e) =>
                                queData("OptionD", ind, e.target.value)
                              }
                            />
                          </Form.Item>
                          <Form.Item>
                            <Switch
                              size="small"
                              onChange={(e) => queData("OptionSwitchD", ind, e)}
                            />
                          </Form.Item>
                        </div>
                      </div> */}
                      <div className="border rounded p-3 mt-4 bg-white">
                    <div className="my-3 w-50">
                      <Form.Item
                        className="w-75"
                        // name={`Question${ind + 1}`}
                        label={`Question ${ind + 1}`}
                      >
                        <Input
                          placeholder="Type here"
                          value={elem.Question}
                          onChange={(e) =>
                            queData("Question", ind, e.target.value)
                          }
                        />
                      </Form.Item>
                    </div>
                    <Radio.Group
                      className="d-flex flex-column my-3 w-50"
                      value={elem.correctOption}
                      onChange={(e) => queData("correctOption", ind, e.target.value)}
                    >
                      <div className="d-flex align-items-center justify-content-between">
                        <Form.Item
                          className="w-75"
                          // name={`OptionA${ind + 1}`}
                          label="Option A"
                        >
                          <Input
                            className="w-100"
                            placeholder="Type here"
                            value={elem.OptionA}
                            onChange={(e) =>
                              queData("OptionA", ind, e.target.value)
                            }
                          />
                        </Form.Item>
                        <Radio value={addQue[ind].OptionA} />
                      </div>
                      <div className="d-flex align-items-center justify-content-between">
                        <Form.Item
                          className="w-75"
                          // name={`OptionB${ind + 1}`}
                          label="Option B"
                        >
                          <Input
                            className="w-100"
                            placeholder="Type here"
                            value={elem.OptionB}
                            onChange={(e) =>
                              queData("OptionB", ind, e.target.value)
                            }
                          />
                        </Form.Item>
                        <Radio value={addQue[ind].OptionB} />
                      </div>
                      <div className="d-flex align-items-center justify-content-between">
                        <Form.Item
                          className="w-75"
                          // name={`OptionC${ind + 1}`}
                          label="Option C"
                        >
                          <Input
                            className="w-100"
                            placeholder="Type here"
                            value={elem.OptionC}
                            onChange={(e) =>
                              queData("OptionC", ind, e.target.value)
                            }
                          />
                        </Form.Item>
                        <Radio value={addQue[ind].OptionC} />
                      </div>
                      <div className="d-flex align-items-center justify-content-between">
                        <Form.Item
                          className="w-75"
                          // name={`OptionD${ind + 1}`}
                          label="Option D"
                        >
                          <Input
                            className="w-100"
                            placeholder="Type here"
                            value={elem.OptionD}
                            onChange={(e) =>
                              queData("OptionD", ind, e.target.value)
                            }
                          />
                        </Form.Item>
                        <Radio value={addQue[ind].OptionD} />
                      </div>
                    </Radio.Group>
                  </div>
                    </>
                  );
                })}
                <div
                  className="border rounded p-3 mt-4 bg-white d-flex justify-content-center custaddmoreque"
                  onClick={addQuestion}
                >
                  <h2 className="custaddmoreque">
                    <PlusOutlined /> Add More Questions
                  </h2>
                </div>
              </>
            )}
          </TabPane>
        </Tabs>
        <Form.Item>
          <div
            style={{ gap: "10px" }}
            className="mt-5 d-flex justify-content-end"
          >
            {activeTab > 1 ? (
              <Button
                className="px-4 font-weight-semibold"
                htmlType="button"
                onClick={handleBackClick}
              >
                Back
              </Button>
            ) : (
              ""
            )}
            <Button className="px-4 font-weight-semibold" htmlType="button">
              Clear All
            </Button>
            {activeTab < 2 ? (
              <Button
                className="px-4 font-weight-semibold text-white bg-info"
                onClick={handleNextClick}
              >
                Next
              </Button>
            ) : (
              ""
            )}
            <Button
              className="px-4 font-weight-semibold text-white bg-info"
              htmlType="submit"
            >
              Save
            </Button>
          </div>
        </Form.Item>
      </Form>
      <Modal
        width={400}
        footer={null}
        visible={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
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
          <h3 className="font-weight-bold mt-4">MembershipPlan Created!</h3>
          <span className="text-center font-size-sm w-75 font-weight-semibold">
            Membership Plan 1 crested successfully
          </span>
        </div>
      </Modal>
    </div>
  );
};

export default AddNew;

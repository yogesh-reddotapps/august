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
} from "antd";
import { FileUnknownOutlined,PlusOutlined } from "@ant-design/icons";
import "./assessment.css";
import { AssessQue, BasicDet } from "assets/svg/icon";

const AddNew = () => {
  const [form] = Form.useForm();
  const { TabPane } = Tabs;
  const { TextArea } = Input;
  const [textareaVal, setTextareaVal] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("1");
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

  const onFinish = (e) => {
    console.log(e);
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
    } else if (data == "OptionSwitchA") {
      updatedQuestions[ind].OptionSwitchA = e;
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
  return (
    <div>
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
                  <Form.Item name="id" label="Assessment Id">
                    <h4>25</h4>
                  </Form.Item>
                  <Form.Item name="period" label="Assessment Details">
                    <TextArea
                      rows={4}
                      placeholder="Type Here ..."
                      value={textareaVal}
                      onChange={(e) => setTextareaVal(e.target.value)}
                    />
                  </Form.Item>
                </div>
                <div style={{ width: "45%" }}>
                  <Form.Item name="name" label="Assessment Name">
                    <Input placeholder="Assessment Name" />
                  </Form.Item>
                </div>
              </div>
            </div>
          </TabPane>
          <TabPane tab={(
        <div className="d-flex justify-content-center">
          <AssessQue className="mr-2 " />
          <span className="ml-2">Assessment Questions</span>
        </div>
      )} key="2">
            {addQue.map((elem, ind) => {
              return (
                <>
                  <div className="border rounded p-3 mt-4 bg-white">
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

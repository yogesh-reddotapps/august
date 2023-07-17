import {
  Button,
  Form,
  Input,
  Radio,
  Select,
  Modal,
  DatePicker,
  Upload,
} from "antd";
import {
  AddressDetail,
  BasicDetail,
  StudentDet,
  UploadDocument,
} from "assets/svg/icon";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Tabs } from "antd";
import { useLocation } from "react-router-dom";
import { PlusOutlined, CloseCircleOutlined } from "@ant-design/icons";
import { UploadFileIcon } from "assets/svg/icon";
import { Option } from "antd/lib/mentions";
import moment from "moment";
import axios from "../../../axios";
import { useHistory } from "react-router-dom";
const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
export default function AddNew() {
  const { TabPane } = Tabs;
  const history = useHistory();
  const [activeTab, setActiveTab] = useState("1");
  const [phoneCode, setPhoneCode] = useState("+65")
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [isChangeStudModalOpen, setIsChangeStudModalOpen] = useState(false);
  const [deactiveModalOpen, setIsDeactiveModalOpen] = useState(false);
  const [successModal, setSuccessModal] = useState(false);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id");
  const [succesmodaltext, setSuccesmodaltext] = useState({
    title: "Status Change",
    text: "Student status changed to terminated.",
  });
  const [fileList, setFileList] = useState([]);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const successOk = () => {
    setSuccessModal(false);
  };
  const successCancel = () => {
    setSuccessModal(false);
  };

  const changeStudHandleOk = () => {
    setIsChangeStudModalOpen(false);
  };
  const DeactiveHandleOk = () => {
    setIsDeactiveModalOpen(false);
  };
  function handleTabClick(key) {
    setActiveTab(key);
  }

  function handleNextClick() {
    if (activeTab >= 0 && activeTab <= 3) {
      let actnum = Number(activeTab) + 1;
      setActiveTab(actnum.toString());
    }
  }
  function handleBackClick() {
    if (activeTab > 1 && activeTab <= 4) {
      let actnum = Number(activeTab) - 1;
      setActiveTab(actnum.toString());
    }
  }

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

  const [form] = Form.useForm();

  const onFinish = async (values) => {
    if (id) {
      let updateRes = await axios.post(
        "http://18.140.159.50:3333/api/edit-student",
        {
          name: values.name,
          email: values.email,
          role: 2,
          phone_number: values.phone_number,
          dob: moment(values.dob).format("DD-MM-YYYY"),
          user_id: id,
        }
      );
      if (updateRes.data.success) {
        history.push("/app/Student_management");
      }
      console.log(updateRes);
      return;
    }
    console.log("Success:", values);
    try {
      console.log("Success:", values);
      let data = {
        name: values.name,
        email: values.email,
        // profile_pic: "1.amazonaws.com/profile_picture/6ZlZO4i2RqkKOhoXPe_Ok.png",
        password: "Student@123",
        gender:values.gender,
        role: 2,
        phone_number: `${phoneCode}${values.phone_number}`,
        dob: moment(values.dob).format("DD-MM-YYYY"),
      };
      console.log("test", data);
      const response = await axios.post("/api/student-register", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response);
      if (response.status === 200) {
        setSuccesmodaltext({
          title: "Student Account Created Successfully!",
          text: "Student ID #TC-1234 jane cooper added.",
        });
        setSuccessModal(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setFileList(e.fileList);
    console.log(e);
  };

  const handleCancel = () => setPreviewOpen(false);
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
    );
  };
  console.log(location.pathname);
  function handleFileSelect(event) {
    const fileList = event.target.files;
    const newSelectedFiles = [];

    for (let i = 0; i < fileList.length; i++) {
      newSelectedFiles.push(fileList[i]);
    }
    //   console.log(selectedFiles)

    setSelectedFiles([...selectedFiles, newSelectedFiles[0]]);
  }
  const delUplFile = (i) => {
    let AfterDeleteFile = selectedFiles.filter((elem, index) => {
      return index !== i;
    });
    setSelectedFiles(AfterDeleteFile);
  };
  const fetchStudent = async (id) => {
    let res1 = await axios.post(
      "http://18.140.159.50:3333/api/get-student-by-id",
      {
        user_id: id,
      }
    );
    let data = res1.data[0];
    form.setFieldsValue({
      id: data.user_id,
      name: data.name,
      phone_number: data.phone_number === null ? "" : data.phone_number,
      email: data.email,
      dob: data.dob === null ? "" : moment(data.dob),
    });
    console.log(res1.data[0]);
  };
  useEffect(() => {
    if (id) {
      fetchStudent(id);
    }
  }, []);

  const uploadButton = (
    <div style={{ width: "200px" }}>
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );

  return (
    <div className="tabbarWhite">
      {/* <div style={{ gap: "10px" }} className="mt-2 d-flex justify-content-end">
        <Button
          style={{ border: "1.6px solid #3e79f7" }}
          className="px-4 font-weight-semibold text-info"
          onClick={() => setIsChangeStudModalOpen(true)}
        >
          Change Student Status
        </Button>
        <Button
          style={{ border: "1.6px solid #3e79f7" }}
          className="px-4 font-weight-semibold text-info"
          onClick={() => setIsDeactiveModalOpen(true)}
        >
          Deactivate Account
        </Button>
      </div> */}
      <Form
        layout="vertical"
        onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        form={form}
        name="control-hooks"
      >
        <Tabs activeKey={activeTab} onTabClick={handleTabClick}>
          <TabPane
            tab={
              <div className="d-flex justify-content-center">
                <BasicDetail /> <span className="ml-2">Basic Details</span>
              </div>
            }
            key="1"
          >
            <div className="border rounded p-3 bg-white">
              {" "}
              <Form.Item name="images">
                <Upload
                  // action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                  listType="picture-card"
                  onChange={handleChange}
                >
                  {uploadButton}
                </Upload>
              </Form.Item>
              <div style={{ gap: "60px" }} className="d-flex ">
                <div style={{ width: "45%" }}>
                  <Form.Item
                    name="id"
                    label="Id"
                    rules={[{ required: true, message: "Please enter Id" }]}
                  >
                    <Input placeholder="Id" />
                  </Form.Item>
                  <Form.Item
                    name="name"
                    label="Full Name"
                    rules={[
                      { required: true, message: "Please enter full name" },
                    ]}
                  >
                    <Input placeholder="Full Name" />
                  </Form.Item>
                </div>
                <div style={{ width: "45%" }}>
                  <Form.Item
                    name="role"
                    label="Role"
                    // rules={[{ required: true, message: "Please enter Role" }]}
                  >
                    {/* <Input placeholder="Role" /> */}
                    <div className="px-2">Student</div>
                  </Form.Item>
                  <Form.Item
                    name="phone_number"
                    label="Phone Number"
                    rules={[
                      { required: true, message: "Please enter Full Name" },
                    ]}
                  >
                    <Input
                      addonBefore={
                        <Select
                          value={phoneCode}
                          style={{
                            width: 80,
                          }}
                          onChange={(e)=>setPhoneCode(e)}
                        >
                          <Option value="+91">+91</Option>
                          <Option value="+65">+65</Option>
                        </Select>
                      }
                      style={{ width: "100%" }}
                      placeholder="Phone number"
                    />
                  </Form.Item>
                </div>
              </div>
              <div style={{ gap: "60px" }} className="d-flex ">
                <div style={{ width: "45%" }}>
                  <Form.Item
                    name="email"
                    label="Email Id"
                    rules={[
                      { required: true, message: "Please enter Email Id" },
                    ]}
                  >
                    <Input style={{ width: "100%" }} placeholder="Email Id" />
                  </Form.Item>
                </div>
                <div style={{ width: "45%" }}>
                  <Form.Item
                    name="dob"
                    label="Date of Birth"
                    rules={[{ required: true, message: "Please enter DOB" }]}
                  >
                    <DatePicker
                      placeholder="Date of Birth"
                      style={{ width: "100%" }}
                    />
                  </Form.Item>
                </div>
              </div>
              <div style={{ gap: "60px" }} className="d-flex ">
                <div style={{ width: "45%" }}>
                  <Form.Item
                    name="gender"
                    label="Gender"
                    rules={[
                      { required: true, message: "Please select gender." },
                    ]}
                  >
                    <Radio.Group>
                      <Radio value={"male"}>Male</Radio>
                      <Radio value={"female"}>Female</Radio>
                    </Radio.Group>
                  </Form.Item>
                </div>
              </div>
            </div>
          </TabPane>
        </Tabs>
        <Form.Item>
          <div
            style={{ gap: "10px" }}
            className="mt-5 d-flex justify-content-end"
          >
            <Button
              className="px-4 font-weight-semibold"
              htmlType="button"
              onClick={handleBackClick}
            >
              Back
            </Button>
            <Button className="px-4 font-weight-semibold" htmlType="button">
              Save As Draft
            </Button>
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
        width={600}
        footer={null}
        visible={deactiveModalOpen}
        onOk={DeactiveHandleOk}
        onCancel={() => setIsDeactiveModalOpen(false)}
      >
        <div className="d-flex my-3 flex-column w-75">
          <h4 className="mb-4">Change Student Status</h4>
          <h5>Studnet ID #TC-1234 will be deleted from system</h5>
        </div>
        <div
          style={{ gap: "10px" }}
          className="mt-5 d-flex justify-content-end"
        >
          <Button
            className="px-4 font-weight-semibold"
            onClick={() => setIsDeactiveModalOpen(false)}
          >
            Cancel
          </Button>
          <Button
            className="px-4 font-weight-semibold text-white bg-info"
            onClick={() => {
              setIsDeactiveModalOpen(false);
              setSuccesmodaltext({
                title: "Deactivated",
                text: "student ID #TC-1234 deactivated.",
              });
              setSuccessModal(true);
            }}
          >
            Yes, confirm
          </Button>
        </div>
      </Modal>
      <Modal
        width={600}
        footer={null}
        visible={isChangeStudModalOpen}
        onOk={changeStudHandleOk}
        onCancel={() => setIsChangeStudModalOpen(false)}
      >
        <div className="d-flex my-3 flex-column w-75">
          <h4 className="mb-4">Change Student Status</h4>
          <h5>Working Status</h5>
          <Select
            placeholder="Select"
            optionFilterProp="children"
            onChange={(val) => console.log(`selected ${val}`)}
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
            options={[
              {
                value: "withdraw",
                label: "Withdraw course",
              },
              {
                value: "terminated",
                label: "Terminated",
              },
              {
                value: "completed",
                label: "Course Completed",
              },
            ]}
          />
        </div>
        <div
          style={{ gap: "10px" }}
          className="mt-5 d-flex justify-content-end"
        >
          <Button
            className="px-4 font-weight-semibold"
            onClick={() => setIsChangeStudModalOpen(false)}
          >
            Cancel
          </Button>
          <Button
            className="px-4 font-weight-semibold text-white bg-info"
            onClick={() => {
              setIsChangeStudModalOpen(false);
              setSuccesmodaltext({
                title: "Status Change",
                text: "Student status changed to terminated.",
              });
              setSuccessModal(true);
            }}
          >
            Save
          </Button>
        </div>
      </Modal>
      <Modal
        width={600}
        footer={null}
        visible={successModal}
        onOk={successOk}
        onCancel={successCancel}
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
          <h3 className="font-weight-bold mt-4">{succesmodaltext.title}</h3>
          <span className="text-center font-size-sm w-75 font-weight-semibold">
            {succesmodaltext.text}
          </span>
        </div>
      </Modal>
      <Modal
        visible={previewOpen}
        title={previewTitle}
        footer={null}
        onCancel={handleCancel}
      >
        <img
          alt="example"
          style={{
            width: "100%",
          }}
          src={previewImage}
        />
      </Modal>
    </div>
  );
}

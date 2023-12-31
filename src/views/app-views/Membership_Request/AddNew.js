import {
  Button,
  Form,
  Input,
  Radio,
  Select,
  Modal,
  DatePicker,
  Upload,
  Switch,
} from "antd";
import {
  AddressDetail,
  AppAccessIco,
  AssignDepart,
  BankDetailIco,
  BasicDetail,
  StudentDet,
  UploadDocument,
  UploadFileIcon,
} from "assets/svg/icon";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Tabs } from "antd";
import { useLocation, useParams } from "react-router-dom";
import { PlusOutlined,CloseCircleOutlined } from "@ant-design/icons";
const managArray = [
  {
    value: "Manager 1",
    label: (
      <div>
        <img
          className="circleTeacherImage mr-2"
          src="/img/avatars/thumb-1.jpg"
          alt="img"
        />
        Manager 1
      </div>
    ),
  },
  {
    value: "Manager 2",
    label: (
      <div>
        <img
          className="circleTeacherImage mr-2"
          src="/img/avatars/thumb-2.jpg"
          alt="img"
        />
        Manager 2
      </div>
    ),
  },
  {
    value: "Manager 3",
    label: (
      <div>
        <img
          className="circleTeacherImage mr-2"
          src="/img/avatars/thumb-3.jpg"
          alt="img"
        />
        Manager 3
      </div>
    ),
  },
  {
    value: "Manager 4",
    label: (
      <div>
        <img
          className="circleTeacherImage mr-2"
          src="/img/avatars/thumb-4.jpg"
          alt="img"
        />
        Manager 4
      </div>
    ),
  },
  // Add more objects with similar format here
  // ...
  {
    value: "Manager 5",
    label: (
      <div>
        <img
          className="circleTeacherImage mr-2"
          src="/img/avatars/thumb-5.jpg"
          alt="img"
        />
        Manager 5
      </div>
    ),
  },
  {
    value: "Manager 6",
    label: (
      <div>
        <img
          className="circleTeacherImage mr-2"
          src="/img/avatars/thumb-6.jpg"
          alt="img"
        />
        Manager 6
      </div>
    ),
  },
];
export default function AddNew() {
  const { TabPane } = Tabs;
  const param = useParams();
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [activeTab, setActiveTab] = useState("1");
  const [isChangeStudModalOpen, setIsChangeStudModalOpen] = useState(false);
  const [deactiveModalOpen, setIsDeactiveModalOpen] = useState(false);
  const [successModal, setSuccessModal] = useState(false);
  const [succesmodaltext, setSuccesmodaltext] = useState({
    title: "Status Change",
    text: "Student status changed to terminated.",
  });

  function handleTabClick(key) {
    setActiveTab(key);
  }
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

  function handleNextClick() {
    if (activeTab >= 0 && activeTab <= 6) {
      let actnum = Number(activeTab) + 1;
      setActiveTab(actnum.toString());
    }
  }
  function handleBackClick() {
    if (activeTab > 1 && activeTab <= 7) {
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

  const showModal = () => {
    setIsModalOpen(true);
    handleOk();
  };

  const handleOk = () => {
    setTimeout(() => {
      setIsModalOpen(false);
    }, 10000);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Success:", values);
    if (
      location.pathname ===
      `/app/membership/membership_plans/update/${param.id}`
    ) {
      // let newVal =
      createMembership(
        { ...values, id: param.id },
        `http://127.0.0.1:3333/membership/update`
      );
    } else {
      createMembership(values, "http://127.0.0.1:3333/membership/new");
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const handleChange = () => {};

  const createMembership = (values, url) => {
    const formData = new FormData();
    for (const key in values) {
      formData.append(key, values[key]);
    }
    axios({
      method: "post",
      url: url,
      data: formData,
      headers: {
        "content-type": `multipart/form-data`,
      },
    })
      .then(function (response) {
        console.log(response);
        if (response.data.status) {
          showModal();
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const getMembershipPlan = () => {
    axios
      .get(`http://127.0.0.1:3333/membership?id=${param.id}`)
      .then((response) => {
        console.log(response.data[0]);
        if (response.status === 200) {
          // const data = response.data.result[0];
          form.setFieldsValue(response.data[0]);
        } else {
          console.log(response);
        }
      });
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
    let AfterDeleteFile = selectedFiles.filter((elem,index)=>{
      return index!==i
    })
    setSelectedFiles(AfterDeleteFile);
  }

  useEffect(() => {
    if (
      location.pathname ===
      `/app/membership/membership_plans/update/${param.id}`
    ) {
      getMembershipPlan();
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
    <div className="">
      <div style={{ gap: "10px" }} className="mb-2 d-flex justify-content-end">
        <Button
          style={{ border: "1.6px solid #3e79f7" }}
          className="px-4 font-weight-semibold text-info"
          onClick={() => setIsChangeStudModalOpen(true)}
        >
          Change Employee Status
        </Button>
        <Button
          style={{ border: "1.6px solid #3e79f7" }}
          className="px-4 font-weight-semibold text-info"
          onClick={() => setIsDeactiveModalOpen(true)}
        >
          Deactivate Account
        </Button>
      </div>
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
                    label="Staff Id"
                    rules={[
                      { required: true, message: "Please enter Staff Id" },
                    ]}
                  >
                    <Input placeholder="Membership Id" />
                  </Form.Item>
                  <Form.Item
                    name="period"
                    label="Email Id"
                    rules={[
                      { required: true, message: "Please enter email Id" },
                    ]}
                  >
                    <Input min={1} placeholder="Email Id" />
                  </Form.Item>
                </div>
                <div style={{ width: "45%" }}>
                  <Form.Item
                    name="name"
                    label="Full Name"
                    rules={[
                      { required: true, message: "Please enter Full Name" },
                    ]}
                  >
                    <Input placeholder="Full Name" />
                  </Form.Item>
                  <Form.Item
                    name="phone number"
                    label="Phone Number"
                    rules={[
                      { required: true, message: "Please enter Full Name" },
                    ]}
                  >
                    <Input
                      min={0}
                      style={{ width: "100%" }}
                      placeholder="Phone number"
                    />
                  </Form.Item>
                </div>
              </div>
              <div style={{ gap: "60px" }} className="d-flex ">
                <div style={{ width: "45%" }}>
                  <Form.Item
                    name="Nationality"
                    label="Nationality"
                    rules={[
                      { required: true, message: "Please enter Nationality" },
                    ]}
                  >
                    <Select
                      placeholder="Nationality"
                      style={{ width: "100%" }}
                      onChange={handleChange}
                      options={[
                        { value: "Singapore", label: "Singapore" },
                        { value: "Singapore", label: "Singapore" },
                        { value: "Singapore", label: "Singapore" },
                      ]}
                    />
                  </Form.Item>
                  <Form.Item
                    name="period"
                    label="Date of Birth"
                    rules={[{ required: true, message: "Please enter DOB" }]}
                  >
                    <DatePicker
                      placeholder="Event Date"
                      style={{ width: "100%" }}
                    />
                  </Form.Item>
                </div>
                <div style={{ width: "45%" }}>
                  <Form.Item
                    name="Residency"
                    label="Residency Status"
                    rules={[
                      {
                        required: true,
                        message: "Please enter Residency Status",
                      },
                    ]}
                  >
                    <Select
                      placeholder="Residency"
                      style={{ width: "100%" }}
                      onChange={handleChange}
                      options={[
                        {
                          value: "Permeant_Resident",
                          label: "Permeant Resident",
                        },
                        { value: "Citizen", label: "Citizen" },
                        { value: "Non_native", label: "Non-native" },
                      ]}
                    />
                  </Form.Item>
                  <Form.Item
                    name="phone number"
                    label="NRIC/FIN"
                    rules={[
                      { required: true, message: "Please enter NRIC/FIN" },
                    ]}
                  >
                    <Input
                      min={0}
                      style={{ width: "100%" }}
                      placeholder="NRIC/FIN"
                    />
                  </Form.Item>
                </div>
              </div>
              <div style={{ gap: "60px" }} className="d-flex ">
                <div style={{ width: "45%" }}>
                  <Form.Item
                    name="id"
                    label="Gender"
                    rules={[
                      { required: true, message: "Please enter Staff Id" },
                    ]}
                  >
                    <Radio.Group>
                      <Radio value={1}>Male</Radio>
                      <Radio value={2}>Female</Radio>
                      <Radio value={3}>Other</Radio>
                    </Radio.Group>
                  </Form.Item>
                  <Form.Item
                    name="Race"
                    label="Race"
                    rules={[{ required: true, message: "Please enter Race" }]}
                  >
                    <Select
                      placeholder="Race"
                      style={{ width: "100%" }}
                      onChange={handleChange}
                      options={[
                        { value: "Chinese", label: "Chinese" },
                        { value: "Malay", label: "Malay" },
                        { value: "Indian", label: "Indian" },
                        { value: "Myanmarese", label: "Myanmarese" },
                        { value: "Burmese", label: "Burmese" },
                      ]}
                    />
                  </Form.Item>
                </div>
                <div style={{ width: "45%" }}>
                  <Form.Item
                    name="Married"
                    label="Married Status"
                    rules={[
                      {
                        required: true,
                        message: "Please enter Married Status",
                      },
                    ]}
                  >
                    <Select
                      placeholder="Married Status"
                      style={{ width: "100%" }}
                      onChange={handleChange}
                      options={[
                        { value: "Married", label: "Married" },
                        { value: "Single", label: "Single" },
                        { value: "Widowed", label: "Widowed" },
                        { value: "Separated", label: "Separated" },
                        { value: "Divorced", label: "Divorced" },
                      ]}
                    />
                  </Form.Item>
                  <Form.Item
                    name="Religion"
                    label="Religion"
                    rules={[
                      { required: true, message: "Please enter Religion" },
                    ]}
                  >
                    <Input
                      min={0}
                      style={{ width: "100%" }}
                      placeholder="Religion"
                    />
                  </Form.Item>
                </div>
              </div>
            </div>
            <div className="border rounded p-3 mt-4 bg-white">
              <div style={{ gap: "60px" }} className="d-flex ">
                <div style={{ width: "45%" }}>
                  <Form.Item
                    name="Role"
                    label="Role"
                    rules={[
                      { required: true, message: "Please enter Staff Role" },
                    ]}
                  >
                    <Select
                      placeholder="Role"
                      style={{ width: "100%" }}
                      onChange={handleChange}
                      options={[
                        { value: "Ops_Manager", label: "Ops Manager" },
                        { value: "Crew", label: "Crew" },
                      ]}
                    />
                  </Form.Item>
                  <Form.Item
                    name="period"
                    label="Joining Date"
                    rules={[
                      { required: true, message: "Please enter joining Date" },
                    ]}
                  >
                    <DatePicker
                      placeholder="DD/MM/YYYY"
                      style={{ width: "100%" }}
                    />
                  </Form.Item>
                </div>
                <div style={{ width: "45%" }}>
                  <Form.Item
                    name="Department"
                    label="Department"
                    rules={[
                      { required: true, message: "Please enter Department" },
                    ]}
                  >
                    <Select
                      placeholder="Department"
                      style={{ width: "100%" }}
                      onChange={handleChange}
                      options={[
                        { value: "Operations", label: "Operations" },
                        { value: "Services", label: "Services" },
                      ]}
                    />
                  </Form.Item>
                  <Form.Item
                    name="phone number"
                    label="Confirmation Date"
                    rules={[
                      { required: true, message: "Please enter Full Name" },
                    ]}
                  >
                    <DatePicker
                      placeholder="DD/MM/YYYY"
                      style={{ width: "100%" }}
                    />
                  </Form.Item>
                </div>
              </div>
              <div style={{ gap: "60px" }} className="d-flex ">
                <div style={{ width: "45%" }}>
                  <Form.Item
                    name="Working"
                    label="Working Status"
                    rules={[
                      { required: true, message: "Please enter Nationality" },
                    ]}
                  >
                    <Select
                      placeholder="Working Status"
                      style={{ width: "100%" }}
                      onChange={handleChange}
                      options={[
                        { value: "Resigned", label: "Resigned" },
                        {
                          value: "Resign_without_notice",
                          label: "Resign without notice",
                        },
                        { value: "Terminated", label: "Terminated" },
                        { value: "Contract_end", label: "Contract end" },
                      ]}
                    />
                  </Form.Item>
                  <Form.Item
                    name="period"
                    label="Notice Period"
                    rules={[{ required: true, message: "Please enter DOB" }]}
                  >
                    <Input placeholder="0" />
                  </Form.Item>
                </div>
                <div style={{ width: "45%" }}>
                  <Form.Item
                    name="name"
                    label="Manager (Report To)"
                    rules={[
                      {
                        required: true,
                        message: "Please enter Residency Status",
                      },
                    ]}
                  >
                    <Select
                      placeholder="Select"
                      style={{ width: "100%" }}
                      onChange={handleChange}
                      options={[]}
                    />
                  </Form.Item>
                  <Form.Item
                    name="phone number"
                    label="Probation Period"
                    rules={[
                      { required: true, message: "Please enter NRIC/FIN" },
                    ]}
                  >
                    <Input min={0} style={{ width: "100%" }} placeholder="0" />
                  </Form.Item>
                </div>
              </div>
            </div>
            <div className="border rounded p-3 mt-4 bg-white">
              <div style={{ gap: "60px" }} className="d-flex ">
                <div style={{ width: "45%" }}>
                  <Form.Item
                    name="id"
                    label="Work Permit Number (if applicable)"
                  >
                    <Input placeholder="Work Permit Number" />
                  </Form.Item>
                  <Form.Item
                    name="type_work_permit"
                    label="Type of Work Permit"
                  >
                    <Select
                      placeholder="Type of Work Permit"
                      style={{ width: "100%" }}
                      onChange={handleChange}
                      options={[
                        {
                          label: "Professional",
                          options: [
                            {
                              label: "Employment Pass",
                              value: "Employment_Pass",
                            },
                            {
                              label: "Entre_Pass",
                              value: "Entre Pass",
                            },
                            {
                              label: "Personalized_Employment_Pass",
                              value: "Personalized Employment Pass",
                            },
                          ],
                        },
                        {
                          label: "Skilled & Semi skilled Workers",
                          options: [
                            {
                              label: "S_Pass",
                              value: "S Pass",
                            },
                            {
                              label: "Work_Permit_for_migrant_worker",
                              value: "Work Permit for migrant worker",
                            },
                            {
                              label: "Work_Permit_for_migrant_domestic_worker",
                              value: "Work Permit for migrant domestic worker",
                            },
                            {
                              label: "Work_Permit_for_confinement_nanny",
                              value: "Work Permit for confinement nanny",
                            },
                            {
                              label: "Work_Permit_for_performing_artiste",
                              value: "Work Permit for performing artiste",
                            },
                          ],
                        },
                      ]}
                    />
                  </Form.Item>
                </div>
                <div
                  style={{
                    width: "45%",
                    display: "flex",
                    alignItems: "flex-end",
                  }}
                >
                  <Form.Item
                    name="phone number"
                    label="Expiry Date"
                    style={{ flex: "1" }}
                    rules={[
                      { required: true, message: "Please enter Full Name" },
                    ]}
                  >
                    <DatePicker
                      placeholder="DD/MM/YYYY"
                      style={{ width: "100%" }}
                    />
                  </Form.Item>
                </div>
              </div>
              <div style={{ gap: "60px" }} className="d-flex ">
                <div style={{ width: "45%" }}>
                  <Form.Item
                    name="id"
                    label="Passport Number"
                    rules={[
                      {
                        required: true,
                        message: "Please enter Passport Number",
                      },
                    ]}
                  >
                    <Input placeholder="Passport Number" />
                  </Form.Item>
                </div>
                <div style={{ width: "45%" }}>
                  <Form.Item
                    name="phone number"
                    label="Expiry Date"
                    style={{ flex: "1" }}
                    rules={[
                      { required: true, message: "Please enter Full Name" },
                    ]}
                  >
                    <DatePicker
                      placeholder="DD/MM/YYYY"
                      style={{ width: "100%" }}
                    />
                  </Form.Item>
                </div>
              </div>
            </div>
          </TabPane>
          <TabPane
            tab={
              <div className="d-flex justify-content-center">
                <StudentDet /> <span className="ml-2">Education Details</span>
              </div>
            }
            key="2"
          >
            <div className="border rounded p-3 bg-white mt-4">
              <div style={{ gap: "60px" }} className="d-flex ">
                <div style={{ width: "45%" }}>
                  <Form.Item name="id" label="Highest Qualification">
                    <Input placeholder="Highest Qualification" />
                  </Form.Item>
                  <Form.Item
                    name="period"
                    label="University"
                    rules={[
                      { required: true, message: "Please enter Full Name" },
                    ]}
                  >
                    <Input placeholder="University" />
                  </Form.Item>
                </div>
                <div
                  style={{
                    width: "45%",
                    display: "flex",
                    alignItems: "flex-end",
                  }}
                >
                  <Form.Item
                    name="id"
                    label="Field of study"
                    rules={[
                      {
                        required: true,
                        message: "Please enter Field of study",
                      },
                    ]}
                    style={{ width: "100%" }}
                  >
                    <Input placeholder="Field of study" />
                  </Form.Item>
                </div>
              </div>
              <div style={{ gap: "60px" }} className="d-flex ">
                <div style={{ width: "45%" }}>
                  <Form.Item
                    name="phone number"
                    label="Start Date"
                    style={{ flex: "1" }}
                    rules={[
                      { required: true, message: "Please enter Full Name" },
                    ]}
                  >
                    <DatePicker
                      placeholder="DD/MM/YYYY"
                      style={{ width: "100%" }}
                    />
                  </Form.Item>
                </div>
                <div style={{ width: "45%" }}>
                  <Form.Item
                    name="phone number"
                    label="End Date"
                    style={{ flex: "1" }}
                    rules={[
                      { required: true, message: "Please enter Full Name" },
                    ]}
                  >
                    <DatePicker
                      placeholder="DD/MM/YYYY"
                      style={{ width: "100%" }}
                    />
                  </Form.Item>
                </div>
              </div>
            </div>
          </TabPane>
          <TabPane
            tab={
              <div className="d-flex justify-content-center">
                <AddressDetail /> <span className="ml-2">Address Details</span>
              </div>
            }
            key="3"
          >
            <div className="border rounded bg-white p-3 mt-4">
              <div style={{ gap: "60px" }} className="d-flex ">
                <div style={{ width: "45%" }}>
                  <Form.Item
                    name="block_number"
                    label="Block Number"
                    rules={[
                      { required: true, message: "Please input block number!" },
                    ]}
                  >
                    <Input placeholder="Block Number" />
                  </Form.Item>
                </div>
                <div
                  style={{
                    width: "45%",
                    display: "flex",
                    alignItems: "flex-end",
                  }}
                >
                  <Form.Item
                    name="street_number"
                    label="Street Number"
                    rules={[
                      {
                        required: true,
                        message: "Please input street number!",
                      },
                    ]}
                    style={{ width: "100%" }}
                  >
                    <Input placeholder="Street Number" />
                  </Form.Item>
                </div>
              </div>
              <div style={{ gap: "60px" }} className="d-flex ">
                <div style={{ width: "45%" }}>
                  <Form.Item
                    name="level_number"
                    label="Level Number"
                    rules={[
                      { required: true, message: "Please input level number!" },
                    ]}
                  >
                    <Input placeholder="Level Number" />
                  </Form.Item>
                </div>
                <div
                  style={{
                    width: "45%",
                    display: "flex",
                    alignItems: "flex-end",
                  }}
                >
                  <Form.Item
                    name="unit_number"
                    label="Unit Number"
                    rules={[
                      {
                        required: true,
                        message: "Please input unit number!",
                      },
                    ]}
                    style={{ width: "100%" }}
                  >
                    <Input placeholder="Unit Number" />
                  </Form.Item>
                </div>
              </div>
              <div style={{ gap: "60px" }} className="d-flex ">
                <div style={{ width: "45%" }}>
                  <Form.Item
                    name="postal_code"
                    label="Postal Code"
                    rules={[
                      { required: true, message: "Please input postal code!" },
                    ]}
                  >
                    <Input placeholder="Postal Code" />
                  </Form.Item>
                </div>
                <div
                  style={{
                    width: "45%",
                    display: "flex",
                    alignItems: "flex-end",
                  }}
                >
                  <Form.Item
                    name="country"
                    label="Country"
                    style={{ width: "100%" }}
                  >
                    <Input placeholder="Country" />
                  </Form.Item>
                </div>
              </div>
            </div>
            <div className="border rounded bg-white p-3 mt-4">
              <div>
                <h4>Alternative Contact Person</h4>
              </div>
              <div style={{ gap: "60px" }} className="d-flex ">
                <div style={{ width: "45%" }}>
                  <Form.Item name="parents_name" label="Parents/Guardian Name">
                    <Input placeholder="Parents/Guardian Name" />
                  </Form.Item>
                </div>
                <div
                  style={{
                    width: "45%",
                    display: "flex",
                    alignItems: "flex-end",
                  }}
                >
                  <Form.Item
                    name="occupation"
                    label="Occupation"
                    style={{ width: "100%" }}
                  >
                    <Input placeholder="Occupation" />
                  </Form.Item>
                </div>
              </div>
              <div style={{ gap: "60px" }} className="d-flex ">
                <div style={{ width: "45%" }}>
                  <Form.Item
                    name="phone_number"
                    label="Phone Number"
                    rules={[
                      {
                        required: true,
                        message: "Please input phone number!",
                      },
                    ]}
                  >
                    <Input maxLength={10} placeholder="Phone Number" />
                  </Form.Item>
                </div>
                <div
                  style={{
                    width: "45%",
                    display: "flex",
                    alignItems: "flex-end",
                  }}
                >
                  <Form.Item
                    name="email_id"
                    label="Email Id"
                    style={{ width: "100%" }}
                  >
                    <Input placeholder="Email Id" />
                  </Form.Item>
                </div>
              </div>
            </div>
          </TabPane>
          <TabPane
            tab={
              <div className="d-flex justify-content-center">
                <BankDetailIco /> <span className="ml-2">Bank Details</span>
              </div>
            }
            key="4"
          >
            <div className="border bg-white rounded p-3 mt-4">
              <div style={{ gap: "60px" }} className="d-flex ">
                <div style={{ width: "45%" }}>
                  <Form.Item
                    name="bank_name"
                    label="Bank Name"
                    rules={[
                      {
                        required: true,
                        message: "Please input Account number!",
                      },
                    ]}
                  >
                    <Input placeholder="Bank Name" />
                  </Form.Item>
                </div>
                <div
                  style={{
                    width: "45%",
                    display: "flex",
                    alignItems: "flex-end",
                  }}
                >
                  <Form.Item
                    name="branch"
                    label="Branch"
                    rules={[
                      {
                        required: true,
                        message: "Please input Account number!",
                      },
                    ]}
                    style={{ width: "100%" }}
                  >
                    <Input placeholder="Branch" />
                  </Form.Item>
                </div>
              </div>
              <div style={{ gap: "60px" }} className="d-flex ">
                <div style={{ width: "45%" }}>
                  <Form.Item
                    name="account_number"
                    label="Account Number"
                    rules={[
                      {
                        required: true,
                        message: "Please input Account number!",
                      },
                    ]}
                  >
                    <Input maxLength={10} placeholder="Account Number" />
                  </Form.Item>
                </div>
                <div
                  style={{
                    width: "45%",
                    display: "flex",
                    alignItems: "flex-end",
                  }}
                >
                  <Form.Item
                    name="account_holder_name"
                    label="Account Holder Name"
                    rules={[
                      {
                        required: true,
                        message: "Please input Account number!",
                      },
                    ]}
                    style={{ width: "100%" }}
                  >
                    <Input placeholder="Account Holder Name" />
                  </Form.Item>
                </div>
              </div>
            </div>
          </TabPane>
          <TabPane
            tab={
              <div className="d-flex justify-content-center">
                <UploadDocument />{" "}
                <span className="ml-2">Upload Documents</span>
              </div>
            }
            key="5"
          >
            <div className="border bg-white rounded p-3 mt-4">
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
          </TabPane>

          <TabPane
            tab={
              <div className="d-flex justify-content-center">
                <AppAccessIco /> <span className="ml-2">App Access</span>
              </div>
            }
            key="6"
          >
            <div className="border rounded bg-white p-3 mt-4">
              <div style={{ gap: "60px" }} className="d-flex ">
                <div style={{ width: "40%", paddingLeft: "18px" }}>
                  <div className="d-flex justify-content-between font-weight-bold my-3">
                    <span>Type</span>
                    <span
                      className="d-flex justify-content-center"
                      style={{ width: "90px" }}
                    >
                      Access
                    </span>
                  </div>
                  <div className="d-flex justify-content-between my-3">
                    <span>Mobile Application</span>
                    <span
                      className="d-flex justify-content-center"
                      style={{ width: "90px" }}
                    >
                      <Switch size="small" />
                    </span>
                  </div>
                  <div className="d-flex justify-content-between my-3">
                    <span>Web Application</span>
                    <span
                      className="d-flex justify-content-center"
                      style={{ width: "90px" }}
                    >
                      <Switch size="small" />
                    </span>
                  </div>
                  <div className="d-flex justify-content-between my-3">
                    <span>Zoom Meeting</span>
                    <span
                      className="d-flex justify-content-center"
                      style={{ width: "90px" }}
                    >
                      <Switch size="small" />
                    </span>
                  </div>
                  <div className="d-flex justify-content-between my-3">
                    <span>AR</span>
                    <span
                      className="d-flex justify-content-center"
                      style={{ width: "90px" }}
                    >
                      <Switch size="small" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </TabPane>
          <TabPane
            tab={
              <div className="d-flex justify-content-center">
                <AssignDepart /> <span className="ml-2">Assign Department</span>
              </div>
            }
            key="7"
          >
            <div className="border rounded bg-white p-3 mt-4">
              <div style={{ gap: "60px" }} className="d-flex ">
                <div style={{ width: "45%" }}>
                  <Form.Item name="assign_department" label="Assign Department">
                    <Select
                      placeholder="Select Department"
                      style={{ width: "100%" }}
                      onChange={handleChange}
                      options={[
                        { value: "Department 1", label: "Department 1" },
                        { value: "Department 2", label: "Department 2" },
                        { value: "Department 3", label: "Department 3" },
                      ]}
                    />
                  </Form.Item>
                </div>
                <div
                  style={{
                    width: "45%",
                    display: "flex",
                    alignItems: "flex-end",
                  }}
                >
                  <Form.Item
                    name="select_leave_policy"
                    label="Leave Policy"
                    style={{ width: "100%" }}
                  >
                    <Select
                      placeholder="Select Leave Policy"
                      style={{ width: "100%" }}
                      onChange={handleChange}
                      options={[
                        { value: "Leave Policy 1", label: "Leave Policy 1" },
                        { value: "Leave Policy 2", label: "Leave Policy 2" },
                        { value: "Leave Policy 3", label: "Leave Policy 3" },
                      ]}
                    />
                  </Form.Item>
                </div>
              </div>
              <div style={{ gap: "60px" }} className="d-flex ">
                <div style={{ width: "45%" }}>
                  <Form.Item name="manager" label="Manager">
                    <Select
                      placeholder="Select Manager"
                      style={{ width: "100%" }}
                      onChange={handleChange}
                      options={managArray}
                    />
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
            {activeTab < 7 ? (
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
        width={600}
        footer={null}
        visible={deactiveModalOpen}
        onOk={DeactiveHandleOk}
        onCancel={() => setIsDeactiveModalOpen(false)}
      >
        <div className="d-flex my-3 flex-column w-75">
          <h4 className="mb-4">Sure you want to deactivate staff?</h4>
          <h5>Staff ID #TC-1234 will be deleted from system</h5>
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
                title: "Staff Deactivated",
                text: "Staff ID #TC-1234 deleted.",
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
          <h4 className="mb-4">Change Employee Status</h4>
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
                value: "Resigned",
                label: "Resigned",
              },
              {
                value: "Resigned_without_notice",
                label: "Resigned without notice",
              },
              {
                value: "terminated",
                label: "Terminated",
              },
              {
                value: "Contract_end",
                label: "Contract end",
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
                title: "Employee Status Change",
                text: "Employee status changed to terminated.",
              });
              setSuccessModal(true);
            }}
          >
            Save
          </Button>
        </div>
      </Modal>
      <Modal
        width={500}
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
          <h3 className="font-weight-bold mt-4">
            {succesmodaltext.title} Successfully!
          </h3>
          <span className="text-center font-size-sm w-75 font-weight-semibold">
            {succesmodaltext.text}
          </span>
        </div>
      </Modal>
    </div>
  );
}

import { Button, Form, Input, Select, Modal, DatePicker, Upload, message, Radio } from "antd";
import { BasicDetail } from "assets/svg/icon";

import React from "react";
import { useState } from "react";
import { Tabs } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { Option } from "antd/lib/mentions";
import axios from "../../../../axios";
import moment from "moment";
import { useEffect } from "react";
import { useLocation} from "react-router-dom/cjs/react-router-dom";
import { useHistory } from 'react-router-dom';
import uploadImage from "middleware/uploadImage";
import { API_BASE_URL } from "constants/ApiConstant";
export default function AddNew() {
  const { TabPane } = Tabs;
  const history = useHistory();
  const [statu, setStatu] = useState("")
  const [activeTab, setActiveTab] = useState("1");
  const [isChangeStudModalOpen, setIsChangeStudModalOpen] = useState(false);
  const [deactiveModalOpen, setIsDeactiveModalOpen] = useState(false);
  const [successModal, setSuccessModal] = useState(false);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const [fileList,setFileList]=useState([]);
  const [imageUrl,setImageUrl]=useState();
  const id = queryParams.get('id')
  const [succesmodaltext, setSuccesmodaltext] = useState({
    title: "Staff Status Change Successfully!",
    text: "Staff status changed to terminated.",
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

  function handleBackClick() {
    // if (activeTab > 1 && activeTab <= 7) {
    //   let actnum = Number(activeTab) - 1;
    //   setActiveTab(actnum.toString());
    // }
    history.goBack();
  }

  const [form] = Form.useForm();
  const onFinish = async (values) => {
    const image = await uploadImage(fileList);
    if (id) {
      let updateRes = await axios.post(`${ API_BASE_URL }/update-admins`,{
        "name": values.name,
        "email": values.email,
        "phone_number":values.phone_number,
        "dob":moment(values.dob).format("DD-MM-YYYY"),
        "profile_pic": "https://cristofori.s3.ap-southeast-1.amazonaws.com/profile_picture/uRRHh_kjwGrn3DUX3D_3S.png",
        "user_id": id,
        "gender":values.gender,
        "profile_pic":image,

    })
    if (updateRes.data.success) {
      history.push('/app/staffManagement/admin_management');
    }
    console.log(updateRes);
      return
    }
    try {
      console.log("Success:", values);
      let data = {
        name: values.name,
        profile_pic: "",
        password: values.password,
        role: 0,
        phone_number: values.phone_number,
        dob: moment(values.dob).format("DD-MM-YYYY"),
        email: values.email,
        gender:values.gender,
        profile_pic:image,
      };
      console.log("test", data);
      const response = await axios.post(
        "/api/admin-register",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("response", response);
      if (response.status === 200) {
        setSuccesmodaltext({
          title: "New Admin added successfully!",
          text: `Admin ID ${response.data.user.id} ${values.name} added to the system.`,
        });
        setSuccessModal(true);
        setTimeout(()=>{
          history.push('/app/staffManagement/admin_management');
        },2000)
      }
      else{
        message.warn(response.data.email)
      }
    } catch (error) {
      message.warn("Email is already in use")
    }
  };
  

  // const onFinishFailed = (errorInfo) => {
  //   console.log("Failed:", errorInfo);
  // };
  const handleChange = (info) => {
    const file = info.fileList[0]?.originFileObj;
    let formData = new FormData();
    if (file) {
      formData.append("file", file);
      setFileList(file);
    }
    if (info?.fileList[0]) {
      getBase64(info.fileList[0].originFileObj, (url) => {
        setImageUrl(url);
      });
    }
  };

  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  };

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
  const fetchAdmin = async (id) => {
    let res1 = await axios.post(`${API_BASE_URL}/get-admin-by-id`,{
        "user_id": id
    })
    let data = res1.data[0];
    form.setFieldsValue({
      id:data.user_id,
      name:data.name,
      phone_number:data.phone_number===null?"":data.phone_number,
      email:data.email,
      dob:moment(data.dob,"DD-MM-YYYY"),
      gender:data.gender
    })
    console.log(res1.data[0]);
    setImageUrl([
      data.profile_pic
    ])
  }
  const sendStatus = async (status) => {
    const res1 = await axios.put(`${API_BASE_URL}/admin-change-status/${id}`,{status:status});
    console.log(res1);
    setIsChangeStudModalOpen(false);
    setSuccesmodaltext({
      title: "Staff Status Change Successfully!",
      text: "Staff status changed to terminated.",
    });
    setSuccessModal(true);
  }
 useEffect(() => {
  if (id) {
     fetchAdmin(id)
  }
 }, [])
 
  return (
    <div className="">
     {location.pathname!=="/app/staffManagement/admin_management/add_new"&& <div style={{ gap: "10px" }} className="mb-2 d-flex justify-content-end">
        <Button
          style={{ border: "1.6px solid #3e79f7" }}
          className="px-4 font-weight-semibold text-info"
          onClick={() => setIsChangeStudModalOpen(true)}
        >
          Change Status
        </Button>
        <Button
          style={{ border: "1.6px solid #3e79f7" }}
          className="px-4 font-weight-semibold text-info"
          onClick={() => setIsDeactiveModalOpen(true)}
        >
          Deactivate Account
        </Button>
      </div>
  }
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
              <Form.Item name="profile_pic">
              <Upload
              name="avatar"
              listType="picture-card"
              className="avatar-uploader"
              showUploadList={false}
              beforeUpload={() => false}
              maxCount={1}
              onChange={handleChange}
              accept='image/*'
            >
              {imageUrl ? (
                <img
                  src={imageUrl}
                  alt="avatar"
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                />
              ) : (
                uploadButton
              )}
            </Upload>
              </Form.Item>
              <div style={{ gap: "60px" }} className="d-flex ">
                <div style={{ width: "45%" }}>
                  <Form.Item
                    name="id"
                    label="Id"
                    
                  >
                    <Input disabled={true}  />
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
                    <div className="px-2">Admin</div>
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
                          defaultValue={"In"}
                          style={{
                            width: 80,
                          }}
                        >
                          <Option value="In">+91</Option>
                          <Option value="SG">+65</Option>
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
                      placeholder="Date of birth"
                      style={{ width: "100%" }}
                    />
                  </Form.Item>
                </div>
              </div>
              {
                !id && 
              <div style={{ gap: "60px" }} className="d-flex ">
                <div style={{ width: "45%" }}>
                  <Form.Item
                    name="password"
                    label="Password"
                    rules={[
                      { required: !id?true:false, message: "Please enter Password" },
                      { min: 6, message: 'Password must be minimum 6 characters.' },
                    ]}
                  >
                    <Input.Password placeholder="Create Password" />
                  </Form.Item>
                </div>
                <div style={{ width: "45%" }}>
                  <Form.Item
                    name="c_password"
                    label="Confirm Password"
                    rules={[
                      {
                        required: !id?true:false,
                        message: "Please enter Confirm Password",
                      },
                    ]}
                  >
                    <Input.Password placeholder="Confirm Password" />
                  </Form.Item>
                </div>
              </div>
              }
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
              Save Draft
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
            onChange={(val) => setStatu(val)}
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
              if (statu==='') {
                message.error(`Please select status first !`)
                return
              }
              sendStatus(statu)
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
          <h3 className="font-weight-bold mt-4">{succesmodaltext.title}</h3>
          <span className="text-center font-size-sm w-75 font-weight-semibold">
            {succesmodaltext.text}
          </span>
        </div>
      </Modal>
    </div>
  );
}

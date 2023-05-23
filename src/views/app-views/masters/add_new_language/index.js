import React, { useState } from "react";
import { Form, Button, Input, Modal } from "antd";
import TextArea from "antd/lib/input/TextArea";
import axios from "axios";
const ScheduleNewClass = () => {
  const [form] = Form.useForm();
  const [successModal, setSuccessModal] = useState(false);
  const onFinish = async (values) => {
    try {
      console.log("Success:", values);
      let data = {
        language_name: values.language_name,
        language_code: values.language_code,
      };
      console.log("test", data);
      const response = await axios.post(
        "http://18.140.159.50:3333/api/admin-add-language",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
      if (response.status === 200) {
        setSuccessModal(true);
        setTimeout(() => {
          setSuccessModal(false);
        }, 1200);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form
      layout="vertical"
      onFinish={onFinish}
      // onFinishFailed={onFinishFailed}
      form={form}
      name="control-hooks"
    >
      <div className="border rounded p-3 bg-white">
        <h5 className="text-info">Add New Language</h5>
        <Form.Item
          className="w-75"
          name="language_name"
          label="Language Name"
          rules={[{ required: true, message: "Please enter language name" }]}
        >
          <Input placeholder="Language Name" />
        </Form.Item>
        <Form.Item
          className="w-75"
          name="language_code"
          label="Language Code"
          rules={[{ required: true, message: "Please enter language code" }]}
        >
          <Input placeholder="Language Code" />
        </Form.Item>
        <Form.Item
          className="w-75"
          name="description"
          label="Description (if any)"
        >
          <TextArea placeholder="Type here..." />
        </Form.Item>
      </div>
      <div className="d-flex justify-content-end mt-3">
        <Form.Item>
          <Button className="mr-3" type="default">
            Cancel
          </Button>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Save
          </Button>
        </Form.Item>
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
            New language name English added successfully!
          </h3>
        </div>
      </Modal>
    </Form>
  );
};

export default ScheduleNewClass;

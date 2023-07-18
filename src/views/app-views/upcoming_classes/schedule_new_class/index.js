import React, { useState, useEffect } from "react";
import { Form, Select, DatePicker, Button, Input } from "antd";
import axios from "axios";
import moment from "moment";
import {
  useHistory,
  useLocation,
} from "react-router-dom/cjs/react-router-dom.min";
const { Option } = Select;
const ScheduleNewClass = () => {
  const history = useHistory();
  const location = useLocation();
  const [courseCatelist, setCourseCatelist] = useState([]);
  const [courseslist, setCourseslist] = useState([]);
  const [courseslistdummy, setCourseslistdummy] = useState([]);
  const [batcheslist, setBatcheslist] = useState([]);
  const [venueslist, setVenueslist] = useState([]);
  const [subjectList, setSubjectList] = useState([]);
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id");
  const [form] = Form.useForm();
  const onFinish = async (e) => {
    let sendData = {
      class_name: e.class_name,
      course_id: e.course,
      batch_id: e.batch,
      venue_id: e.venue,
      class_date: moment(e.class_date).format("YYYY-MM-DD"),
      start_time: moment(e.start_time).format("HH:mm:ss"),
      end_time: moment(e.end_time).format("HH:mm:ss"),
      subject_id: e.subject,
      status: 3,
    };
    if (id) {
      const res1 = await axios.put(
        `http://18.140.159.50:3333/api/students/course/classes/${id}`,
        sendData
      );
      if (res1.status === 201) {
        history.goBack();
      }
    } else {
      const res1 = await axios.post('http://18.140.159.50:3333/api/students/course/classes',sendData)
      if(res1.status===201){
        history.goBack();
      }
    }
  };
  const daysOfWeek = [
    {
      value: "Monday",
      label: "Monday",
    },
    {
      value: "Tuesday",
      label: "Tuesday",
    },
    {
      value: "Wednesday",
      label: "Wednesday",
    },
    {
      value: "Thursday",
      label: "Thursday",
    },
    {
      value: "Friday",
      label: "Friday",
    },
    {
      value: "Saturday",
      label: "Saturday",
    },
    {
      value: "Sunday",
      label: "Sunday",
    },
  ];
  const courseHandleChange = async (val) => {
    console.log(val);
    const res1 = await axios.post(
      "http://18.140.159.50:3333/api/admin-subjects",
      { course_id: val }
    );
    setSubjectList(res1.data);
    const res2 = await axios.post(
      "http://18.140.159.50:3333/api/get-batches-course-id",
      { course_id: val }
    );
    setBatcheslist(res2.data.data);
  };
  const getSelectOptionsData = async () => {
    const res1 = await axios.post(
      "http://18.140.159.50:3333/api/admin-category"
    );
    setCourseCatelist(res1.data.data);
    const res2 = await axios.get(
      "http://18.140.159.50:3333/api/get-all-courses"
    );
    setCourseslist(res2.data);
    setCourseslistdummy(res2.data);
    const res3 = await axios.post(
      "http://18.140.159.50:3333/api/get-batches-course-id",
      { course_id: 22 }
    );
    setBatcheslist(res3.data.data);
    const res4 = await axios.post("http://18.140.159.50:3333/api/admin-venues");
    setVenueslist(res4.data.data);
  };
  const getClassById = async (id) => {
    const res1 = await axios.get(
      `http://18.140.159.50:3333/api/students/course/classes/${id}`
    );
    const data = res1.data[0];
    form.setFieldsValue({
      class_name: data.class_name,
      course: data.course_id,
      subject: data.subject_id,
      batch: data.batch_id,
      venue: data.venue_id,
    });
  };
  useEffect(() => {
    getSelectOptionsData();
    if (id) {
      getClassById(id);
    }
  }, []);

  return (
    <Form
      layout="vertical"
      onFinish={onFinish}
      // onFinishFailed={onFinishFailed}
      form={form}
      name="control-hooks"
    >
      <div className="border rounded p-3 bg-white">
        <h5 className="text-info">Schedule New Class</h5>
        <Form.Item className="w-75" name="class_name" label="Class Name">
          <Input placeholder="Enter Class Name." />
        </Form.Item>
        <Form.Item
          className="w-75"
          name="course_category"
          label="Course Category"
        >
          <Select
            style={{
              width: "100%",
            }}
            placeholder="Select"
            onChange={(value) => {
              console.log(`selected ${value}`);
              setCourseslist(() => {
                return courseslistdummy.filter((elem, i) => {
                  if (elem.course_category_id == value) {
                    return elem;
                  } else {
                    return 0;
                  }
                });
              });
            }}
          >
            {courseCatelist.length !== 0 &&
              courseCatelist.map((elem, i) => {
                return (
                  <Option key={i} value={elem.id}>
                    {elem.course_category}
                  </Option>
                );
              })}
          </Select>
        </Form.Item>
        <Form.Item className="w-75" name="course" label="Course">
          <Select
            style={{
              width: "100%",
            }}
            placeholder="Select"
            onChange={courseHandleChange}
          >
            {courseslist.length !== 0 &&
              courseslist.map((elem, i) => {
                return (
                  <Option key={i} value={elem.id}>
                    {elem.course_name}
                  </Option>
                );
              })}
          </Select>
        </Form.Item>
        <Form.Item className="w-75" name="subject" label="Subject">
          <Select
            style={{
              width: "100%",
            }}
            mode="multiple"
            placeholder="Select"
            onChange={(val) => console.log(val)}
          >
            {subjectList.length !== 0 &&
              subjectList.map((elem, i) => {
                return (
                  <Option key={i} value={elem.id}>
                    {elem.subject_name}
                  </Option>
                );
              })}
          </Select>
        </Form.Item>
        <Form.Item className="w-75" name="batch" label="Batch">
          <Select
            style={{
              width: "100%",
            }}
            placeholder="Select"
            onChange={(value) => console.log(`selected ${value}`)}
          >
            {batcheslist.length !== 0 &&
              batcheslist.map((elem, i) => {
                return (
                  <Option key={i} value={elem.id}>
                    {elem.batch_id}
                  </Option>
                );
              })}
          </Select>
        </Form.Item>
        <Form.Item className="w-75" name="venue" label="Venue">
          <Select
            style={{
              width: "100%",
            }}
            placeholder="Select"
            onChange={(value) => console.log(`selected ${value}`)}
          >
            {venueslist.length !== 0 &&
              venueslist.map((elem, i) => {
                return (
                  <Option key={i} value={elem.id}>
                    {elem.venue_name}
                  </Option>
                );
              })}
          </Select>
        </Form.Item>
        <Form.Item className="w-75" name="class_date" label="Class Date">
          <DatePicker
            className="w-100"
            onChange={(date, dateString) => console.log(date, dateString)}
          />
        </Form.Item>
        <Form.Item className="w-75" name="start_time" label="Start Time">
          <DatePicker
            className="w-100"
            showTime
            onOk={(value) => console.log("onOk: ", value)}
            onChange={(date, dateString) => console.log(date, dateString)}
          />
        </Form.Item>
        <Form.Item className="w-75" name="end_time" label="End Time">
          <DatePicker
            className="w-100"
            showTime
            onOk={(value) => console.log("onOk: ", value)}
            onChange={(date, dateString) => console.log(date, dateString)}
          />
        </Form.Item>
      </div>
      <div className="d-flex justify-content-end mt-3">
        <Form.Item>
          <Button
            onClick={() => history.goBack()}
            className="mr-3"
            type="default"
          >
            Cancel
          </Button>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Save
          </Button>
        </Form.Item>
      </div>
    </Form>
  );
};

export default ScheduleNewClass;

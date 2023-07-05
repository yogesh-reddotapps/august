import { Button, DatePicker, Form, Select } from "antd";
import { Option } from "antd/lib/mentions";
import { TeacherAssignedIcon } from "assets/svg/icon";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const EnrollStudent = () => {
  const [form] = Form.useForm();
  const history = useHistory()
  const [coursenameid, setCoursenameid] = useState([]);
  const [studata, setstuData] = useState([])
  const onFinish = async (e) => {
    console.log(e);
  };
  const getCoursesNameAndId = async () => {
    let res = await axios.get("http://18.140.159.50:3333/api/courses-list");
    setCoursenameid(
      res.data.data.map((elem, i) => {
        return {
          value: `${elem.id},${elem.course_name}`,
          label: elem.course_name,
        };
      })
    );
  };
  const getStudent = () => {
    axios
      .post(
        "http://18.140.159.50:3333/api/get-students",
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        setstuData(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getCoursesNameAndId();
    getStudent();
  }, []);

  return (
    <div>
      <div className="d-flex align-items-center">
        <TeacherAssignedIcon />{" "}
        <span className="ml-2">Enrolled New Students</span>
      </div>
      <div className="border mt-3 rounded bg-white p-3">
        <Form form={form} onFinish={onFinish}>
          <div className="mt-4">
            <h5>Course</h5>
            <Form.Item name="course">
              <Select
                placeholder="Select"
                className="w-50"
                options={coursenameid}
              />
            </Form.Item>
          </div>
          <div className="mt-4">
            <h5>Enrollment Date</h5>
            <Form.Item name="enrollmentDate">
              <DatePicker className="w-50" />
            </Form.Item>
          </div>
          <div className="mt-4">
            <h5>Select Students</h5>
            <Form.Item name="course">
              <Select
                className="w-50"
                mode="multiple"
                placeholder="Students"
                onChange={(value) => console.log(`selected ${value}`)}
              >
                {studata.map((teacher, i) => (
                  <Option key={i} value={teacher.user_id}>
                    <div>
                      <img
                        className="circleTeacherImage mr-2"
                        src="/img/avatars/thumb-1.jpg"
                        alt="img"
                      />
                      {teacher.name}
                    </div>
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </div>
          <div className="d-flex mt-3 justify-content-end">
            <Form.Item>
              <Button onClick={()=> history.goBack()}>Back</Button>
            </Form.Item>
            <Form.Item>
              <Button className="text-white bg-info ml-3" htmlType="submit">
                Save
              </Button>
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default EnrollStudent;
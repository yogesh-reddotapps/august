import React from "react";
import { Select,Input } from 'antd';
const AddNewLesson = () => {
    const { TextArea } = Input;
  return (
    <div className="border rounded p-3 mb-4 bg-white">
      <h5 className="text-info mb-4">AddNewLesson</h5>
      <div>
        <h5>Course</h5>
        <Select
          defaultValue="lucy"
          className="w-50"
          options={[
            {
              value: "lucy",
              label: "Lucy",
            },
          ]}
        />
      </div>
      <div className="mt-4">
        <h5>Section No</h5>
        <Select
          defaultValue="0"
          className="w-50"
          options={[
            {
              value: "1",
              label: "1",
            },
            {
              value: "2",
              label: "2",
            },
            {
              value: "3",
              label: "3",
            },
          ]}
        />
      </div>
      <div className="mt-4">
        <h5>Section Title</h5>
        <Input className="w-50" placeholder="Section Title" />
      </div>
      <div className="mt-4">
        <h5>Lesson No</h5>
        <Select
          defaultValue="0"
          className="w-50"
          options={[
            {
              value: "1",
              label: "1",
            },
            {
              value: "2",
              label: "2",
            },
            {
              value: "3",
              label: "3",
            },
          ]}
        />
      </div>
      <div className="mt-4 w-50">
        <h5>Description</h5>
        <TextArea rows={4} placeholder="Type here..."/>
      </div>
    </div>
  );
};

export default AddNewLesson;

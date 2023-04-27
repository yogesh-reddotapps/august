import React from "react";
import { Select,Input,Button } from 'antd';
import { Link ,useHistory } from "react-router-dom";
const AddNew = () => {
    const { TextArea } = Input;
    const history = useHistory();
  return (
    <>
    <div className="border rounded p-3 mb-4 bg-white">
      <h5 className="text-info mb-4">Add New Category</h5>
      <div>
        <h5>Course Category</h5>
        {/* <Select
          defaultValue="lucy"
          className="w-50"
          options={[
            {
              value: "lucy",
              label: "Lucy",
            },
          ]}
        /> */}
        <Input className="w-50" placeholder="Course Category" />
      </div>
      <div className="mt-4 w-50">
        <h5>Description</h5>
        <TextArea rows={4} placeholder="Type here..."/>
      </div>
    </div>
    <div className="d-flex mt-3 justify-content-end">
      <Button>Cancel</Button>
      <Button className="text-white bg-info ml-3" onClick={()=>history.push('/app/masters/?add=course_category')}> Save </Button>
    </div>
    </>
  );
};

export default AddNew;

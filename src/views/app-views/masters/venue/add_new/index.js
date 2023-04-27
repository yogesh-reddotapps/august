import React from "react";
import { Select,Input,InputNumber,Button  } from 'antd';
import { Link ,useHistory } from "react-router-dom";
const AddNewLesson = () => {
    const { TextArea } = Input;
    const history = useHistory();
  return (
    <>
    <div className="border rounded p-3 mb-4 bg-white">
      <h5 className="text-info mb-4">Add New Venue</h5>
      <div className="mt-4">
        <h5>Venue Id</h5>
        <h5>#5</h5>
      </div>
      <div className="mt-4">
        <h5>Venue Name</h5>
        <Input className="w-50" placeholder="Venue Name" />
      </div>
      <div className="mt-4">
        <h5>Venue Capacity</h5>
        <InputNumber className="w-50" defaultValue={0} />
      </div>

      <h5 className="mt-4">Address</h5>
      <div>
        <h5>Residential/Postal Code</h5>
        <Input className="w-50" placeholder="Residential/Postal Code" />
      </div>
      <div className="mt-4">
        <h5>Block No</h5>
        <Input className="w-50" placeholder="Block No" />
      </div>
      <div className="mt-4">
        <h5>Street No</h5>
        <Input className="w-50" placeholder="Street No" />
      </div>
      <div className="mt-4">
        <h5>Unit No (if applicable)</h5>
        <Input className="w-50" placeholder="Unit No" />
      </div>
      <div className="mt-4">
        <h5>Level No</h5>
        <Input className="w-50" placeholder="Level No" />
      </div>
      <div className="mt-4 w-50">
        <h5>Country</h5>
        <Select
          defaultValue="Singapore"
          className="w-100"
          options={[
            {
              value: "Singapore",
              label: "Singapore",
            },
          ]}
        />
      </div>
    </div>
    <div className="d-flex mt-3 justify-content-end">
      <Button>Cancel</Button>
      <Button className="text-white bg-info ml-3" onClick={()=>history.push('/app/masters/?add=venue')}> Save </Button>
    </div>
    </>
  );
};

export default AddNewLesson;

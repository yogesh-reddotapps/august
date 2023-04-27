import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Button,Input} from 'antd'
const Edit = () => {
    const [notiText, setNotiText] = useState('');
  return (
    <>
      <div className="py-3 mb-4 d-flex justify-content-between align-items-center">
        <h5>Notifications</h5>
        <div>
        <Button
                  className="mr-4 px-4 font-weight-semibold"
                  htmlType="button"
                  onClick={()=>console.log("tese")}
                >
                  Back
                </Button>
            <Button
              className="px-4 font-weight-semibold text-white bg-info"
              htmlType="submit"
            >
              Save
            </Button>
        </div>
      </div>
      <div className="border rounded p-3 mb-4 bg-white d-flex justify-content-center align-items-center">
        <div className="w-50 pt-5" style={{height:'60vh'}}>
            <h5>Notification Title</h5>
            <Input placeholder="Assignment"/>
            <br/>
            <h5 className="mt-5">
                Notification Text
            </h5>
            <ReactQuill theme="snow" value={notiText} onChange={setNotiText} />
        </div>
      </div>
    </>
  );
};

export default Edit;

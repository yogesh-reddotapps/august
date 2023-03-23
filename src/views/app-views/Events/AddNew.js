import { Button, DatePicker, Form, Input, InputNumber, Select, TimePicker } from 'antd'
import React, { useEffect, useState } from 'react'
import './AddNew.css'
import { PlusOutlined } from '@ant-design/icons';
import { Modal, Upload } from 'antd';
import CustomIcon from 'components/util-components/CustomIcon';
import { Verified } from 'assets/svg/icon';
import TextArea from 'antd/lib/input/TextArea';
import axios from 'axios';
import { useLocation, useParams } from 'react-router-dom';
import * as moment from 'moment'; 

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

function AddNew() {
  const now = moment(); 
  const location = useLocation()
  console.log(location.pathname)
  const param = useParams()
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  const [fileList, setFileList] = useState([])
  const [eventData, setEventsData] = useState({})
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
    handleOk()
  };

  const onChange = (time, timeString) => {
    // console.log(time, timeString);
  };

  const handleOk = () => {
    setTimeout(() => {
      setIsModalOpen(false);
    }, 10000)
  };

  const handleCancelModal = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => setPreviewOpen(false);
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
  };
  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
  const uploadButton = (
    <div style={{ width: "200px" }} >
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

  const { Option } = Select;

  const [form] = Form.useForm();

  const onFinish = (values) => {
    // console.log('Success:', values);
    let newImages = values.images.fileList[0].originFileObj
    // values.images.fileList.forEach(element => {
    //   newImages.push(element?.originFileObj)
    // });
    let newData;
    if (location.pathname === `/app/events/event_list/update/${param.id}`) {
      let newData = { ...values,id:param.id, date_time: new Date(values.date_time._d).toISOString().slice(0, 10), images: newImages }
      createEvents(newData,`http://127.0.0.1:3333/events/update?id=${param.id}`)
    }else{
      let newData = { ...values, date_time: new Date(values.date_time._d).toISOString().slice(0, 10), images: newImages }
      createEvents(newData,'http://127.0.0.1:3333/events/new')
    }
    console.log(newData)
    
    // console.log(fileList)
    // console.log(values.images.fileList)
    // console.log(newImages)
  };

  const createEvents = (values,url) => {
    const formData = new FormData();
    for (const key in values) {
      formData.append(key, values[key])
    }
    axios({
      method: 'post',
      url: url,
      data: formData,
      headers: {
        'content-type': `multipart/form-data`,
      },
    }).then(function (response) {
      console.log(response);
      if (response.data.status) {
        showModal()
      }
    }).catch(function (error) {
      console.log(error);
    });

    
  }

  const getEvent = () => {
    axios.get(`http://127.0.0.1:3333/events?id=${param.id}`).then((response) => {
      console.log(response.data.result[0])
      if (response.data.status) {
        const data = response.data.result[0];
        form.setFieldsValue({
          Event_id : data.id,
          name : data.name,
          date_time: moment(data.date_time),
          time : [moment('2077-07-07 07:07:07'),moment('2077-07-07 07:07:07')],
          address: data.address,
          images : data.images,
          description : data.description,
          fee_for_member : data.fee_for_member,
          fee_for_non_member : data.fee_for_non_member,
        })
      } else {
        console.log(response)
      }
    });
  }
  // console.log(eventData);
  useEffect(() => {
    if (location.pathname === `/app/events/event_list/update/${param.id}`) {
      getEvent();
    }
  }, [])

  return (
    <Form layout='vertical'
      onFinish={onFinish}
      initialValues={{...eventData}}
      // onFinishFailed={onFinishFailed}
      form={form}
    >
      <div>
        <div style={{ gap: "20px" }} className='d-flex'>
          <div style={{ flex: "0.7" }}>
            <div className='border rounded p-3 py-4'>
              <h4 className='font-weight-bold'>Add New Event</h4>
              <Form.Item name='Event_id' label="Event Id" rules={[{ required: true, message: 'Please enter Event id!' }]}>
                <Input placeholder='Enent Id' />
              </Form.Item>
              <Form.Item
                name="name"
                label="Event Name"
                rules={[{ required: true, message: 'Please select event name!' }]}
              >
                <Input placeholder='Enent Name' />
              </Form.Item>
              <Form.Item name="date_time" label="Event Date" rules={[{ type: 'object', required: true, message: 'Please select date!' }]}>
                <DatePicker placeholder='Event Date' style={{ width: "100%" }} />
              </Form.Item>
              <Form.Item name="time" label="Event Time" rules={[{ type: 'array', required: true, message: 'Please select time!' }]}>
                <TimePicker.RangePicker use12Hours format="h:mm a" style={{ width: "100%" }} onChange={onChange} />
              </Form.Item>
              <Form.Item name="address" label="Event Address" rules={[{ required: true, message: 'Please input event address!' }]}>
                <Input placeholder='Event Address' />
              </Form.Item>
              <Form.Item name="fee_for_member" label="Event Fee/Pax (For Members)" >
                <InputNumber placeholder='Event Fee' style={{ width: "100%" }} min={0} />
              </Form.Item>
              <Form.Item name="fee_for_non_member" label="Event Fee/Pax (For Non-Members)" >
                <InputNumber placeholder='Event Fee' style={{ width: "100%" }} min={0} />
              </Form.Item>
            </div>
            <Form.Item className='border rounded p-3 py-4 mt-4' name="description" label="Event Details" >
              <TextArea rows={8} placeholder='Type Here' style={{ width: "100%" }} />
            </Form.Item>
          </div>
          <div style={{ flex: "0.3", minWidth: "300px", height: "280px" }} className='border rounded p-3 py-4'>
            <h4 className='font-weight-bold'>Add Images</h4>
            <Form.Item name='images'>
              <Upload
                // action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                listType="picture-card"
                fileList={fileList}
                onPreview={handlePreview}
                onChange={handleChange}

              >
                {fileList.length >= 8 ? null : uploadButton}
              </Upload>
            </Form.Item>
            <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
              <img
                alt="example"
                style={{
                  width: '100%',
                }}
                src={previewImage}
              />
            </Modal>
          </div>
        </div>
        <Form.Item >
          <div style={{ gap: "10px" }} className='mt-5 d-flex justify-content-end'>
            <Button className='px-4 font-weight-semibold' htmlType="button">
              Back
            </Button>
            <Button className='px-4 font-weight-semibold' htmlType="button" >
              Clear All
            </Button>
            <Button className="px-4 font-weight-semibold text-white bg-info" htmlType="submit" >
              Save
            </Button>
          </div>
        </Form.Item>
      </div>
      <Modal width={400} footer={null} visible={isModalOpen} onOk={handleOk} onCancel={handleCancelModal}>
        <div className='d-flex my-3 align-items-center flex-column justify-content-center'>
          <CustomIcon svg={Verified} />
          <h3 className='font-weight-bold mt-4'>New Event Created!</h3>
          <span className='text-center font-size-sm w-75 font-weight-semibold'>Event Indian FolK Dance Fest Created Successfully.</span>
        </div>
      </Modal>
    </Form>
  )
}

export default AddNew
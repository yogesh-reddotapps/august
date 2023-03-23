import { Button, Form, Input, InputNumber, Radio,Select, Modal ,DatePicker,Upload} from 'antd'
import TextArea from 'antd/lib/input/TextArea'
import { dollars, Verified } from 'assets/svg/icon'
import axios from 'axios'
import CustomIcon from 'components/util-components/CustomIcon'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {Tabs} from 'antd';
import { useLocation, useParams } from 'react-router-dom'
import { PlusOutlined } from '@ant-design/icons';

export default function AddNew() {
    const { TabPane } = Tabs;
    const param = useParams()
    const location = useLocation()
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
        handleOk()
    };

    const handleOk = () => {
        setTimeout(() => {
            setIsModalOpen(false);
        }, 10000)
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log('Success:', values);
        if (location.pathname===`/app/membership/membership_plans/update/${param.id}`) {
            // let newVal = 
            createMembership({...values,id:param.id},`http://127.0.0.1:3333/membership/update`)
        }else{
            createMembership(values,'http://127.0.0.1:3333/membership/new')
        }
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const handleChange = () => {
      
      };

    const createMembership = (values,url) => {
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

    const getMembershipPlan = () => {
        axios.get(`http://127.0.0.1:3333/membership?id=${param.id}`).then((response) => {
          console.log(response.data[0])
          if (response.status===200) {
            // const data = response.data.result[0];
            form.setFieldsValue(response.data[0])
          } else {
            console.log(response)
          }
        });
      }
      console.log(location.pathname)

    useEffect(() => {
      if (location.pathname===`/app/membership/membership_plans/update/${param.id}`) {
        getMembershipPlan();
      }
    }, [])
    

    const uploadButton = (
        <div style={{ width: "200px" }} >
          <PlusOutlined/>
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
        <div>
        <Tabs>
        <TabPane tab="Basic Details" key="1">
         
        </TabPane>
        <TabPane tab="Education Details" key="2">
          
        </TabPane>
        <TabPane tab="Address Details" key="3">
         
        </TabPane>
        <TabPane tab="Bank Details" key="4">
          
        </TabPane>
        <TabPane tab="Upload Documents" key="5">
          
        </TabPane>

        <TabPane tab="App Access" key="6">
          
        </TabPane>
        <TabPane tab="Assign Department" key="7">
          
        </TabPane>
        </Tabs>
            <Form layout="vertical"
                onFinish={onFinish}
                // onFinishFailed={onFinishFailed}
                form={form}
                name="control-hooks"
            >
       
            <Form.Item name='images'>
              <Upload
                // action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                listType="picture-card"
               
               
                onChange={handleChange}

              >
             {uploadButton}
              </Upload>
            </Form.Item>
                <div className='border rounded p-3'>
                    <div style={{ gap: "60px" }} className='d-flex '>
                        <div style={{ width: "45%", }}>
                            <Form.Item name='id' label="Staff Id" rules={[{ required: true, message: 'Please enter Staff Id' }]} >
                                <Input placeholder="Membership Id" />
                            </Form.Item>
                            <Form.Item name='period' label="Email Id" rules={[{ required: true, message: 'Please enter email Id' }]}>
                                <Input min={1}  placeholder="Email Id" />
                            </Form.Item>
                        </div>
                        <div style={{ width: "45%", }}>
                            <Form.Item name='name' label="Full Name" rules={[{ required: true, message: 'Please enter Full Name' }]} >
                                <Input placeholder="Full Name" />
                            </Form.Item>
                            <Form.Item name='phone number' label="Phone Number" rules={[{ required: true, message: 'Please enter Full Name' }]}> 
                                <Input min={0} style={{ width: "100%" }}  placeholder="Phone number" />
                            </Form.Item>
                        </div>
                    </div>
                    <div style={{ gap: "60px" }} className='d-flex '>
                        <div style={{ width: "45%", }}>
                            <Form.Item name='id' label="Nationality" rules={[{ required: true, message: 'Please enter Nationality' }]} >
                            <Select
                                placeholder="Nationality"
                                style={{ width: "100%" }}
                                onChange={handleChange}
                                options={[
                                    { value: 'Singapore', label: 'Singapore' },
                                    { value: 'Singapore', label: 'Singapore' },
                                    { value: 'Singapore', label: 'Singapore' },  
                                ]}
                                />
                            </Form.Item>
                            <Form.Item name='period' label="Date of Birth" rules={[{ required: true, message: 'Please enter DOB' }]}>
                            <DatePicker placeholder='Event Date' style={{ width: "100%" }} />
                            </Form.Item>
                        </div>
                        <div style={{ width: "45%", }}>
                            <Form.Item name='name' label="Residency Status" rules={[{ required: true, message: 'Please enter Residency Status' }]} >
                                <Input placeholder="Residency Status" />
                            </Form.Item>
                            <Form.Item name='phone number' label="NRIC/FIN" rules={[{ required: true, message: 'Please enter NRIC/FIN' }]}> 
                                <Input min={0} style={{ width: "100%" }}  placeholder="NRIC/FIN" />
                            </Form.Item>
                        </div>
                    </div>
                    <div style={{ gap: "60px" }} className='d-flex '>
                        <div style={{ width: "45%", }}>
                            <Form.Item name='id' label="Gender" rules={[{ required: true, message: 'Please enter Staff Id' }]} >
                            <Radio.Group>
                                <Radio value={1}>Male</Radio>
                                <Radio value={2}>Female</Radio>
                                <Radio value={3}>Other</Radio>            
                            </Radio.Group>
                            </Form.Item>
                            <Form.Item name='period' label="Race" rules={[{ required: true, message: 'Please enter Race' }]}>
                                <Input min={1}  placeholder="Race" />
                            </Form.Item>
                        </div>
                        <div style={{ width: "45%", }}>
                            <Form.Item name='name' label="Married Status" rules={[{ required: true, message: 'Please enter Married Status' }]} >
                            <Select
                                placeholder="Married Status"
                                style={{ width: "100%" }}
                                onChange={handleChange}
                                options={[
                                    { value: 'Singapore', label: 'Married' },
                                    { value: 'Singapore', label: 'Unmarried' },
                          
                                ]}
                                />
                            </Form.Item>
                            <Form.Item name='Religion' label="Religion" rules={[{ required: true, message: 'Please enter Religion' }]}> 
                                <Input min={0} style={{ width: "100%" }}  placeholder="Religion" />
                            </Form.Item>
                        </div>
                    </div>
                </div>
                <div className='border rounded p-3 mt-4'>
                    <div style={{ gap: "60px" }} className='d-flex '>
                        <div style={{ width: "45%", }}>
                            <Form.Item name='id' label="Role" rules={[{ required: true, message: 'Please enter Staff Role' }]} >
                                <Input placeholder="Role" />
                            </Form.Item>
                            <Form.Item name='period' label="Joining Date" rules={[{ required: true, message: 'Please enter joining Date' }]}>
                            <DatePicker placeholder='DD/MM/YYYY' style={{ width: "100%" }} />
                            </Form.Item>
                        </div>
                        <div style={{ width: "45%", }}>
                            <Form.Item name='name' label="Department" rules={[{ required: true, message: 'Please enter Full Name' }]} >
                                <Input placeholder="Department" />
                            </Form.Item>
                            <Form.Item name='phone number' label="Confirmation Date" rules={[{ required: true, message: 'Please enter Full Name' }]}> 
                            <DatePicker placeholder='DD/MM/YYYY' style={{ width: "100%" }} />
                            </Form.Item>
                        </div>
                    </div>
                    <div style={{ gap: "60px" }} className='d-flex '>
                        <div style={{ width: "45%", }}>
                            <Form.Item name='id' label="Working Status" rules={[{ required: true, message: 'Please enter Nationality' }]} >
                            <Select
                                placeholder="Working Status"
                                style={{ width: "100%" }}
                                onChange={handleChange}
                                options={[
                                   
                          
                                ]}
                                />
                            </Form.Item>
                            <Form.Item name='period' label="Notice Period" rules={[{ required: true, message: 'Please enter DOB' }]}>
                            <Input placeholder="0" />
                            </Form.Item>
                        </div>
                        <div style={{ width: "45%", }}>
                            <Form.Item name='name' label="Manager (Report To)" rules={[{ required: true, message: 'Please enter Residency Status' }]} >
                            <Select
                                placeholder="Select"
                                style={{ width: "100%" }}
                                onChange={handleChange}
                                options={[
                                   
                          
                                ]}
                                />
                            </Form.Item>
                            <Form.Item name='phone number' label="Probation Period" rules={[{ required: true, message: 'Please enter NRIC/FIN' }]}> 
                                <Input min={0} style={{ width: "100%" }}  placeholder="0" />
                            </Form.Item>
                        </div>
                    </div>
                  
                </div>
                <div className='border rounded p-3 mt-4'>
                    <div style={{ gap: "60px" }} className='d-flex '>
                        <div style={{ width: "45%", }}>
                            <Form.Item name='id' label="Work Permit Number (if applicable)"  >
                                <Input placeholder="Work Permit Number" />
                            </Form.Item>
                            <Form.Item name='period' label="Type of Work Permit" >
                            <Input placeholder="Type of Work Permit" />
                            </Form.Item>
                        </div>
                        <div style={{ width: "45%", display:"flex",alignItems:"flex-end",  }}>
                            <Form.Item name='phone number' label="Expirty Date" style={{flex:"1"}} rules={[{ required: true, message: 'Please enter Full Name' }]}> 
                            <DatePicker placeholder='DD/MM/YYYY' style={{ width: "100%" }} />
                            </Form.Item>
                        </div>
                    </div>
                    <div style={{ gap: "60px" }} className='d-flex '>
                        <div style={{ width: "45%", }}>
                            <Form.Item name='id' label="Passport Number" rules={[{ required: true, message: 'Please enter Nationality' }]} >
                            <Input placeholder="Passport Number" />
                            </Form.Item>
                            
                        </div>
                        <div style={{ width: "45%", }}>
                        <Form.Item name='phone number' label="Expirty Date" style={{flex:"1"}} rules={[{ required: true, message: 'Please enter Full Name' }]}> 
                            <DatePicker placeholder='DD/MM/YYYY' style={{ width: "100%" }} />
                            </Form.Item>
                            
                        </div>
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

            </Form>
            <Modal width={400} footer={null} visible={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <div className='d-flex my-3 align-items-center flex-column justify-content-center'>
                    <CustomIcon svg={Verified} />
                    <h3 className='font-weight-bold mt-4'>MembershipPlan Created!</h3>
                    <span className='text-center font-size-sm w-75 font-weight-semibold'>Membership Plan 1 crested successfully</span>
                </div>
            </Modal>
        </div>
    )
}

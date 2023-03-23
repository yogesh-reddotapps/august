import { Button, Form, Input, InputNumber, Modal } from 'antd'
import TextArea from 'antd/lib/input/TextArea'
import { dollars, Verified } from 'assets/svg/icon'
import axios from 'axios'
import CustomIcon from 'components/util-components/CustomIcon'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'

export default function AddNew() {

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
    

    return (
        <div>
            <Form layout="vertical"
                onFinish={onFinish}
                // onFinishFailed={onFinishFailed}
                form={form}
                name="control-hooks"
            >
                <div className='border rounded p-3'>
                    <div style={{ gap: "60px" }} className='d-flex '>
                        <div style={{ width: "45%", }}>
                            <Form.Item name='id' label="Membership Id" rules={[{ required: true, message: 'Please enter Membership Id' }]} >
                                <Input placeholder="Membership Id" />
                            </Form.Item>
                            <Form.Item name='period' label="Membership Period" >
                                <InputNumber min={1} style={{ width: "100%" }} placeholder="Membership Period" />
                            </Form.Item>
                        </div>
                        <div style={{ width: "45%", }}>
                            <Form.Item name='name' label="Membership Type" rules={[{ required: true, message: 'Please enter Membership Type' }]} >
                                <Input placeholder="Full Name" />
                            </Form.Item>
                            <Form.Item name='amount' label="Membership Amount">
                                <InputNumber min={0} style={{ width: "100%" }} prefix={<CustomIcon svg={dollars} className="site-form-item-icon" />} placeholder="Amount" />
                            </Form.Item>
                        </div>
                    </div>
                    <Form.Item name='perks' label="Membership Perks">
                        <TextArea placeholder='Type here' rows={6} />
                    </Form.Item>
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

import { Form, Input, Button, InputNumber, Select, Modal } from "antd";
import axios from "../../../../../axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { API_BASE_URL } from "constants/ApiConstant";

const MyForm = () => {
  const [form] = Form.useForm();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id");
  const [successModal, setSuccessModal] = useState(false);
  const history = useHistory();
  const onFinish = async (values) => {
    try {
      console.log("Success:", values);
      if (id) {
        let data = {
          id:id,
          venue_name: values.venueName,
          venue_capacity: values.venueCapacity,
          postal_code: values.postalCode,
          block_number: values.blockNo,
          street_number: values.streetNo,
          unit_number: values.unitNo,
          country: values.country,
          level_no: "01",
        };
        const response = await axios.post("/api/admin-update-venues", data, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        console.log(response);
        if (response.status === 200) {
          setSuccessModal(true);
          setTimeout(() => {
            setSuccessModal(false);
          }, 1200);
        }
        return
      }
      let data = {
        venue_name: values.venueName,
        venue_capacity: values.venueCapacity,
        postal_code: values.postalCode,
        block_number: values.blockNo,
        street_number: values.streetNo,
        unit_number: values.unitNo,
        country: values.country,
        level_no: "01",
      };
      
      console.log("test", data);
      const response = await axios.post("/api/admin-add-venue", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response);
      if (response.status === 200) {
        setSuccessModal(true);
        setTimeout(() => {
          setSuccessModal(false);
          history.goBack();
        }, 1200);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getVenueData=async()=>{
    try{
      axios({
        method:"post",
        url:`${API_BASE_URL}/get-venues-by-id`,
        headers: {
          "Content-Type": "application/json",
        },
        data:{
          id:id
        }
      }).then((response)=>{
        // console.log(response.data.data[0]);
        const data = response.data.data[0];
        
        form.setFieldsValue({
          ...data
        })
      })
    }
    catch(err){
      console.log(err);
    }
  }

  useEffect(()=>{
    // console.log(location);
    if(location.pathname!=="/app/masters/venue/add_new"){
      getVenueData();
    }
  },[])

  return (
    <>
      <Form form={form} onFinish={onFinish}>
        <div className="border rounded p-3 mb-4 bg-white">
          <h5 className="text-info mb-4">{id?"Edit":"Add"} New Venue</h5>
          <h5>Venue Id</h5>
          <Form.Item
          name="id"
        >
          <Input disabled={true} className="w-50" />
        </Form.Item>
          <div className="mt-4">
            <h5>Venue Name</h5>
            <Form.Item name="venue_name">
              <Input className="w-50" placeholder="Venue Name" />
            </Form.Item>
          </div>
          <div className="mt-4">
            <h5>Venue Capacity</h5>
            <Form.Item name="venue_capacity">
              <InputNumber className="w-50" defaultValue={0} />
            </Form.Item>
          </div>

          <h5 className="mt-4">Address</h5>
          <div>
            <h5>Residential/Postal Code</h5>
            <Form.Item name="postal_code">
              <Input className="w-50" placeholder="Residential/Postal Code" />
            </Form.Item>
          </div>
          <div className="mt-4">
            <h5>Block No</h5>
            <Form.Item name="block_number">
              <Input className="w-50" placeholder="Block No" />
            </Form.Item>
          </div>
          <div className="mt-4">
            <h5>Street No</h5>
            <Form.Item name="street_number">
              <Input className="w-50" placeholder="Street No" />
            </Form.Item>
          </div>
          <div className="mt-4">
            <h5>Unit No (if applicable)</h5>
            <Form.Item name="unit_number">
              <Input className="w-50" placeholder="Unit No" />
            </Form.Item>
          </div>
          <div className="mt-4">
            <h5>Level No</h5>
            <Form.Item name="level_no">
              <Input className="w-50" placeholder="Level No" />
            </Form.Item>
          </div>
          <div className="mt-4 w-50">
            <h5>Country</h5>
            <Form.Item name="country" initialValue="Singapore">
              <Select className="w-100">
                <Select.Option value="Singapore">Singapore</Select.Option>
              </Select>
            </Form.Item>
          </div>
        </div>
        <div className="d-flex mt-3 justify-content-end">
          <Form.Item>
            <Button onClick={()=>history.goBack()}>Cancel</Button>
          </Form.Item>
          <Form.Item>
            <Button className="text-white bg-info ml-3" htmlType="submit">
              Save
            </Button>
          </Form.Item>
        </div>
      </Form>
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
            New venue created successfully!
          </h3>
        </div>
      </Modal>
    </>
  );
};

export default MyForm;

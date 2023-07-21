import { useEffect, useState } from "react";
import { Form, Input, Select, InputNumber, Button, Modal, Switch } from "antd";
import { DollarTwoTone, CloseCircleOutlined,DeleteOutlined } from "@ant-design/icons";
import { UploadFileIcon } from "assets/svg/icon";
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { API_BASE_URL } from "constants/ApiConstant";
import uploadImage from "middleware/uploadImage";
let styles = {
  files: {
    listStyle: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: "13px",
    border: "1px solid lightblue",
    padding: "10px",
    borderRadius: "9px",
    background: "#0093ff0a",
  },
  uploadFile: {
    position: "absolute",
    width: "100%",
    height: "100%",
    opacity: 0,
  },

  // Add the new styles here:

  ".uploadFile::-webkit-file-upload-button": {
    visibility: "hidden",
  },

  ".uploadFile::before": {
    content: "'Drag & Drop'",
    display: "inline-block",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    cursor: "pointer",
  },

  ".uploadFile:hover::before": {
    backgroundColor: "#ccc",
  },
};
const { Option } = Select;
const { TextArea } = Input;

const MyForm = () => {
  const [form] = Form.useForm();
  const [selectedFiles, setSelectedFiles] = useState(null);
  const [uploadfileErr, setUploadfileErr] = useState(false)
  const [successModal, setSuccessModal] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [dataArray, setDataArray] = useState([]);
  const [certiTog, setCertiTog] = useState(false);
  const [languageslist, setLanguageslist] = useState([])
  const [coursecategorylist, setCoursecategorylist] = useState([])
  const history = useHistory();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get('id')
  const addItem = () => {
    if (inputValue !== "") {
      setDataArray([...dataArray, inputValue]);
      setInputValue("");
    }
  };

  const deleteItem = (index) => {
    const updatedArray = [...dataArray];
    updatedArray.splice(index, 1);
    setDataArray(updatedArray);
  };
  // function handleFileSelect(event) {
  //   const fileList = event.target.files;
  //   const newSelectedFiles = [];

  //   for (let i = 0; i < fileList.length; i++) {
  //     newSelectedFiles.push(fileList[i]);
  //   }
  //   //   console.log(selectedFiles)

  //   setSelectedFiles([...selectedFiles, newSelectedFiles[0]]);
  //   if (newSelectedFiles.length===0) {
  //     setUploadfileErr(true)
  //     return
  //   } else{
  //     setUploadfileErr(false)
  //   }
  // }

   function handleFileSelect(event) {
    const fileList = event.target.files;
    // const newSelectedFiles = [];

    // for (let i = 0; i < fileList.length; i++) {
    //   newSelectedFiles.push(fileList[i]);
    // }
    //   console.log(selectedFiles)

    // setSelectedFiles([...selectedFiles, newSelectedFiles[0]]);
    setSelectedFiles(fileList);
  }
  const handleInputChange = (name, value) => {
    form.setFieldsValue({ [name]: value });
  };

  const onFinish = async (e) => {
    console.log(e,dataArray);
    let langSplit = e.language.split(',')
    if (selectedFiles.length===0) {
      setUploadfileErr(true)
      return
    } else{
      setUploadfileErr(false)
    }
     const url = await uploadImage(selectedFiles[0])
    if(!id){
    let res1 = await axios.post('http://18.140.159.50:3333/api/admin-new-course',{
      "course_category": e.course_category,
      "course_name": e.course_name,
      "medium": langSplit[1],
      "languages": langSplit[0],
      "course_duration": e.course_duration,
      "course_price": e.course_price,
      "description": e.description,
      "course_picture": "",
      "content":JSON.stringify(dataArray),
      "sdf":e.SDF,
      "certificate":certiTog?1:0,
      "type":"img",
      "url":url,
    })
    console.log(res1);
    setSuccessModal(true);
    setTimeout(() => {
      setSuccessModal(false);
    }, 1200);
  }
  else{
    let res1 = await axios.post('http://18.140.159.50:3333/api/admin-update-course',{
      "course_category": e.course_category,
      "course_name": e.course_name,
      "medium": langSplit[1],
      "languages": langSplit[0],
      "course_duration": e.course_duration,
      "course_price": e.course_price,
      "description": e.description,
      "course_picture": "",
      "content":JSON.stringify(dataArray),
      "sdf":e.SDF,
      "certificate":certiTog?1:0,
      "id":id,
       "type":"img",
      "url":url,
    })
    console.log(res1);
    setSuccessModal(true);
    setTimeout(() => {
      setSuccessModal(false);
    }, 1200);
  }
}
  const delUplFile = (i) => {
    // let AfterDeleteFile = selectedFiles.filter((elem, index) => {
    //   return index !== i;
    // });
    setSelectedFiles(null);
  };
  async function getCourseCate() {
    try {
      let res1 = await axios.post('http://18.140.159.50:3333/api/admin-category')
      setCoursecategorylist(res1.data.data);
    } catch (error) {
      console.log(error);
    }
  }
  
  async function getLanguage() {
    try {
      let res1 = await axios.post('http://18.140.159.50:3333/api/admin-languages')
      setLanguageslist(res1.data.data);
    } catch (error) {
      console.log(error);
    }
  }
  const getCourses = async()=>{
    try{
      axios({
        method:"post",
        url:`${API_BASE_URL}/get-course-by-id`,
        headers: {
          "Content-Type": "application/json",
        },
        data:{
          course_id:id
        }
      }).then((response)=>{
        // console.log(response.data.data[0]);
        const data = response.data.data[0];
        form.setFieldsValue({
          ...data,
        })
        setSelectedFiles({
          0:{
            name:"File 1",
            url:data.url
          }
        })
        setDataArray(JSON.parse(data.content));
      })
    }
    catch(err){
      console.log(err);
    }
  }


  useEffect(() => {
    if(location.pathname==="/app/masters/courses/edit"){
      getCourses();
    }
    getCourseCate()
    getLanguage()
  }, [])
  
  return (
    <Form
      form={form}
      onFinish={onFinish}
      className="border rounded p-3 mb-4 bg-white"
      layout="vertical"
    >
      <h5 className="text-info mb-4">Add New Course</h5>
      <Form.Item
          name="id"
          label="Course Id"
          // rules={[
          //   { required: true, message: "Please enter course category" }
          // ]}
        >
          <Input disabled={true} className="w-50" />
        </Form.Item>
      <Form.Item label="Course Name" name="course_name"
      rules={[
        { 
          required: true,
          message: 'Please Enter Course Name',
        },]}
      >
        <Input className="w-50" placeholder="Course Name" />
      </Form.Item>
      <Form.Item label="Course Category" name="course_category"
      rules={[
        { 
          required: true,
          message: 'Please Select Course Category',
        },]}
      >
        <Select
          className="w-50"
          placeholder="Select"
          onChange={(value) => handleInputChange("course_category", value)}
        >
          {
            coursecategorylist.map((elem,i)=>{
              return <><Option key={i} value={elem.id}>{elem.course_category}</Option></>
            })
          }
        </Select>
      </Form.Item>
      <Form.Item label="Languages Available" name="language"
      rules={[
        { 
          required: true,
          message: 'Please Select Languages',
        },]}
      >
        <Select
          className="w-50"
          placeholder="Select"
          onChange={(value) => handleInputChange("language", value)}
        >
          {
            languageslist.map((elem,i)=>{
              return<><Option key={i} value={`${elem.id},${elem.language_name}`}>{elem.language_name}</Option></>
            })
          }
          
        </Select>
      </Form.Item>
      <Form.Item label="Description" name="description"
      rules={[
        { 
          required: true,
          message: 'Please Enter Description',
        },]}
      >
        <TextArea className="w-50" rows={4} placeholder="Type here..." />
      </Form.Item>
      <Form.Item label="Course Type" name="type"
      rules={[
        { 
          required: true,
          message: 'Please Select Course Type',
        },]}>
        <Select
          className="w-50"
          placeholder="Select"
          onChange={(value) => handleInputChange("course_type", value)}
        >
          <Option value="Course_With_Assessment">Course With Assessment</Option>
          <Option value="Course_Without_Assessment">Course Without Assessment</Option>
        </Select>
      </Form.Item>
      <Form.Item label="Course Price" name="course_price">
        <InputNumber
          placeholder="0"
          addonBefore={<DollarTwoTone />}
          style={{ width: "50%" }}
        />
      </Form.Item>
      <Form.Item label="SDF" name="SDF">
        <InputNumber
          placeholder="0"
          style={{ width: "50%" }}
        />
      </Form.Item>
      <Form.Item label="Content" name="content">
      <div>
      <Input
       style={{ width: "50%" }}
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter text"
      />
      <Button className="ml-2" onClick={addItem}>Add</Button>

        {dataArray.map((item, index) => (
          <div className="p-2 d-flex" key={index}>
           <div style={{ width: "50%",wordWrap:"break-word" }} > {item}</div>
            <Button danger className="ml-2" onClick={() => deleteItem(index)}><DeleteOutlined /></Button>
          </div>
        ))}
    </div>
    </Form.Item>
      <Form.Item label="Certificate" name="Certificate">
      <Switch defaultChecked onChange={(checked) => setCertiTog(checked)} />
      </Form.Item>
      <Form.Item label="Course Duration" name="course_duration"
      rules={[
        { 
          required: true,
          message: 'Please Enter Course Duration',
        },]}
      >
        <InputNumber placeholder="0" style={{ width: "50%" }} />
      </Form.Item>
      <h5 className="uploadfilevalidationastrick">Upload Pictures</h5>
      {
        uploadfileErr && <span className="text-danger">Please Upload Picture</span>
      }
      <div className="border rounded p-3 mt-4">
        <div className="d-flex flex-column justify-content-center align-items-center position-relative uploaddoc">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            fill="none"
            viewBox="0 0 64 64"
          >
            <path
              fill="#0E7CEB"
              d="M18.57 15.51l7.86 7a2 2 0 001.33.51H56v34.9A2.93 2.93 0 0153.26 61H5.74A2.93 2.93 0 013 57.92V18a2.85 2.85 0 012.68-3h11.56a2 2 0 011.33.51z"
            ></path>
            <path fill="#D7E6EF" d="M49 57H7V3h42v54z"></path>
            <path fill="#0E7CEB" d="M45 23h16v-6a2 2 0 00-2-2h-6l-8 8z"></path>
            <path fill="#F7FCFF" d="M14 9h42v14H14V9z"></path>
            <path
              fill="#0E7CEB"
              d="M25.69 15.51l7.42 7a1.8 1.8 0 001.25.51H61v34.9A2.87 2.87 0 0158.41 61H13.59A2.87 2.87 0 0111 57.92V18a2.79 2.79 0 012.53-3h10.9c.47 0 .922.184 1.26.51z"
            ></path>
            <path
              fill="#F7FCFF"
              d="M36 55c7.18 0 13-5.82 13-13s-5.82-13-13-13-13 5.82-13 13 5.82 13 13 13z"
            ></path>
            <path
              fill="#D7E6EF"
              d="M52 13H32a1 1 0 000 2h20a1 1 0 000-2zm0 4H37a1 1 0 000 2h15a1 1 0 000-2z"
            ></path>
            <path
              fill="#44394A"
              d="M36.5 49.28l6.72-6.72a5.501 5.501 0 00-7.78-7.78l-8.84 8.84a1.002 1.002 0 000 1.42A1 1 0 0028 45l8.84-8.84a3.5 3.5 0 114.95 4.95l-6.71 6.71a1.998 1.998 0 01-3.38-.571A2 2 0 0132.26 45L39 38.32a.5.5 0 01.71 0 .48.48 0 010 .71l-6 6a1 1 0 101.42 1.41l6-6a2.503 2.503 0 00-3.54-3.54l-6.72 6.72a4 4 0 000 5.66 4.003 4.003 0 005.66 0h-.03z"
            ></path>
          </svg>
          <h5 className="mb-0 mt-2">Drag & Drop Files Here</h5>
          <h5 className="mb-0">Or</h5>
          <h5 className="mb-0" style={{ color: "#4096ff" }}>
            Choosen File
          </h5>
          <input
            style={styles.uploadFile}
            className="uploadFile"
            type="file"
            accept="image/*"
            multiple
            onChange={handleFileSelect}
          />
        </div>
        <div className="mt-4">
          {selectedFiles  && (
            <ul className="p-0" style={{ width: "40%" }}>
              {/* {selectedFiles.map((file, i) => ( */}
              <li

onClick={() => {
  if (selectedFiles[0].url) {
    window.open(selectedFiles[0].url, '_blank');
  }
}}
                  key={selectedFiles[0].name}
                  className="my-3 w-100 d-flex align-items-center justify-content-between"
                  style={styles.files}
                >
                  <div className="d-flex align-items-center">
                    <UploadFileIcon />{" "}
                    <span style={{width:'150px'}} className="ml-2">{selectedFiles[0].name} </span>
                  </div>
                  <span
                    style={{ cursor: "pointer" }}
                    onClick={() => delUplFile()}
                  >
                    {" "}
                    <CloseCircleOutlined />{" "}
                  </span>
                </li>
              {/* ))} */}
            </ul>
          )}
        </div>
      </div>
      <div className="d-flex mt-3 justify-content-end">
        <Button onClick={()=>history.goBack()}>Cancel</Button>
        <Button
          type="primary"
          className="text-white bg-info ml-3"
          htmlType="submit"
          onClick={()=>{
            if (selectedFiles.length===0) {
              setUploadfileErr(true)
              return
            } else{
              setUploadfileErr(false)
            }
          }}
        >
          Save
        </Button>
      </div>
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
            New course created successfully!
          </h3>
        </div>
      </Modal>
    </Form>
  );
};

export default MyForm;

const [modal2Open,setModal2Open]=useState(false);
  const [idToDelete,setIdTodelete]=useState();

  
  // const showModal = () => {
  //   setIsModalOpen(true);
  //   handleOk();
  // };

  // const handleOk = () => {
  //   setTimeout(() => {
  //     setIsModalOpen(false);
  //   }, 5000);
  // };

  // const handleCancel = () => {
  //   setIsModalOpen(false);
  // };


  const onDeleteData = (id) => {
    setModal2Open(true);
    setIdTodelete(id);
  }
  const handleDelete = async (Oid) => {
    let data = {
      id:Oid
    };
    const response = await axios.post(
      "http://18.140.159.50:3333/api/delete-admin",
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if(response.data.success){
      setRefereshTog(refereshTog?false:true)
      
    }
    else{
      alert("Cant Delete")
    }
    

  };

  <Modal
  // title="Vertically centered modal dialog"
  centered
  visible={modal2Open}
  onOk={() =>{setModal2Open(false)
      handleDelete(idToDelete);
  }}
  onCancel={() => setModal2Open(false)}
  okText="Yes,Confirm"
  cancelText="No,Cancel"
  okButtonProps={{style: { backgroundColor: '#0068B3' ,width:"30%"} }}  
>
 <div style={{color:"#000B23",fontSize:"18px",fontWeight:"600"}}>Sure you want to delete?</div>
 <div>It will be delete from the system</div>
</Modal>



//API

axios
.post(
  "/api/get-students",
  {
    headers: {
      "Content-Type": "application/json",
    },
  }
)
.then((res) => {
  setmembershipRequestData(res.data);
  // console.log(res.data);
})
.catch((error) => {
  console.log(error);
});



const [newAllStudentData,setNewAllStudentData] = useState([]);
useEffect(()=>{
  let nAllUsersData =[...studentEnroll]
  nAllUsersData && nAllUsersData.map((item)=>{
   
    item.student_dob=formatDate(item.student_dob);
    item.enrollment_date = formatDate(item.enrollment_date)
  })
  setNewAllStudentData(nAllUsersData)
},[studentEnroll])

const [newAllAssessmentData,setNewAllAssessmentData] = useState([]);
const [newAllCourseData,setNewAllCourseData] = useState([]);
const [newAllBatchData,setNewAllBatchData] = useState([]);
useEffect(()=>{
  let nAllUsersData =[...batchDetails]
  nAllUsersData && nAllUsersData.map((item)=>{
   
    item.start_date=formatDate(item.start_date);
    item.end_date = formatDate(item.end_date);
    item.status=item.status?"Active":"InActive"
  })
  setNewAllBatchData(nAllUsersData)
},[batchDetails])



useEffect(()=>{
  let nAllUsersData =[...assesment]
  nAllUsersData && nAllUsersData.map((item)=>{
   
    item.questionLength=JSON.parse(item.description).length,
    item.due_date = formatDate(item.due_date);
    item.start_date = formatDate(item.start_date);
  })
  setNewAllAssessmentData(nAllUsersData)
},[assesment])



useEffect(()=>{
  let nAllUsersData =[...courseMaterial]
  nAllUsersData && nAllUsersData.map((item)=>{
    item.created_at = formatDate(item.created_at);
    item.status = item.status?"Active":"In Active"
  })
  setNewAllCourseData(nAllUsersData)
},[courseMaterial])

// @ts-ignore
{/* <ExportButton data={newAllUsersData} passing={headersForAdmin}/> */}
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
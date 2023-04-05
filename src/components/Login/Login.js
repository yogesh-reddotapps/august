import React from 'react'
import './Login.css'
import {Form,Input,Checkbox,Button} from 'antd'
import { DownloadOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';


function Login() {
    const onChange = (e) => {
        console.log(`checked = ${e.target.checked}`);
      };
  return (
    <div className="login_background"style={{backgroundImage: `url(/img/background.jpg)`,display:"flex",height:"100vh",width:"100vw",justifyContent:"center",alignItems:"center"}}>
        <div className='login_container'>
            <div style={{textAlign:"center",marginBottom:"20px"}}>
                <img src="/img/logo.png"/>    
            </div>
            <div style={{ width: "100%", }}>
                   <div  style={{marginBottom:"20px"}}>
                    <label className='text-username'>Username</label>
                    <Input style={{marginTop:"10px"}} placeholder='NRIC/FIN Number' />
                   </div>
                   <div>
                    <label className='text-username'>Password</label>
                    <Input style={{marginTop:"10px"}}placeholder='4 Digit PIN' />
                   </div>
                   <div>
                  
                   </div>
                </div>
                <Checkbox style={{marginTop:"5px"}} onChange={onChange}>Remember Me</Checkbox>
                <div style={{textAlign:"center",marginTop:"30px",marginBottom:"50px"}}>
                Forgot your Login 4 Digit PIN?<br/>
<span style={{color:"#0068B3"}}>Reset your PIN</span>
                </div>
            <div>
            <Button type="primary" style={{width:"100%",marginTop:"17px",marginBottom:"12px"}}><Link to="/">Log In</Link></Button>
            </div>
            <div className='belowloginbutton'>By continuing, you agree to the August International Pte Ltd <span style={{color:"#0068B3"}}>Terms & Services</span></div>
        </div>
    </div>
  )
}

export default Login
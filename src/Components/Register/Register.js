import React,{useState} from "react";
import Card from "../Card/Card";
import {Button} from "@material-ui/core";
import { Link } from "react-router-dom";

const Register=()=>{
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    const [emailErr,setEmailErr]=useState(false);
    const [emailErrMessage,setEmailErrMessage]=useState('');
    const [passwordErr,setPasswordErr]=useState(false);
    const [passwordErrMessage,setPasswordErrMessage]=useState('');



    const emailChangeHandler=(e)=>{
        let regexp1 = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        let mail=e.target.value;
        if(!regexp1.test(mail)){
            setEmailErr(true);
            setEmailErrMessage('Invalid Email, Enter Correct Email Address')
        }else{
            setEmailErr(false);
            setEmailErrMessage('');
            setEmail(e.target.value);
        }
    }

    const passwordChangeHandler=(e)=>{
        let regexp2=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
        let pass=e.target.value;
        if(!regexp2.test(pass)){
            setPasswordErr(true);
            setPasswordErrMessage('Invalid Password')
        }else{
            setPasswordErr(false);
            setPasswordErrMessage('');
            
        }
        setPassword(e.target.value);
    }

     
   
    return(
        <Card>
            <h4 style={{textAlign:'center'}}>Register</h4>
            <form style={{padding:'10px',margin:'20px 30px'}}>
             <label>Email</label><br/>
          <input type='email' value={email} onChange={emailChangeHandler} style={{width:'300px',height:'30px'}} /><br/>
           {emailErr && <p style={{color:'red',textSize:'2px'}}>{emailErrMessage}</p>}
           <label>Password</label><br/>
          <input type='password'  value={password} onChange={passwordChangeHandler} style={{width:'300px',height:'30px'}}   /><br/>
           {passwordErr && <p style={{color:'red',textSize:'2px'}}>{passwordErrMessage}</p>}
           <p style={{textAlign:'center'}}> <Button type='submit' variant='contained' size='small' style={{backgroundColor:'green',color:'white'}}>Register</Button></p>
          </form>
            <p style={{textAlign:'center'}}>Already have an account ? <Link to='/'>Login</Link></p>
        </Card>
    )
}

export default Register;
import React from 'react';
import Card from '../Card/Card';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Login=()=>{
    return(
        <Card>
            <h4 style={{textAlign:'center'}}>Login</h4>
            <form style={{padding:'10px',marginTop:'20px'}}>
            <input type='email' style={{width:'300px',height:'30px',marginBottom:'20px'}} /><br/>
            <input type='password' style={{width:'300px',height:'30px',marginBottom:'20px'}} /><br/>
          <p style={{textAlign:'center'}}> 
            <Button variant='contained' size='small' style={{backgroundColor:'green',color:'white'}}>Login</Button>
           </p>
          </form>
            Don't have an account ? <Link to='/register'>Register Here</Link>
        </Card>
    )
}

export default Login;
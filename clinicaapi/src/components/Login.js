import React,{useEffect, useState}  from 'react';
import axios from 'axios';
import  {Table, TableContainer, TableHead, TableCell,TableBody, TableRow, Modal, Button, TextField} from '@material-ui/core';
import {Edit, Delete} from '@material-ui/icons';
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    modal: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    },
    iconos:{
      cursor: 'pointer'
    }, 
    inputMaterial:{
      width: '100%'
    },
  }));
const Contact = () =>{
    const styles = useStyles();
     
    return(
            <div className="container" >
                <div className="col-md-6">
                    <form class="form-signin">
                    <img class="mb-4" src="https://png.vector.me/files/images/1/9/191927/white_hospital_road_sign_clip_art.jpg" alt="" width="72" height="72"/>
                    <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
                    <label for="inputEmail" class="sr-only">Email address</label>
                    <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus/>
                    <label for="inputPassword" class="sr-only">Password</label>
                    <input type="password" id="inputPassword" class="form-control" placeholder="Password" required/>
                    <div class="checkbox mb-3">

                    </div>
                    <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                    <p class="mt-5 mb-3 text-muted">&copy; 2017-2018</p>
                </form>

                </div>               
            </div>
            
    );
}

export default Contact;
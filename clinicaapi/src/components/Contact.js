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
<div className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-title">
                                <h2 className="title">Contactanos</h2>
                                <p>¡Háganos saber lo que piensas! Para brindar un mejor servicio,
                                     no dude en enviarnos sus comentarios. Gracias.</p><hr/>
                                <form id="contact-form">
                                <div className="form-group">
                                <div className="row">
                                <div className="col-md-6">
                                    <input placeholder = "Nombre"  id="name" type="text" 
                                       className="form-control" required 
                                       />
                                </div>
                                <div className="col-md-6">
                                    <input placeholder = "Correo"  id="email" type="email"
                                      className="form-control" aria-describedby="emailHelp"
                                      required/>
                                </div>
                                </div>
                                </div>
                                <div className="form-group">
                                    <input placeholder = "Motivo"  id="subject" type="text"
                                      className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <textarea placeholder = "Mensaje"  id="message" 
                                       className="form-control" rows="1" 
                                       required />
                                </div>
                                <button type="submit" className="primary-btn submit">Submit</button>
                                </form>
                            </div>
                        </div>

                    </div>

                </div>               
            </div>
            
    );
}

export default Contact;
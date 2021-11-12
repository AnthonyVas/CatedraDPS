import React,{useEffect, useState}  from 'react';
import axios from 'axios';
import  {Table, TableContainer, TableHead, TableCell,TableBody, TableRow, Modal, Button, TextField} from '@material-ui/core';
import {Edit, Delete} from '@material-ui/icons';
import {makeStyles} from '@material-ui/core/styles';
import Select from 'react-select';

const urlGet = "https://proyectdps.000webhostapp.com/apislim3/getpaciente";
const urlPostInsert = "https://proyectdps.000webhostapp.com/apislim3/insertpaciente";
const urlPostEdit = "https://proyectdps.000webhostapp.com/apislim3/putpaciente";
const urlPostEliminar = "https://proyectdps.000webhostapp.com/apislim3/deletepaciente";
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
    container:{
        alignItems: 'center'
    }
  }));

  const Pacientes = () =>{
    const styles = useStyles();
    const [data, setdata] = useState([]);
    const [modalInsertar, setModalInsertar] = useState(false);
    const [modalEditar, setModalEditar] = useState(false);
    const [modalEliminar, setModalEliminar] = useState(false);

    const[paciente, setPaciente] = useState({
      id_paciente: '',
      nombres: '',
      apellidos: '',
      correo: '',
      direccion: '',
      telefono: '',
      contrasena: ''
    });

    const peticionGet=async()=>{
        await axios.get(urlGet).then(response=>{setdata(response.data)});
    }

    const handleChange=e=>{
      const {name, value}=e.target;
      setPaciente(prevState=>({
        ...prevState,
        [name]: value
      }))
    }
    useEffect(async()=>{
      await peticionGet();
    },[]);

    const peticionPost=async()=>{
        await axios.post(urlPostInsert,paciente)
        .then(response=>{
          setdata(data.concat(response.data))
          abrirCerrarModalInsertar()
        })
    }
    const peticionPostEdit=async()=>{
        await axios.post(urlPostEdit,paciente)
        .then(response=>{
            peticionGet();
            abrirCerrarModalEditar();
        })
    }
    const peticionPostEliminar=async()=>{
        await axios.post(urlPostEliminar,paciente)
        .then(response=>{
            peticionGet();
            abrirCerrarModalEliminar();
        })
    }
    const abrirCerrarModalInsertar=()=>{
        setModalInsertar(!modalInsertar)
    }   
    const abrirCerrarModalEditar=()=>{
        setModalEditar(!modalEditar)
    }
    const abrirCerrarModalEliminar=()=>{
        setModalEliminar(!modalEliminar)
    }
    const seleccionarPaciente=(paciente, caso)=>{
        setPaciente(paciente);
        (caso==='Editar')&&setModalEditar(true);
        (caso==='Eliminar')&&setModalEliminar(true);
    }    
    const bodyInsertar=(
        <div className={styles.modal}>
          <h3>Agregar Nuevo Paciente</h3>
          <TextField name="nombres" className={styles.inputMaterial} label="Nombres" onChange={handleChange}/>
          <TextField name="apellidos" className={styles.inputMaterial} label="Apellidos" onChange={handleChange}/>
          <TextField name="correo" className={styles.inputMaterial} label="Correo" onChange={handleChange}/>
          <TextField name="direccion" className={styles.inputMaterial} label="Direccion" onChange={handleChange}/>
          <TextField name="telefono" className={styles.inputMaterial} label="Telefono" onChange={handleChange}/>
          <TextField name="contrasena" className={styles.inputMaterial} label="Contraseña" onChange={handleChange}/>
          <br/><br />
          <div align="right">
          <Button color="primary" onClick={()=>peticionPost()}>Insertar</Button>
            <Button onClick={()=>abrirCerrarModalInsertar()}>Cancelar</Button>
          </div>
        </div>
      );
      const bodyEditar=(
        <div className={styles.modal}>
          <h3>Actualizar Paciente</h3>
          <TextField name="id_paciente" className={styles.inputMaterial} disabled={"false"} label="Id paciente" onChange={handleChange} value={paciente && paciente.id_paciente}/>
          <TextField name="nombres" className={styles.inputMaterial} label="Nombres" onChange={handleChange} value={paciente && paciente.nombres}/>
          <TextField name="apellidos" className={styles.inputMaterial} label="Apellidos" onChange={handleChange} value={paciente && paciente.apellidos}/>
          <TextField name="correo" className={styles.inputMaterial} label="Correo" onChange={handleChange} value={paciente && paciente.correo}/>
          <TextField name="direccion" className={styles.inputMaterial} label="Direccion" onChange={handleChange} value={paciente && paciente.direccion}/>
          <TextField name="telefono" className={styles.inputMaterial} label="Telefono" onChange={handleChange} value={paciente && paciente.telefono}/>
          <TextField name="contrasena" className={styles.inputMaterial} label="Contraseña" onChange={handleChange} value={paciente && paciente.contrasena}/>
          <br/><br />
          <div align="right">
            <Button color="primary" onClick={()=>peticionPostEdit()}>Actualizar</Button>
            <Button onClick={()=>abrirCerrarModalEditar()}>Cancelar</Button>
          </div>
        </div>
      );
      const bodyEliminar=(
        <div className={styles.modal}>
          <h3>Eliminar Paciente</h3>
          <TextField name="id_paciente" className={styles.inputMaterial} disabled={"false"} label="Id paciente" onChange={handleChange} value={paciente && paciente.id_paciente}/>
          <TextField name="nombres" className={styles.inputMaterial} disabled={"false"} label="Nombres" onChange={handleChange} value={paciente && paciente.nombres}/>
          <TextField name="apellidos" className={styles.inputMaterial} disabled={"false"} label="Apellidos" onChange={handleChange} value={paciente && paciente.apellidos}/>
          <TextField name="correo" className={styles.inputMaterial} disabled={"false"} label="Correo" onChange={handleChange} value={paciente && paciente.correo}/>
          <TextField name="direccion" className={styles.inputMaterial} disabled={"false"} label="Direccion" onChange={handleChange} value={paciente && paciente.direccion}/>
          <TextField name="telefono" className={styles.inputMaterial} disabled={"false"} label="Telefono" onChange={handleChange} value={paciente && paciente.telefono}/>
          <TextField name="contrasena" className={styles.inputMaterial} disabled={"false"} label="Contraseña" onChange={handleChange} value={paciente && paciente.contrasena}/>
          <br/><br />
          <div align="right">
            <Button color="primary" onClick={()=>peticionPostEliminar()}>Eliminar</Button>
            <Button onClick={()=>abrirCerrarModalEliminar()}>Cancelar</Button>
          </div>
        </div>
      );             
  	return(
        <div className={styles.container}>
            <br/>
            <Button onClick={()=>abrirCerrarModalInsertar()}>Insertar</Button>
            <br/>
            <TableContainer>
                <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Id Paciente</TableCell>
                        <TableCell>Nombres </TableCell>
                        <TableCell>Apellidos</TableCell>
                        <TableCell>Correo</TableCell>
                        <TableCell>Direccion</TableCell>
                        <TableCell>Telefono</TableCell>
                        <TableCell>Contraseña</TableCell>
                        <TableCell>Acciones</TableCell>                       
                    </TableRow>
                </TableHead>

                <TableBody>
                    {data.map(paciente=>(
                    <TableRow key={paciente.id_paciente}>
                        <TableCell>{paciente.id_paciente}</TableCell>                            
                        <TableCell>{paciente.nombres}</TableCell>
                        <TableCell>{paciente.apellidos}</TableCell>
                        <TableCell>{paciente.correo}</TableCell>
                        <TableCell>{paciente.direccion}</TableCell>
                        <TableCell>{paciente.telefono}</TableCell>
                        <TableCell>{paciente.contrasena}</TableCell>                                                                    
                        <TableCell>
                        <Edit className={styles.iconos} onClick={()=>seleccionarPaciente(paciente, 'Editar')}/>
                        &nbsp;&nbsp;&nbsp;
                        <Delete className={styles.iconos} onClick={()=>seleccionarPaciente(paciente, 'Eliminar')}/>
                        </TableCell>
                    </TableRow>
                    ))}
                </TableBody>
                </Table>
            </TableContainer>

            <Modal open={modalInsertar} onClose={()=>abrirCerrarModalInsertar()}>
                    {bodyInsertar}
            </Modal>
            <Modal open={modalEditar} onClose={()=>abrirCerrarModalEditar()}>
                    {bodyEditar}
            </Modal>
            <Modal open={modalEliminar} onClose={()=>abrirCerrarModalEliminar()}>
                    {bodyEliminar}
            </Modal>                                       
        </div>
  		);
  }

  export default Pacientes;
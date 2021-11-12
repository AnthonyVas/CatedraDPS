import React,{useEffect, useState}  from 'react';
import axios from 'axios';
import  {Table, TableContainer, TableHead, TableCell,TableBody, TableRow, Modal, Button, TextField} from '@material-ui/core';
import {Edit, Delete} from '@material-ui/icons';
import {makeStyles} from '@material-ui/core/styles';
import Select from 'react-select';

const urlEspeilidadesGet = "https://proyectdps.000webhostapp.com/apislim3/getespecialidad";
const urlGet = "https://proyectdps.000webhostapp.com/apislim3/getdoctor";
const urlPostInsert = "https://proyectdps.000webhostapp.com/apislim3/insertdoctor";
const urlPostEdit = "https://proyectdps.000webhostapp.com/apislim3/putdoctor";
const urlPostEliminar = "https://proyectdps.000webhostapp.com/apislim3/deletedoctor";
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

  const Doctores = () =>{
    const styles = useStyles();
    const [data, setdata] = useState([]);
    const [modalInsertar, setModalInsertar] = useState(false);
    const [modalEditar, setModalEditar] = useState(false);
    const [modalEliminar, setModalEliminar] = useState(false);

    const[doctor, setDoctor] = useState({
      id_doctor: '',
      nombres: '',
      apellidos: '',
      telefono: '',
      licencia: '',
      especialidad: '',
      correo: '',
      contrasena: '',
      address: ''
    });

    const [especialidad, setEspecialidad] = useState([]);

    const peticionEspecialidadGet=async()=>{
      await axios.get(urlEspeilidadesGet).then(response=>{setEspecialidad(response.data)});
    }
    const peticionGet=async()=>{
      await axios.get(urlGet).then(response=>{setdata(response.data)});
    }
    const peticionPost=async()=>{
      await axios.post(urlPostInsert,doctor)
      .then(response=>{
        setdata(data.concat(response.data))
        abrirCerrarModalInsertar()
      })
    }
    const peticionPostEdit=async()=>{
      await axios.post(urlPostEdit,doctor)
      .then(response=>{
          peticionGet();
          abrirCerrarModalEditar();
      })
  }
  const peticionPostEliminar=async()=>{
      await axios.post(urlPostEliminar,doctor)
      .then(response=>{
          peticionGet();
          abrirCerrarModalEliminar();
      })
  }    
    useEffect(async()=>{
      await peticionGet();
      await peticionEspecialidadGet();
    },[]);

    const handleChange=e=>{
      const {name, value}=e.target;
      setDoctor(prevState=>({
        ...prevState,
        [name]: value
      }))
      console.log(doctor);
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
    const seleccionarDoctor=(doctor, caso)=>{
      setDoctor(doctor);
      (caso==='Editar')&&setModalEditar(true);
      (caso==='Eliminar')&&setModalEliminar(true);
  } 

  const bodyInsertar=(
    <div className={styles.modal}>
      <h3>Agregar Nuevo Doctor</h3>
      <TextField name="nombres" className={styles.inputMaterial} label="Nombres" onChange={handleChange}/>
      <TextField name="apellidos" className={styles.inputMaterial} label="Apellidos" onChange={handleChange}/>
      <TextField name="telefono" className={styles.inputMaterial} label="Telefono" onChange={handleChange}/>
      <TextField name="licencia" className={styles.inputMaterial} label="Licencia" onChange={handleChange}/><br/>
      <h6>Especialidad</h6>
      <select name="especialidad" onChange={handleChange}>
        {especialidad.map(esp=>(
            <option value={esp.id_especialidad}>{esp.especialidad}</option>
        ))}
      </select>
      <TextField name="correo" className={styles.inputMaterial} label="Correo" onChange={handleChange}/>
      <TextField name="contrasena" className={styles.inputMaterial} label="Contraseña" onChange={handleChange}/>
      <TextField name="address" className={styles.inputMaterial} label="Direccion" onChange={handleChange}/>

      <br/><br/>
      <div align="right">
        <Button color="primary" onClick={()=>peticionPost()}>Insertar</Button>
        <Button onClick={()=>abrirCerrarModalInsertar()}>Cancelar</Button>
      </div>
    </div>
  );
  const bodyEditar=(
    <div className={styles.modal}>
      <h3>Actualizar Doctor</h3>
      <TextField name="id_doctor" className={styles.inputMaterial} label="Nombres" disabled={"false"} onChange={handleChange} value={doctor && doctor.id_doctor}/>
      <TextField name="nombres" className={styles.inputMaterial} label="Nombres" onChange={handleChange} value={doctor && doctor.nombres}/>
      <TextField name="apellidos" className={styles.inputMaterial} label="Apellidos" onChange={handleChange} value={doctor && doctor.apellidos}/>
      <TextField name="telefono" className={styles.inputMaterial} label="Telefono" onChange={handleChange} value={doctor && doctor.telefono}/>
      <TextField name="licencia" className={styles.inputMaterial} label="Licencia" onChange={handleChange} value={doctor && doctor.licencia}/><br/>
      <h6>Especialidad</h6>
      <select name="especialidad" onChange={handleChange}>
        {especialidad.map(esp=>(
            <option value={esp.id_especialidad}>{esp.especialidad}</option>
        ))}
      </select>
      <TextField name="correo" className={styles.inputMaterial} label="Correo" onChange={handleChange} value={doctor && doctor.correo}/>
      <TextField name="contrasena" className={styles.inputMaterial} label="Contraseña" onChange={handleChange} value={doctor && doctor.contrasena}/>
      <TextField name="address" className={styles.inputMaterial} label="Direccion" onChange={handleChange} value={doctor && doctor.address}/>

      <br/><br/>
      <div align="right">
        <Button color="primary" onClick={()=>peticionPostEdit()}>Actualizar</Button>
        <Button onClick={()=>abrirCerrarModalEditar()}>Cancelar</Button>
      </div>
    </div>
  ); 
  const bodyEliminar=(
    <div className={styles.modal}>
      <h3>Eliminar Doctor</h3>
      <TextField name="id_doctor" className={styles.inputMaterial} label="Nombres" disabled={"false"} onChange={handleChange} value={doctor && doctor.id_doctor}/>
      <TextField name="nombres" className={styles.inputMaterial} label="Nombres" disabled={"false"} onChange={handleChange} value={doctor && doctor.nombres}/>
      <TextField name="apellidos" className={styles.inputMaterial} label="Apellidos" disabled={"false"} onChange={handleChange} value={doctor && doctor.apellidos}/>
      <TextField name="telefono" className={styles.inputMaterial} label="Telefono" disabled={"false"} onChange={handleChange} value={doctor && doctor.telefono}/>
      <TextField name="licencia" className={styles.inputMaterial} label="Licencia" disabled={"false"} onChange={handleChange} value={doctor && doctor.licencia}/><br/>
      <h6>Especialidad</h6>
      <select name="especialidad" onChange={handleChange} disabled={"false"}>
        {especialidad.map(esp=>(
            <option value={esp.id_especialidad}>{esp.especialidad}</option>
        ))}
      </select>
      <TextField name="correo" className={styles.inputMaterial} label="Correo" disabled={"false"} onChange={handleChange} value={doctor && doctor.correo}/>
      <TextField name="contrasena" className={styles.inputMaterial} label="Contraseña" disabled={"false"} onChange={handleChange} value={doctor && doctor.contrasena}/>
      <TextField name="address" className={styles.inputMaterial} label="Direccion" disabled={"false"} onChange={handleChange} value={doctor && doctor.address}/>

      <br/><br/>
      <div align="right">
        <Button color="primary" onClick={()=>peticionPostEliminar()}>Eliminar</Button>
        <Button onClick={()=>abrirCerrarModalEliminar()}>Cancelar</Button>
      </div>
    </div>
  );           
  	return(
        <div>
        <br/>
        <Button onClick={()=>abrirCerrarModalInsertar()}>Insertar</Button>
        <br/>
        <TableContainer>
            <Table>
            <TableHead>
                <TableRow>
                <TableCell>Id Doctor</TableCell>
                <TableCell>Nombres</TableCell>
                <TableCell>Apellidos</TableCell>
                <TableCell>Telefono</TableCell>
                <TableCell>Licencia</TableCell>
                <TableCell>Especialidad</TableCell>
                <TableCell>Correo</TableCell>
                <TableCell>Contraseña</TableCell>
                <TableCell>Direccion</TableCell>
                <TableCell>Acciones</TableCell>
                </TableRow>
            </TableHead>

            <TableBody>
                {data.map(doctor=>(
                <TableRow key={doctor.id_doctor}>
                    <TableCell>{doctor.id_doctor}</TableCell>
                    <TableCell>{doctor.nombres}</TableCell>
                    <TableCell>{doctor.apellidos}</TableCell>
                    <TableCell>{doctor.telefono}</TableCell>
                    <TableCell>{doctor.licencia}</TableCell>
                    <TableCell>{doctor.especialidad}</TableCell>
                    <TableCell>{doctor.correo}</TableCell>
                    <TableCell>{doctor.contrasena}</TableCell>
                    <TableCell>{doctor.address}</TableCell>
                    <TableCell>
                    <Edit className={styles.iconos} onClick={()=>seleccionarDoctor(doctor, 'Editar')}/>
                    &nbsp;&nbsp;&nbsp;
                    <Delete className={styles.iconos} onClick={()=>seleccionarDoctor(doctor, 'Eliminar')}/>
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

  export default Doctores;
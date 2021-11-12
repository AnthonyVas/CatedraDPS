import React,{useEffect, useState}  from 'react';
import axios from 'axios';
import  {Table, TableContainer, TableHead, TableCell,TableBody, TableRow, Modal, Button, TextField} from '@material-ui/core';
import {Edit, Delete} from '@material-ui/icons';
import {makeStyles} from '@material-ui/core/styles'

const urlGet = "https://proyectdps.000webhostapp.com/apislim3/getespecialidad";
const urlPostInsert = "https://proyectdps.000webhostapp.com/apislim3/insertespecialidad";
const urlPostEdit = "https://proyectdps.000webhostapp.com/apislim3/putespecialidad";
const urlPostEliminar = "https://proyectdps.000webhostapp.com/apislim3/deleteespecialidad";
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
const Especialidades = () =>{
    const styles = useStyles();
    const [data, setdata] = useState([]);
    const [modalInsertar, setModalInsertar] = useState(false);
    const [modalEditar, setModalEditar] = useState(false);
    const [modalEliminar, setModalEliminar] = useState(false);
  
    const[especialidad, setEspecialidad] = useState({
      id_especialidad: '',
      especialidad: ''
    });
    const handleChange=e=>{
      const {name, value}=e.target;
      setEspecialidad(prevState=>({
        ...prevState,
        [name]: value
      }))
    }
  
    const peticionGet=async()=>{
      await axios.get(urlGet).then(response=>{setdata(response.data)});
    }
  
    const peticionPost=async()=>{
      await axios.post(urlPostInsert,especialidad)
      .then(response=>{
        setdata(data.concat(response.data))
        abrirCerrarModalInsertar()
      })
    }
    const peticionPostEdit=async()=>{
        await axios.post(urlPostEdit,especialidad)
        .then(response=>{
            peticionGet();
            abrirCerrarModalEditar();
        })
    }
    const peticionPostEliminar=async()=>{
        await axios.post(urlPostEliminar,especialidad)
        .then(response=>{
            peticionGet();
            abrirCerrarModalEliminar();
        })
    }
    useEffect(async()=>{
      await peticionGet();
    },[]);
  
    const abrirCerrarModalInsertar=()=>{
      setModalInsertar(!modalInsertar)
    }
    const abrirCerrarModalEditar=()=>{
        setModalEditar(!modalEditar)
    }
    const abrirCerrarModalEliminar=()=>{
        setModalEliminar(!modalEliminar)
    }
      
    const seleccionarEspecialidad=(especialidad, caso)=>{
        setEspecialidad(especialidad);
        (caso==='Editar')&&setModalEditar(true);
        (caso==='Eliminar')&&setModalEliminar(true);
    }
    const bodyInsertar=(
      <div className={styles.modal}>
        <h3>Agregar Nueva Especialidad</h3>
        <TextField name="especialidad" className={styles.inputMaterial} label="Especialidad" onChange={handleChange}/>
        <br/><br />
        <div align="right">
          <Button color="primary" onClick={()=>peticionPost()}>Insertar</Button>
          <Button onClick={()=>abrirCerrarModalInsertar()}>Cancelar</Button>
        </div>
      </div>
    );
    
    const bodyEditar=(
        <div className={styles.modal}>
          <h3>Editar Especialidad</h3>
          <TextField name="id_especialidad" className={styles.inputMaterial} disabled={"false"} label="Id Especialidad" onChange={handleChange} value={especialidad && especialidad.id_especialidad}/>
          <TextField name="especialidad" className={styles.inputMaterial} label="Especialidad" onChange={handleChange} value={especialidad && especialidad.especialidad}/>
          <br/><br />
          <div align="right">
            <Button color="primary" onClick={()=>peticionPostEdit()}>Editar</Button>
            <Button onClick={()=>abrirCerrarModalEditar()}>Cancelar</Button>
          </div>
        </div>
      );
    const bodyEliminar=(
        <div className={styles.modal}>
          <h3>¿Desea eliminar esta Especialidad?</h3>
          <TextField name="id_especialidad" className={styles.inputMaterial} disabled={"false"} label="Id_especialidad" onChange={handleChange} value={especialidad && especialidad.id_especialidad}/>
          <TextField name="especialidad" className={styles.inputMaterial} disabled={"false"} label="Especialidad" onChange={handleChange} value={especialidad && especialidad.especialidad}/>
          <br/><br />
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
                    <TableCell>Id Especialidad</TableCell>
                    <TableCell>Especialidad</TableCell>
                    <TableCell>Acciones</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {data.map(especialidad=>(
                    <TableRow key={especialidad.id_especialidad}>
                        <TableCell>{especialidad.id_especialidad}</TableCell>
                        <TableCell>{especialidad.especialidad}</TableCell>
                        <TableCell>
                        <Edit className={styles.iconos} onClick={()=>seleccionarEspecialidad(especialidad, 'Editar')}/>
                        &nbsp;&nbsp;&nbsp;
                        <Delete className={styles.iconos} onClick={()=>seleccionarEspecialidad(especialidad, 'Eliminar')}/>
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

export default Especialidades;
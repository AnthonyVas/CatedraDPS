import React,{useEffect, useState}  from 'react';
import axios from 'axios';
import  {Table, TableContainer, TableHead, TableCell,TableBody, TableRow, Modal, Button, TextField} from '@material-ui/core';
import {Edit, Delete} from '@material-ui/icons';
import {makeStyles} from '@material-ui/core/styles'

const urlGet = "https://proyectdps.000webhostapp.com/apislim3/gethorario";
const urlPostInsert = "https://proyectdps.000webhostapp.com/apislim3/inserthorario";
const urlPostEdit = "https://proyectdps.000webhostapp.com/apislim3/puthorario";
const urlPostEliminar = "https://proyectdps.000webhostapp.com/apislim3/deletehorario";
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
const Horario = () =>{
    const styles = useStyles();
    const [data, setdata] = useState([]);
    const [modalInsertar, setModalInsertar] = useState(false);
    const [modalEditar, setModalEditar] = useState(false);
    const [modalEliminar, setModalEliminar] = useState(false);
  
    const[horario, setHorario] = useState({
      id_horario: '',
      horario: ''
    });
    const handleChange=e=>{
      const {name, value}=e.target;
      setHorario(prevState=>({
        ...prevState,
        [name]: value
      }))
    }
  
    const peticionGet=async()=>{
      await axios.get(urlGet).then(response=>{setdata(response.data)});
    }
  
    const peticionPost=async()=>{
      await axios.post(urlPostInsert,horario)
      .then(response=>{
        setdata(data.concat(response.data))
        abrirCerrarModalInsertar()
      })
    }
    const peticionPostEdit=async()=>{
        await axios.post(urlPostEdit,horario)
        .then(response=>{
            peticionGet();
            abrirCerrarModalEditar();
        })
    }
    const peticionPostEliminar=async()=>{
        await axios.post(urlPostEliminar,horario)
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
      
    const seleccionarHorario=(horario, caso)=>{
        setHorario(horario);
        (caso==='Editar')&&setModalEditar(true);
        (caso==='Eliminar')&&setModalEliminar(true);
    }
    const bodyInsertar=(
      <div className={styles.modal}>
        <h3>Agregar Nuevo Horario</h3>
        <TextField name="horario" className={styles.inputMaterial} label="Horario" onChange={handleChange}/>
        <br/><br />
        <div align="right">
          <Button color="primary" onClick={()=>peticionPost()}>Insertar</Button>
          <Button onClick={()=>abrirCerrarModalInsertar()}>Cancelar</Button>
        </div>
      </div>
    );
    
    const bodyEditar=(
        <div className={styles.modal}>
          <h3>Editar Horario</h3>
          <TextField name="id_horario" className={styles.inputMaterial} disabled={"false"} label="Horario" onChange={handleChange} value={horario && horario.id_horario}/>
          <TextField name="horario" className={styles.inputMaterial} label="Horario" onChange={handleChange} value={horario && horario.horario}/>
          <br/><br />
          <div align="right">
            <Button color="primary" onClick={()=>peticionPostEdit()}>Editar</Button>
            <Button onClick={()=>abrirCerrarModalEditar()}>Cancelar</Button>
          </div>
        </div>
      );
    const bodyEliminar=(
        <div className={styles.modal}>
          <h3>¿Desea eliminar este horario?</h3>
          <TextField name="id_horario" className={styles.inputMaterial} disabled={"false"} label="Horario" onChange={handleChange} value={horario && horario.id_horario}/>
          <TextField name="horario" className={styles.inputMaterial} disabled={"false"} label="Horario" onChange={handleChange} value={horario && horario.horario}/>
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
                    <TableCell>Id Horario</TableCell>
                    <TableCell>Horario</TableCell>
                    <TableCell>Acciones</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {data.map(horario=>(
                    <TableRow key={horario.id_horario}>
                        <TableCell>{horario.id_horario}</TableCell>
                        <TableCell>{horario.horario}</TableCell>
                        <TableCell>
                        <Edit className={styles.iconos} onClick={()=>seleccionarHorario(horario, 'Editar')}/>
                        &nbsp;&nbsp;&nbsp;
                        <Delete className={styles.iconos} onClick={()=>seleccionarHorario(horario, 'Eliminar')}/>
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

export default Horario;
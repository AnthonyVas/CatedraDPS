import React,{useEffect, useState}  from 'react';
import axios from 'axios';
import  {Table, TableContainer, TableHead, TableCell,TableBody, TableRow, Modal, Button, TextField} from '@material-ui/core';
import {Edit, Delete} from '@material-ui/icons';
import {makeStyles} from '@material-ui/core/styles'
import DatePicker from 'react-date-picker';

const urlGet = "https://proyectdps.000webhostapp.com/apislim3/getcita";
const urlPostInsert = "https://proyectdps.000webhostapp.com/apislim3/insertcita";
const urlPostEliminar = "https://proyectdps.000webhostapp.com/apislim3/deletecita";
const urlDoctoresGet = "https://proyectdps.000webhostapp.com/apislim3/getdoctor";
const urlHorarioGet = "https://proyectdps.000webhostapp.com/apislim3/gethorario";
const urlPacienteGet = "https://proyectdps.000webhostapp.com/apislim3/getpaciente";

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
const Citas = () =>{
    const styles = useStyles();
    const [data, setdata] = useState([]);
    const [modalInsertar, setModalInsertar] = useState(false);
    const [modalEditar, setModalEditar] = useState(false);
    const [modalEliminar, setModalEliminar] = useState(false);
  
    const [doctor, setDoctor] = useState([]);
    const [paciente, setPaciente] = useState([]);
    const [horario, setHorario] = useState([]);
    const[cita, setCita] = useState({
      id: '',
      date: '2021-11-12',
      appointmentTime: '',
      paciente : '',
      doctor: '',
      procedimiento: ''
    });
    const handleChange=e=>{
      const {name, value}=e.target;
      setCita(prevState=>({
        ...prevState,
        [name]: value
      }))
      console.log(cita);
    }
  
    const peticionGet=async()=>{
      await axios.get(urlGet).then(response=>{setdata(response.data)});
    }
    const peticionDoctoresGet=async()=>{
        await axios.get(urlDoctoresGet).then(response=>{setDoctor(response.data)});
    }
    const peticionPacienteGet=async()=>{
        await axios.get(urlPacienteGet).then(response=>{setPaciente(response.data)});
    }
    const peticionHorarioGet=async()=>{
        await axios.get(urlHorarioGet).then(response=>{setHorario(response.data)});
    }      
    const peticionPost=async()=>{
      await axios.post(urlPostInsert,cita)
      .then(response=>{
        setdata(data.concat(response.data))
        abrirCerrarModalInsertar()
      })
    }
    const peticionPostEliminar=async()=>{
        await axios.post(urlPostEliminar,cita)
        .then(response=>{
            peticionGet();
            abrirCerrarModalEliminar();
        })
    }
    useEffect(async()=>{
      await peticionGet();
      await peticionDoctoresGet();
      await peticionPacienteGet();
      await peticionHorarioGet();
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
      
    const seleccionarCita=(cita, caso)=>{
        setCita(cita);
        (caso==='Editar')&&setModalEditar(true);
        (caso==='Eliminar')&&setModalEliminar(true);
    }
    const bodyInsertar=(
        <div className={styles.modal}>
          <h3>Agregar Nueva Cita</h3>
          <h6>Doctor</h6>
          <select name="doctor" onChange={handleChange}>
        {doctor.map(dc=>(
            <option value={dc.id_doctor}>{dc.nombres + " " + dc.apellidos}</option>
        ))}
      </select>
      <h6>Paciente</h6>
      <select name="paciente" onChange={handleChange}>
        {paciente.map(pc=>(
            <option value={pc.id_paciente}>{pc.nombres + " " + pc.apellidos}</option>
        ))}
      </select>
      <h6>Cita</h6>
      <select name="appointmentTime" onChange={handleChange}>
        {horario.map(hr=>(
            <option value={hr.id_horario}>{hr.horario}</option>
        ))}
      </select>
      <h6>Fecha</h6>
      <DatePicker
        value={new Date(2021, 10, 12)}
        minDate={new Date(2021, 10, 12)}
        format = "y-MM-dd"
      />
      <TextField name="procedimiento" className={styles.inputMaterial} label="Procedimiento" onChange={handleChange}/>
          <br/><br />
          <div align="right">
            <Button color="primary" onClick={()=>peticionPost()}>Insertar</Button>
            <Button onClick={()=>abrirCerrarModalInsertar()}>Cancelar</Button>
          </div>
        </div>
      );
      const bodyEliminar=(
        <div className={styles.modal}>
            <h3>Eliminar Cita</h3>
            <TextField name="id" className={styles.inputMaterial} disabled={"false"} label="Id Cita" onChange={handleChange} value={cita && cita.id}/>
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
                    <TableCell>Id Cita</TableCell>
                    <TableCell>Fecha</TableCell>
                    <TableCell>Hora</TableCell>
                    <TableCell>Paciente</TableCell>
                    <TableCell>Doctor</TableCell>
                    <TableCell>Procedimiento</TableCell>
                    <TableCell>Acciones</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {data.map(cita=>(
                    <TableRow key={cita.id}>
                        <TableCell>{cita.id}</TableCell>
                        <TableCell>{cita.date}</TableCell>
                        <TableCell>{cita.appointmentTime}</TableCell>
                        <TableCell>{cita.paciente}</TableCell>
                        <TableCell>{cita.doctor}</TableCell>
                        <TableCell>{cita.procedimiento}</TableCell>
                        <TableCell>
                        &nbsp;&nbsp;&nbsp;
                        <Delete className={styles.iconos} onClick={()=>seleccionarCita(cita, 'Eliminar')}/>
                        </TableCell>
                    </TableRow>
                    ))}
                </TableBody>
                </Table>
            </TableContainer>

            <Modal open={modalInsertar} onClose={()=>abrirCerrarModalInsertar()}>
                    {bodyInsertar}
            </Modal>
            <Modal open={modalEliminar} onClose={()=>abrirCerrarModalEliminar()}>
                    {bodyEliminar}
            </Modal>                                    
        </div>
    );
}

export default Citas;
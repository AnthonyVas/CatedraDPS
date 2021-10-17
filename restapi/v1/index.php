<?php
/**
 *
 * @About:      API Clinica
 * @File:       index.php
 * @Date:       01/10/2021
 * @Version:    $Rev:$ 1.0
 * @Developer:  DPS
 **/

header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS');
header("Access-Control-Allow-Headers: X-Requested-With");
header('Content-Type: text/html; charset=utf-8');
header('P3P: CP="IDC DSP COR CURa ADMa OUR IND PHY ONL COM STA"'); 

include_once '../include/Config.php';
require_once '../include/DbHandler.php'; 

require '../libs/Slim/Slim.php'; 
\Slim\Slim::registerAutoloader(); 
$app = new \Slim\Slim();

require_once '../include/DbHorarios.php';
require_once '../include/DbPacientes.php';
require_once '../include/DbEspecialidades.php';
require_once '../include/DbDoctores.php';
require_once '../include/DbCitas.php';

/*
#Rutas:
    -OBTENER LOS DATOS DE LAS TABLAS
        [servidor]/restapi/v1/gethorario
        [servidor]/restapi/v1/getpaciente
        [servidor]/restapi/v1/getespecialidad
        [servidor]/restapi/v1/getdoctor
        [servidor]/restapi/v1/getcita
    -INSERTAR LOS DATOS DE LAS TABLAS
        [servidor]/restapi/v1/puthorario
        [servidor]/restapi/v1/putpaciente
        [servidor]/restapi/v1/putespecialidad
        [servidor]/restapi/v1/putdoctor
        [servidor]/restapi/v1/putcita
    -ELIMINAR LOS DATOS DE LAS TABLAS
        [servidor]/restapi/v1/deletehorario
        [servidor]/restapi/v1/deletepaciente
        [servidor]/restapi/v1/deletespecialidad
        [servidor]/restapi/v1/deletedoctor
        [servidor]/restapi/v1/deletecita
    -OBTENER LOS DATOS DE LAS TABLAS POR ID
        [servidor]/restapi/v1/horario
        [servidor]/restapi/v1/paciente
        [servidor]/restapi/v1/specialidad
        [servidor]/restapi/v1/doctor
        [servidor]/restapi/v1/cita                

*/
/* INICIO API PROYECTO*/
    /*HORARIOS */
    $app->get('/gethorario', function(){
        $dbh = new DbHorarios();
        $response = $dbh-> seleccionarHorario();
        echoResponse(200,$response);
    });

    $app->post('/puthorario', function(){
        $dbh = new DbHorarios();
        $request_params = array();
        $request_params = $_REQUEST;
        $response = $dbh-> ingresarHorario($request_params);
        echoResponse(200,$response);
    });
    $app->post('/deletehorario', function(){
        $dbh = new DbHorarios();
        $request_params = array();
        $request_params = $_REQUEST;
        $response = $dbh-> eliminarHorario($request_params);
        echoResponse(200,$response);
    });
    $app->post('/horario', function(){
        $dbh = new DbHorarios();
        $request_params = array();
        $request_params = $_REQUEST;
        $response = $dbh-> horario($request_params);
        echoResponse(200,$response);
    });

    /*PACIENTES*/
    $app->get('/getpaciente', function(){
        $dbh = new DbPacientes();
        $response = $dbh-> seleccionarPaciente();
        echoResponse(200,$response);
    });

    $app->post('/putpaciente', function(){
        $dbh = new DbPacientes();
        $request_params = array();
        $request_params = $_REQUEST;
        $response = $dbh-> ingresarPaciente($request_params);
        echoResponse(200,$response);
    });
    $app->post('/deletepaciente', function(){
        $dbh = new DbPacientes();
        $request_params = array();
        $request_params = $_REQUEST;
        $response = $dbh-> eliminarPaciente($request_params);
        echoResponse(200,$response);
    });
    $app->post('/paciente', function(){
        $dbh = new DbPacientes();
        $request_params = array();
        $request_params = $_REQUEST;
        $response = $dbh-> paciente($request_params);
        echoResponse(200,$response);
    });
    
    /*ESPECIALIDADES*/
    $app->get('/getespecialidad', function(){
        $dbh = new DbEspecialidades();
        $response = $dbh-> seleccionarEspecialidad();
        echoResponse(200,$response);
    });

    $app->post('/putespecialidad', function(){
        $dbh = new DbEspecialidades();
        $request_params = array();
        $request_params = $_REQUEST;
        $response = $dbh-> ingresarEspecialidad($request_params);
        echoResponse(200,$response);
    });
    $app->post('/deletespecialidad', function(){
        $dbh = new DbEspecialidades();
        $request_params = array();
        $request_params = $_REQUEST;
        $response = $dbh-> eliminarEspecialidad($request_params);
        echoResponse(200,$response);
    });
    $app->post('/especialidad', function(){
        $dbh = new DbEspecialidades();
        $request_params = array();
        $request_params = $_REQUEST;
        $response = $dbh-> especialidad($request_params);
        echoResponse(200,$response);
    });

    /*DOCTORES*/
    $app->get('/getdoctor', function(){
        $dbh = new DbDoctores();
        $response = $dbh-> seleccionarDoctor();
        echoResponse(200,$response);
    });

    $app->post('/putdoctor', function(){
        $dbh = new DbDoctores();
        $request_params = array();
        $request_params = $_REQUEST;
        $response = $dbh-> ingresarDoctor($request_params);
        echoResponse(200,$response);
    });
    $app->post('/deletedoctor', function(){
        $dbh = new DbDoctores();
        $request_params = array();
        $request_params = $_REQUEST;
        $response = $dbh-> eliminarDoctor($request_params);
        echoResponse(200,$response);
    });
    $app->post('/doctor', function(){
        $dbh = new DbDoctores();
        $request_params = array();
        $request_params = $_REQUEST;
        $response = $dbh-> doctor($request_params);
        echoResponse(200,$response);
    }); 

    /*CITAS*/
    $app->get('/getcita', function(){
        $dbh = new DbCitas();
        $response = $dbh-> seleccionarCita();
        echoResponse(200,$response);
    });

    $app->post('/putcita', function(){
        $dbh = new DbCitas();
        $request_params = array();
        $request_params = $_REQUEST;
        $response = $dbh-> ingresarCita($request_params);
        echoResponse(200,$response);
    });
    $app->post('/deletecita', function(){
        $dbh = new DbCitas();
        $request_params = array();
        $request_params = $_REQUEST;
        $response = $dbh-> eliminarCita($request_params);
        echoResponse(200,$response);
    });
    $app->post('/cita', function(){
        $dbh = new DbCitas();
        $request_params = array();
        $request_params = $_REQUEST;
        $response = $dbh-> cita($request_params);
        echoResponse(200,$response);
    });       
    /* FIN API PROYECTO */


/* corremos la aplicación */
$app->run();

/**
 * Mostrando la respuesta en formato json al cliente o navegador
 * @param String $status_code Http response code
 * @param Int $response Json response
 */
function echoResponse($status_code, $response) {
    $app = \Slim\Slim::getInstance();
    // Http response code
    $app->status($status_code);
 
    // setting response content type to json
    $app->contentType('application/json');
 
    echo json_encode($response);
}
?>
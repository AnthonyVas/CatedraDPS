-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 17-10-2021 a las 16:49:26
-- Versión del servidor: 10.4.21-MariaDB
-- Versión de PHP: 7.3.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `clinica`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `citas`
--

CREATE TABLE `citas` (
  `id_cita` varchar(200) NOT NULL,
  `fecha` date NOT NULL,
  `horario` varchar(200) NOT NULL,
  `paciente` varchar(200) NOT NULL,
  `doctor` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `citas`
--

INSERT INTO `citas` (`id_cita`, `fecha`, `horario`, `paciente`, `doctor`) VALUES
('ct001', '2021-10-12', 'hr616', 'hr132106', 'dr616c2182e4375'),
('ct002', '2021-10-20', 'hr616', 'hr132106', 'dc001'),
('ct003', '2021-10-20', 'hr616', 'pc616bbf5193997', 'dc001'),
('ct616c2971f09de', '2021-10-14', 'hr002', 'hr132106', 'dc001'),
('ct616c29b751c4b', '2021-10-14', 'hr002', 'hr132106', 'dc001');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `doctores`
--

CREATE TABLE `doctores` (
  `id_doctor` varchar(200) NOT NULL,
  `nombres` varchar(200) NOT NULL,
  `apellidos` varchar(200) NOT NULL,
  `telefono` varchar(20) NOT NULL,
  `licencia` varchar(200) NOT NULL,
  `especialidad` varchar(200) NOT NULL,
  `correo` varchar(200) NOT NULL,
  `contrasena` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `doctores`
--

INSERT INTO `doctores` (`id_doctor`, `nombres`, `apellidos`, `telefono`, `licencia`, `especialidad`, `correo`, `contrasena`) VALUES
('dc001', 'Rogelio', 'Perez', '2223-2222', 'dre12', 'esp616bc241b8653', 'rogelio@gmail.com', '123456'),
('dr616c2182e4375', 'Juan', 'Peres', '2292-3456', '127182', 'esp002', 'juan@gmail.com', '123456');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `especialidades`
--

CREATE TABLE `especialidades` (
  `id_especialidad` varchar(200) NOT NULL,
  `especialidad` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `especialidades`
--

INSERT INTO `especialidades` (`id_especialidad`, `especialidad`) VALUES
('esp001', 'Odontopediatra'),
('esp002', 'Ortodoncista'),
('esp616bc241b8653', 'Cirujano dental');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `horarios`
--

CREATE TABLE `horarios` (
  `id_horario` varchar(200) NOT NULL,
  `horario` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `horarios`
--

INSERT INTO `horarios` (`id_horario`, `horario`) VALUES
('hr002', '11:00 am'),
('hr616', '11:00 pm'),
('hr616b', '11:00 pm'),
('hr616bb57aa5b27', '11:00 pm'),
('hr616bb88d8e568', '13:00 pm');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pacientes`
--

CREATE TABLE `pacientes` (
  `id_paciente` varchar(200) NOT NULL,
  `nombres` varchar(200) NOT NULL,
  `apellidos` varchar(200) NOT NULL,
  `correo` varchar(200) NOT NULL,
  `direccion` varchar(500) NOT NULL,
  `telefono` varchar(20) NOT NULL,
  `contrasena` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `pacientes`
--

INSERT INTO `pacientes` (`id_paciente`, `nombres`, `apellidos`, `correo`, `direccion`, `telefono`, `contrasena`) VALUES
('hr132106', 'Rodrigo Ernesto', 'Hernandez Rivas', 'rehernandez95@hotmail.com', 'las margaritas', '2223-2222', '123456'),
('pc616bbf5193997', 'Marlene Elizabeth', 'Fuentes Ramirez', 'marlene@gmail.com', 'alta vista', '2257-7777', '654321');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `citas`
--
ALTER TABLE `citas`
  ADD KEY `pacientes` (`paciente`),
  ADD KEY `doctores` (`doctor`),
  ADD KEY `horarios` (`horario`);

--
-- Indices de la tabla `doctores`
--
ALTER TABLE `doctores`
  ADD PRIMARY KEY (`id_doctor`),
  ADD KEY `especialidad` (`especialidad`),
  ADD KEY `especialidad_2` (`especialidad`);

--
-- Indices de la tabla `especialidades`
--
ALTER TABLE `especialidades`
  ADD PRIMARY KEY (`id_especialidad`);

--
-- Indices de la tabla `horarios`
--
ALTER TABLE `horarios`
  ADD PRIMARY KEY (`id_horario`);

--
-- Indices de la tabla `pacientes`
--
ALTER TABLE `pacientes`
  ADD PRIMARY KEY (`id_paciente`);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `citas`
--
ALTER TABLE `citas`
  ADD CONSTRAINT `doctores` FOREIGN KEY (`doctor`) REFERENCES `doctores` (`id_doctor`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `horarios` FOREIGN KEY (`horario`) REFERENCES `horarios` (`id_horario`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `pacientes` FOREIGN KEY (`paciente`) REFERENCES `pacientes` (`id_paciente`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `doctores`
--
ALTER TABLE `doctores`
  ADD CONSTRAINT `especialidad` FOREIGN KEY (`especialidad`) REFERENCES `especialidades` (`id_especialidad`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

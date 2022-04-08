-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 08-04-2022 a las 22:27:51
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 8.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `disney`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `generos`
--

CREATE TABLE `generos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `imagen` varchar(1000) DEFAULT NULL,
  `peliculas` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `peliculas`
--

CREATE TABLE `peliculas` (
  `id` int(11) NOT NULL,
  `imagen` varchar(1000) DEFAULT NULL,
  `titulo` varchar(255) DEFAULT NULL,
  `fechaDeCreacion` varchar(255) DEFAULT NULL,
  `calificacion` int(11) DEFAULT NULL,
  `personajesAsociados` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `peliculas`
--

INSERT INTO `peliculas` (`id`, `imagen`, `titulo`, `fechaDeCreacion`, `calificacion`, `personajesAsociados`, `createdAt`, `updatedAt`) VALUES
(1, '', '', '', NULL, NULL, '2022-03-15 15:57:02', '2022-03-15 15:57:02'),
(2, 'sgdfgdfd', 'agsdgsdg', 'dfdfd', NULL, NULL, '2022-03-15 15:57:18', '2022-03-15 15:57:18');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `personajes`
--

CREATE TABLE `personajes` (
  `id` int(11) NOT NULL,
  `imagen` varchar(1000) DEFAULT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `edad` int(11) DEFAULT NULL,
  `peso` int(11) DEFAULT NULL,
  `historia` varchar(255) DEFAULT NULL,
  `peliculas` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `personajes`
--

INSERT INTO `personajes` (`id`, `imagen`, `nombre`, `edad`, `peso`, `historia`, `peliculas`, `createdAt`, `updatedAt`) VALUES
(1, 'https://s1.eestatic.com/2020/03/24/bluper/bluper_477214870_169337882_1024x576.jpg', 'La Sirenita', 33, 80, 'lorem ipsum', 'La Sirenita', '2022-03-10 20:56:44', '2022-03-22 21:50:22'),
(2, 'https://static.wikia.nocookie.net/doblaje/images/3/3a/Mickey_mouse-1097.jpg/revision/latest/top-crop/width/360/height/450?cb=20130925015641&path-prefix=es\n', 'Mickey Mouse', 27, 73, 'lorem ipsum', 'Mickey y sus personajes', '2022-03-10 21:04:20', '2022-03-22 21:58:45'),
(3, 'https://static.wikia.nocookie.net/disney/images/8/81/Rapunzelsoft.jpeg/revision/latest?cb=20190713200049&path-prefix=es', 'Rapunzel', 27, 73, 'la historia de rapunzel', 'La princesa Rapunzel', '2022-03-10 21:05:46', '2022-03-22 22:35:13'),
(4, 'https://static.wikia.nocookie.net/disney/images/8/81/Rapunzelsoft.jpeg/revision/latest?cb=20190713200049&path-prefix=es', 'aladin', 27, 73, 'la historia de la lampara de aladin', 'El genio de Aladin', '2022-03-10 21:06:30', '2022-03-22 22:38:04');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `generos`
--
ALTER TABLE `generos`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `nombre` (`nombre`);

--
-- Indices de la tabla `peliculas`
--
ALTER TABLE `peliculas`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `titulo` (`titulo`);

--
-- Indices de la tabla `personajes`
--
ALTER TABLE `personajes`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `generos`
--
ALTER TABLE `generos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `peliculas`
--
ALTER TABLE `peliculas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `personajes`
--
ALTER TABLE `personajes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

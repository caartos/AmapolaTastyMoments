-- MySQL dump 10.13  Distrib 8.0.32, for Linux (x86_64)
--
-- Host: localhost    Database: amapola
-- ------------------------------------------------------
-- Server version	8.0.33-0ubuntu0.22.04.2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Bebida`
--

DROP TABLE IF EXISTS `Bebida`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Bebida` (
  `idBebida` int NOT NULL,
  `tipoDeBebida` varchar(45) NOT NULL,
  `idCarta` int NOT NULL,
  PRIMARY KEY (`idBebida`),
  KEY `fk_Carta_idx` (`idCarta`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Bebida`
--

LOCK TABLES `Bebida` WRITE;
/*!40000 ALTER TABLE `Bebida` DISABLE KEYS */;
/*!40000 ALTER TABLE `Bebida` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Bocadillos`
--

DROP TABLE IF EXISTS `Bocadillos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Bocadillos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `precio` decimal(10,2) NOT NULL,
  `idPromocion` int NOT NULL DEFAULT '2',
  `tipoDeProducto` varchar(45) DEFAULT 'Bocadillo',
  `apiNombre` varchar(45) DEFAULT 'bocadillos',
  PRIMARY KEY (`id`),
  KEY `fk_idPromocionB_idx` (`idPromocion`),
  CONSTRAINT `fk_idPromocionB` FOREIGN KEY (`idPromocion`) REFERENCES `Promociones` (`idPromocion`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Bocadillos`
--

LOCK TABLES `Bocadillos` WRITE;
/*!40000 ALTER TABLE `Bocadillos` DISABLE KEYS */;
INSERT INTO `Bocadillos` VALUES (1,'Pollo, queso, mayonesa y chimichurri',6.00,2,'Bocadillo','bocadillos'),(2,'Pollo, jamón, queso, lechuga y tomate',6.00,2,'Bocadillo','bocadillos'),(3,'Tortilla de papa',5.00,2,'Bocadillo','bocadillos'),(4,'Sobrasada, queso y cebolla',6.00,2,'Bocadillo','bocadillos'),(5,'Atún, olivas, tomate y cebolla morada',6.00,2,'Bocadillo','bocadillos'),(6,'Atún, aguacate, tomate y queso',6.00,2,'Bocadillo','bocadillos'),(7,'Atún, queso, cebolla y orégano',6.00,2,'Bocadillo','bocadillos'),(8,'Verduras asadas',6.00,2,'Bocadillo','bocadillos'),(9,'Jamón serrano y tomate',6.00,2,'Bocadillo','bocadillos');
/*!40000 ALTER TABLE `Bocadillos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `BocadillosEspeciales`
--

DROP TABLE IF EXISTS `BocadillosEspeciales`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `BocadillosEspeciales` (
  `idBocadillosEspeciales` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(200) NOT NULL,
  `descripcion` varchar(200) DEFAULT NULL,
  `precio` decimal(10,2) NOT NULL,
  `idComidaB` int NOT NULL DEFAULT '3',
  PRIMARY KEY (`idBocadillosEspeciales`),
  KEY `fk_idComidaB_idx` (`idComidaB`),
  CONSTRAINT `fk_idComidaB` FOREIGN KEY (`idComidaB`) REFERENCES `Comida` (`idComida`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `BocadillosEspeciales`
--

LOCK TABLES `BocadillosEspeciales` WRITE;
/*!40000 ALTER TABLE `BocadillosEspeciales` DISABLE KEYS */;
INSERT INTO `BocadillosEspeciales` VALUES (1,'Pollo, queso, mayonesa y chimichurri',NULL,6.00,3),(2,'Pollo, jamón, queso, lechuga y tomate',NULL,6.00,3),(3,'Tortilla de papa',NULL,5.00,3),(4,'Sobrasada, queso y cebolla',NULL,6.00,3),(5,'Atún, olivas, tomate y cebolla morada',NULL,6.00,3),(6,'Atún, aguacate, tomate y queso',NULL,6.00,3),(7,'Atún, queso, cebolla y orégano',NULL,6.00,3),(8,'Verduras asadas',NULL,8.00,3),(9,'Jamón serrano y tomate',NULL,6.00,3),(10,'Salmón, queso, cebolla morada, rucula, brotes de alfalfa y mayonesa de soja',NULL,9.00,3),(11,'Pastrami, cebolla, pepino y mayonesa',NULL,9.00,3),(12,'Falafel, hojas verdes, pepino, cebolla morada, zanahoria, col, salsa de yogourt y su pan especial',NULL,8.50,3),(13,'Hamburguesa vegana, queso, tomate, lechuga y cebolla morada',NULL,10.00,3),(14,'Hamburguesa vegana, queso, trufa, setas, cebolla, rúcula y brotes de alfalfa',NULL,12.00,3);
/*!40000 ALTER TABLE `BocadillosEspeciales` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Carousel`
--

DROP TABLE IF EXISTS `Carousel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Carousel` (
  `idCarousel` int NOT NULL AUTO_INCREMENT,
  `nombre` mediumtext NOT NULL,
  `ruta` text NOT NULL,
  PRIMARY KEY (`idCarousel`)
) ENGINE=InnoDB AUTO_INCREMENT=52 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Carousel`
--

LOCK TABLES `Carousel` WRITE;
/*!40000 ALTER TABLE `Carousel` DISABLE KEYS */;
INSERT INTO `Carousel` VALUES (1,'arroz.png','/home/carlos/Trabajos Personales/bar/my-next-project/public/carousel/arroz.png'),(2,'cafe.png','/home/carlos/Trabajos Personales/bar/my-next-project/public/carousel/cafe1.png'),(3,'cafe2.png','/home/carlos/Trabajos Personales/bar/my-next-project/public/carousel/cafe2.png'),(4,'cafe3.png','/home/carlos/Trabajos Personales/bar/my-next-project/public/carousel/cafe3.png'),(5,'crema.png','/home/carlos/Trabajos Personales/bar/my-next-project/public/carousel/crema.png'),(6,'desayuno.png','/home/carlos/Trabajos Personales/bar/my-next-project/public/carousel/desayuno.png'),(7,'focaccia.png','/home/carlos/Trabajos Personales/bar/my-next-project/public/carousel/focaccia.png'),(8,'medialuna.png','/home/carlos/Trabajos Personales/bar/my-next-project/public/carousel/medialuna.png');
/*!40000 ALTER TABLE `Carousel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Carta`
--

DROP TABLE IF EXISTS `Carta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Carta` (
  `idCarta` int NOT NULL AUTO_INCREMENT,
  `tipoDeProducto` varchar(45) NOT NULL,
  PRIMARY KEY (`idCarta`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Carta`
--

LOCK TABLES `Carta` WRITE;
/*!40000 ALTER TABLE `Carta` DISABLE KEYS */;
INSERT INTO `Carta` VALUES (1,'Promociones'),(2,'Comida'),(3,'Bebida');
/*!40000 ALTER TABLE `Carta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Comida`
--

DROP TABLE IF EXISTS `Comida`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Comida` (
  `idComida` int NOT NULL,
  `tipoDeComida` varchar(45) NOT NULL,
  `idCartaC` int NOT NULL DEFAULT '2',
  PRIMARY KEY (`idComida`),
  KEY `fk_idCarta_idx` (`idCartaC`),
  KEY `fk_idCartaC_idx` (`idCartaC`),
  CONSTRAINT `fk_idCartaC` FOREIGN KEY (`idCartaC`) REFERENCES `Carta` (`idCarta`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Comida`
--

LOCK TABLES `Comida` WRITE;
/*!40000 ALTER TABLE `Comida` DISABLE KEYS */;
INSERT INTO `Comida` VALUES (1,'Tapas',2),(2,'Focaccias Rellenas',2),(3,'Bocadillos Especiales',2);
/*!40000 ALTER TABLE `Comida` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `FocacciasRellenas`
--

DROP TABLE IF EXISTS `FocacciasRellenas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `FocacciasRellenas` (
  `idFocaccia` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(200) NOT NULL,
  `descripcion` varchar(200) DEFAULT NULL,
  `precio` decimal(10,2) NOT NULL,
  `idComidaF` int NOT NULL DEFAULT '2',
  PRIMARY KEY (`idFocaccia`),
  KEY `idComidaF_idx` (`idComidaF`),
  CONSTRAINT `idComidaF` FOREIGN KEY (`idComidaF`) REFERENCES `Comida` (`idComida`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `FocacciasRellenas`
--

LOCK TABLES `FocacciasRellenas` WRITE;
/*!40000 ALTER TABLE `FocacciasRellenas` DISABLE KEYS */;
INSERT INTO `FocacciasRellenas` VALUES (1,'Cuatro quesos','(muzzarella, provolone, brie y azul)',7.50,2),(2,'Trufita','(muzzarella, trufa rallada, setas y canónigos)',7.50,2),(3,'Capresse','(muzzarella, tomate y albahaca)',6.90,2),(4,'Serrana','(muzzarella, jamón serrano, tomate y rúcula)',7.50,2),(5,'Vegetales asados','(muzzarella, berenjena, calabacín, cebolla, pimiento y tomate)',7.50,2),(6,'Mortadela','(muzzarella, mortadela italiana, pistacho, rúcula y albahaca)',8.00,2);
/*!40000 ALTER TABLE `FocacciasRellenas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Horarios`
--

DROP TABLE IF EXISTS `Horarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Horarios` (
  `idHorario` int NOT NULL,
  `dia` varchar(45) NOT NULL,
  `turnoMañana` varchar(45) DEFAULT NULL,
  `turnoTarde` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idHorario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Horarios`
--

LOCK TABLES `Horarios` WRITE;
/*!40000 ALTER TABLE `Horarios` DISABLE KEYS */;
INSERT INTO `Horarios` VALUES (1,'Martes','9.30','17.00'),(2,'Miércoles','9.00 hs a 17.00 hs',''),(3,'Jueves','9.00 hs a 17.00 hs',''),(4,'Viernes','9.00 hs a 16.30 hs','de 19.00 hs a 23.59 hs'),(5,'Sábado','12.00 hs a 16.30 hs','de 19.00 hs a 23.59 hs'),(6,'Domingo','Cerrado',''),(7,'Lunes','CERRADO','');
/*!40000 ALTER TABLE `Horarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Promociones`
--

DROP TABLE IF EXISTS `Promociones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Promociones` (
  `idPromocion` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `idCarta` int NOT NULL,
  PRIMARY KEY (`idPromocion`),
  KEY `fk_idCarta_idx` (`idCarta`),
  CONSTRAINT `fk_idCarta` FOREIGN KEY (`idCarta`) REFERENCES `Carta` (`idCarta`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Promociones`
--

LOCK TABLES `Promociones` WRITE;
/*!40000 ALTER TABLE `Promociones` DISABLE KEYS */;
INSERT INTO `Promociones` VALUES (1,'Desayuno',1),(2,'Almuerzo',1);
/*!40000 ALTER TABLE `Promociones` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Tapas`
--

DROP TABLE IF EXISTS `Tapas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Tapas` (
  `idTapa` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(200) NOT NULL,
  `descripcion` varchar(200) DEFAULT NULL,
  `precio` decimal(10,2) NOT NULL,
  `idComidaT` int NOT NULL DEFAULT '1',
  PRIMARY KEY (`idTapa`),
  KEY `fk_idComidaT_idx` (`idComidaT`),
  CONSTRAINT `fk_idComidaT` FOREIGN KEY (`idComidaT`) REFERENCES `Comida` (`idComida`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Tapas`
--

LOCK TABLES `Tapas` WRITE;
/*!40000 ALTER TABLE `Tapas` DISABLE KEYS */;
INSERT INTO `Tapas` VALUES (1,'Trío de hummus','(tradicional, de pimentón y de guacamole, acompañado de bastones de zanahoria y tostadas)',6.00,1),(2,'Cazuelita de la casa','(pollo, cebolla, pimiento, queso y chimichurri)',7.50,1),(3,'Pincho de tortilla',NULL,5.00,1),(4,'Mini Poke del chef','(salmón o seitan a elección, aguacate, tomate cherry, cebolla morada, pepino, mango y arroz)',8.00,1),(5,'Provolone','(queso fundido)',7.00,1),(6,'Papas bravas amapola','(salsa brava de la casa)',5.50,1),(7,'Papas trufadas','(salsa de trufa)',7.00,1),(8,'Fingers de pollo con su salsa',NULL,7.00,1),(9,'Boquerones en vinagre',NULL,7.00,1),(10,'Ensaladilla con nuestro toque',NULL,5.50,1),(11,'Ensalada Chicken Pio','(colchón de hojas verdes, pollo, cebolla, maiz, tomate, queso rallado, cebolla crujiente y mayonesa de soja)',7.00,1);
/*!40000 ALTER TABLE `Tapas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Tostadas`
--

DROP TABLE IF EXISTS `Tostadas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Tostadas` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `precio` decimal(10,2) NOT NULL,
  `idPromocion` int NOT NULL DEFAULT '1',
  `tipoDeProducto` varchar(45) NOT NULL DEFAULT 'Tostada',
  `apiNombre` varchar(45) NOT NULL DEFAULT 'tostadas',
  PRIMARY KEY (`id`),
  KEY `fk_idPromocion_idx` (`idPromocion`),
  CONSTRAINT `fk_idPromocionesT` FOREIGN KEY (`idPromocion`) REFERENCES `Promociones` (`idPromocion`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Tostadas`
--

LOCK TABLES `Tostadas` WRITE;
/*!40000 ALTER TABLE `Tostadas` DISABLE KEYS */;
INSERT INTO `Tostadas` VALUES (1,'Tomate o aceite',1.70,1,'Tostada','tostadas'),(2,'Jamón serrano, tomate y aceite',2.70,1,'Tostada','tostadas'),(3,'Queso, tomate y aceite',2.70,1,'Tostada','tostadas'),(4,'Aguacate, tomate y aceite',2.70,1,'Tostada','tostadas'),(5,'Atún, olivas y aceite',2.70,1,'Tostada','tostadas'),(6,'Jamón serrano, queso, tomate y aceite',3.20,1,'Tostada','tostadas'),(7,'Aguacate, queso, tomate y aceite',3.20,1,'Tostada','tostadas'),(8,'Jamón serrano, queso, aguacate y aceite',3.20,1,'Tostada','tostadas'),(9,'Verduras asadas',3.20,1,'Tostada','tostadas'),(10,'Salmón, aguacate, queso y aceite',4.70,1,'Tostada','tostadas'),(11,'Croissant',1.80,1,'Tostada','tostadas'),(12,'Croissant con jamón york y queso',2.80,1,'Tostada','tostadas');
/*!40000 ALTER TABLE `Tostadas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `User`
--

DROP TABLE IF EXISTS `User`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `User` (
  `idUser` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `contraseña` longtext NOT NULL,
  PRIMARY KEY (`idUser`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `User`
--

LOCK TABLES `User` WRITE;
/*!40000 ALTER TABLE `User` DISABLE KEYS */;
INSERT INTO `User` VALUES (2,'nico','$2b$10$CPRH9hxc/k2WY28BqXPeAuCCOTW/JvmFSuHGi8BLxlOLsUeuZpSa2');
/*!40000 ALTER TABLE `User` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-06-24 12:46:10

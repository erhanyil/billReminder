-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Anamakine: 127.0.0.1
-- Üretim Zamanı: 29 Ara 2017, 13:55:58
-- Sunucu sürümü: 5.7.14
-- PHP Sürümü: 5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Veritabanı: `projects`
--

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `tblbills`
--

CREATE TABLE `tblbills` (
  `reminder_ID` int(200) NOT NULL,
  `user_ID` int(200) NOT NULL,
  `bill_type` varchar(50) NOT NULL,
  `bill_data` datetime NOT NULL,
  `bill_amount` float NOT NULL,
  `bill_message` varchar(5000) DEFAULT NULL,
  `insert_date` datetime NOT NULL,
  `status` int(1) NOT NULL,
  `isActive` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Tablo döküm verisi `tblbills`
--

INSERT INTO `tblbills` (`reminder_ID`, `user_ID`, `bill_type`, `bill_data`, `bill_amount`, `bill_message`, `insert_date`, `status`, `isActive`) VALUES
(1, 1, '1', '2018-01-31 11:30:00', 245.4, 'Hemen Ödemelisin', '2017-12-29 00:00:00', 1, 1);

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `tblusers`
--

CREATE TABLE `tblusers` (
  `user_ID` int(200) NOT NULL,
  `user_firstName` varchar(200) NOT NULL,
  `user_lastName` varchar(200) NOT NULL,
  `user_email` varchar(500) NOT NULL,
  `user_pass` varchar(200) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dökümü yapılmış tablolar için indeksler
--

--
-- Tablo için indeksler `tblusers`
--
ALTER TABLE `tblusers`
  ADD PRIMARY KEY (`user_ID`);

--
-- Dökümü yapılmış tablolar için AUTO_INCREMENT değeri
--

--
-- Tablo için AUTO_INCREMENT değeri `tblusers`
--
ALTER TABLE `tblusers`
  MODIFY `user_ID` int(200) NOT NULL AUTO_INCREMENT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

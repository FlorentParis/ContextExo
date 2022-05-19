-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : db
-- Généré le : jeu. 19 mai 2022 à 19:16
-- Version du serveur : 10.6.5-MariaDB-1:10.6.5+maria~focal
-- Version de PHP : 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `data`
--

-- --------------------------------------------------------

--
-- Structure de la table `movies`
--

CREATE TABLE `movies` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `date` int(11) NOT NULL,
  `synopsis` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `movies`
--

INSERT INTO `movies` (`id`, `title`, `date`, `synopsis`) VALUES
(1, 'Premier film', 2011, 'Lorem lorem lorem'),
(2, 'Deuxieme Film', 2015, 'Plein d\'explosions boom boom boom');

-- --------------------------------------------------------

--
-- Structure de la table `reviews`
--

CREATE TABLE `reviews` (
  `id` int(11) NOT NULL,
  `movie_id` int(11) NOT NULL,
  `author_id` int(11) NOT NULL,
  `content` text NOT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `reviews`
--

INSERT INTO `reviews` (`id`, `movie_id`, `author_id`, `content`, `date`) VALUES
(1, 1, 1, 'Ce film est super !', '2022-05-18 13:54:10');

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id`, `username`, `password`, `token`) VALUES
(1, 'dzadza', '$2y$10$47JyJ9fz3ps3UB0cUJHxR.dZnMkwJQ4HXTsoNt9m60v2CWU0pSFSq', '3423573a26891ff5f84ceea122d44e019741bfb1486727f2f1a3e30aa961e73eccb0aa34e39d97ccfb73a9ab988ccaeb06a1'),
(3, 'flo', '$2y$10$2jY0ppJgm/P9YkhcnXAMh.F08tDGKl94mkd3AAxWCqbK0ooTbQ1y2', '0b1268bbbacdb7ccbb17a3db622b9a46963d0af347226b3aba1ac599a4b01a3e8657be6529e13a98bd73d82dc72beed070fb'),
(5, 'Floflo', '$2y$10$aniub8YzV/jLAjZ/WtR9E.6jC15294KCpSR9q1HSmXKm2eefOLwom', '5bcce8d3c472709e159bbc2261f7f6c2f3da33df2ba0ccae5b6a32492fa81a836b849bc0025d6e512857be2b49fca5c32937'),
(6, 'test', '$2y$10$KC6zOM1q4cMxlzSkGtDcjuEHS6LjexPLNPNXTEsFCcc6alcbqjQqK', 'd6543688804b0f19c9953d5c3f18fe3e40a41ac5dfc82495a2aa21ec9c381e04e538af0ce6f218652663768c140b344daac0');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `movies`
--
ALTER TABLE `movies`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `movies`
--
ALTER TABLE `movies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `reviews`
--
ALTER TABLE `reviews`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

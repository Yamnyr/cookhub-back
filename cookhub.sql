-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : ven. 22 mars 2024 à 02:03
-- Version du serveur : 10.4.28-MariaDB
-- Version de PHP : 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `cookhub`
--

-- --------------------------------------------------------

--
-- Structure de la table `abonnement`
--

CREATE TABLE `abonnement` (
  `id` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `id_abonne` int(11) DEFAULT NULL,
  `id_abonnement` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `abonnement`
--

INSERT INTO `abonnement` (`id`, `createdAt`, `updatedAt`, `id_abonne`, `id_abonnement`) VALUES
(1, '2024-03-21 19:32:16', '2024-03-21 19:32:16', 1, 2),
(2, '2024-03-21 19:32:16', '2024-03-21 19:32:16', 2, 3),
(3, '2024-03-21 19:32:16', '2024-03-21 19:32:16', 3, 1),
(4, '2024-03-21 20:22:09', '2024-03-21 20:22:09', 4, 3),
(10, '2024-03-22 00:21:44', '2024-03-22 00:21:44', 8, 3),
(11, '2024-03-22 00:22:35', '2024-03-22 00:22:35', 8, 1);

-- --------------------------------------------------------

--
-- Structure de la table `commentaire`
--

CREATE TABLE `commentaire` (
  `id` int(11) NOT NULL,
  `message` text DEFAULT NULL,
  `note` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `id_utilisateur` int(11) DEFAULT NULL,
  `id_recette` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `commentaire`
--

INSERT INTO `commentaire` (`id`, `message`, `note`, `createdAt`, `updatedAt`, `id_utilisateur`, `id_recette`) VALUES
(1, 'Délicieux!', 5, '2024-03-21 19:32:16', '2024-03-21 19:32:16', 1, 1),
(2, 'Je n\'ai pas aimé.', 2, '2024-03-21 19:32:16', '2024-03-21 19:32:16', 2, 2),
(3, 'À refaire absolument.', 4, '2024-03-21 19:32:16', '2024-03-21 19:32:16', 3, 3),
(4, 'mouais', 1, '2024-03-21 21:17:19', '2024-03-21 21:17:19', 4, 2),
(5, 'aez', 4, '2024-03-21 21:20:07', '2024-03-21 21:20:07', 4, 3),
(6, 'test', 2, '2024-03-21 22:49:31', '2024-03-21 22:49:31', 4, 1),
(7, '', 0, '2024-03-22 00:39:13', '2024-03-22 00:39:13', 8, 3),
(8, 'oyiu', 3, '2024-03-22 01:02:17', '2024-03-22 01:02:17', 4, 2);

-- --------------------------------------------------------

--
-- Structure de la table `favoris`
--

CREATE TABLE `favoris` (
  `id` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `id_utilisateur` int(11) DEFAULT NULL,
  `id_recette` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `favoris`
--

INSERT INTO `favoris` (`id`, `createdAt`, `updatedAt`, `id_utilisateur`, `id_recette`) VALUES
(1, '2024-03-21 19:32:16', '2024-03-21 19:32:16', 1, 3),
(2, '2024-03-21 19:32:16', '2024-03-21 19:32:16', 2, 1),
(3, '2024-03-21 19:32:16', '2024-03-21 19:32:16', 3, 2),
(19, '2024-03-21 22:29:06', '2024-03-21 22:29:06', 4, 3),
(20, '2024-03-21 23:44:06', '2024-03-21 23:44:06', 4, 1),
(74, '2024-03-22 00:43:58', '2024-03-22 00:43:58', 8, 2),
(89, '2024-03-22 00:53:38', '2024-03-22 00:53:38', 8, 3);

-- --------------------------------------------------------

--
-- Structure de la table `recette`
--

CREATE TABLE `recette` (
  `id` int(11) NOT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `preparation` text DEFAULT NULL,
  `ingrediants` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`ingrediants`)),
  `image` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `id_auteur` int(11) DEFAULT NULL,
  `id_typeplat` int(11) DEFAULT NULL,
  `id_region` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `recette`
--

INSERT INTO `recette` (`id`, `nom`, `preparation`, `ingrediants`, `image`, `createdAt`, `updatedAt`, `id_auteur`, `id_typeplat`, `id_region`) VALUES
(1, 'Sushi', 'Préparer du riz, du poisson cru et des légumes, puis former des sushis.', '\"aze\\naze\\naze\\naze\"', 'https://m1.zeste.ca/serdy-m-dia-inc/image/upload/f_auto/fl_lossy/q_auto:eco/x_731,y_0,w_3629,h_3629,c_crop/w_556,h_556,c_scale/v1670617489/foodlavie/prod/articles/les-meilleures-et-les-plus-bizarres-tendances-nourriture-en-2022-selon-doordash-98c33cd3', '2024-03-21 19:32:16', '2024-03-21 19:32:16', 1, 1, 1),
(2, 'Spaghetti bolognaise', 'Cuire les pâtes, préparer une sauce tomate avec de la viande hachée et des épices, servir chaud.', '\"aze\\naze\\naze\\naze\"', 'https://www.bioalaune.com/img/article/35557-combien-temps-doit-conserver-restes-nourritures.png', '2024-03-21 19:32:16', '2024-03-21 19:32:16', 2, 2, 2),
(3, 'Tiramisu', 'Préparer un mélange de mascarpone, café et biscuits, puis laisser reposer au réfrigérateur.', '\"aze\\naze\\naze\\naze\"', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBxKzw9aaXioxYtVaDb__PutorLHXnNBVqxg&usqp=CAU', '2024-03-21 19:32:16', '2024-03-21 19:32:16', 3, 3, 3),
(4, 'tesd', 'test', '\"\"', NULL, '2024-03-21 19:21:24', '2024-03-21 19:21:24', 4, 2, NULL),
(5, 'test', 'aqzeaze', '\"aze\\naze\\naze\\naze\"', NULL, '2024-03-21 20:00:40', '2024-03-21 20:00:40', 4, 2, NULL),
(6, 'exemple', 'ouyi', '\"azeraeazeaze\"', NULL, '2024-03-21 20:48:11', '2024-03-21 20:48:11', 4, 1, NULL),
(7, 'exempleaaaaaaaaa', 'zera', '\"\"', NULL, '2024-03-21 20:49:58', '2024-03-21 21:55:11', 4, 2, 1),
(8, 'new', 'aze', '\"aze\"', NULL, '2024-03-21 22:01:27', '2024-03-21 22:01:27', 4, 2, 2),
(10, 'newa', 'aze', '\"\"', NULL, '2024-03-21 22:02:21', '2024-03-21 22:02:21', 4, 2, 2);

-- --------------------------------------------------------

--
-- Structure de la table `region`
--

CREATE TABLE `region` (
  `id` int(11) NOT NULL,
  `nom` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `region`
--

INSERT INTO `region` (`id`, `nom`, `createdAt`, `updatedAt`) VALUES
(1, 'Asie', '2024-03-21 19:32:16', '2024-03-21 19:32:16'),
(2, 'Europe', '2024-03-21 19:32:16', '2024-03-21 19:32:16'),
(3, 'Amérique', '2024-03-21 19:32:16', '2024-03-21 19:32:16');

-- --------------------------------------------------------

--
-- Structure de la table `typeplat`
--

CREATE TABLE `typeplat` (
  `id` int(11) NOT NULL,
  `nom` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `typeplat`
--

INSERT INTO `typeplat` (`id`, `nom`, `createdAt`, `updatedAt`) VALUES
(1, 'Entrée', '2024-03-21 19:32:16', '2024-03-21 19:32:16'),
(2, 'Plat principal', '2024-03-21 19:32:16', '2024-03-21 19:32:16'),
(3, 'Dessert', '2024-03-21 19:32:16', '2024-03-21 19:32:16');

-- --------------------------------------------------------

--
-- Structure de la table `utilisateur`
--

CREATE TABLE `utilisateur` (
  `id` int(11) NOT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `prenom` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `mdp` varchar(255) DEFAULT NULL,
  `role` int(11) NOT NULL DEFAULT 0,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `utilisateur`
--

INSERT INTO `utilisateur` (`id`, `nom`, `prenom`, `email`, `mdp`, `role`, `createdAt`, `updatedAt`) VALUES
(1, 'Doe', 'John', 'john.doe@example.com', 'mdpjohn', 1, '2024-03-21 19:32:16', '2024-03-21 19:32:16'),
(2, 'Smith', 'Jane', 'jane.smith@example.com', 'mdpjane', 1, '2024-03-21 19:32:16', '2024-03-21 19:32:16'),
(3, 'Johnson', 'Mark', 'mark.johnson@example.com', 'mdpmark', 0, '2024-03-21 19:32:16', '2024-03-21 19:32:16'),
(4, 'test', 'test', 'test', '$2b$10$51KQ819l.KgV5hB5JEyD9eYB/hWUX19D/eSAxmWGeVBMieVuownG.', 0, '2024-03-21 19:20:45', '2024-03-21 19:20:45'),
(5, 'test', 'HurleaV2', 'testt', '$2b$10$5lUxvMcY93S.hqWow5X5m.GD7AhkGsCtKNL48o0ox9dzK7LDJuzTO', 0, '2024-03-21 23:50:58', '2024-03-21 23:50:58'),
(6, 'test', 'HurleaV2', 'testtazer', '$2b$10$XdHrIYCaklj9uDdBYtp5I.quzzXyQ2I2uehTnwWqmGyhpgnhymdte', 0, '2024-03-21 23:51:02', '2024-03-21 23:51:02'),
(7, 'test', 'HurleaV2', 'exemple', '$2b$10$vAIy28LnR/oK5/j13FMo4uq6dILg4RIkebV2.DJvHoowF5bCeBcLu', 0, '2024-03-21 23:53:05', '2024-03-21 23:53:05'),
(8, 'aaaaa', 'azeae', 'eaze', '$2b$10$/ZVtPtMJ0W1mVXllQRKHTuw95kG71yR/yD2BoZOaEzp/k/sG9vcie', 0, '2024-03-21 23:54:53', '2024-03-21 23:54:53');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `abonnement`
--
ALTER TABLE `abonnement`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_abonne` (`id_abonne`),
  ADD KEY `id_abonnement` (`id_abonnement`);

--
-- Index pour la table `commentaire`
--
ALTER TABLE `commentaire`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_utilisateur` (`id_utilisateur`),
  ADD KEY `id_recette` (`id_recette`);

--
-- Index pour la table `favoris`
--
ALTER TABLE `favoris`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_utilisateur` (`id_utilisateur`),
  ADD KEY `id_recette` (`id_recette`);

--
-- Index pour la table `recette`
--
ALTER TABLE `recette`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_auteur` (`id_auteur`),
  ADD KEY `id_typeplat` (`id_typeplat`),
  ADD KEY `id_region` (`id_region`);

--
-- Index pour la table `region`
--
ALTER TABLE `region`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `typeplat`
--
ALTER TABLE `typeplat`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `utilisateur`
--
ALTER TABLE `utilisateur`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `abonnement`
--
ALTER TABLE `abonnement`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT pour la table `commentaire`
--
ALTER TABLE `commentaire`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT pour la table `favoris`
--
ALTER TABLE `favoris`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=90;

--
-- AUTO_INCREMENT pour la table `recette`
--
ALTER TABLE `recette`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT pour la table `region`
--
ALTER TABLE `region`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `typeplat`
--
ALTER TABLE `typeplat`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `utilisateur`
--
ALTER TABLE `utilisateur`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `abonnement`
--
ALTER TABLE `abonnement`
  ADD CONSTRAINT `abonnement_ibfk_1` FOREIGN KEY (`id_abonne`) REFERENCES `utilisateur` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `abonnement_ibfk_2` FOREIGN KEY (`id_abonnement`) REFERENCES `utilisateur` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Contraintes pour la table `commentaire`
--
ALTER TABLE `commentaire`
  ADD CONSTRAINT `commentaire_ibfk_1` FOREIGN KEY (`id_utilisateur`) REFERENCES `utilisateur` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `commentaire_ibfk_2` FOREIGN KEY (`id_recette`) REFERENCES `recette` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Contraintes pour la table `favoris`
--
ALTER TABLE `favoris`
  ADD CONSTRAINT `favoris_ibfk_1` FOREIGN KEY (`id_utilisateur`) REFERENCES `utilisateur` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `favoris_ibfk_2` FOREIGN KEY (`id_recette`) REFERENCES `recette` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Contraintes pour la table `recette`
--
ALTER TABLE `recette`
  ADD CONSTRAINT `recette_ibfk_1` FOREIGN KEY (`id_auteur`) REFERENCES `utilisateur` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `recette_ibfk_2` FOREIGN KEY (`id_typeplat`) REFERENCES `typeplat` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `recette_ibfk_3` FOREIGN KEY (`id_region`) REFERENCES `region` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

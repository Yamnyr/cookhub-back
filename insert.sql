
INSERT INTO `region` (`id`, `nom`, `createdAt`, `updatedAt`) VALUES
(1, 'Italien', '2024-03-24 14:25:01', '2024-03-24 14:25:01'),
(2, 'Asiatique', '2024-03-24 14:25:01', '2024-03-24 14:25:01'),
(3, 'Mexacains', '2024-03-24 14:25:01', '2024-03-24 14:25:01');

INSERT INTO `typeplat` (`id`, `nom`, `createdAt`, `updatedAt`) VALUES
(1, 'Hamburger', '2024-03-24 14:25:01', '2024-03-24 14:25:01'),
(2, 'Fast Food', '2024-03-24 14:25:01', '2024-03-24 14:25:01'),
(3, 'Sushis', '2024-03-24 14:25:01', '2024-03-24 14:25:01');

INSERT INTO `utilisateur` (`id`, `nom`, `prenom`, `email`, `mdp`, `role`, `createdAt`, `updatedAt`) VALUES
(1, 'John', 'Doe', 'john.doe@example.com', 'motdepasse123', 0, '2024-03-24 14:25:01', '2024-03-24 14:25:01'),
(2, 'Jane', 'Doe', 'jane.doe@example.com', 'motdepasse456', 0, '2024-03-24 14:25:01', '2024-03-24 14:25:01'),
(3, 'test', 'test', 'test', '$2b$10$x9hkAyUeczvmGbc1WtXRlOdeIlwIOtbYWj22mQwl2QxQNtBxUv4Ai', 0, '2024-03-24 13:27:49', '2024-03-24 13:27:49');

INSERT INTO `abonnement` (`id`, `createdAt`, `updatedAt`, `id_abonne`, `id_abonnement`) VALUES
(1, '2024-03-24 14:25:01', '2024-03-24 14:25:01', 1, 2),
(2, '2024-03-24 14:25:01', '2024-03-24 14:25:01', 2, 1),
(3, '2024-03-24 13:35:13', '2024-03-24 13:35:13', 3, 1),
(4, '2024-03-24 13:35:51', '2024-03-24 13:35:51', 3, 2);

INSERT INTO `recette` (`id`, `nom`, `preparation`, `ingrediants`, `image`, `createdAt`, `updatedAt`, `id_auteur`, `id_typeplat`, `id_region`) VALUES
(1, 'Salade César', 'Mélanger la laitue, les croûtons, le parmesan et la sauce.', '\"Laituen parmesan\"', 'https://www.galbani.fr/wp-content/uploads/2020/04/AdobeStock_157570276-2.jpeg', '2024-03-24 14:25:01', '2024-03-24 14:25:01', 1, 1, 1),
(2, 'Sushi', 'Préparer le riz, le poisson et les légumes, puis rouler dans les feuilles de nori.', '\"riz poisson légumes\"', 'https://tb-static.uber.com/prod/image-proc/processed_images/9819b08189345da4ca80aa5f4857cc0b/4f48e715b6c05b9b00c3fc436b4eb65f.jpeg', '2024-03-24 14:25:01', '2024-03-24 14:25:01', 2, 2, 2),
(54, 'Pâtes Carbonara', 'Cuire les pâtes, faire revenir le lard dans une poêle, mélanger avec les pâtes, les œufs et le fromage.', '\"pâtes lard œufs fromage\"', 'https://www.potimarron.com/images/wishlists/img/pates-a-la-carbonara-gJNsG.jpg/fm-pjpg/w-1200/h-630/fit-crop', '2024-03-24 14:32:03', '2024-03-24 14:32:03', 1, 2, 1),
(55, 'Gâteau au Chocolat', 'Mélanger le chocolat fondu avec le beurre, ajouter les œufs et le sucre, incorporer la farine et cuire au four.', '\"chocolat beurre œufs sucre farine\"', 'https://assets.afcdn.com/recipe/20221003/135677_w1024h1024c1cx1160cy690cxt0cyt0cxb2120cyb1414.jpg', '2024-03-24 14:32:03', '2024-03-24 14:32:03', 2, 1, 1),
(56, 'Ratatouille', 'Faire sauter les légumes (aubergines, courgettes, poivrons, tomates) avec de l\'ail et de l\'huile d\'olive.', '\"aubergines courgettes poivrons tomates ail huile d\'olive\"', 'https://images.ricardocuisine.com/services/recipes/5312.jpg', '2024-03-24 14:32:03', '2024-03-24 14:32:03', 1, 1, 1),
(57, 'Tarte aux Pommes', 'Préparer la pâte brisée, couper les pommes en tranches, les disposer sur la pâte, saupoudrer de sucre et cuire au four.', '\"pâte brisée pommes sucre\"', 'https://assets.afcdn.com/recipe/20220128/128250_w1024h1024c1cx1294cy688cxt0cyt0cxb2037cyb1472.webp', '2024-03-24 14:32:03', '2024-03-24 14:32:03', 2, 2, 1),
(58, 'Salmon Teriyaki', 'Mariner le saumon dans la sauce teriyaki, puis le faire griller ou cuire à la poêle.', '\"saumon sauce teriyaki\"', 'https://www.allrecipes.com/thmb/a2Pgu3Q5z92A79zUrEISwGRqfAI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/228285teriyaki-salmonFranceC4x3-495e53221ca54183bf0ff5b2fa5aae55.jpg', '2024-03-24 14:32:03', '2024-03-24 14:32:03', 1, 2, 2),
(59, 'Poulet Tikka Masala', 'Mariner le poulet dans un mélange d\'épices et de yaourt, puis le faire cuire dans une sauce tomate épicée.', '\"poulet épices yaourt sauce tomate\"', 'https://static.750g.com/images/1200-630/799b9a9d4e3d6bae72e69e3e826ccea0/poulet-tikka-massala.jpeg', '2024-03-24 14:32:03', '2024-03-24 14:32:03', 2, 2, 1),
(60, 'Ceviche de Poisson', 'Mariner le poisson cru dans du jus de citron ou de lime avec des oignons, du piment et de la coriandre.', '\"poisson citron lime oignons piment coriandre\"', 'https://img.cuisineaz.com/660x660/2015/07/14/i79651-ceviche-de-poisson.jpg', '2024-03-24 14:32:03', '2024-03-24 14:32:03', 1, 1, 2),
(61, 'Pancakes', 'Mélanger la farine, le sucre, la levure, le lait et les œufs, puis cuire dans une poêle.', '\"farine sucre levure lait œufs\"', 'https://img.cuisineaz.com/660x660/2023/05/23/i193843-pancakes-simple.jpg', '2024-03-24 14:32:03', '2024-03-24 14:32:03', 2, 1, 2),
(62, 'Hamburger', 'Former des steaks hachés, les cuire à la poêle ou au grill, assembler avec des pains à burger, des tomates, de la laitue et du fromage.', '\"steak haché pain tomates laitue fromage\"', 'https://img.cuisineaz.com/660x660/2023/11/09/i196442-hamburger-maison.jpg', '2024-03-24 14:32:03', '2024-03-24 14:32:03', 1, 2, 1),
(63, 'Gazpacho', 'Mixer des tomates, des poivrons, des concombres, de l\'ail, du vinaigre et de l\'huile d\'olive, assaisonner et servir frais.', '\"tomates poivrons concombres ail vinaigre huile d\'olive\"', 'https://www.hervecuisine.com/wp-content/uploads/2021/07/recette-du-gazpacho-facile-maison.jpeg', '2024-03-24 14:32:03', '2024-03-24 14:32:03', 2, 1, 1);

INSERT INTO `favoris` (`id`, `createdAt`, `updatedAt`, `id_utilisateur`, `id_recette`) VALUES
(1, '2024-03-24 14:25:01', '2024-03-24 14:25:01', 1, 2),
(2, '2024-03-24 14:25:01', '2024-03-24 14:25:01', 2, 1),
(4, '2024-03-24 13:28:12', '2024-03-24 13:28:12', 3, 1),
(7, '2024-03-24 13:35:51', '2024-03-24 13:35:51', 3, 2),
(8, '2024-03-24 13:35:56', '2024-03-24 13:35:56', 3, 58),
(9, '2024-03-24 13:35:58', '2024-03-24 13:35:58', 3, 61);

INSERT INTO `commentaire` (`id`, `message`, `note`, `createdAt`, `updatedAt`, `id_utilisateur`, `id_recette`) VALUES
(1, 'Délicieux!', 5, '2024-03-24 14:25:01', '2024-03-24 14:25:01', 1, 2),
(2, 'Très bonne recette.', 4, '2024-03-24 14:25:01', '2024-03-24 14:25:01', 2, 1),
(3, 'test', 4, '2024-03-24 13:28:23', '2024-03-24 13:28:23', 3, 1);
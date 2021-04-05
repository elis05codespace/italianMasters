-- phpMyAdmin SQL Dump
-- version 4.9.7
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:8889
-- Tiempo de generación: 05-04-2021 a las 09:19:14
-- Versión del servidor: 5.7.32
-- Versión de PHP: 7.4.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `italianMasters`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `candidate`
--

CREATE TABLE `candidate` (
  `id` int(11) NOT NULL,
  `first_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `curriculum` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `more` longtext COLLATE utf8mb4_unicode_ci
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `doctrine_migration_versions`
--

CREATE TABLE `doctrine_migration_versions` (
  `version` varchar(191) COLLATE utf8_unicode_ci NOT NULL,
  `executed_at` datetime DEFAULT NULL,
  `execution_time` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `faq`
--

CREATE TABLE `faq` (
  `id` int(11) NOT NULL,
  `question` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `answer` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `collapsed` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `faq`
--

INSERT INTO `faq` (`id`, `question`, `answer`, `collapsed`) VALUES
(1, 'When do the lessons begin?', 'You can start your course any week. Starting dates for beginners are scheduled every week.', 0),
(2, 'How many students are in the class?', 'The maximum number of students in each class is 10.', 0),
(3, 'At what time can I take my lesson?', 'We offer a flexible schedule. Courses take place either in the morning or in the evening (some are also available at lunch time).', 0),
(4, 'Will my skill level be available?', 'Yes, we organize Italian courses of all levels  (beginners, elementary, intermediate and advanced).', 0),
(5, 'How do I find my Italian level?', 'You will take an online placement test. In addition you will be given a short interview. We ensure than you go straight into the right class for you!', 0),
(6, 'How can I buy a course?', 'You can buy directly by clicking on the course you want on the page Courses. ', 0),
(7, 'What type of payment do you accept?', 'We accept PayPal, credit/debit card.', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `duration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `schedule` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `price` double NOT NULL,
  `more` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `product`
--

INSERT INTO `product` (`id`, `name`, `duration`, `description`, `schedule`, `price`, `more`) VALUES
(1, 'Intensive course - Buongiorno!', ' 2 weeks (morning)', '5 classes per week (50 min per class)', 'Monday to Friday, 9.00 a.m.', 100, 'You can start any Monday, within 1 months from purchase.'),
(2, 'Intensive course - Buonasera!', ' 2 weeks (evening)', '5 classes per week (50 min per class)', 'Monday to Friday, 7.00 p.m.', 100, 'You can start any Monday, within 1 months from purchase.'),
(3, 'Part-time course - Buon Pranzo!', ' 4 weeks (lunch time)', '3 classes per week (50 min per class)', 'Monday-Wednesday-Friday, 1.00 p.m.', 120, 'You can start any Monday, within 1 months from purchase.'),
(4, 'Private classes', ' 5 classes', 'Up to 3 classes per week (60 minutes per class), to be scheduled within 2 months from purchase.', 'From Monday to Friday, at the arranged time.', 100, 'You can decide which day and time suits you better, according to teachers availability.'),
(5, 'Grammar', ' 5 classes (morning)', 'Up to 2 classes per week (50 minutes per class)', 'Tuesday and Thursday, 10.00 a.m.', 70, 'You can start any Tuesday/Thursday, within 1 months from purchase.'),
(6, 'Business', ' 4 weeks (lunch time)', '2 classes per week (50 min per class)', 'Tuesday and Thursday, 1.00 p.m.', 70, 'You can start any Tuesday/Thursday, within 1 months from purchase.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `query`
--

CREATE TABLE `query` (
  `id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `message` longtext COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `review`
--

CREATE TABLE `review` (
  `id` int(11) NOT NULL,
  `review` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `country` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `review`
--

INSERT INTO `review` (`id`, `review`, `name`, `country`, `image`) VALUES
(1, 'Excellent School! I just did a 6 weeks of the online intensive language course and I could not recommend it enough!', 'Mary Jane Rogers', 'Canada', 'big1.jpg'),
(2, 'Great classes, very nice teachers, a lot of flexibility and effective learning methods. Miss you guys!!', 'Peter Pfister', 'Germany', 'big2.jpg'),
(3, 'I took the online intensive course during the lockdown period and I just couldn’t get enough of it.So much fun!', 'Eva Neef', 'Sweden', 'big3.jpg'),
(4, 'Excellent classes and intructor (Roberto), always prepared, patient and friendly. The school provides useful materials too.', 'Jeferson Oliveira', 'Brasil', 'big4.jpg'),
(5, 'Great Experience 5 STARS! Took an 8 week online zoom. Sofia, my teacher, was always super positive, happy and fun and I got to know many friends!', 'Sonia Haagertz', 'Austria', 'big5.jpg'),
(6, 'I’ve just finished an online course and would highly recommend it. My tutor was Giovanni, who structured the lessons very well and made them fun.', 'Mark T. Bennet', 'California', 'big6.jpg'),
(7, 'I went from speaking very little Italian to being able to read, write, listen and speak with ease.Loved it!', 'Gerard Marceau', 'France', 'big7.jpg'),
(8, 'Amazing how I learned so much in such a short time! I will always be grateful for this experience!', 'Maria Quintero', 'Spain', 'big8.jpg'),
(9, 'If you want to learn Italian where you leave each lesson smiling, you should definitely sign up with this school! Always stimulating and pushing you to do your best!', 'Celine Dumond', 'Belgium', 'big9.jpg'),
(10, 'Both teachers that I had were very understanding and encouraging and I loved being in a class of students from all around the world!Ciao belli!!!  ', 'Belen Rodriguez ', 'Colombia', 'big10.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `teacher`
--

CREATE TABLE `teacher` (
  `id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` longtext COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `teacher`
--

INSERT INTO `teacher` (`id`, `name`, `image`, `description`) VALUES
(1, 'Serena Milani', 'serena.jpg', 'Hello! My name is Serena, I am 23 years old, I\'m a law student and I speak 5 languages (Italian, English, Spanish, Russian and Chinese). I have been teaching Italian since I graduated high school in 2017. My goal here is to help you learning my own language according to your personal time and learning needs.'),
(2, 'Elena Bianchi', 'elena.jpg', 'Hello! My name is Elena Bianchi, I\'m graduated in French language and litterature, I am living in Italy.I have a great passion for foreign languages, history and litterature. I work with students of all ages and many nationalities. I make my lessons relevant to the students'),
(3, 'Sergio De Amicis', 'sergio.jpg', 'Dear students, my name is Sergio, I am a professor of literature and philosophy, I teach Italian language in high schools, and I collaborate with the University of Rome and Bologna. I have worked for several years at the Italian Cultural Institute in London'),
(4, 'Sofia De Cecco', 'sofia.jpg', 'Hello everybody, my name is Sofia, I teach Italian since 2005. Would you like to improve your accent, prepare an exam, improve your Italian for leisure or for work? I teach French too using the same methodology, learn and have fun!'),
(5, 'Giovanni Rossi', 'giovanni.jpg', 'I\'m a native Italian teacher with over 7 years of experience. I specialize in conversation and pronunciation. I started tutoring my international classmates at university, where I studied International Relations. I can help you with exams, interviews, a trip abroad, a new job or just to improve your Italian. It is a beautiful language!'),
(6, 'Roberto Grandi', 'roberto.jpg', 'Hy everyone, my name is Roberto, I\'m 36 years old and I\'m a professor of Italian language and literature. I\'ve been working as a journalist and as a radio host for more than 10 years. But my true passion is the Italian language and I love to teach it to others.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `email` varchar(180) COLLATE utf8mb4_unicode_ci NOT NULL,
  `roles` json NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `first_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `user`
--

INSERT INTO `user` (`id`, `email`, `roles`, `password`, `first_name`, `last_name`) VALUES
(1, 'eli@gmail.com', '[\"ROLE_ADMIN\"]', '$2y$13$hU2o1yHqkVCemBL/pR/tZ.tJ5cLkDVj4Jq9sCxJAWS.bul/Ra2AOm', 'Elisa', 'Forpresident\r\n'),
(2, 'second@gmail.com', '[]', '$2y$13$hU2o1yHqkVCemBL/pR/tZ.tJ5cLkDVj4Jq9sCxJAWS.bul/Ra2AOm', 'John', 'Doe');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user_product`
--

CREATE TABLE `user_product` (
  `user_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `user_product`
--

INSERT INTO `user_product` (`user_id`, `product_id`) VALUES
(1, 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `candidate`
--
ALTER TABLE `candidate`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `doctrine_migration_versions`
--
ALTER TABLE `doctrine_migration_versions`
  ADD PRIMARY KEY (`version`);

--
-- Indices de la tabla `faq`
--
ALTER TABLE `faq`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `query`
--
ALTER TABLE `query`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `review`
--
ALTER TABLE `review`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `teacher`
--
ALTER TABLE `teacher`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UNIQ_8D93D649E7927C74` (`email`);

--
-- Indices de la tabla `user_product`
--
ALTER TABLE `user_product`
  ADD PRIMARY KEY (`user_id`,`product_id`),
  ADD KEY `IDX_8B471AA7A76ED395` (`user_id`),
  ADD KEY `IDX_8B471AA74584665A` (`product_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `candidate`
--
ALTER TABLE `candidate`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `faq`
--
ALTER TABLE `faq`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `query`
--
ALTER TABLE `query`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `review`
--
ALTER TABLE `review`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `teacher`
--
ALTER TABLE `teacher`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `user_product`
--
ALTER TABLE `user_product`
  ADD CONSTRAINT `FK_8B471AA74584665A` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_8B471AA7A76ED395` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

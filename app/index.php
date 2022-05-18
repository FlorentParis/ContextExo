<?php

require_once 'headers.php';
require_once('./classes/PDOFactory.php');
require_once('./classes/Movie.php');

$pdo = (new PDOFactory())->getConnection();

$query = $pdo->query('SELECT * FROM movies');
$query->setFetchMode(PDO::FETCH_ASSOC);

$res = [];

foreach ($query->fetchAll() as $movie) {
    $res[] = [
        'id' => $movie['id'],
        'title' => $movie['title'],
        'date' => $movie['date'],
        'synopsis' => $movie['synopsis']
    ];
}

echo json_encode($res);
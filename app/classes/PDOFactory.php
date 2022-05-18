<?php

class PDOFactory
{
    private $dbConnection = null;

    public function __construct()
    {
        $servername = "db";
        $db = "data";
        $username = "root";
        $password = "password";

        try {
            $this->dbConnection = new \PDO('mysql:host='.$servername.';dbname='.$db, $username, $password);
        } catch (\PDOException $e) {
            exit($e->getMessage());
        }
    }

    public function getConnection()
    {
        return $this->dbConnection;
    }
}
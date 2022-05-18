<?php

class Movie
{
    private int $id;
    private string $title;
    private int $date;
    private string $synopsis;

    public function getId(): int
    {
        return $this->id;
    }

    public function setId(int $id): Movie
    {
        $this->id = $id;
        return $this;
    }

    public function getTitle(): string
    {
        return $this->title;
    }

    public function setTitle(string $title): Movie
    {
        $this->title = $title;
        return $this;
    }

    public function getDate(): int
    {
        return $this->date;
    }

    public function setDate(int $date): Movie
    {
        $this->date = $date;
        return $this;
    }

    public function getSynopsis(): string
    {
        return $this->synopsis;
    }

    public function setSynopsis(string $synopsis): Movie
    {
        $this->synopsis = $synopsis;
        return $this;
    }
}
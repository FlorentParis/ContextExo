<?php

class Review
{
    private int $id;
    private int $author_id;
    private string $content;
    private date $date;

    public function getId(): int
    {
        return $this->id;
    }

    public function setId(int $id): Review
    {
        $this->id = $id;
        return $this;
    }

    public function getAuthorId(): int
    {
        return $this->author_id;
    }

    public function setAuthorId(int $author_id): Review
    {
        $this->author_id = $author_id;
        return $this;
    }

    public function getContent(): string
    {
        return $this->content;
    }

    public function setContent(string $content): Review
    {
        $this->content = $content;
        return $this;
    }

    public function getDate(): date
    {
        return $this->date;
    }

    public function setDate(date $date): Review
    {
        $this->date = $date;
        return $this;
    }
}
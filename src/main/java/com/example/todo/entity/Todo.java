package com.example.todo.entity;

import jakarta.annotation.Nullable;
import jakarta.persistence.*;

@Entity
public class Todo {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;
    @Column(nullable = false)
    private String title;
    private String description;
    private boolean isDone;
    private boolean isStarred;


    public String getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getDescription() {
        return description;
    }

    public boolean isDone() {
        return isDone;
    }

    public boolean isStarred() {
        return isStarred;
    }

    public void setId(String id) {
        this.id = id;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setDescription(String description) {
        this.description = description;
    }
    public void setDone(boolean isDone) {
        this.isDone = isDone;
    }

    public void setStarred(boolean starred) {
        isStarred = starred;
    }

}

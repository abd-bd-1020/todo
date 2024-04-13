package com.example.todo.repository;

import com.example.todo.entity.Todo;
import jakarta.persistence.EntityManager;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@Repository
public class TodoRepository {

    @Autowired
    private EntityManager entityManager;

    public ArrayList<Todo> getAllTodos() {
            return (ArrayList<Todo>) entityManager.createQuery("SELECT t FROM Todo t", Todo.class)
                    .getResultList();
    }

    public Todo getTodoById(String id) {
        return entityManager.find(Todo.class, id);
    }

    @Transactional
    public void createTodo(Todo todo) {
        entityManager.persist(todo);
    }

    @Transactional
    public void updateTodo(Todo todo) {
      entityManager.createQuery("UPDATE Todo t SET t.title = :title, t.description = :description, t.isDone = :isDone, t.isStarred = :isStarred WHERE t.id = :id");
    }

    @Transactional
    public void deleteTodoById(String id) {
        entityManager.createQuery("DELETE FROM Todo t WHERE t.id = :id")
                .setParameter("id", id)
                .executeUpdate();
    }

}

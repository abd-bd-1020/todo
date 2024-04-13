package com.example.todo.service;

import com.example.todo.entity.Todo;
import com.example.todo.repository.TodoRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class TodoService {

    @Autowired
    private TodoRepository todoRepository;

    public ArrayList<Todo> getAllTodos() {
        return todoRepository.getAllTodos();
    }

    public Todo getTodoById(String id) {
        return todoRepository.getTodoById(id);
    }

    @Transactional
    public void createTodo(Todo todo) {
        todoRepository.createTodo(todo);
    }
    @Transactional
    public void updateTodo(Todo todo) {
        todoRepository.updateTodo(todo);
    }
    @Transactional
    public void deleteTodoById(String id) {
        todoRepository.deleteTodoById(id);
    }



}

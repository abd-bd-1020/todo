package com.example.todo.controller;


import com.example.todo.entity.Todo;
import com.example.todo.service.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/v1")
public class TodoController {

    @Autowired
    private TodoService todoService;

    @RequestMapping("/hello")
    public String hello() {
        return "Hello World";
    }

    @GetMapping("/todos")
    public ArrayList<Todo> getAllTodos() {
        return todoService.getAllTodos();
    }

    @GetMapping("/todos/{id}")
    public Todo getTodoById(String id) {
        return todoService.getTodoById(id);
    }

    @PostMapping("/todos/todo")
    public void createTodo(Todo todo) {
        todoService.createTodo(todo);
    }

    @PutMapping("/todos/todo")
    public void updateTodo(Todo todo) {
        todoService.updateTodo(todo);
    }

    @DeleteMapping("/todos/{id}")
    public void deleteTodoById(String id) {
        todoService.deleteTodoById(id);
    }






}

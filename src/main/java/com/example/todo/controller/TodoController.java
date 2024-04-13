package com.example.todo.controller;

import com.example.todo.entity.Todo;
import com.example.todo.service.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.ui.Model;
import org.springframework.web.servlet.ModelAndView;

import java.util.ArrayList;

@RestController
@RequestMapping("/v1/todos")
public class TodoController {

    @Autowired
    private TodoService todoService;

    @RequestMapping("/hello")
    public String hello() {
        return "hello";
    }

//    @GetMapping
//    public ArrayList<Todo> getAllTodos() {
//        return todoService.getAllTodos();
//    }
    @GetMapping
    public ModelAndView getAllTodos(Model model) {
        ArrayList<Todo> todos = todoService.getAllTodos();
        model.addAttribute("todos", todos);
        ModelAndView modelAndView = new ModelAndView ( );
        modelAndView.setViewName ( "todo-list.html" );
        return modelAndView;
    }

    @GetMapping("/{id}")
    public Todo getTodoById(@PathVariable String id) {
        return todoService.getTodoById(id);
    }

    @PostMapping
    public void createTodo(@RequestBody Todo todo) {
        System.out.println("todo");
        todoService.createTodo(todo);
    }

    @PutMapping("/{id}")
    public void updateTodo(@RequestBody Todo todo) {
        todoService.updateTodo(todo);
    }

    @DeleteMapping("/{id}")
    public void deleteTodoById(@PathVariable String id) {
        todoService.deleteTodoById(id);
    }
}

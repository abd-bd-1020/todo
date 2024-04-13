package com.example.todo.controller;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/v1/todos")
public class todoController {

    @RequestMapping("/hello")
    public String hello() {
        return "Hello World";
    }




}

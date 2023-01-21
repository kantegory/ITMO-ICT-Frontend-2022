package org.examplenew.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {

    @RequestMapping(value = "/") // <2>
    public String index() {
        return "index"; // <3>
    }
}
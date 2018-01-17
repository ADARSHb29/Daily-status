package com.mvc.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

import com.mvc.serv.Servinte;

@Controller
@EnableWebMvc
@RequestMapping(value="/home")
public class Controllerclass {

	@Autowired
	private Servinte servinte;
	
	@RequestMapping(value="/index", method=RequestMethod.POST)
	@ResponseBody
	public String save(@RequestParam("sname")String sname)
	{
		System.out.println(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>"+sname);
		String res = servinte.add(sname);
		return res;
	}
	
	@RequestMapping(value="/indexs", method=RequestMethod.GET)
	@ResponseBody
	public String sss()
	{
		System.out.println("ddddddddddddddddddddddddddd");
		return "ddd";
	}
}

package com.pho.common;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
@RestController
@EnableWebMvc
@RequestMapping("/demo")
@Configuration
public class DemoController {
	@RequestMapping(value="/demo1" , method=RequestMethod.POST)
	public @ResponseBody String demo1(@RequestBody DemoModel demoModel){
		String name = demoModel.getName();
		int num= demoModel.getNum();
		System.out.println("name :"+name + "     num: "+num);
		System.out.println("inside.....");
		return "testttttttttt";
	}
	@RequestMapping(value="/demo2" , method=RequestMethod.GET)
	public @ResponseBody String demo1(){
		System.out.println("insidee.....");
		return "testttttttttt";
	}
	

}

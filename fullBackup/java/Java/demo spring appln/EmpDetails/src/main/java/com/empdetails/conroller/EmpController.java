package com.empdetails.conroller;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.empdetails.bo.EmpDetails;
import com.empdetails.service.impl.EmpServiceImpl;
@RestController
@RequestMapping(value ="/test")
public class EmpController {
	
	
	public static final Logger LOG= Logger.getLogger(EmpController.class);
	@Autowired
	private EmpServiceImpl empservice;
	
    @GET
	@RequestMapping(value ="/demo")
	public String demo(){
		return "ddddddddddddddddd";
	}
	
	@RequestMapping(value ="/insert" )
	@POST
	@Consumes(MediaType.APPLICATION_JSON_VALUE)
public  EmpDetails insert(@RequestBody  final EmpDetails empdetails){
	
		System.out.println(".....................................................");
		
		System.out.println("name"+empdetails.getName());
		System.out.println("hobby:"+empdetails.getHobby());
		System.out.println("country:"+empdetails.getCountry());
		System.out.println("email:"+empdetails.getEmail());


		System.out.println("from controller");
	empservice.empinsert(empdetails);
	return empdetails;
	
}
	@RequestMapping(value = "/delete" , method = RequestMethod.POST)
	public EmpDetails delete(@RequestBody  final EmpDetails empdetails){
		System.out.println("SDFSDFSDFSDFSDFDF");
		empservice.empdelete(empdetails);
		return empdetails;
	}
	
	@RequestMapping("/update")
	public EmpDetails update(@RequestBody  final EmpDetails empdetails){
		empservice.empupdate(empdetails);
		return empdetails;
	}
	
	@RequestMapping("/view")
	public void select(){
		empservice.empview();
		System.out.println("view method");
	}
	
	public EmpServiceImpl getEmpservice() {
		return empservice;
	}
	@Autowired
	public void setEmpservice(EmpServiceImpl empservice) {
		this.empservice = empservice;
	}
	
}

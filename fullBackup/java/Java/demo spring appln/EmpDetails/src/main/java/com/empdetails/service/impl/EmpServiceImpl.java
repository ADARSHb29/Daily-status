package com.empdetails.service.impl;


import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import com.empdetails.bo.EmpDetails;
import com.empdetails.dao.impl.EmpDetailsDaoImpl;
import com.empdetails.service.EmpService;
/*
 * this class is responsible for calling the service from DAO classes
 */
@Component
@Service
public class EmpServiceImpl implements EmpService{
	
	private EmpDetailsDaoImpl empdao; 
	public static final Logger LOG= Logger.getLogger(EmpServiceImpl.class);
	
	//calling insert method from  DAO
	public void empinsert(EmpDetails empDetails)
	{
		try {
			System.out.println("from service");
			
			empdao.insertinto(empDetails);
			System.out.println("inserted successfulley");
		} 
		catch (Exception e) {
			LOG.error(e.getMessage());
		}
	}
	//calling delete method from  DAO
	public void empdelete(EmpDetails empDetails)
	{
		
		empdao.deletefrom(empDetails);
	}
	//calling update method from  DAO
	public void empupdate(EmpDetails empDetails){
		
		empdao.updateinto(empDetails);
	}
	//calling view method from  DAO
	public void empview(){
		System.out.println("empview  service");
		
		empdao.view();
	}

	@Autowired
	public void setEmpdao(EmpDetailsDaoImpl empdao) {
		this.empdao = empdao;
	}

}

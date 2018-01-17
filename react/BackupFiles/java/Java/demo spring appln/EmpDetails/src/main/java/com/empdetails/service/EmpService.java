package com.empdetails.service;

import com.empdetails.bo.EmpDetails;

public interface EmpService {
	public void empinsert(EmpDetails empDetails);
	public void empdelete(EmpDetails empDetails);
	public void empupdate(EmpDetails empDetails);
	public void empview();

}

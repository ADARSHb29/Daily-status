package com.empdetails.dao;

import com.empdetails.bo.EmpDetails;

public interface EmpDetailsDao {
	public void insertinto(EmpDetails empDetails);
	public void deletefrom(EmpDetails empDetails);
	public void updateinto(EmpDetails empDetails);
	public void view();

}

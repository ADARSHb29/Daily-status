package com.mvc.dao;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
@Repository
public class Daoimpl implements Daointer{

	JdbcTemplate template; 
	public void setTemplate(JdbcTemplate template) {  
	    this.template = template;  
	} 
	public int adddata(String  p) {
		   String sql="insert into demo(strooo) values('"+p+"')";  
		return template.update(sql);
	}
	
}

package com.mvc.serv;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.mvc.dao.Daointer;

@Service
@Transactional
public class Servimpl implements Servinte{

	@Autowired
	private Daointer dao;
	
	public String add(String p) {
		dao.adddata(p);
		JSONObject obj =new JSONObject();
		obj.put("ResponseCode:",200);
		obj.put("Message","Sucess");
		return obj.toString();

	}

}

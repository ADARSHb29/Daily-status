package com.empdetails.dao.impl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import javax.sql.DataSource;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import com.empdetails.bo.Emp;
import com.empdetails.bo.EmpDetails;
/*
 * 
 * this java class is responsible to connect to database and doing the database related activities
 */
@Component
@Repository
public class EmpDetailsDaoImpl {
	
	public static final Logger LOG= Logger.getLogger(EmpDetailsDaoImpl.class);

	private String INSERTQUERY="INSERT INTO practice (name,hobby,emailid,country) VALUES (?,?,?,?)";
	private String DELETEQUERY="Delete from practice where name = ?"; 
	private String UPDATEQUERY="UPDATE practice set emailid = ? , hobby = ?, country = ? where name = ?";
	private String VIEWQUERY="SELECT * FROM practice" ;
	@Autowired
	private DataSource dataSource;
	@Autowired
	private Emp empresult;
	Connection con;
	PreparedStatement psmt;
	Statement st;
	ResultSet rs;
	
	//inserting the user submitted data into the database
	public void insertinto(EmpDetails empDetails ){
		try{
			
				con=dataSource.getConnection();
		
			System.out.println("from dao fot connection");
			psmt = con.prepareStatement(INSERTQUERY);
			psmt.setString(1, empDetails.getName());
			psmt.setString(2, empDetails.getHobby());
			psmt.setString(3, empDetails.getEmail());
			psmt.setString(4, empDetails.getCountry());
			 psmt.executeUpdate();
			System.out.println("form dao inserted the data");
		}
		catch(SQLException e){
			LOG.error(e.getMessage());
		}
	
}
	//this method is responsible to delete the data based on employee name
	public void deletefrom(EmpDetails empDetails){
		try{
			con=dataSource.getConnection();
			System.out.println("got connection");
			psmt = con.prepareStatement(DELETEQUERY);
			System.out.println("got connection 111111111");
			psmt.setString(1, empDetails.getEmail());
		    psmt.executeUpdate();
			System.out.println("from dao deleted success");
		}
		catch(SQLException e){
			LOG.error(e.getMessage());
		}
		
	}
	//this method is responsible to update the data based on employee name
	public void updateinto(EmpDetails empDetails){
		try{
			con=dataSource.getConnection();
			psmt = con.prepareStatement(UPDATEQUERY);
			psmt.setString(1, empDetails.getEmail());
			psmt.setString(2, empDetails.getHobby());
			psmt.setString(3, empDetails.getCountry());
			psmt.setString(4, empDetails.getName());
			System.out.println("from dao updated success");
		}
		catch(SQLException e){
			LOG.error(e.getMessage());
		}

	}
	
	//this method is responsible to fetch the data from the database
	public void view(){
		try{
			con=dataSource.getConnection();
			psmt = con.prepareStatement(VIEWQUERY);
			rs=psmt.executeQuery();
			while(rs.next()){
				
				empresult.setName(rs.getString("name"));
				empresult.setEmail(rs.getString("emailid"));
				empresult.setHobby(rs.getString("hobby"));
				empresult.setCountry(rs.getString("country"));
				System.out.println("name:"+rs.getString("name"));
				System.out.println("email"+rs.getString("emailid"));
				System.out.println("hobby"+rs.getString("hobby"));
				System.out.println("country"+rs.getString("country"));
				}
		}
			catch (SQLException e) {
				LOG.error(e.getMessage());
			}
		
	}
	
	
	
}
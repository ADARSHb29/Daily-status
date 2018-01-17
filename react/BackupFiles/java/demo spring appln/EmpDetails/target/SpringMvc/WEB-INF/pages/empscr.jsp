<%-- <%@page import="com.empdetails.bo.EmpDetailsBO"%>
<%  
EmpDetailsBO empbo=new EmpDetailsBO();
if(empbo.getActionName().equalsIgnoreCase("insert")){
int status = EmpController.addUser(obj);  

if(status>0)  
out.print("User Details Successfully Added");  
}else if(obj.getActionName().equalsIgnoreCase("Update")){
int status = RegisterDao.updateUser(obj);

if(status>0)  
out.print("User Details Successfully Updated");  
}else if(obj.getActionName().equalsIgnoreCase("Delete")){
int status = RegisterDao.deleteUser(obj);

if(status>0)
out.print("User Details Successfully Deleted");  
}
%>
 --%>
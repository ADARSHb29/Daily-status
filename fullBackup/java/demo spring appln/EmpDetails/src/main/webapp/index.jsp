<html>
<head>
<script type="text/javascript">
function myData(){
	
	//empDetailsBO
	var empDetails ={empDetailsBO:{name:document.getElementById('name').value,hobby:document.getElementById('hobby').value,email:document.getElementById('email').value,country:document.getElementById('country').value}}
    console.log(empDetails)
	var http = new XMLHttpRequest();
	var url = "http://localhost:8080/EmpDetails/test/insert";
	//http.open("GET", url);
	//http.send()
	http.open("POST", url,true);
	
	http.send(JSON.stringify(empDetails));
	
}


</script>

</head>

<body>

<table>

<tr>
      <td>name<input type="text" id="name" name="name" /></td>
</tr> 

<tr>
     <td>hobby<input type="text" id="hobby" name="hobby" /></td>
</tr>

<tr>

<td>email<input type="text" id="email" name="email"/></td>
</tr>

<tr>
     <td>country<input type="text" id="country" name="country" /></td>
</tr>

 <tr>
             
             <td><button  onclick="myData()"value="insert"/>insert</button></td>
 </tr>
 
 <tr>
            
             <td><input type="submit" value="delete"/></td>
 </tr>
 
 <tr>
            
             <td><input type="submit" value="view"/></td>
 </tr>
 
 <tr>
             
             <td><input type="submit" value="update"/></td>
 </tr>
 
</table>

</body>

</html>

<!DOCTYPE html>
<html>
<head>
	<title>ADMIN</title>

</head>
<body>

   @include('..NavBar')
   <h3> Report List </h3>

	<form method="post">
      @csrf
      <table class="table">
         <tr>
            <td>Old Password: </td>
            <td><input name="oPass"/> </td>
         </tr>
         <tr>
            <td>New Password: </td>
            <td><input type="text" name="nPass"/> </td>
         </tr>
         <tr>
            <td> </td>

            <td>
               <p>{{$msg}}</p>
               <input type="submit" value="SUBMIT"/> 
            </td>
         </tr>
      </table>
	</form>
</body>
</html>
<!DOCTYPE html>
<html>
<head>
	<title>Create user</title>
     <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>
</head>
<body>
     @include('.NavBar')
     <br/>
     <h3> User Details </h3>
     

	<form method="post">
          <p>{{$msg}}</p>
          <input placeholder="ID" name="ID"/>
          <input type="submit"  name="create" value="Create" action class="btn btn-primary"/>
          <a href=""></a>
	</form>
</body>
</html>
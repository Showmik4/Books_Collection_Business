<!DOCTYPE html>
<html>
<head>
	<title>Create user</title>
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
     <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>
</head>
<body>
	@include('..NavBar2')
{{-- @include('NavBar') --}}
<h3> Log In</h3>

<form method="post" >
		@csrf
	<table class="table"  >
		<tr>
			<td>Email</td>
			<td><input type="text" name="Email"></td>
		</tr>
      <tr>
			<td>Passwrod </td>
			<td><input type="password" name="Password"></td>
		</tr>
      <tr>
			<td style="color: red;">{{$msg}}</td>
			<td><input type="submit" name="submit"></td>
		</tr>
	</table>
	</form>
</body>
</html>
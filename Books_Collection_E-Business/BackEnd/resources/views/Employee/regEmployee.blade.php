<!DOCTYPE html>
<html>
<head>
	<title>Create user</title>
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
     <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>
</head>
<body>
@include('..NavBar')
<h3> Create New User</h3>

<p style="color:red;">{{$msg}}</p>
<form method="post" enctype="multipart/form-data">
		@csrf
	<table class="table"  >
		<tr>
			<td>Name</td>
			<td><input type="text" name="Name" value="{{old('Name')}}" ></td>
		</tr>
		<tr>
			<td>Address</td>
			<td><input type="text" name="Address" value="{{old('Address')}}" ></td>
		</tr>
		<tr>
			<td>Email</td>
			<td><input type="text" name="Email" value="{{old('Email')}}" ></td>
		</tr>
     <tr>
			<td>DOB</td>
			<td><input type="date" name="DOB" value="{{old('DOB')}}"></td>
		</tr>
		 <tr>
			<td>Salary</td>
			<td><input name="Amount" type="number" min='0' value="{{old('number')}}"></td>
		</tr>
		<tr>
			<td>Profile Pic</td>
			<td><input type="file" name="image" value="{{old('image')}}"></td>
		</tr>
		
     <tr>
			<td>Rank</td>
			<td>
					<select  name="Rank">
							<option  name="Admin">Admin</option>
							<option  name="Moderator">Moderator</option>
					<select>
         </td>
		</tr>
		<tr>
			<td></td>
			<td><input type="submit" name="create" value="Create"></td>
		</tr>
	</table>






	@foreach ($errors->all() as $error)
	<li>{{ $error }}</li>
@endforeach



	</form>
</body>
</html>
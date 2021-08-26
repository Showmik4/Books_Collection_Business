<!DOCTYPE html>
<html>
<head>
	<title>Print</title>
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
     <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>
</head>
<body>
{{-- @include('..NavBar') --}}
{{-- <h3> New User</h3> --}}

<form method="post">
		@csrf
	<table class="table">
		<h3>Welcome!</h3>
		@foreach ($usersInfo as $usersInfo)
			<tr>
				<td></td>
				<td><img src="/upload/{{$usersInfo['ProPic']}}" alt="ProPic+" width="180" height="200"></td>
				{{-- 	<td><img src="/upload/wp9319391-battlefield-2042-wallpapers.jpg" alt="ProPic+" width="500" height="600"></td> --}}
			</tr>
			<tr>
				<td style="font-weight: bolder;">Name</td>
				<td style="font-weight: bolder;">{{$usersInfo['Name']}}</td>
			</tr>
			<tr>
				<td style="font-weight: bolder;">Password</td>
				<td style="font-weight: bolder;">{{$usersInfo['Password']}}</td>
			</tr>
			<tr>
				<td>Address</td>
				<td>{{$usersInfo['Address']}}</td>
			</tr>
			<tr>
				<td>DOB</td>
				<td>{{$usersInfo['DOB']}}</td>
			</tr>
			<tr>
				<td>Email</td>
				<td>{{$usersInfo['Email']}}</td>
			</tr>
		<tr>
				<td>Rank</td>
				<td>{{$usersInfo['Rank']}}</td>
			</tr>
			<tr>
				<td></td>
				<td><input type="submit" name="create" value="PRINT"></td>
		</tr>
		@endforeach
	</table>
	</form>
</body>
</html>
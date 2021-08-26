<!DOCTYPE html>
<html>
<head>
   <link href="{{ asset('/css/style.css') }}" rel="stylesheet">
</head>
<body>
	@include('..NavBar2')

<h3>Contact Us</h3>

<form method="post" >
		@csrf
   <p>{{$msg}}</p>
	<table class="table"  >
		<tr>
			<td>Email</td>
			<td><input type="text" name="Email" required></td>
		</tr>
      <tr>
			<td>Name </td>
			<td><input type="name" name="Name" required></td>
		</tr>
      <tr>
			<td>Massage </td>
			<td><input type="text" name="Msg" required></td>
		</tr>
      <tr>
			<td><input type="submit" name="submit"></td>
		</tr>
	</table>
	</form>
</body>
</html>
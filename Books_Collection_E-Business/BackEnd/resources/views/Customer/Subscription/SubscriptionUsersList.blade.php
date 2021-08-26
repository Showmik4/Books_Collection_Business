<!DOCTYPE html>
<html>
<head>
	<title>ADMIN</title>
</head>
<body>

     @include('..NavBar')

     <h3>Subscription Users List</h3>
   
     <br/>
   <span>Show User List of : </span>
    <a href="/user/subscription/list/all"><button type="button" class="btn btn-outline-primary">ALL</button></a> 
	 <a href="/user/subscription/list/premium"><button type="button" class="btn btn-outline-dark">Premium</button></a>  
    <a href="/user/subscription/list/standard"><button type="button" class="btn btn-outline-info">Standard</button></a>

    <br/>
    <br/>
    <form method="get">
     <table class="table">
          <tr>
               <th>Name</th>
               <th>Email </th>
               <th>DOB</th>
               <th>Premium</th>
               <th>Action</th>
          </tr>
          @foreach ($usersList as $user)
               <tr>
                    <td>{{$user['Name']}}</td>
                    <td>{{$user['Email']}}</td>
                    <td>{{$user['DOB']}}</td>
                    <td>{{$user['Premium']}}</td>
                    <td><a href="/reportList/{{$user['ID']}}">More</a></td>
               </tr>
          @endforeach
     </table>
     </body>
	</form>
</body>
</html>
<!DOCTYPE html>
<html>
<head>
	<title>Shop List</title>
    
</head>
<body>
@include('..NavBar')

   <table class="table">
      <tr>
         <th>#ID</th>
         <th>Shop Name</th>
         <th>Status</th>
         <th>Action</th>
      </tr>
      @foreach ($shopList as $user)
         <tr>
               <td>{{$user['Shop_id']}}</td>
               <td>{{$user['Shop_Name']}}</td>
               <td>{{$user['Verified_Status']}}</td>
               <td><a href="/shop/details/{{$user['Shop_id']}}/{{$user['Shop_Licence']}}">More</a></td>
         </tr>
      @endforeach
   </table>

</body>
</html>
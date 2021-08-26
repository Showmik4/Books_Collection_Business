<!DOCTYPE html>
<html>
<head>
<title>Shop Details</title>
</head>
<body>
   @include('.NavBar')
   <br/>
   <h2> User Details </h2>
   <br/>
<form method="post">
   <h5>Shop Info</h5>
   <br/>
   <table class="table">
         <tr>
            <th>Shop_Name</th>
            <th>Shopper_Nam</th>
            <th>Shop_Licence</th>
            <th>Shop_Address</th>
            <th>Verified_Status</th>
            <th>Phone</th>
            <th>Action</th>
         </tr>
         @foreach ($shop_info as $user)
            <tr>
               <td>{{$user['Shop_Name']}}</td>
               <td>{{$user['Shopper_Name']}}</td>
               <td>{{$user['Shop_Licence']}}</td>
               <td>{{$user['Shop_Address']}}</td>
               <td>{{$user['Verified_Status']}}</td>
               <td>{{$user['Phone_No']}}</td>
               @if($msg == '')
                  <td><input type="submit" value="Verify"/></td>
               @else
                  <td><input type="submit" value="Verify" disabled/></td>
               @endif
            </tr>
         @endforeach
   </table>

<br/>   
   <h5>Match Found With Licence</h5>
   <br/>
   @if($msg == '')
      <table class="table">
         <tr>
            <th>Shop_Name</th>
            <th>Shopper_Nam</th>
            <th>Shop_Licence</th>
            <th>Shop_Address</th>
         </tr>
         @foreach ($shop_licence as $user)
            <tr>
               <td>{{$user['Shop_Name']}}</td>
               <td>{{$user['Shopper_Name']}}</td>
               <td>{{$user['Shop_Licence']}}</td>
               <td>{{$user['Shop_Address']}}</td>
            </tr>
         
         @endforeach
      </table>

   @else
   <h5 style="color:red;">{{$msg}}</h5>

   @endif



   
</form>
</body>
</html>
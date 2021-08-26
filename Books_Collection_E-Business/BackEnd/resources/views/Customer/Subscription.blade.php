<!DOCTYPE html>
<html>
<head>
	<title>ADMIN</title>
   <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
   <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>
   <link rel="stylesheet" type="text/css" href="{{ asset('css/style.css') }}" >
</head>
<body>
     @include('.NavBar')
     <br/>
     <h3> Subscription Details </h3>

   

	<form method="post">
      <p>{{$msg}}</p>
     <table class="table" id="PageData">
          <tr>
             <td>
               <table id="SubscriptionBox">
                  <tr>
                     <td><h4>Standard</h4></td>
                     <td></td>
                  </tr>
                  <tr>
                     <td>Price(Yearly)</td>
                     <td><input name="sPrice" value='{{$subscriptionS['sPrice']}}'/'></td>
                  </tr>
                  <tr>
                     <td>Category</td>
                     <td><input name="sCategory" value='{{$subscriptionS['sCategory']}}'/></td>
                  </tr>
                  <tr>
                     <td>Total Upload Number</td>
                     <td><input name="sUploadNumber" value='{{$subscriptionS['sUploadNumber']}}'/></td>
                  </tr>
               </table>
             </td>
             <td>
               <table id="SubscriptionBox">
                  <tr>
                     <td><h4>Premium </h4></td>
                     <td></td>
                  </tr>
                  <tr>
                     <td>Price(Yearly)</td>
                     <td><input name="sPrice" value='{{$subscriptionP['sPrice']}}'/></td>
                  </tr>
                  <tr>
                     <td>Category</td>
                     <td><input name="sCategory" value='{{$subscriptionP['sCategory']}}'/></td>
                  </tr>
                  <tr>
                     <td>Total Upload Number</td>
                     <td><input name="sUploadNumber" value='{{$subscriptionP['sUploadNumber']}}'/></td>
                  </tr>
               </table>
             </td>
          </tr>
   </table>



   <input type="submit" name="submit" class="btn btn-danger"></input>
	</form>
</body>
</html>
<!DOCTYPE html>
<html>
<head>
	<title>ADMIN</title>
</head>
<body>
     @include('.NavBar')
     <br/>
     <h3> User Details </h3>
     
	<form method="get">
     <table class="table">
          @foreach ($usersInfo as $user)
          <tr>
               <th>Name</th>
               <th>{{$user['Name']}}</th>
          </tr>
          <tr>
               <th>Email</th>
               <th>{{$user['Email']}}</th>
          </tr>
          <tr>
               <th>DOB</th>
               <th>{{$user['DOB']}}</th>
          </tr>
          <tr>
               <th>BanStatus</th>
               <th>{{$user['BanStatus']}}</th>
          </tr>
          <tr>
               <th></th>
               <th> 
               @if($user['BanStatus'] == 'true')
                    <a href="/banAccount/true/{{$user['ID']}}">
                         <button type="button" class="btn btn-warning">
                              UNBAN
                         </button> 
                    </a> 
               
               @else
                    <a href="/banAccount/false/{{$user['ID']}}">
                         <button type="button" class="btn btn-danger">
                              BAN
                         </button> 
                    </a> 
               
               @endif
               </th>
          </tr>
          @endforeach
     </table>


     <h2>Reports List</h2>
     <br/>
     <table class="table">
          <tr>
               <th>GotRepotedID</th>
               <th>Reporter</th>
               <th>Text</th>
          </tr>
          @foreach ($reports as $user)
               <tr>
                    <td>{{$user['gotReported']}}</td>
                    <td>{{$user['reporter']}}</td>
                    <td>{{$user['text']}}</td>
                    
               </tr>
          @endforeach
     </table>


     
	</form>
</body>
</html>
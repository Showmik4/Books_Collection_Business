import React,{useEffect,useState} from 'react';
import {Route,Switch,useHistory,Redirect} from 'react-router-dom';
import Classes from './App.css';
import axios from './hoc/auxx';
import NavBar from './components/navBar';
import HomeNavBar from './components/homeNavbar';
import NavBarModerator from './components/navBarModerator';

import EmployeeList from './components/employeeList';
import EmployeeSalaryList from './components/employeeSalaryList';
import EchoStat from './components/earningStatics';
import EmployeeAdd from './components/empoyeeAdd';
import ReportList from './components/reportList';
import UserInfo from './components/userInfo';
import PrintEmployeeInfo from './components/printEmployeeInfo';
import ShopList from './components/shopList';
import ShopInfo from './components/shopInfo';
import PieChart from './components/pieChart';
import SubscriptionUserList from './components/subscriptionUserList';
import ContactUsList from './components/contactUsList';
import AccessDenied from './components/accessDenied';
import ChattingPage from './components/chattingPage';
import LoginHistory from './components/loginHistory';

import SingleBook from './components/laravel_project/Books/SingleBook';


import ContactUs from './components/contactUs';
import BookList from './components/bookList';
import Login from './components/loginPage';

const App=()=> {

  const history = useHistory();
  const [check,setCheck]=useState(true);

  useEffect(()=>{
    axios.post('/verify',{
      Email:localStorage.getItem('Email'),
      ID:localStorage.getItem('ID'),
      Rank:localStorage.getItem('Rank')
    })
      .then(r=>{
        
          if(r.data!='OK'){
            localStorage.removeItem('Email');
            localStorage.removeItem('Rank');
            localStorage.removeItem('ID');
            localStorage.removeItem('AccountvaVlidity');

           // history.push('/ReportList');

            //console.log(r.data,'dd');
            setCheck(false);
            //window.location.reload();
          }
      })
  },[]);

  return (
    <div className={Classes.App}>

    
   
        {localStorage.getItem('Email')==null && localStorage.getItem('AccountvaVlidity')!=true || !check? 
          <div>
            <HomeNavBar/>
            <Switch>
                <Route path="/Login" component={Login}/>
                <Route path="/BookList" component={BookList}/>
                <Route path="/ContactUs" component={ContactUs}/>
                <Route path="/BookInfo/:id" component={SingleBook}/>
                <Redirect to="/Login"/>
            </Switch>
          </div>
          :
          localStorage.getItem('Rank')=='Admin'?
          <div>
            <NavBar/>
            <Switch>
              <Route path="/EmployeeSalaryList" component={EmployeeSalaryList}/>
              <Route path="/EmployeeList" component={EmployeeList}/>
              <Route path="/EchoStatics" component={EchoStat}/>
              <Route path="/EmployeeAdd" component={EmployeeAdd}/>
              <Route path="/ReportList" component={ReportList}/>
              <Route path="/UserInfo/:id" component={UserInfo}/>
              <Route path="/PrintEmployeeInfo/:id" component={PrintEmployeeInfo}/>
              <Route path="/ShopList" component={ShopList}/>
              <Route path="/ShopInfo/:shopID" component={ShopInfo}/>
              <Route path="/PieChart" component={PieChart}/>
              <Route path="/SubscriptionUserList" component={SubscriptionUserList}/>
              <Route path="/BookList" component={BookList}/>
              <Route path="/ContactUsList" component={ContactUsList}/>
              <Route path="/ChattingPage" component={ChattingPage}/>
              <Route path="/LoginHistory" component={LoginHistory}/>
              <Redirect to="/BookList"/>
            </Switch>
          </div>

          :
          <div>
            <NavBarModerator/>
            <Switch>
          
              <Route path="/BookList" component={BookList}/>
              <Route path="/EchoStatics" component={EchoStat}/>
              <Route path="/ReportList" component={ReportList}/>
              <Route path="/UserInfo/:id" component={UserInfo}/>
              <Route path="/PrintEmployeeInfo/:id" component={PrintEmployeeInfo}/>
              <Route path="/ShopList" component={ShopList}/>
              <Route path="/ShopInfo/:shopID" component={ShopInfo}/>
              <Route path="/PieChart" component={PieChart}/>
              <Route path="/SubscriptionUserList" component={SubscriptionUserList}/>
              <Route path="/ContactUsList" component={ContactUsList}/>
              <Route path="/AccessDenied" component={AccessDenied}/>
              <Route path="/ChattingPage" component={ChattingPage}/>
              <Route path="/LoginHistory" component={LoginHistory}/>
              <Redirect to="/BookList"/>
            </Switch>
          </div>
      
      }


    </div>
  );
}

export default App;

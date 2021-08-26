import React,{useState,useEffect} from 'react';
import Chart from "react-google-charts";
import Classes from './components.css';
import axios  from '../hoc/auxx';

const PieChart=()=> {

   const [data,setData]=useState([]);
   const [msg,setMsg]=useState('');

   useEffect(() => {
      loadData();

   }, []);


   const loadData=()=>{
      axios.get('/user/subscription/pieChart')
         .then(r=>{
            console.log(r.data);
            setData(r.data);
         })
         .catch(e=>{
            console.log(e);
         })
   }




  return (
    <div>
      
      <h2>Charts</h2>
      <br/>
      <Chart
         style={{marginLeft:'auto',marginRight:'auto'}}
         width={'500px'}
         height={'300px'}
         chartType="PieChart"
         loader={<div>Acount Types</div>}
         data={[
            ['Task', 'Hours per Day'],
            ['Standerd', data.Standerd],
            ['Premium', data.Premium],
         ]}
         options={{
            title: 'Acount Types',
         }}
         rootProps={{ 'data-testid': '1' }}
   />

      <Chart
         style={{marginLeft:'auto',marginRight:'auto'}}
         width={'500px'}
         height={'300px'}
         chartType="BarChart"
         loader={<div>Ban vs Unban Accounts</div>}
         data={[
            [
               'Element',
               'Density',
               { role: 'style' },
               {
               sourceColumn: 0,
               role: 'annotation',
               type: 'string',
               calc: 'stringify',
               },
            ],
            ['NotBanned', data.NotBanned, '#b87333', null],
            ['Banned', data.Banned, 'silver', null],
         ]}
         options={{
            title: 'Ban vs Unban Accounts',
            width: 600,
            height: 400,
            bar: { groupWidth: '95%' },
            legend: { position: 'none' },
         }}
         // For tests
         rootProps={{ 'data-testid': '6' }}
      />

    </div>
  );
}

export default PieChart;

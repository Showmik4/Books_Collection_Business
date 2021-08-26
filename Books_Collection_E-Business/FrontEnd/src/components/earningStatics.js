import React,{useState,useEffect} from 'react';
import Chart from "react-google-charts";
import Classes from './components.css';
import axios  from '../hoc/auxx';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const ChartEarning=()=> {

   const [data,setData]=useState([]);
   const [search,setSearch]=useState('');
   const [msg,setMsg]=useState('');


   useEffect(() => {
      loadData(2020);

   }, []);


   const loadData=(year)=>{
      axios.get('/user/economic/'+year)
         .then(r=>{
            console.log(r.data);
            setData(r.data[0]);
         })
         .catch(e=>{
            console.log(e);
         })
   }



 const _exportPdf = () => {

     html2canvas(document.querySelector("#capture")).then(canvas => {
        document.body.appendChild(canvas);  // if you want see your screenshot in body.
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'PNG', 10, 5, 200, 160); //left,top,width,height
        pdf.save("download.pdf"); 
    });

 }

  return (
    <div>
      
      <h5>Filter By Years</h5>
      <hr/>
      <button onClick={()=>loadData(2020)}>2020</button>
      <button onClick={()=>loadData(2021)}>2021</button>
      <button onClick={()=>loadData(2022)}>2022</button>
      <button onClick={()=>_exportPdf()} style={{  float:'right',clear:'right'}}>PRINT</button>
      <hr/>
      <br/> <br/>

      <div id='capture'>
      <h3>Earning Dara</h3>
      <table width='100%'>
         <tr>
            <th>Year</th>
            <th>January</th>
            <th>February</th>
            <th>March</th>
            <th>April</th>
            <th>May</th>
            <th>June</th>
            <th>July</th>
            <th>August</th>
            <th>September</th>
            <th>October</th>
         </tr>
         <tr>
            <td>{data.Year}</td>
            <td>{data.January}</td>
            <td>{data.February}</td>
            <td>{data.March}</td>
            <td>{data.April}</td>
            <td>{data.May}</td>
            <td>{data.June}</td>
            <td>{data.July}</td>
            <td>{data.August}</td>
            <td>{data.September}</td>
            <td>{data.October}</td>
         </tr>

      </table>


      <hr/>
      <Chart
         style={{marginLeft:'auto',marginRight:'auto'}}
         width={'1100px'}
         height={'500px'}
         chartType="ColumnChart"
         loader={<div>Loading Chart</div>}
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
            ['January',Number(data.January), '#b87333', null],
            ['February',Number(data.February), 'silver', null],
            ['March',Number(data.March), '#b87333', null],
            ['Copper',Number(data.January), 'gold', null],
            ['April',Number(data.April), '#e5e4e2', null],
            ['May',Number(data.May), '#229954', null],
            ['June',Number(data.June), '#AF601A', null],
            ['July',Number(data.July), '#b87333', null],
            ['August',Number(data.August), '#2874A6', null],
            ['September',Number(data.September), '#6E2C00', null],
            ['October',Number(data.October), '#F1978A', null],
         ]}
         options={{
            title: 'Earning By Months',
            width: 1000,
            height: 400,
            bar: { groupWidth: '85%' },
            legend: { position: 'none' },
         }}
         // For tests
         rootProps={{ 'data-testid': '6' }}
      />


      <Chart
         style={{marginLeft:'auto',marginRight:'auto'}}
         width={'1800px'}
         height={'500px'}

         chartType="LineChart"
         loader={<div>Loading Chart</div>}
         data={[
            ['x', 'Earning'],
            [0, Number(data.January)],
            [1, Number(data.February)],
            [2, Number(data.March)],
            [3, Number(data.April)],
            [4, Number(data.May)],
            [5, Number(data.June)],
            [6, Number(data.July)],
            [7, Number(data.August)],
            [8, Number(data.September)],
            [9, Number(data.October)],
         ]}
         options={{
            hAxis: {
               title: 'Time',
            },
            vAxis: {
               title: 'Earning',
            },
         }}
         rootProps={{ 'data-testid': '1' }}
      />
      
   </div>
    </div>
  );
}

export default ChartEarning;

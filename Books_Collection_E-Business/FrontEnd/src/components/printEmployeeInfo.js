import React, { useRef ,useEffect} from "react";
import { render } from "react-dom";
import { useReactToPrint } from "react-to-print";
import classes from './components.css';
import { useParams } from 'react-router';
//import {withRouter,Redirect,useParams} from 'react-router-dom';
import axios from '../hoc/auxx';
class ComponentToPrint extends React.Component {

    // const [allData,setAllData]=useState([]);
    // const [allDataProduct,setAllDataProduct]=useState([]);
    // const [prmoCodeOffer,setPrmoCodeOffert]=useState(0);
    //  {category} = useParams();
    state={
        allData:[],
        currnetDate: new Date().getDate()+'/'+new Date().getMonth()+1+'/'+new Date().getFullYear()
        
    
    }

    exportPdf = () => {
        this.pageData();
    }


    pageData=()=>{

        axios.get('/userInfoLoad/'+this.props.ID).then(r=>{

         this.setState({allData:r.data.userInfo[0]})
         
         console.log(this.props,'allDataProduct');
         
      })
   }

   setupBeforeUnloadListener = () => {
      window.addEventListener("beforeunload", (ev) => 
      {  
         ev.preventDefault();
         return ev.returnValue = 'Are you sure you want to close?';
      });
   };

   componentDidMount() {
      
      this.pageData();
      this.setupBeforeUnloadListener();
   
   }

   componentDidUpdate(){
      this.setupBeforeUnloadListener();
   }


render() {
   return (
      <div  id="capture"> 
      <h2>WELCOME!</h2>
      <table className={classes.table}>
         <tr style={{backgroundColor:'#5d5fc7',color:'white'}}>
               <td>User ID</td>
               <td>{this.state.allData.ID}</td>
               <td>Password </td>
               <td>{this.state.allData.Password}</td>
         </tr>
         <tr>
               <td>Name </td>
               <td>{this.state.allData.Name}</td>
               <td>Rank </td>
               <td>{this.state.allData.Rank}</td>
         </tr>
         <tr>
               <td>DOB </td>
               <td>{this.state.allData.DOB}</td>
               <td>Join Date </td>
               <td>{this.state.currnetDate}</td>
         </tr>

      </table>


   </div>
   );
   }
}

const PrintToPDFemployeeInfo = () => {
    const {id} = useParams();
    //const {orderedid1} = useParams();
    //const orderedid=5;
    const componentRef = useRef();
    useEffect(() => {
        handlePrint();
    }, [])

    const handlePrint = useReactToPrint({
    content: () => componentRef.current,
});


return (
    <div>
        <ComponentToPrint ID={id} ref={componentRef} />
        <br/>
        <button onClick={handlePrint}>Print this out!</button>
    </div>
    );
};

//render(<PrintToPDF />, document.querySelector("#root"))

export default PrintToPDFemployeeInfo; 
import React, {useState} from "react";


function Add_Book(){
    const [Name,setName]=useState("");
    const [CategoryId,setCategoryId]=useState("");
    const [WriterId,setWriterId]=useState("");
    const [Publisher,setPublisher]=useState("");
    const [Quantity,setQuantity]=useState("");
    const [SellerId,setSellerId]=useState("");
    const [Price,setPrice]=useState("");
    const [BookCondition,setBookCondition]=useState("");
    const [Language,setLanguage]=useState("");
    const [Rating,setRating]=useState("");
    const [BookSampleImage1,setFile]=useState("");
    
    async function  addbook() {
        console.warn(Name,CategoryId,WriterId,Publisher,Quantity,SellerId,Price,BookCondition,Language,Rating,BookSampleImage1);
        const formdata=new FormData();
        formdata.append('Name',Name);
        formdata.append('CategoryId',CategoryId);
        formdata.append('WriterId',WriterId);
        formdata.append('Publisher',Publisher);
        formdata.append('Quantity',Quantity);
        formdata.append('SellerId',SellerId);
        formdata.append('Price',Price);
        formdata.append('BookCondition',BookCondition);
        formdata.append('Language',Language);
        formdata.append('Rating',Rating);
        formdata.append('BookSampleImage1',BookSampleImage1);
        
     let result=   await  fetch("http://127.0.0.1:8000/api/add-book",{
            method:'POST',
            body:formdata
           
          });
          
          alert("Data Saved")
    }
    return(

        <div>
            <div className='col-sm-6 offset-sm-3'>
                <input type="text" className="form-control" onChange={(e)=>setName(e.target.Value)}  placeholder="Name"/><br />
                <input type="text" className="form-control" onChange={(e)=>setCategoryId(e.target.Value)}  placeholder="CategoryId"/><br />
                <input type="text" className="form-control" onChange={(e)=>setWriterId(e.target.Value)}  placeholder="WriterId"/><br />
                <input type="text" className="form-control" onChange={(e)=>setPublisher(e.target.Value)}  placeholder="Publisher"/><br />
                <input type="text" className="form-control" onChange={(e)=>setQuantity(e.target.Value)}  placeholder="Quantity"/><br />
                <input type="text" className="form-control" onChange={(e)=>setSellerId(e.target.Value)}  placeholder="SellerId"/><br />
                <input type="text" className="form-control" onChange={(e)=>setPrice(e.target.Value)}  placeholder="Price"/><br />
                <input type="text" className="form-control" onChange={(e)=>setBookCondition(e.target.Value)}  placeholder="BookCondition"/><br />
                <input type="text" className="form-control" onChange={(e)=>setLanguage(e.target.Value)}  placeholder="Language"/><br />
                <input type="text" className="form-control" onChange={(e)=>setRating(e.target.Value)}  placeholder="Rating"/><br />
                <input type="file" className="form-control" onChange={(e)=>setFile(e.target.files[0])}  placeholder="BookSampleImage1"/><br />
                <button onClick={addbook}   className="btn btn-primary">Add Book</button>

            </div>
        </div>
    )
}

export default Add_Book
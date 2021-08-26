
import { useState } from 'react'
import { Table } from "react-bootstrap";
import Header from '../Home/Header';
function SearchBook() {
    const [data, setData] = useState([]);
    async function Search(key) {
        console.warn(key);
        let result = await fetch("http://127.0.0.1:8000/api/search/" + key);
        result = await result.json();
        console.warn(result);
        setData(result)
    }
    return (
        <div>
            <Header/>
            
            <div className="col-sm-6 offset-sm-3">
                <h1>Search Book</h1>
                <br />
                <input type="text" onChange={(e) => Search(e.target.value)} className="form-control" placeholder="Dearch Book" />
                <Table>
                    <tr>
                        <th>ID</th> 
                        <th>Name</th>
                     
                        <th>Quantity</th>
                      
                        <th>Price</th>
                        <th>BookCondition</th>
                        <th>Language</th>
                        <th>Rating</th>
                        <th>SampleImage</th>

                    </tr>
                    {
                        data.map((item) =>
                            <tr>

                                <td >{item.Id}</td>
                                <td >{item.Name}</td>
                             
                                <td >{item.Quantity}</td>
                              
                                <td >{item.Price}</td>
                                <td >{item.BookCondition}</td>
                                <td >{item.Language}</td>
                                <td >{item.Rating}</td>
                                <td ><img src={`https://images-na.ssl-images-amazon.com/images/I/41BzGc2MBYS._SX329_BO1,204,203,200_.jpg`} width="50px" alt="Image" /></td>
                            </tr>


                        )

                    }

                </Table>
            </div>
        </div>

    )
}

export default SearchBook



import React, { Component } from 'react'
import Header from '../Home/Header'
import axios from 'axios';
import {Link} from 'react-router-dom';




export default class blog extends Component {

    state={
        Blog:[],
        loading:true,
    }
    async componentDidMount(){
      const res = await axios.get('http://127.0.0.1:8000/api/blogs'); 
       //console.log(res);
      if(res.data.status===200){
       // console.log(res.data.message);
        this.setState({
          Blog:res.data.Blog,
          loading:false,
        });
    }
      
   
    }
    render() {

        
        return (
            <>
            <Header/>
            <div>
  <div>
 
  <main className="my-5">
    <div className="container">
      {/*Section: Content*/}
      <section className="text-center">
        <h4 className="mb-5"><strong>Latest posts</strong></h4>
        <div className="row">
          <div className="col-lg-4 col-md-12 mb-4">
            <div className="card">
              <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                <img src="https://images-na.ssl-images-amazon.com/images/I/51UvPYjG+gS._SX258_BO1,204,203,200_.jpg" className="img-fluid" />
                <a href="#!">
                  <div className="mask" style={{backgroundColor: 'rgba(251, 251, 251, 0.15)'}} />
                </a>
              </div>
              <div className="card-body">
                <h5 className="card-title">Lorem</h5>
                <p className="card-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                </p>
                <a href="#!" className="btn btn-primary">Read</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card">
              <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                <img src="https://images-na.ssl-images-amazon.com/images/I/41BzGc2MBYS._SY291_BO1,204,203,200_QL40_FMwebp_.jpg" className="img-fluid" />
                <a href="#!">
                  <div className="mask" style={{backgroundColor: 'rgba(251, 251, 251, 0.15)'}} />
                </a>
              </div>
              <div className="card-body">
                <h5 className="card-title">Where can I get some?</h5>
                <p className="card-text">
                t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                </p>
                <a href="#!" className="btn btn-primary">Read</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card">
              <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                <img src="https://images-na.ssl-images-amazon.com/images/I/41XCj4P4sML._SX329_BO1,204,203,200_.jpg" className="img-fluid" />
                <a href="#!">
                  <div className="mask" style={{backgroundColor: 'rgba(251, 251, 251, 0.15)'}} />
                </a>
              </div>
              <div className="card-body">
                <h5 className="card-title">Post title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the bulk of the
                  card's content.
                </p>
                <a href="#!" className="btn btn-primary">Read</a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-12 mb-4">
            <div className="card">
              <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                <img src="https://mdbootstrap.com/img/new/standard/nature/002.jpg" className="img-fluid" />
                <a href="#!">
                  <div className="mask" style={{backgroundColor: 'rgba(251, 251, 251, 0.15)'}} />
                </a>
              </div>
              <div className="card-body">
                <h5 className="card-title">Post title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the bulk of the
                  card's content.
                </p>
                <a href="#!" className="btn btn-primary">Read</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card">
              <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                <img src="https://mdbootstrap.com/img/new/standard/nature/022.jpg" className="img-fluid" />
                <a href="#!">
                  <div className="mask" style={{backgroundColor: 'rgba(251, 251, 251, 0.15)'}} />
                </a>
              </div>
              <div className="card-body">
                <h5 className="card-title">Post title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the bulk of the
                  card's content.
                </p>
                <a href="#!" className="btn btn-primary">Read</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card">
              <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                <img src="https://mdbootstrap.com/img/new/standard/nature/035.jpg" className="img-fluid" />
                <a href="#!">
                  <div className="mask" style={{backgroundColor: 'rgba(251, 251, 251, 0.15)'}} />
                </a>
              </div>
              <div className="card-body">
                <h5 className="card-title">Post title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the bulk of the
                  card's content.
                </p>
                <a href="#!" className="btn btn-primary">Read</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  </main>
 
</div>

            </div>
            
            </>
        
        )
        
    }
    }
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
function Header() {
    let user = JSON.parse(localStorage.getItem('user-info'))
    //console.warn(user);
    const history = useHistory();
    function logout() {
        localStorage.clear();
        history.push('/login')
    }
    return (

        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">Navbar</Navbar.Brand>
                <Nav classname="mr-auto nav_bar_wrapper">

                    {
                        localStorage.getItem('user-info') ?
                            <>

                                <Link to={'/students'} className="btn btn-primary btn-sm float-end">Customer List </Link>
                                <Link to={'/catagory'} className="btn btn-primary btn-sm float-end">Catagory List </Link>
                                <Link to={'/owner'} className="btn btn-primary btn-sm float-end">Shop List</Link>


                                <Link to={'/books'} className="btn btn-primary btn-sm float-end">BookList</Link>
                                <Link to={'/search'} className="btn btn-primary btn-sm float-end">SearchBook</Link>

                                <Link to={'/bbooks'} className="btn btn-primary btn-sm float-end">BestSale</Link>
                                <Link to={'/blogs'} className="btn btn-primary btn-sm float-end">Blogs</Link>

                            </>
                            :
                            <>
                                <Link to={'/login'} className="btn btn-primary btn-sm float-end">Login</Link> <br />
                                <Link to={'/register'} className="btn btn-primary btn-sm float-end">Registration</Link>
                            </>
                    }








                </Nav>
                {localStorage.getItem('user-info') ?
                    <Nav>

                        <NavDropdown title={user && user.name}>
                            <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>

                        </NavDropdown>

                    </Nav>


                    : null
}
            </Navbar>
        </div>
    )



}

export default Header
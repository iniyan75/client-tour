import { Outlet, Link } from "react-router-dom";
import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "./modules/UserAuthContext";

const Layout = () => {
    

   

   

    return (
        <div>
            <nav class="navbar navbar-expand-sm sticky-top navbar-dark bg-secondary">
                <div class="container">
                    <a class="navbar-brand" href="#">Let's Explore</a>
                    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbar1">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbar1">
                        <ul class="navbar-nav w-100">
                            <li class="nav-item active">
                                <Link class="nav-link" to="/">Home</Link>
                            </li>


                            <li>
                                <a class="nav-link  ms-auto" href="#about">about</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#contact">contact</a>
                            </li>

                        </ul>

                    </div>
                    <div>
                        <Button   >

                            {!localStorage.getItem("password") ? <Login /> : <Logout />}

                        </Button>
                    </div>
                   
                </div>
            </nav>




            <Outlet />
        </div>
    )
};
function Login() {

    return (
       <button class="btn btn-primary" ><Link to="/login"   style={{textDecoration:"none",color:"white"}}> Login to explore </Link></button> 
    )
}
function Logout() {
    const { logOut, user } = useUserAuth();
    const navigate = useNavigate();
    const handleLogout = async () => {
        try {
            
            await logOut();
            localStorage.clear()
            window.location.replace("/")
            navigate("/");
            alert("LOGGED OUT SUCCESSFULLY")
        } catch (error) {
            console.log(error.message);
        }
    };
    return (
        <Button class="btn btn-danger" onClick={handleLogout}>
            Log out
        </Button>

    )
}

export default Layout;
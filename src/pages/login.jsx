import React from "react";
import Footer from "../components/footer";
import "../styles/login.css";

function Login () {
    return (
        <>
            <div className="container">
                <div className="container-login">
                    <div className="login">
                        <img className="avatar" src="https://st3.depositphotos.com/19428878/37137/v/450/depositphotos_371377450-stock-illustration-default-avatar-profile-image-vector.jpg" alt="logo" />
                        <h2>Incio de sesión</h2>
                        <form action="">
                            <input type="text" name="username" placeholder="Usuario" class="username"/>
                            <input type="password" name="passaword" placeholder="Contraseña" class="passaword"/>
                            <input id="submit" type="submit" value="Siguiente" className="submit" />
                        </form>
                        <p>¿Ha olvidado su usuario o contraseña?</p>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}
  
export default Login;
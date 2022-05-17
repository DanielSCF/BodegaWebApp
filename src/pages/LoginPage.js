import '../styles.css';

export default function LoginPage(){
    return (
        <div className="login-body">
            <div className="login">
                <div className="login-triangle"></div>

                <h2 className="login-header">Log in</h2>

                <form className="login-container">
                    <p><input type="text" id="i1" placeholder="Usuario" /></p>
                    <p><input type="password" id="i2" placeholder="Clave" /></p>
                    <p><input type="button" value="Log in"/></p>
                </form>
            </div>
        </div>
    );
}

import React from 'react';
import {  useHistory } from "react-router-dom";
import './styles.css'


export default function Login() {
    const history = useHistory();
  
    function handleLogin (){
        history.push('/processo');
    }
    return (


        <div className=" center" >


            <div className="cont">
                <div class="input-field ">
                    <h3 className="center">Login</h3>
                    <div class="input-field col s6">
                        <input id="email" type="email" class="validate "></input>
                        <label for="email">Email</label>
                    </div>
                    <div class="input-field col s6">
                        <input id="senha" type="password" class="validate"></input>
                        <label for="senha">Senha</label>
                        <a onClick={handleLogin} class="waves-effect waves-light btn">Entrar</a>
                    </div>
                </div>
            </div>

            <div className='svg'>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#00736D" fill-opacity="1" d="M0,32L0,160L36.9,160L36.9,96L73.8,96L73.8,256L110.8,256L110.8,160L147.7,160L147.7,64L184.6,64L184.6,256L221.5,256L221.5,256L258.5,256L258.5,224L295.4,224L295.4,32L332.3,32L332.3,128L369.2,128L369.2,288L406.2,288L406.2,192L443.1,192L443.1,64L480,64L480,224L516.9,224L516.9,320L553.8,320L553.8,192L590.8,192L590.8,32L627.7,32L627.7,64L664.6,64L664.6,256L701.5,256L701.5,32L738.5,32L738.5,288L775.4,288L775.4,64L812.3,64L812.3,288L849.2,288L849.2,160L886.2,160L886.2,224L923.1,224L923.1,256L960,256L960,192L996.9,192L996.9,192L1033.8,192L1033.8,32L1070.8,32L1070.8,320L1107.7,320L1107.7,224L1144.6,224L1144.6,0L1181.5,0L1181.5,64L1218.5,64L1218.5,160L1255.4,160L1255.4,0L1292.3,0L1292.3,96L1329.2,96L1329.2,288L1366.2,288L1366.2,256L1403.1,256L1403.1,32L1440,32L1440,320L1403.1,320L1403.1,320L1366.2,320L1366.2,320L1329.2,320L1329.2,320L1292.3,320L1292.3,320L1255.4,320L1255.4,320L1218.5,320L1218.5,320L1181.5,320L1181.5,320L1144.6,320L1144.6,320L1107.7,320L1107.7,320L1070.8,320L1070.8,320L1033.8,320L1033.8,320L996.9,320L996.9,320L960,320L960,320L923.1,320L923.1,320L886.2,320L886.2,320L849.2,320L849.2,320L812.3,320L812.3,320L775.4,320L775.4,320L738.5,320L738.5,320L701.5,320L701.5,320L664.6,320L664.6,320L627.7,320L627.7,320L590.8,320L590.8,320L553.8,320L553.8,320L516.9,320L516.9,320L480,320L480,320L443.1,320L443.1,320L406.2,320L406.2,320L369.2,320L369.2,320L332.3,320L332.3,320L295.4,320L295.4,320L258.5,320L258.5,320L221.5,320L221.5,320L184.6,320L184.6,320L147.7,320L147.7,320L110.8,320L110.8,320L73.8,320L73.8,320L36.9,320L36.9,320L0,320L0,320Z"></path>
                </svg>
            </div>
        </div>

    );
}

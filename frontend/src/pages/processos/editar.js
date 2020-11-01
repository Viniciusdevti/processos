import React, { useState, useEffect } from "react";
import {  useHistory } from "react-router-dom";
import './styles.css'
import api from "../services/api";
import Header from '../../Header'
export default function Editar() {



    const [processo, setProcesso] = useState([]);
    const [name, setName] = useState("");
    const [cep, setCep] = useState("");
    const [cidade, setCidade] = useState("");
    const [bairro, setBairro] = useState("");
    const [rua, setRua] = useState("");
    const [data, setdata] = useState("");
    const [numero, setNumero] = useState("");

    
    const history = useHistory();
    function retornar (){
        history.push('/processo');
    }

    useEffect(
        () => {

            // requisição para pegar os clientes e setar no usestage client.
            api.get("/processo").then((response) => {
                setProcesso(response.data);

            });
        }, [processo]);


        

    async function handleProcesso(e) {
        e.preventDefault();
        const dados = {
            data, "endereco": {
                "cep": cep,
                "bairro": bairro,
                "rua": rua,
                "cidade": cidade,
                "numero": numero
            },

            "pessoa": {
                "nome": name
            },
        }
        try {

            // requisição para passar os clientes e seus valores.
            await api.post('/processo', dados)
            alert(`Processo novo criado para o ${name}!`)
            clean()


        } catch (err) {
            alert('Erro ao cadastrar caso, tente novamente.')
        }
    }

    //limpar campos do inputs depois do cadastro
    function clean() {
        setName("")
        setCep("")
        setdata("")
    }



    return (

        <div>
  <Header></Header>

            <div class="brand-logo center ">
                <div>
                <h3>Editar  processos</h3>
                </div>
                <button   onClick={retornar}><i class="material-icons">assignment_return</i></button>
            </div>
            <div class="container">


                <form onSubmit={handleProcesso}>

                    <label>NOME DO SOLICITANTE</label>
                    <input
                        MAXLENGTH="70"
                        type="text"
                        max="100"
                        placeholder="Nome"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />

                    <label>CEP</label>
                    <input
                        onChange={(e) => setCep(e.target.value)}
                        placeholder="Ex: 75388669"
                        value={cep}
                        onChange={e => setCep(e.target.value)}
                    />

                    <div className="local">

                        <input
                            placeholder="Cidade"
                            value={cidade}
                            onChange={e => setCidade(e.target.value)}
                        />

                        <input
                            placeholder="Bairro"
                            value={bairro}
                            onChange={e => setBairro(e.target.value)}
                        />


                    </div>
                    <div className="local">

                        <input
                            placeholder="Rua"
                            value={rua}
                            onChange={e => setRua(e.target.value)}
                        />

                        <input
                            placeholder="Numero"
                            type="number"
                            onChange={e => setNumero(e.target.value)}
                        />


                    </div>


                    <label>DATA DO PROCESSO</label>
                    <input
                        type="date"
                        placeholder="(83) 99911-2233"
                        value={data}
                        onChange={e => setdata(e.target.value)}
                    />

                    <button class="waves-effect waves-light btn-small">Salvar<i class="material-icons left"></i></button>
                    
                </form>
                
               
            </div>

        </div>





    );
}


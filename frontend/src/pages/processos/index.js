import React, { useState, useEffect } from "react";

import './styles.css'
import api from "../services/api";
import apicep from '../services/apicep'

export default function Login() {



    const [client, setClient] = useState([]);
    const [name, setName] = useState("");
    const [cep, setCep] = useState("");
    const [cidade, setCidade] = useState("");
    const [bairro, setBairro] = useState("");
    const [rua, setRua] = useState("");
   
    const [data, setdata] = useState("");


    useEffect(
        () => {
          apicep.get(`${cep}/json`).then((response) => {
            setCidade(response.data.localidade)
            setBairro(response.data.bairro)
            setRua(response.data.logradouro)
            
            
          });
        });

    useEffect(
        () => {

            // requisição para pegar os clientes e setar no usestage client.
            api.get("client").then((response) => {
                setClient(response.data);
            });
        }, [client]);


    async function handleClient(e) {
        e.preventDefault();
        const data = { name, cep, data }
        try {

            // requisição para passar os clientes e seus valores.
            await api.post('client', data)
            alert(`Cliente ${name} cadastrado com sucesso`)
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


            <div class="brand-logo center ">
                <div>
                    <h3>Cadatro de processos</h3>
                </div>
            </div>
            <div class="container">


                <form onSubmit={handleClient}>

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
                        />

                        <input
                            placeholder="Bairro"
                            value={bairro}
                        />


                    </div>
                    <div className="local">

                        <input
                            placeholder="Rua"
                            value={rua}
                        />

                        <input
                            placeholder="Numero"
                        />


                    </div>


                    <label>DATA DO PROCESSO</label>
                    <input
                        type="date"
                        placeholder="(83) 99911-2233"
                        value={data}
                        onChange={e => setdata(e.target.value)}
                    />

                    <button class="waves-effect waves-light btn-small">Salvar<i class="material-icons left">save</i></button>

                </form>
                <table>

                    <thead >
                        {client.map((cliente) => (
                            <tr key={cliente.id}>

                                <th>Nome: {cliente.name}</th>
                                <th>cep: {cliente.cep}</th>
                                <th>dataefone: {cliente.data}</th>
                                <td>
                                    <button class="waves-effect btn-small blue darken-1"><i class="material-icons">create</i></button>
                                    <button class="waves-effect btn-small red darken-1"><i class="material-icons">delete_sweep</i></button>
                                </td>
                            </tr>

                        ))}
                    </thead>


                </table>

            </div>

        </div>





    );
}


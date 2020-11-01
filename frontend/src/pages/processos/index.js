import React, { useState, useEffect } from "react";
import {  useHistory } from "react-router-dom";
import './styles.css'
import api from "../services/api";
import apiCep from '../services/apiCep'

export default function Processo() {

 
    const history = useHistory();
    function handleEditar (){
        history.push('/editar');
    }

    const [processo, setProcesso] = useState([]);
    const [name, setName] = useState("");
    const [cep, setCep] = useState("");
    const [cidade, setCidade] = useState("");
    const [bairro, setBairro] = useState("");
    const [rua, setRua] = useState("");
    const [data, setdata] = useState("");
    const [numero, setNumero] = useState();

   
    function consultarCep(){
         
      
        
        apiCep.get(`${cep}/json`).then((response) => {
            setCidade(response.data.localidade)
            setBairro(response.data.bairro)
            setRua(response.data.logradouro)
        });
        } 
   



    useEffect(
        () => {

            // requisição para pegar os clientes e setar no usestage client.
            api.get("/processo").then((response) => {
                setProcesso(response.data);

            });
        },);


        async function handleDeleteProcesso(id) {
            try {
              await api.delete(`deletar/${id}`)
               
              
              setProcesso(processo.filter(processos=> processos.id !== id));
            } catch (err) {
              alert("Erro ao deletar o caso, tente novamente.");
              console.log(id);
            }
          }

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
        setRua("")
        setCidade("")
        setNumero(0)
        setBairro("")
    }



    return (

        <div>


            <div className="brand-logo center ">
                <div>
                    <h3>Cadatro de processos</h3>
                </div>
            </div>
            <div className="container">


                <form onSubmit={handleProcesso}>

                    <label>NOME DO SOLICITANTE</label>
                    <input
                        
                        type="text"
                        max="100"
                        placeholder="Nome"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        required
                    />
 <div className="local">
                   
                    <input
                        onChange={(e) => setCep(e.target.value)}
                        placeholder="Digite seu cep Ex: 75388669"
                        value={cep}
                        onChange={e => setCep(e.target.value)}
                        required
                    />
 <button className="waves-effect btn-small blue darken-1 Large" onClick={consultarCep}><i className="material-icons" >search</i></button>
 </div>
                    <div className="local">

                        <input
                            placeholder="Cidade"
                            value={cidade}
                            onChange={e => setCidade(e.target.value)}
                            required
                        />

                        <input
                            placeholder="Bairro"
                            value={bairro}
                            onChange={e => setBairro(e.target.value)}
                            required
                        />


                    </div>
                    <div className="local">

                        <input
                            placeholder="Rua"
                            value={rua}
                            onChange={e => setRua(e.target.value)}
                            required
                        />

                        <input
                            placeholder="Numero"
                           
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

                    <button className="waves-effect waves-light btn-small">Salvar</button>

                </form>
                <table>

                    <thead >
                        {processo.map((processos) => (
                            <tr key={processos.id}>
                                
                                <th> {processos.pessoa.nome}</th>
                                <th>  {processos.endereco.cidade}</th>
                                <th> rua(av) {processos.endereco.rua}</th>
                                <th> Número {processos.endereco.numero}</th>
                                <th>  {processos.endereco.cep}</th>
                                <th> {processos.data}</th>
                              
                                <td>  
                                    <button className="waves-effect btn-small blue darken-1" onClick={handleEditar}><i class="material-icons" >edit</i></button>
                                    <button className="waves-effect btn-small red darken-1"onClick={()=> handleDeleteProcesso(processos.id)}><i class="material-icons" >delete</i></button>
                                </td>
                            </tr>

                        ))}
                    </thead>


                </table>

            </div>

        </div>





    );
}


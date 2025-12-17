'use client'

import { useState } from "react";

export default function CadastroEndereco() {
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState({
    rua: "",
    bairro: "",
    cidade: "",
    uf: "",
  });
  const [mensagem, setMensagem] = useState("");

  function buscarCep() {
    if (cep.length !== 8) {
      setMensagem("CEP deve ter 8 números");
      return;
    }

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((response) => response.json())
      .then((data) => {
        if (data.erro) {
          setMensagem("CEP não encontrado");
          return;
        }

        setMensagem("");
        setEndereco({
          rua: data.logradouro,
          bairro: data.bairro,
          cidade: data.localidade,
          uf: data.uf,
        });
      })
      .catch(() => {
        setMensagem("Erro ao buscar o CEP");
      });
  }

  return (
    <div style={{ padding: "50px" }}>
      <h2>Cadastro de Endereço</h2>

      <input
        type="text"
        placeholder="CEP (somente números)"
        value={cep}
        onChange={(e) => setCep(e.target.value)}
      />

      <button onClick={buscarCep}>Buscar</button>

      <p>{mensagem}</p>

      <input type="text" placeholder="Rua" value={endereco.rua} />
      <br />
      <input type="text" placeholder="Bairro" value={endereco.bairro} />
      <br />
      <input type="text" placeholder="Cidade" value={endereco.cidade} />
      <br />
      <input type="text" placeholder="UF" value={endereco.uf} />
    </div>
  );
}
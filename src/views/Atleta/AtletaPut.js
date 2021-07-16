import React, { useState, useEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
// import CustomInput from "components/CustomInput/CustomInput.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import OptionResp from "components/Options/OptionsResp";
import OptionsTurma from "components/Options/OptionsTurma";
import api from "API/Api";
import baseUrl from "API/Url";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0",
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
  },
  divSelect: {
    marginTop: "44px",
    marginBottom: "10px",
    padding: "3px",
    borderBottom: "1px solid #d2d2d2",
  },
  select: {
    width: "320px",
    border: "1px solid #d2d2d2",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    fontSize: "15px",
  },
  dtNascimento: {
    marginTop: "44px",
    marginBottom: "10px",
    padding: "3px",
    borderBottom: "1px solid #d2d2d2",
  },
  inputNascimento: {
    width: "320px",
    border: "1px solid #d2d2d2",
  },
  button: {
    backgroundColor: "#8e24aa",
    color: "#d2d2d2",
    padding: "5px",
    width: "80px",
    border: "1px solid #8e24aa",
    cursor: "pointer",
  },
  label: {
    display: "block",
    marginTop: "24px",
    font: "inherit",
  },
  input: {
    border: "none",
    borderBottom: "1px solid #d2d2d2",
    width: "320px",
    padding: "5px 0px",
    fontSize: "1rem",
  },
};

const useStyles = makeStyles(styles);

export default function AtletaPut() {
  const classes = useStyles();

  const [atletaDados, setDados] = useState({
    nome: "",
    cpf: "",
    endereco_rua: "",
    endereco_bairro: "",
    endereco_numero: "",
    endereco_CEP: "",
    naturalidade: "",
    telefone: "",
    problema_saude: "",
    alergia: "",
    medicamento: "",
    email: "",
    dt_nascimento: "",
    fk_turma_id: "",
    fk_Responsavel_id: "",
  });
  const [atletaPut, setAtletaPut] = useState({
    id: "",
    nome: "",
    cpf: "",
    endereco_rua: "",
    endereco_bairro: "",
    endereco_numero: "",
    endereco_CEP: "",
    naturalidade: "",
    telefone: "",
    problema_saude: "",
    alergia: "",
    medicamento: "",
    email: "",
    dt_nascimento: "",
    fk_turma_id: "",
    fk_Responsavel_id: "",
  });

  useEffect(() => {
    if (location.search.slice(1)) {
      let id = location.search.slice(1);
      api.get(`${baseUrl}atleta/${id}`).then((res) => {
        const dadoAtleta = res.data;
        dadoAtleta.map((atl) =>
          setAtletaPut({
            id: atl.id,
            nome: atl.nome,
            cpf: atl.cpf,
            endereco_rua: atl.endereco_rua,
            endereco_numero: atl.endereco_numero,
            endereco_bairro: atl.endereco_bairro,
            endereco_CEP: atl.endereco_CEP,
            naturalidade: atl.naturalidade,
            telefone: atl.telefone,
            email: atl.email,
            dt_nascimento: atl.dt_nascimento,
            fk_turma_id: atl.fk_turma_id,
            fk_Responsavel_id: atl.fk_Responsavel_id,
          })
        );
      });
    }
  }, []);

  useEffect(() => {
    if (atletaDados.nome) {
      setDb();
    }
  });

  const setValueForm = () => {
    let nomeAtleta = document.getElementById("nome").value;
    let cpfAtleta = document.getElementById("cpf").value;
    let ruaAtleta = document.getElementById("rua").value;
    let numeroAtleta = document.getElementById("numero").value;
    let bairroAtleta = document.getElementById("bairro").value;
    let cepAtleta = document.getElementById("cep").value;
    let naturalidadeAtleta = document.getElementById("naturalidade").value;
    let saudeAtleta = document.getElementById("saude").value;
    let alergiaAtleta = document.getElementById("alergia").value;
    let medicamentoAtleta = document.getElementById("medicamento").value;
    let telefoneAtleta = document.getElementById("telefone").value;
    let emailAtleta = document.getElementById("email").value;
    let dtNascimentoAtleta = document.getElementById("dtNascimento").value;
    let fkTurma = document.getElementById("turma_id");
    let fkResponsavel = document.getElementById("responsavel_id");
    let valueFkTurma = fkTurma.options[fkTurma.selectedIndex].value;
    let valueFkResponsavel =
      fkResponsavel.options[fkResponsavel.selectedIndex].value;
    setDados({
      nome: nomeAtleta,
      cpf: cpfAtleta,
      endereco_rua: ruaAtleta,
      endereco_numero: numeroAtleta,
      endereco_bairro: bairroAtleta,
      endereco_CEP: cepAtleta,
      problema_saude: saudeAtleta,
      alergia: alergiaAtleta,
      medicamento: medicamentoAtleta,
      naturalidade: naturalidadeAtleta,
      telefone: telefoneAtleta,
      email: emailAtleta,
      dt_nascimento: dtNascimentoAtleta,
      fk_turma_id: valueFkTurma,
      fk_Responsavel_id: valueFkResponsavel,
    });
  };

  const setDb = () => {
    api.put(`${baseUrl}atleta/${atletaPut.id}`, atletaDados);
  };

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Editar Atleta</h4>
            </CardHeader>
            <form>
              <CardBody>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={4}>
                    <label className={classes.label}>Nome *</label>
                    <input
                      className={classes.input}
                      type="text"
                      required
                      maxLength="50"
                      minLength="4"
                      id="nome"
                      defaultValue={atletaPut.nome}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <label className={classes.label}>CPF *</label>
                    <input
                      className={classes.input}
                      id="cpf"
                      maxLength="14"
                      minLength="14"
                      placeholder="000.000.000-00"
                      required
                      pattern="[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}"
                      defaultValue={atletaPut.cpf}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <label className={classes.label}>Endereço Rua *</label>
                    <input
                      className={classes.input}
                      id="rua"
                      maxLength="50"
                      required
                      defaultValue={atletaPut.endereco_rua}
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={4}>
                    <label className={classes.label}>Endereço Nº *</label>
                    <input
                      className={classes.input}
                      id="numero"
                      maxLength="5"
                      required
                      defaultValue={atletaPut.endereco_numero}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <label className={classes.label}>Endereço Bairro *</label>
                    <input
                      className={classes.input}
                      id="bairro"
                      maxLength="50"
                      minLength="3"
                      required
                      defaultValue={atletaPut.endereco_bairro}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <label className={classes.label}>Endereço CEP *</label>
                    <input
                      className={classes.input}
                      id="cep"
                      maxLength="10"
                      minLength="8"
                      placeholder="0000-000"
                      required
                      pattern="[0-9]{4}-[0-9]{3}"
                      defaultValue={atletaPut.endereco_CEP}
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={4}>
                    <label className={classes.label}>
                      Naturalidade (País) *
                    </label>
                    <input
                      className={classes.input}
                      id="naturalidade"
                      maxLength="50"
                      required
                      defaultValue={atletaPut.naturalidade}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <label className={classes.label}>Problema Saúde</label>
                    <input
                      className={classes.input}
                      id="saude"
                      maxLength="100"
                      required
                      defaultValue={
                        atletaPut.problema_saude
                          ? atletaPut.problema_saude
                          : "Nenhum"
                      }
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <label className={classes.label}>Alergia</label>
                    <input
                      className={classes.input}
                      id="alergia"
                      maxLength="100"
                      required
                      defaultValue={
                        atletaPut.alergia ? atletaPut.alergia : "Nenhum"
                      }
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={4}>
                    <label className={classes.label}>Medicamento</label>
                    <input
                      className={classes.input}
                      id="medicamento"
                      maxLength="100"
                      required
                      defaultValue={
                        atletaPut.medicamento ? atletaPut.medicamento : "Nenhum"
                      }
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <label className={classes.label}>Telefone *</label>
                    <input
                      className={classes.input}
                      id="telefone"
                      maxLength="13"
                      minLength="7"
                      placeholder="(xx) xxxxx-xxxx"
                      required
                      defaultValue={atletaPut.telefone}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <label className={classes.label}>Email *</label>
                    <input
                      className={classes.input}
                      type="email"
                      id="email"
                      maxLength="100"
                      placeholder="@gmail.com"
                      required
                      defaultValue={atletaPut.email}
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={4}>
                    <div className={classes.dtNascimento}>
                      <label>Data de Nascimento *</label>
                    </div>
                    <input
                      className={classes.inputNascimento}
                      type="date"
                      id="dtNascimento"
                      defaultValue={atletaPut.dt_nascimento}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <div className={classes.divSelect}>
                      <label>Turma *</label>
                    </div>
                    <select
                      className={classes.select}
                      name="turma_id"
                      id="turma_id"
                    >
                      <option value={atletaPut.fk_turma_id}>
                        Turma {atletaPut.fk_turma_id}
                      </option>
                      <OptionsTurma />
                    </select>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <div className={classes.divSelect}>
                      <label>Responsável *</label>
                    </div>
                    <select
                      className={classes.select}
                      name="responsavel_id"
                      id="responsavel_id"
                    >
                      <option value={atletaPut.fk_Responsavel_id}>
                        Responsável {atletaPut.fk_Responsavel_id}
                      </option>
                      <OptionResp />
                    </select>
                  </GridItem>
                </GridContainer>
              </CardBody>
              <CardFooter>
                <button
                  className={classes.button}
                  onClick={() => setValueForm()}
                >
                  Enviar
                </button>
              </CardFooter>
            </form>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}

import React, { useState, useEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import OptionsTurma from "components/Options/OptionsTurma";
import OptionsResp from "components/Options/OptionsResp";
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
};

const useStyles = makeStyles(styles);

export default function AtletaCreate() {
  const classes = useStyles();

  useEffect(() => {
    console.log(atleta);
    if (atleta.nome) {
      setDb();
    }
  });

  const [atleta, setAtleta] = useState({
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

  const setValueForm = () => {
    let nomeAtleta = document.getElementById("nome").value;
    let cpfAtleta = document.getElementById("cpf").value;
    let endereco_ruaAtleta = document.getElementById("rua").value;
    let endereco_bairroAtleta = document.getElementById("bairro").value;
    let endereco_numeroAtleta = document.getElementById("numero").value;
    let naturalidadeAtleta = document.getElementById("naturalidade").value;
    let telefoneAtleta = document.getElementById("telefone").value;
    let problema_saudeAtleta = document.getElementById("saude").value;
    let alergiaAtleta = document.getElementById("alergia").value;
    let medicamentoAtleta = document.getElementById("medicamento").value;
    let fkTurma = document.getElementById("turma_id");
    let fkResponsavel = document.getElementById("responsavel_id");
    let valueFkTurma = fkTurma.options[fkTurma.selectedIndex].value;
    let valueFkResponsavel =
      fkResponsavel.options[fkResponsavel.selectedIndex].value;
    setAtleta({
      nome: nomeAtleta,
      cpf: cpfAtleta,
      endereco_rua: endereco_ruaAtleta,
      endereco_bairro: endereco_bairroAtleta,
      endereco_numero: endereco_numeroAtleta,
      naturalidade: naturalidadeAtleta,
      telefone: telefoneAtleta,
      problema_saude: problema_saudeAtleta,
      alergia: alergiaAtleta,
      medicamento: medicamentoAtleta,
      fk_turma_id: valueFkTurma,
      fk_responsavel_id: valueFkResponsavel,
    });
  };

  const setDb = () => {
    api.post(`${baseUrl}atleta`, atleta);
  };

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Cadastrar Atleta</h4>
            </CardHeader>
            <form>
              <CardBody>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Nome *"
                      id="nome"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        maxLength: 45,
                        minLength: 4,
                        required: true,
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="CPF *"
                      id="cpf"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        maxLength: 14,
                        minLength: 14,
                        placeholder: "000.000.000-00",
                        pattern: "[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}",
                        required: true,
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Endereço Rua *"
                      id="rua"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        maxLength: 10,
                        required: true,
                      }}
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Endereço Bairro *"
                      id="bairro"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        maxLength: 45,
                        required: true,
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Endereço Nº *"
                      id="numero"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        maxLength: 5,
                        required: true,
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Naturalidade"
                      id="naturalidade"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        maxLength: 45,
                        minLength: 3,
                        required: true,
                      }}
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Telefone"
                      id="telefone"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        maxLength: 50,
                        minLength: 7,
                        placeholder: "(xx) xxxxx-xxxx",
                        required: true,
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Saúde"
                      id="saude"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        maxLength: 5,
                        required: true,
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Alergia"
                      id="alergia"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        maxLength: 5,
                        required: true,
                      }}
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Medicamento"
                      id="medicamento"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        maxLength: 5,
                        required: true,
                      }}
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
                      <option></option>
                      <OptionsTurma />
                    </select>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <div className={classes.divSelect}>
                      <label>Responsavel *</label>
                    </div>
                    <select
                      className={classes.select}
                      name="responsavel_id"
                      id="responsavel_id"
                    >
                      <option></option>
                      <OptionsResp />
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

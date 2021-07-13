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
import api from "API/Api";

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

export default function UserProfile() {
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
    endereco_CEP: "",
    naturalidade: "",
    telefone: "",
    dt_nascimento: "",
    fk_turma_id: "",
    fk_Responsavel_id: "",
  });

  const setValueForm = () => {
    let nomeAtleta = document.getElementById("nome").value;
    let cpfAtleta = document.getElementById("cpf").value;
    let ruaAtleta = document.getElementById("rua").value;
    let bairroAtleta = document.getElementById("bairro").value;
    let cepAtleta = document.getElementById("cep").value;
    let naturalidadeAtleta = document.getElementById("naturalidade").value;
    let telefoneAtleta = document.getElementById("telefone").value;
    let dtNascimentoAtleta = document.getElementById("dtNascimento").value;
    let fkTurma = document.getElementById("turma_id");
    let fkResponsavel = document.getElementById("responsavel_id");
    let valueFkTurma = fkTurma.options[fkTurma.selectedIndex].value;
    let valueFkResponsavel =
      fkResponsavel.options[fkResponsavel.selectedIndex].value;
    setAtleta({
      nome: nomeAtleta,
      cpf: cpfAtleta,
      endereco_rua: ruaAtleta,
      endereco_bairro: bairroAtleta,
      endereco_CEP: cepAtleta,
      naturalidade: naturalidadeAtleta,
      telefone: telefoneAtleta,
      dt_nascimento: dtNascimentoAtleta,
      fk_turma_id: valueFkTurma,
      fk_Responsavel_id: valueFkResponsavel,
    });
  };

  const setDb = () => {
    api.post("http://api.com/atleta", atleta);
  };

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Cadastrar Atleta</h4>
            </CardHeader>
            {/* <form> */}
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
                      maxLength: 50,
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
                      maxLength: 50,
                      required: true,
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
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
                    labelText="Endereço Bairro *"
                    id="bairro"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      maxLength: 50,
                      minLength: 3,
                      required: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Endereço CEP *"
                    id="cep"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      maxLength: 10,
                      minLength: 8,
                      placeholder: "0000-000",
                      pattern: "[0-9]{4}-[0-9]{3}",
                      required: true,
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Naturalidade (País) *"
                    id="naturalidade"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      maxLength: 50,
                      required: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Problema Saúde"
                    id="saude"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      maxLength: 100,
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
                      maxLength: 100,
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
                      maxLength: 100,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Telefone *"
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
                    labelText="Email *"
                    id="email"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      maxLength: 100,
                      placeholder: "@gmail.com",
                      required: true,
                    }}
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
                    <option value="15">Turma 1</option>
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
                    <option></option>
                    <option value="1">Responsável 1</option>
                    <option value="1">Responsável 2</option>
                  </select>
                </GridItem>
              </GridContainer>
            </CardBody>
            <CardFooter>
              <button className={classes.button} onClick={() => setValueForm()}>
                Enviar
              </button>
            </CardFooter>
            {/* </form> */}
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}

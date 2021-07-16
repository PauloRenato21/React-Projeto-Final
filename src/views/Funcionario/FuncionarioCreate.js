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
import OptionsFranquia from "components/Options/OptionsFranquia";
import OptionsCargo from "components/Options/OptionsCargo";
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

export default function FuncionarioCreate() {
  const classes = useStyles();

  useEffect(() => {
    console.log(funcionario);
    if (funcionario.nome) {
      setDb();
    }
  });

  const [funcionario, setFuncionario] = useState({
    nome: "",
    cpf: "",
    rg: "",
    endereco_rua: "",
    endereco_numero: "",
    endereco_bairro: "",
    naturalidade: "",
    email: "",
    telefone: "",
    dt_nascimento: "",
    fk_franquias_id: "",
    fk_cargo_id: "",
  });

  const setValueForm = () => {
    let nomeFuncionario = document.getElementById("nome").value;
    let cpfFuncionario = document.getElementById("cpf").value;
    let rgFuncionario = document.getElementById("rg").value;
    let ruaFuncionario = document.getElementById("rua").value;
    let numeroFuncionario = document.getElementById("numero").value;
    let bairroFuncionario = document.getElementById("bairro").value;
    let naturalidadeFuncionario = document.getElementById("naturalidade").value;
    let emailFuncionario = document.getElementById("email").value;
    let telefoneFuncionario = document.getElementById("telefone").value;
    let dtNascimentoFuncionario = document.getElementById("dtNascimento").value;
    let fkFranquia = document.getElementById("franquia_id");
    let fkCargo = document.getElementById("cargo_id");
    let valueFkFraquia = fkFranquia.options[fkFranquia.selectedIndex].value;
    let valueFkCargo = fkCargo.options[fkCargo.selectedIndex].value;
    setFuncionario({
      nome: nomeFuncionario,
      cpf: cpfFuncionario,
      rg: rgFuncionario,
      endereco_rua: ruaFuncionario,
      endereco_numero: numeroFuncionario,
      endereco_bairro: bairroFuncionario,
      naturalidade: naturalidadeFuncionario,
      email: emailFuncionario,
      telefone: telefoneFuncionario,
      dt_nascimento: dtNascimentoFuncionario,
      fk_franquias_id: valueFkFraquia,
      fk_cargo_id: valueFkCargo,
    });
  };

  const setDb = () => {
    api.post("http://api.com/funcionario", funcionario);
  };

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Cadastrar Funcionário</h4>
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
                      labelText="RG *"
                      id="rg"
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
                      labelText="Endereço Rua *"
                      id="rua"
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
                      labelText="Endereço Bairro *"
                      id="bairro"
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
                      <label>Franquia *</label>
                    </div>
                    <select
                      className={classes.select}
                      name="franquia_id"
                      id="franquia_id"
                    >
                      <option></option>
                      <OptionsFranquia />
                    </select>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <div className={classes.divSelect}>
                      <label>Cargo *</label>
                    </div>
                    <select
                      className={classes.select}
                      name="cargo_id"
                      id="cargo_id"
                    >
                      <option></option>
                      <OptionsCargo />
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

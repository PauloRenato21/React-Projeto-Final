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

export default function FranquiaCreate() {
  const classes = useStyles();

  useEffect(() => {
    console.log(franquia);
    if (franquia.nome) {
      setDb();
    }
  });

  const [franquia, setFranquia] = useState({
    nome: "",
    cnpj: "",
    endereco_rua: "",
    endereco_numero: "",
    endereco_bairro: "",
    endereco_CEP: "",
    estado: "",
    cidade: "",
    telefone: "",
    email: "",
    fk_clube_futebol_id: "",
  });

  const setValueForm = () => {
    let nomeFranquia = document.getElementById("nome").value;
    let cnpjFranquia = document.getElementById("cnpj").value;
    let ruaFranquia = document.getElementById("rua").value;
    let numeroFranquia = document.getElementById("numero").value;
    let bairroFranquia = document.getElementById("bairro").value;
    let cepFranquia = document.getElementById("cep").value;
    let estadoFranquia = document.getElementById("estado").value;
    let cidadeFranquia = document.getElementById("cidade").value;
    let telefoneFranquia = document.getElementById("telefone").value;
    let emailFranquia = document.getElementById("email").value;
    let fkClube = document.getElementById("clube_id");
    let valueFkClube = fkClube.options[fkClube.selectedIndex].value;
    setFranquia({
      nome: nomeFranquia,
      cnpj: cnpjFranquia,
      endereco_rua: ruaFranquia,
      endereco_numero: numeroFranquia,
      endereco_bairro: bairroFranquia,
      endereco_CEP: cepFranquia,
      estado: estadoFranquia,
      cidade: cidadeFranquia,
      telefone: telefoneFranquia,
      email: emailFranquia,
      fk_clube_futebol_id: valueFkClube,
    });
  };

  const setDb = () => {
    api.post("http://api.com/franquia", franquia);
  };

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Cadastrar Franquia</h4>
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
                        maxLength: 50,
                        minLength: 4,
                        required: true,
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="CNPJ *"
                      id="cnpj"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        maxLength: 18,
                        minLength: 18,
                        placeholder: "00.000.000/0000.00",
                        pattern: "[0-9]{2}.[0-9]{3}.[0-9]{3}/[0-9]{4}-[0-9]{2}",
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
                      labelText="Estado *"
                      id="estado"
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
                      labelText="Cidade *"
                      id="cidade"
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
                </GridContainer>
                <GridContainer>
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
                  <GridItem xs={12} sm={12} md={4}>
                    <div className={classes.divSelect}>
                      <label>Clube Futebol *</label>
                    </div>
                    <select
                      className={classes.select}
                      name="clube_id"
                      id="clube_id"
                    >
                      <option></option>
                      <option value="3">Clube Futebol 1</option>
                      <option value="4">Clube Futebol 2</option>
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

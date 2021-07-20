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

export default function ResponsavelCreate() {
  const classes = useStyles();

  useEffect(() => {
    console.log(responsavel);
    if (responsavel.nome) {
      setDb();
    }
  });

  const [responsavel, setResponsavel] = useState({
    nome: "",
    cpf: "",
    grau_parentesco: "",
    local_trabalho: "",
    profissao: "",
    telefone: "",
    email: "",
  });

  const setValueForm = () => {
    let nomeResp = document.getElementById("nome").value;
    let cpfResp = document.getElementById("cpf").value;
    let parentescoResp = document.getElementById("parentesco").value;
    let trabalhoResp = document.getElementById("trabalho").value;
    let profissaoResp = document.getElementById("profissao").value;
    let telefoneResp = document.getElementById("telefone").value;
    let emailResp = document.getElementById("email").value;
    setResponsavel({
      nome: nomeResp,
      cpf: cpfResp,
      grau_parentesco: parentescoResp,
      local_trabalho: trabalhoResp,
      profissao: profissaoResp,
      telefone: telefoneResp,
      email: emailResp,
    });
  };

  const setDb = () => {
    api.post(`${baseUrl}responsavel`, responsavel);
  };

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Cadastrar Responsavel</h4>
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
                      labelText="Parentesco *"
                      id="parentesco"
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
                      labelText="Local de Trabalho *"
                      id="trabalho"
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
                      labelText="Profissão *"
                      id="profissao"
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

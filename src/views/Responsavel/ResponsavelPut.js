import React, { useState, useEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
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

export default function ResponsavelPut() {
  const classes = useStyles();

  const [responsavelDados, setResponsavelDados] = useState({
    id: "",
    nome: "",
    cpf: "",
    grau_parentesco: "",
    profissao: "",
    local_trabalho: "",
    telefone: "",
    email: "",
  });

  const [responsavel, setResponsavel] = useState({
    nome: "",
    cpf: "",
    grau_parentesco: "",
    profissao: "",
    local_trabalho: "",
    telefone: "",
    email: "",
  });

  useEffect(() => {
    console.log(responsavel);
    if (responsavel.nome) {
      setDb();
    }
  });

  useEffect(() => {
    if (location.search.slice(1)) {
      let id = location.search.slice(1);
      api.get(`${baseUrl}responsavel/${id}`).then((res) => {
        const dadoResp = res.data;
        dadoResp.map((count) =>
          setResponsavelDados({
            id: count.id,
            nome: count.nome,
            cpf: count.cpf,
            grau_parentesco: count.grau_parentesco,
            profissao: count.profissao,
            local_trabalho: count.local_trabalho,
            telefone: count.telefone,
            email: count.email,
          })
        );
      });
    }
  }, []);

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
    api.put(`${baseUrl}responsavel/${responsavelDados.id}`, responsavel);
  };

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Atualizar Responsável</h4>
            </CardHeader>
            <form>
              <CardBody>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={4}>
                    <label className={classes.label}>Nome *</label>
                    <input
                      className={classes.input}
                      id="nome"
                      maxLength="100"
                      minLength="4"
                      required
                      defaultValue={responsavelDados.nome}
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
                      pattern="[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}"
                      required
                      defaultValue={responsavelDados.cpf}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <label className={classes.label}>Grau Parentesco *</label>
                    <input
                      className={classes.input}
                      id="parentesco"
                      maxLength="100"
                      required
                      defaultValue={responsavelDados.grau_parentesco}
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={4}>
                    <label className={classes.label}>Profissão *</label>
                    <input
                      className={classes.input}
                      id="profissao"
                      maxLength="50"
                      required
                      defaultValue={responsavelDados.profissao}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <label className={classes.label}>Local de Trabalho *</label>
                    <input
                      className={classes.input}
                      id="trabalho"
                      maxLength="100"
                      required
                      defaultValue={responsavelDados.local_trabalho}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <label className={classes.label}>Telefone *</label>
                    <input
                      className={classes.input}
                      id="telefone"
                      maxLength="50"
                      required
                      defaultValue={responsavelDados.telefone}
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={4}>
                    <label className={classes.label}>Email *</label>
                    <input
                      className={classes.input}
                      id="email"
                      maxLength="100"
                      required
                      defaultValue={responsavelDados.email}
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

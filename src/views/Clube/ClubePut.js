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
    width: "400px",
    padding: "5px 0px",
    fontSize: "1rem",
  },
};

const useStyles = makeStyles(styles);

export default function ClubePut() {
  const classes = useStyles();

  const [clubeDados, setClubeDados] = useState({
    id: "",
    nome: "",
    cnpj: "",
  });

  const [clube, setClube] = useState({
    nome: "",
    cnpj: "",
  });

  useEffect(() => {
    if (location.search.slice(1)) {
      let id = location.search.slice(1);
      api.get(`${baseUrl}clube/${id}`).then((res) => {
        const dadosClube = res.data;
        dadosClube.map((clube) =>
          setClubeDados({
            id: clube.id,
            nome: clube.nome,
            cnpj: clube.cnpj,
          })
        );
      });
    }
  }, []);

  useEffect(() => {
    if (clube.nome) {
      setDb();
    }
  });

  const setValueForm = () => {
    let nomeClube = document.getElementById("nome").value;
    let cnpjClube = document.getElementById("cnpj").value;
    setClube({
      nome: nomeClube,
      cnpj: cnpjClube,
    });
  };

  const setDb = () => {
    api.put(`${baseUrl}clube/${clubeDados.id}`, clube);
  };

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Editar Clube Futebol</h4>
            </CardHeader>
            <form>
              <CardBody>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={6}>
                    <label className={classes.label}>Nome *</label>
                    <input
                      className={classes.input}
                      type="text"
                      required
                      maxLength="100"
                      minLength="4"
                      id="nome"
                      defaultValue={clubeDados.nome}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <label className={classes.label}>CNPJ *</label>
                    <input
                      className={classes.input}
                      type="text"
                      required
                      maxLength="14"
                      minLength="14"
                      id="cnpj"
                      defaultValue={clubeDados.cnpj}
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

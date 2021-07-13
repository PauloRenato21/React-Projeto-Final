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

export default function TurmaCreate() {
  const classes = useStyles();

  useEffect(() => {
    console.log(turma);
    if (turma.nome) {
      setDb();
    }
  });

  const [turma, setTurma] = useState({
    nome: "",
    turno: "",
    horario_inicial: "",
    horario_termino: "",
    fk_categoria_id: "",
    fk_franquias_id: "",
  });

  const setValueForm = () => {
    let nomeTurma = document.getElementById("nome").value;
    let turnoTurma = document.getElementById("turno").value;
    let inicialTurma = document.getElementById("inicial").value;
    let terminoTurma = document.getElementById("termino").value;
    let fkCategoria = document.getElementById("categoria_id");
    let fkFranquia = document.getElementById("franquia_id");
    let valueFkCategoria = fkCategoria.options[fkCategoria.selectedIndex].value;
    let valueFkFranquia = fkFranquia.options[fkFranquia.selectedIndex].value;
    setTurma({
      nome: nomeTurma,
      turno: turnoTurma,
      horario_inicial: inicialTurma,
      horario_termino: terminoTurma,
      fk_categoria_id: valueFkCategoria,
      fk_franquias_id: valueFkFranquia,
    });
  };

  const setDb = () => {
    api.post("http://api.com/turma", turma);
  };

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Cadastrar Turma</h4>
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
                    labelText="Turno *"
                    id="turno"
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
                    labelText="Horario Inicial *"
                    id="inicial"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      type: "time",
                      maxLength: 10,
                      required: true,
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Horario Final *"
                    id="termino"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      type: "time",
                      maxLength: 10,
                      required: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <div className={classes.divSelect}>
                    <label>Categoria *</label>
                  </div>
                  <select
                    className={classes.select}
                    name="categoria_id"
                    id="categoria_id"
                  >
                    <option></option>
                    <option value="4">Categoria 1</option>
                  </select>
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
                    <option value="4">Franquia 1</option>
                    <option value="3">Franquia 2</option>
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

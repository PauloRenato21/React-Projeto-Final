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
import OptionsCategoria from "components/Options/OptionsCategoria";
import OptionsFranquia from "components/Options/OptionsFranquia";
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

export default function TurmaPut() {
  const classes = useStyles();

  const [turmaDados, setTurmaDados] = useState({
    id: "",
    nome: "",
    turno: "",
    horario_inicial: "",
    horario_termino: "",
    fk_categoria_id: "",
    fk_franquias_id: "",
  });
  const [turma, setTurma] = useState({
    nome: "",
    turno: "",
    horario_inicial: "",
    horario_termino: "",
    fk_categoria_id: "",
    fk_franquias_id: "",
  });

  useEffect(() => {
    if (location.search.slice(1)) {
      let id = location.search.slice(1);
      api.get(`${baseUrl}turma/${id}`).then((res) => {
        const dadoTurma = res.data;
        dadoTurma.map((turma) =>
          setTurmaDados({
            id: turma.id,
            nome: turma.nome,
            turno: turma.turno,
            horario_inicial: turma.horario_inicial,
            horario_termino: turma.horario_termino,
            fk_categoria_id: turma.fk_categoria_id,
            fk_franquias_id: turma.fk_franquias_id,
          })
        );
      });
    }
  }, []);

  useEffect(() => {
    if (turma.nome) {
      setDb();
    }
  });

  const setValueForm = () => {
    let nomeTurma = document.getElementById("nome").value;
    let turnoTurma = document.getElementById("turno").value;
    let horarioInicialTurma = document.getElementById("inicial").value;
    let horarioTerminoTurma = document.getElementById("termino").value;
    let fkCategoria = document.getElementById("categoria_id");
    let fkFranquia = document.getElementById("franquia_id");
    let valueFkCategoria = fkCategoria.options[fkCategoria.selectedIndex].value;
    let valueFkFranquia = fkFranquia.options[fkFranquia.selectedIndex].value;
    setTurma({
      nome: nomeTurma,
      turno: turnoTurma,
      horario_inicial: horarioInicialTurma,
      horario_termino: horarioTerminoTurma,
      fk_categoria_id: valueFkCategoria,
      fk_franquias_id: valueFkFranquia,
    });
  };

  const setDb = () => {
    api.put(`${baseUrl}turma/${turmaDados.id}`, turma);
  };

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Editar Turma</h4>
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
                      defaultValue={turmaDados.nome}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <label className={classes.label}>Turno *</label>
                    <input
                      className={classes.input}
                      id="turno"
                      maxLength="50"
                      required
                      defaultValue={turmaDados.turno}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <label className={classes.label}>Horario Inicial *</label>
                    <input
                      className={classes.input}
                      id="inicial"
                      type="time"
                      required
                      defaultValue={turmaDados.horario_inicial}
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={4}>
                    <label className={classes.label}>
                      Horario de Termino *
                    </label>
                    <input
                      className={classes.input}
                      id="termino"
                      type="time"
                      required
                      defaultValue={turmaDados.horario_termino}
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
                      <option value={turmaDados.fk_categoria_id}>
                        Categoria {turmaDados.fk_categoria_id}
                      </option>
                      <OptionsCategoria />
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
                      <option value={turmaDados.fk_franquias_id}>
                        Franquia {turmaDados.fk_franquias_id}
                      </option>
                      <OptionsFranquia />
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

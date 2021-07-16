import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import Edit from "@material-ui/icons/Edit";
import Close from "@material-ui/icons/Close";
import api from "API/Api";

const styles = {
  buttonNewAtleta: {
    color: "white",
    fontSize: "16px",
    cursor: "pointer",
    backgroundColor: "#58b05c",
    border: "1px solid black",
    width: "100px",
    height: "30px",
    float: "right",
    marginTop: "-50px",
    marginRight: "10px",
  },
};

const useStyles = makeStyles(styles);

export default function Index() {
  const classes = useStyles();

  const [turmas, setTurma] = useState([]);

  useEffect(() => {
    api.get("http://api.com/turma").then((res) => {
      const dadosTurma = res.data;
      setTurma(dadosTurma);
    });
  }, []);

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="warning">
              <h4 className={classes.cardTitleWhite}>Turma</h4>
              <a href="/admin/cadastrar/turma">
                <button className={classes.buttonNewAtleta}>+ Novo</button>
              </a>
            </CardHeader>
            <CardBody>
              {turmas.map((turma) => (
                <Table
                  key={turma.id}
                  tableHeaderColor="warning"
                  tableHead={[
                    "ID",
                    "Nome",
                    "Turno",
                    "Horario Inicial",
                    "Horario Final",
                    "Categoria",
                    "Franquia",
                    "Editar",
                    "Excluir",
                  ]}
                  tableData={[
                    [
                      turma.id,
                      turma.nome,
                      turma.turno,
                      turma.horario_inicial,
                      turma.horario_termino,
                      turma.fk_categoria_id,
                      turma.fk_franquias_id,
                      <button
                        onClick={() =>
                          (location.href = `/admin/atualizar/turma?${turma.id}`)
                        }
                        id={turma.id}
                        key="1"
                        style={{
                          border: "none",
                          background: "none",
                          cursor: "pointer",
                        }}
                      >
                        <Edit htmlColor="#00acc1" />
                      </button>,
                      <button
                        onClick="{() => setValueId(atl.id)}"
                        key="1"
                        style={{
                          border: "none",
                          background: "none",
                          cursor: "pointer",
                        }}
                      >
                        <Close htmlColor="red" />
                      </button>,
                    ],
                  ]}
                />
              ))}
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}

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
import baseUrl from "API/Url";
import clubedeleteDb from "./ClubeDelete";

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

  const [refresh, setRefresh] = useState(false);
  const [clubes, setClube] = useState([]);

  useEffect(() => {
    api.get(`${baseUrl}clube`).then((res) => {
      const dadosClube = res.data;
      setClube(dadosClube);
    });
  }, [refresh]);

  const setValueId = (id) => {
    clubedeleteDb(id);
    setRefresh(!refresh);
  };

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="warning">
              <h4 className={classes.cardTitleWhite}>Clube Futebol</h4>
              <a href="/admin/cadastrar/clube">
                <button className={classes.buttonNewAtleta}>+ Novo</button>
              </a>
            </CardHeader>
            <CardBody>
              {clubes.map((clube) => (
                <Table
                  key={clube.id}
                  tableHeaderColor="warning"
                  tableHead={["ID", "Nome", "CNPJ", "Editar", "Excluir"]}
                  tableData={[
                    [
                      clube.id,
                      clube.nome,
                      clube.cnpj,
                      <button
                        onClick={() =>
                          (location.href = `/admin/atualizar/clube?${clube.id}`)
                        }
                        id={clube.id}
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
                        onClick={() => setValueId(clube.id)}
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

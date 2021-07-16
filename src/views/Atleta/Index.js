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
import deleteDb from "./AtletaDelete";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

export default function Index() {
  const classes = useStyles();

  const [atleta, setAtleta] = useState([]);

  useEffect(() => {
    api.get(`${baseUrl}atleta`).then((res) => {
      const dadosAtleta = res.data;
      setAtleta(dadosAtleta);
    });
  }, []);

  const setValueId = (id) => {
    deleteDb(id);
  };

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="warning">
              <h4 className={classes.cardTitleWhite}>Atleta</h4>
            </CardHeader>
            <CardBody>
              {atleta.map((atl) => (
                <Table
                  key={atl.id}
                  tableHeaderColor="warning"
                  tableHead={[
                    "ID",
                    "Nome",
                    "CPF",
                    "Data Nascimento",
                    "Endereço",
                    "Naturalidade",
                    "Telefone",
                    "Email",
                    "Turma",
                    "Responsável",
                    "Editar",
                    "Excluir",
                  ]}
                  tableData={[
                    [
                      atl.id,
                      atl.nome,
                      atl.cpf,
                      atl.dt_nascimento,
                      atl.endereco_rua,
                      atl.naturalidade,
                      atl.telefone,
                      atl.email,
                      atl.fk_turma_id,
                      atl.fk_Responsavel_id,
                      <button
                        onClick={() =>
                          (location.href = `/admin/atualizar/atleta?${atl.id}`)
                        }
                        id={atl.id}
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
                        onClick={() => setValueId(atl.id)}
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

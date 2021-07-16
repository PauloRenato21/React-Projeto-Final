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

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

export default function Index() {
  const classes = useStyles();

  const [responsaveis, setResponsavel] = useState([]);

  useEffect(() => {
    api.get(`${baseUrl}responsavel`).then((res) => {
      const dadosRespon = res.data;
      setResponsavel(dadosRespon);
    });
  }, []);

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="warning">
              <h4 className={classes.cardTitleWhite}>Responsável</h4>
            </CardHeader>
            <CardBody>
              {responsaveis.map((responsavel) => (
                <Table
                  key={responsavel.id}
                  tableHeaderColor="warning"
                  tableHead={[
                    "ID",
                    "Nome",
                    "CPF",
                    "Parentesco",
                    "Profissão",
                    "Local Trabalho",
                    "Telefone",
                    "Email",
                    "Editar",
                    "Excluir",
                  ]}
                  tableData={[
                    [
                      responsavel.id,
                      responsavel.nome,
                      responsavel.cpf,
                      responsavel.grau_parentesco,
                      responsavel.profissao,
                      responsavel.local_trabalho,
                      responsavel.telefone,
                      responsavel.email,
                      <button
                        onClick={() =>
                          (location.href = `/admin/atualizar/responsavel?${responsavel.id}`)
                        }
                        id={responsavel.id}
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

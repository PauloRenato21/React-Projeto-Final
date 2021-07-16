import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import Edit from "@material-ui/icons/Edit";
import Close from "@material-ui/icons/Close";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

export default function Index() {
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="warning">
              <h4 className={classes.cardTitleWhite}>Responsável</h4>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="warning"
                tableHead={[
                  "ID",
                  "Nome",
                  "Parentesco",
                  "Profissão",
                  "Local Trabalho",
                  "Telefone",
                  "Telefone",
                  "Email",
                  "Editar",
                  "Excluir",
                ]}
                tableData={[
                  [
                    "1",
                    "Dakota Rice",
                    "$36,738",
                    "Niger",
                    "Rua Teste A",
                    "Brasileiro",
                    "99999999999",
                    "teste@gmail.com",
                    <button
                      // onClick={() =>
                      //   (location.href = `/admin/atualizar/atleta?${atl.id}`)
                      // }
                      // id={atl.id}
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
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}

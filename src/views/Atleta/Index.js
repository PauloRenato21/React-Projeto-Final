import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

// import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

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
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="warning">
              <h4 className={classes.cardTitleWhite}>Atleta</h4>
              <a href="/admin/cadastrar/atleta">
                <button className={classes.buttonNewAtleta}>+ Novo</button>
              </a>
            </CardHeader>
            <CardBody>
              <Table
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
                    "Turma Teste 01",
                    "Responsavel Teste",
                  ],
                  ["2", "Minerva Hooper", "$23,789", "Curaçao"],
                  ["3", "Sage Rodriguez", "$56,142", "Netherlands"],
                  ["4", "Philip Chaney", "$38,735", "Korea, South"],
                ]}
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}

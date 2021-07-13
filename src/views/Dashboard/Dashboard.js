import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { makeStyles } from "@material-ui/core/styles";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import { keys } from '@material-ui/core/styles/createBreakpoints';

  const useStyles = makeStyles(styles);

  export default function Dashboard() {

    const [atletas,setAtletas]=useState([])

    useEffect(()=>{
      axios.get('http://localhost:8080/atleta')
        .then(res=>{
          const dadosAtletas=res.data
          setAtletas(dadosAtletas)
        })
      }
    )

    // let Atletas = {}
    // Atletas = atletas.map(
      
    // )
    console.log(atletas);

    const classes = useStyles();
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader color="warning">
                <h4 className={classes.cardTitleWhite}>Employees Stats</h4>
                <p className={classes.cardCategoryWhite}>
                  New employees on 15th September, 2021
                </p>
              </CardHeader>
              <CardBody>
              {atletas.map(
                atleta => (
                <Table
                  key={atleta.id}
                  tableHeaderColor="warning"
                  tableHead={["ID", "Nome", "cpf", "Telefone"]}
                  tableData={[[atleta.id, atleta.nome, atleta.cpf, atleta.telefone]]}
                />
              ))} 
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }


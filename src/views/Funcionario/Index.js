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
import funcionariodeleteDb from "./FuncionarioDelete";

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
  const [funcionarios, setFuncionario] = useState([]);

  useEffect(() => {
    api.get(`${baseUrl}funcionario/informacoes`).then((res) => {
      const dadosFuncionarios = res.data;
      console.log(dadosFuncionarios);
      setFuncionario(dadosFuncionarios);
    });
  }, [refresh]);

  const setValueId = (id) => {
    funcionariodeleteDb(id);
    setRefresh(!refresh);
  };

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="warning">
              <h4 className={classes.cardTitleWhite}>Funcionário</h4>
              <a href="/admin/cadastrar/funcionario">
                <button className={classes.buttonNewAtleta}>+ Novo</button>
              </a>
            </CardHeader>
            <CardBody>
              {funcionarios.map((funcionario) => (
                <Table
                  key={funcionario.id}
                  tableHeaderColor="warning"
                  tableHead={[
                    "ID",
                    "Nome",
                    "CPF",
                    "RG",
                    "Data Nascimento",
                    "Endereço",
                    "Naturalidade",
                    "Telefone",
                    "Email",
                    "Cargo",
                    "Franquia",
                    "Editar",
                    "Excluir",
                  ]}
                  tableData={[
                    [
                      funcionario.id,
                      funcionario.nome,
                      funcionario.cpf,
                      funcionario.rg,
                      funcionario.dt_nascimento,
                      funcionario.endereco_bairro,
                      funcionario.naturalidade,
                      funcionario.telefone,
                      funcionario.email,
                      funcionario.cargo[0]
                        ? funcionario.cargo[0]["nome"]
                        : "Nenhum",
                      funcionario.franquia[0]
                        ? funcionario.franquia[0]["nome"]
                        : "Nenhum",
                      <button
                        onClick={() =>
                          (location.href = `/admin/atualizar/funcionario?${funcionario.id}`)
                        }
                        id={funcionario.id}
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
                        onClick={() => setValueId(funcionario.id)}
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

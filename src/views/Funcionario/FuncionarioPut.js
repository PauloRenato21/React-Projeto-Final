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
import OptionsFranquia from "components/Options/OptionsFranquia";
import OptionsCargo from "components/Options/OptionsCargo";
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

export default function FuncionarioPut() {
  const classes = useStyles();

  const [funcionarioDados, setFuncionarioDados] = useState({
    id: "",
    nome: "",
    cpf: "",
    rg: "",
    endereco_rua: "",
    endereco_bairro: "",
    endereco_numero: "",
    naturalidade: "",
    telefone: "",
    email: "",
    dt_nascimento: "",
    fk_franquias_id: "",
    fk_cargo_id: "",
  });
  const [funcionario, setFuncionario] = useState({
    nome: "",
    cpf: "",
    rg: "",
    endereco_rua: "",
    endereco_bairro: "",
    endereco_numero: "",
    naturalidade: "",
    telefone: "",
    email: "",
    dt_nascimento: "",
    fk_franquias_id: "",
    fk_cargo_id: "",
  });

  useEffect(() => {
    if (location.search.slice(1)) {
      let id = location.search.slice(1);
      api.get(`${baseUrl}funcionario/${id}`).then((res) => {
        const dadosFuncionario = res.data;
        dadosFuncionario.map((func) =>
          setFuncionarioDados({
            id: func.id,
            nome: func.nome,
            cpf: func.cpf,
            rg: func.rg,
            endereco_rua: func.endereco_rua,
            endereco_bairro: func.endereco_bairro,
            endereco_numero: func.endereco_numero,
            naturalidade: func.naturalidade,
            telefone: func.telefone,
            email: func.email,
            dt_nascimento: func.dt_nascimento,
            fk_franquias_id: func.fk_franquias_id,
            fk_cargo_id: func.fk_cargo_id,
          })
        );
      });
    }
  }, []);

  useEffect(() => {
    if (funcionario.nome) {
      setDb();
    }
  });

  const setValueForm = () => {
    let nomeFuncionario = document.getElementById("nome").value;
    let cpfFuncionario = document.getElementById("cpf").value;
    let rgFuncionario = document.getElementById("rg").value;
    let ruaFuncionario = document.getElementById("rua").value;
    let numeroFuncionario = document.getElementById("numero").value;
    let bairroFuncionario = document.getElementById("bairro").value;
    let naturalidadeFuncionario = document.getElementById("naturalidade").value;
    let telefoneFuncionario = document.getElementById("telefone").value;
    let emailFuncionario = document.getElementById("email").value;
    let dtNascimentoFuncionario = document.getElementById("dtNascimento").value;
    let fkFranquia = document.getElementById("franquia_id");
    let fkCargo = document.getElementById("cargo_id");
    let valueFkFranquia = fkFranquia.options[fkFranquia.selectedIndex].value;
    let valueFkCargo = fkCargo.options[fkCargo.selectedIndex].value;
    setFuncionario({
      nome: nomeFuncionario,
      cpf: cpfFuncionario,
      rg: rgFuncionario,
      endereco_rua: ruaFuncionario,
      endereco_bairro: bairroFuncionario,
      endereco_numero: numeroFuncionario,
      naturalidade: naturalidadeFuncionario,
      telefone: telefoneFuncionario,
      email: emailFuncionario,
      dt_nascimento: dtNascimentoFuncionario,
      fk_franquias_id: valueFkFranquia,
      fk_cargo_id: valueFkCargo,
    });
  };

  const setDb = () => {
    api.put(`${baseUrl}funcionario/${funcionarioDados.id}`, funcionario);
  };

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Editar Funcionário</h4>
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
                      maxLength="100"
                      minLength="4"
                      id="nome"
                      defaultValue={funcionarioDados.nome}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <label className={classes.label}>CPF *</label>
                    <input
                      className={classes.input}
                      id="cpf"
                      maxLength="14"
                      minLength="14"
                      placeholder="000.000.000-00"
                      required
                      pattern="[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}"
                      defaultValue={funcionarioDados.cpf}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <label className={classes.label}>RG *</label>
                    <input
                      className={classes.input}
                      id="rg"
                      maxLength="10"
                      required
                      defaultValue={funcionarioDados.rg}
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={4}>
                    <label className={classes.label}>Endereço Rua *</label>
                    <input
                      className={classes.input}
                      id="rua"
                      maxLength="50"
                      required
                      defaultValue={funcionarioDados.endereco_rua}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <label className={classes.label}>Endereço Nº *</label>
                    <input
                      className={classes.input}
                      id="numero"
                      maxLength="5"
                      required
                      defaultValue={funcionarioDados.endereco_numero}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <label className={classes.label}>Endereço Bairro *</label>
                    <input
                      className={classes.input}
                      id="bairro"
                      maxLength="50"
                      minLength="3"
                      required
                      defaultValue={funcionarioDados.endereco_bairro}
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={4}>
                    <label className={classes.label}>
                      Naturalidade (País) *
                    </label>
                    <input
                      className={classes.input}
                      id="naturalidade"
                      maxLength="50"
                      required
                      defaultValue={funcionarioDados.naturalidade}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <label className={classes.label}>Telefone *</label>
                    <input
                      className={classes.input}
                      id="telefone"
                      maxLength="13"
                      minLength="7"
                      placeholder="(xx) xxxxx-xxxx"
                      required
                      defaultValue={funcionarioDados.telefone}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <label className={classes.label}>Email *</label>
                    <input
                      className={classes.input}
                      type="email"
                      id="email"
                      maxLength="100"
                      placeholder="@gmail.com"
                      required
                      defaultValue={funcionarioDados.email}
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={4}>
                    <div className={classes.dtNascimento}>
                      <label>Data de Nascimento *</label>
                    </div>
                    <input
                      className={classes.inputNascimento}
                      type="date"
                      id="dtNascimento"
                      defaultValue={funcionarioDados.dt_nascimento}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <div className={classes.divSelect}>
                      <label>Cargo *</label>
                    </div>
                    <select
                      className={classes.select}
                      name="cargo_id"
                      id="cargo_id"
                    >
                      <option value={funcionarioDados.fk_cargo_id}>
                        Cargo {funcionarioDados.fk_cargo_id}
                      </option>
                      <OptionsCargo />
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
                      <option value={funcionarioDados.fk_franquias_id}>
                        Franquia {funcionarioDados.fk_franquias_id}
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

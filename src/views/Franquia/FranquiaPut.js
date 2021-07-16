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
import OptionsClube from "components/Options/OptionsClube";
import api from "API/Api";

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

export default function FranquiaPut() {
  const classes = useStyles();

  const [franquiaDados, setFranquiaDados] = useState({
    id: "",
    nome: "",
    cnpj: "",
    endereco_rua: "",
    endereco_bairro: "",
    endereco_numero: "",
    endereco_CEP: "",
    estado: "",
    cidade: "",
    telefone: "",
    email: "",
    fk_clube_futebol_id: "",
  });
  const [franquia, setFranquia] = useState({
    nome: "",
    cnpj: "",
    endereco_rua: "",
    endereco_bairro: "",
    endereco_numero: "",
    endereco_CEP: "",
    estado: "",
    cidade: "",
    telefone: "",
    email: "",
    fk_clube_futebol_id: "",
  });

  useEffect(() => {
    if (location.search.slice(1)) {
      let id = location.search.slice(1);
      api.get(`http://api.com/franquia/${id}`).then((res) => {
        const dadoFranquia = res.data;
        dadoFranquia.map((franquia) =>
          setFranquiaDados({
            id: franquia.id,
            nome: franquia.nome,
            cnpj: franquia.cnpj,
            endereco_rua: franquia.endereco_numero,
            endereco_bairro: franquia.endereco_bairro,
            endereco_numero: franquia.endereco_numero,
            endereco_CEP: franquia.endereco_CEP,
            estado: franquia.estado,
            cidade: franquia.cidade,
            telefone: franquia.telefone,
            email: franquia.email,
            fk_clube_futebol_id: franquia.fk_clube_futebol_id,
          })
        );
      });
    }
  }, []);

  useEffect(() => {
    if (franquia.nome) {
      setDb();
    }
  });

  const setValueForm = () => {
    let nomeFranquia = document.getElementById("nome").value;
    let cnpjFranquia = document.getElementById("cnpj").value;
    let ruaFranquia = document.getElementById("rua").value;
    let numeroFranquia = document.getElementById("numero").value;
    let bairroFranquia = document.getElementById("bairro").value;
    let cepFranquia = document.getElementById("cep").value;
    let estadoFranquia = document.getElementById("estado").value;
    let cidadeFranquia = document.getElementById("cidade").value;
    let telefoneFranquia = document.getElementById("telefone").value;
    let emailFranquia = document.getElementById("email").value;
    let fkClube = document.getElementById("clube_id");
    let valueFkClube = fkClube.options[fkClube.selectedIndex].value;
    setFranquia({
      nome: nomeFranquia,
      cnpj: cnpjFranquia,
      endereco_rua: ruaFranquia,
      endereco_numero: numeroFranquia,
      endereco_bairro: bairroFranquia,
      endereco_CEP: cepFranquia,
      estado: estadoFranquia,
      cidade: cidadeFranquia,
      telefone: telefoneFranquia,
      email: emailFranquia,
      fk_clube_futebol_id: valueFkClube,
    });
  };

  const setDb = () => {
    api.put(`http://api.com/franquia/${franquiaDados.id}`, franquia);
  };

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Editar Franquia</h4>
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
                      defaultValue={franquiaDados.nome}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <label className={classes.label}>CNPJ *</label>
                    <input
                      className={classes.input}
                      id="cnpj"
                      maxLength="18"
                      minLength="18"
                      placeholder="00.000.000/0000-00"
                      required
                      pattern="[0-9]{2}.[0-9]{3}.[0-9]{3}/[0-9]{4}-[0-9]{2}"
                      defaultValue={franquiaDados.cnpj}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <label className={classes.label}>Endereço Rua *</label>
                    <input
                      className={classes.input}
                      id="rua"
                      maxLength="50"
                      required
                      defaultValue={franquiaDados.endereco_rua}
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={4}>
                    <label className={classes.label}>Endereço Nº *</label>
                    <input
                      className={classes.input}
                      id="numero"
                      maxLength="5"
                      required
                      defaultValue={franquiaDados.endereco_numero}
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
                      defaultValue={franquiaDados.endereco_bairro}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <label className={classes.label}>Endereço CEP *</label>
                    <input
                      className={classes.input}
                      id="cep"
                      maxLength="10"
                      minLength="8"
                      placeholder="0000-000"
                      required
                      pattern="[0-9]{4}-[0-9]{3}"
                      defaultValue={franquiaDados.endereco_CEP}
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={4}>
                    <label className={classes.label}>Estado *</label>
                    <input
                      className={classes.input}
                      id="estado"
                      maxLength="50"
                      required
                      defaultValue={franquiaDados.estado}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <label className={classes.label}>Cidade *</label>
                    <input
                      className={classes.input}
                      id="cidade"
                      maxLength="50"
                      required
                      defaultValue={franquiaDados.cidade}
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
                      defaultValue={franquiaDados.telefone}
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={4}>
                    <label className={classes.label}>Email *</label>
                    <input
                      className={classes.input}
                      type="email"
                      id="email"
                      maxLength="100"
                      placeholder="@gmail.com"
                      required
                      defaultValue={franquiaDados.email}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <div className={classes.divSelect}>
                      <label>Clube *</label>
                    </div>
                    <select
                      className={classes.select}
                      name="clube_id"
                      id="clube_id"
                    >
                      <option value={franquiaDados.fk_clube_futebol_id}>
                        Clube {franquiaDados.fk_clube_futebol_id}
                      </option>
                      <OptionsClube />
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

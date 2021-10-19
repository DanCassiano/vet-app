import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Menu from "../../../components/menu";
import Button from "@material-ui/core/Button";
import { useHistory, useParams } from "react-router-dom";
import AdicionarTratamento from "./cadastrarTratamento";
import TableTratamento from "./TratamentoTable";
import NoteAdd from "@material-ui/icons/NoteAdd";
import EditTratamento from "./EdittTratamento";

import AtendimentoHeader from "./../../../components/AtendimentosHeader"
import { useStyles } from "./../../../styles"

const Prontuario = () => {
  const { id } = useParams();

  const classes = useStyles();
  const [createTratamentoButton, setCreateTratamento] = useState(false);
  const [viewTratamento, setviewTratamento] = useState(false);
  const createTratamento = () => {
    setCreateTratamento(false);
    setCreateTratamento(true);
  };
  return (

    <Container maxWidth="lg" className={classes.container}>
      <Grid item sm={12}>
        <AtendimentoHeader />
        <Button
          className={classes.createTratamento}
          variant="contained"
          onClick={createTratamento}
          type="submit"
          color="primary"
        >
          <NoteAdd />
        </Button>
        {/* {viewTratamento && viewTratamento !== false ? (
          <Paper className={classes.table}>
            {<EditTratamento data={viewTratamento} />}
          </Paper>
        ) : (
          <Paper className={classes.table}>
            {createTratamentoButton && createTratamentoButton === true ? (
              <AdicionarTratamento />
            ) : (
              <TableTratamento
                viewTratamento={setviewTratamento}
                data={id}
              />
            )}
          </Paper>
        )} */}
      </Grid>

      <Box pt={4}>{/* <Footer /> */}</Box>
    </Container>
  );
};

export default Prontuario;

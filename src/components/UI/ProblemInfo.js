import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  TextField,
} from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  infoBox: {
    padding: '0% 1%',
  },
}));
const ProblemInfo = ({ props }) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.infoBox} direction="column" xs={6}>
      <h1>{props.title}</h1>
      {props.problemInfo}
      <h2>입력 형식</h2>
      {props.inputType}
      <h2>출력 형식</h2>
      {props.outputType}
    </Grid>
  );
};

export default ProblemInfo;

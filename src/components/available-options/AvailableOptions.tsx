import { Grid } from "@mui/material"
import { AvailableOption } from "./AvailableOption"

export const AvailableOptions = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}><AvailableOption type="order" price={120} checked /></Grid>
      <Grid item xs={6}><AvailableOption type="stock" price={100} /></Grid>
    </Grid>
  )
}
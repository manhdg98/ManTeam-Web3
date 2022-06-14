import React from 'react';
import { Theme, makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import CoinListCard from '../../components/UI/coins/organisms/CoinListCard';

const useStyles = makeStyles((theme: Theme) => ({
  wrapper: {
    height: '100%',
    '& > .MuiGrid-item': {
      height: '100%'
    }
  },
  map: {
    width: '100%',
    height: '100%'
  }
}));

const MapTradder: React.FC = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      className={classes.wrapper}
      spacing={3}
      direction="row"
      justify="center"
      alignItems="stretch"
    >
      <Grid item xs={12}>
        <iframe className={classes.map} src="https://api.mapbox.com/styles/v1/georgesdagher98/cl2rleccz000d15ox851hj94d/draft.html?title=false&access_token=pk.eyJ1IjoiZ2Vvcmdlc2RhZ2hlcjk4IiwiYSI6ImNqbnd4NjliejBnazgzdm5xbnEzNmlyNjcifQ.fzgI5quej0VPErWiQGwVSA&zoomwheel=false#13.73/37.40971/-122.14103/-32.9/75" title="W3Schools Free Online Web Tutorials"></iframe>
      </Grid>
    </Grid>
  )
}

export default MapTradder
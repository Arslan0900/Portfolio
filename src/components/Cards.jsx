import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActions} from '@mui/material';
const Cards = (props) => {
  return (
    <>
     <Card className='card' sx={{ width:300,bgcolor:`${props.bg}` }}>
        <CardMedia
          component="img"
          height="100"
          image={props.image}
        alt={props.alt}
        />
        <CardContent >
          <Typography gutterBottom variant="h5" component="div" color='black'>
          {props.title}
          </Typography>
          <Typography variant="body2" color="black">
            {props.description}
          </Typography>
        </CardContent>
      <CardActions>
        <Button variant='outlined' color='warning' size="medium"  onClick={()=>{window.open(`${props.sharelink}`)}}>
          <Box sx={{color:"black"}}>
          more
          </Box>
        </Button>
      </CardActions>
    </Card>
    </>
  )
}

export default Cards
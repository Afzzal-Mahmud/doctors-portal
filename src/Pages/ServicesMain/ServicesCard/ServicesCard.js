import React from 'react'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function ServicesCard({servicesObject}) {
    const {image,services_name,description} = servicesObject
    return(
        <Grid item xs={4} sm={4} md={4}>
        <Card sx={{ maxWidth: 345, border: 0,  boxShadow: 0 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        style={{height:"80px",width:"auto",margin:"10px auto"}}
        image={image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {services_name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
      </CardActions>
    </Card>
        </Grid> 
    )
}
export default ServicesCard;
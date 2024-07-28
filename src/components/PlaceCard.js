import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid, Box, IconButton } from '@mui/material';
import { Dod, GridCustom } from './Style'
import { useNavigate } from 'react-router-dom';

const Calenda = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.83334 9.16675H7.50001V10.8334H5.83334V9.16675ZM5.83334 12.5001H7.50001V14.1667H5.83334V12.5001ZM9.16668 9.16675H10.8333V10.8334H9.16668V9.16675ZM9.16668 12.5001H10.8333V14.1667H9.16668V12.5001ZM12.5 9.16675H14.1667V10.8334H12.5V9.16675ZM12.5 12.5001H14.1667V14.1667H12.5V12.5001Z" 
      fill="black"
    />
    <path d="M4.16667 18.3334H15.8333C16.7525 18.3334 17.5 17.5859 17.5 16.6667V5.00008C17.5 4.08091 16.7525 3.33341 15.8333 3.33341H14.1667V1.66675H12.5V3.33341H7.5V1.66675H5.83333V3.33341H4.16667C3.2475 3.33341 2.5 4.08091 2.5 5.00008V16.6667C2.5 17.5859 3.2475 18.3334 4.16667 18.3334ZM15.8333 6.66675L15.8342 16.6667H4.16667V6.66675H15.8333Z" 
      fill="black"
    />
  </svg>
)
const PlaceCard = ({ data }) => {
  const navigate = useNavigate();
  
  return (
    <Grid container spacing={2} style={{padding: '0px 42px'}}>
      {data?.map((place) => {
        const operationTime = place.operation_time.find(day => day.day === new Date().toLocaleString('en-us', { weekday: 'long' }));
        const isClosed = operationTime && operationTime.time_open === 'closed';

        return (
          <GridCustom item xs={12} sm={6} md={4} key={place.id} onClick={()=>  navigate(`/detail/${place.id}`)} style={{cursor: 'pointer'}} >
            <Card>
              <CardContent>
                <Box display="flex" alignItems="center">
                  <CardMedia
                    component="img"
                    sx={{ width: 50, height: 50, borderRadius: '50%' }}
                    image={place.profile_image_url}
                    alt={place.name}
                    style={{cursor: 'pointer'}}
                  />
                  <Box ml={2}>
                    <Typography variant="h6" component="div">
                      {place.name}
                    </Typography>
                    <Box display="flex" alignItems="center">
                      <Calenda/>
                      <Typography variant="body2" color="textSecondary" component="div" ml={1}>
                        {isClosed ? 'Closed' : `${operationTime.time_open} – ${operationTime.time_close}`}
                      </Typography>
                    </Box>
                  </Box>
                  <Box ml="auto">
                    <IconButton disabled style={{display: 'flex', gap: '5px'}}>
                      <Dod />
                      <Typography variant="body2" color="textSecondary">
                        {place.rating}
                      </Typography>
                    </IconButton>
                  </Box>
                </Box>
              </CardContent>
              <Grid container spacing={0} style={{padding: '0px 15px 15px 15px'}}>
                {place.images.slice(0, 3).map((image, index) => (
                  <Grid item xs={4} key={index}>
                    <CardMedia
                      style={{height:'150px'}}
                      component="img"
                      height="100"
                      image={image}
                      alt={`Food ${index + 1}`}
                    />
                  </Grid>
                ))}
              </Grid>
            </Card>
          </GridCustom>
        );
      })}
    </Grid>
  );
};

export default PlaceCard;
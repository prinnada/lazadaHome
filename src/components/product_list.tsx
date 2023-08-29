import React from 'react';
import { Card, CardContent, Typography, Box, CardMedia } from '@mui/material';

const ProductList: React.FC = () => {
    const cardItems = [
        {
          image: 'https://image.uniqlo.com/UQ/ST3/th/imagesgoods/460612/item/thgoods_12_460612.jpg?width=494',
          title: 'Summer Dress',
          price: '฿130.00'
        },
        {
            image: 'https://www.pngitem.com/pimgs/m/283-2836625_shorts-png-transparent-images-transparent-board-shorts-png.png',
          title: 'Beach Shorts',
          price: '฿230.00'
        },
        {
          image: 'https://m.media-amazon.com/images/I/61aK4jdI74L._AC_UY1100_.jpg',
          title: 'Sun Hat',
          price: '฿500.00'
        },
        {
          image: 'https://w7.pngwing.com/pngs/299/385/png-transparent-aviator-sunglasses-ray-ban-sunglases-glasses-shutter-shades-sunglasses.png',
          title: 'Sunglasses',
          price: '฿800.00'
        }
        // Add more items as needed
      ];
      
    return (
<Box
  sx={{
    display: 'flex',
    flexDirection: 'column', 
    alignItems: 'center',    
    justifyContent: 'center', 
  }}
  style={{marginTop: '1%'}}
>
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center', 
    }}
  >        {cardItems.map((item, index) => (
         <Card sx={{ width: 200,marginX : 2,marginBottom:2 }}>
            <CardMedia
              sx={{ height: 140 }}
              image={item.image}
              title={item.title}
            />
            <CardContent>
              <Typography gutterBottom component="div" style={{fontSize:"14px"}}>
              {item.title}
              </Typography>
              <Typography  style={{color:"#f57224",fontSize:"18px"}}>
              {item.price}
              </Typography>
            </CardContent>
            
          </Card>
        ))}
        </Box>
        </Box>
      );
};

export default ProductList;

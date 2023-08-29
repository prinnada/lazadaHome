import { Box } from '@mui/material';
import React from 'react';
import Carousel from './components/carousel';
import Footer from './components/footer';
import Header from './components/header';
import ProductList from './components/product_list';


const LazadaHome: React.FC = () => {
  return (
    <Box sx={{display: 'flex' ,flexDirection: 'column',alignItems: 'center',justifyContent: 'center'}} style={{ backgroundColor:"#eff0f5" }}>
      <Header />
      <Carousel />
      <ProductList />
      <ProductList />
      <Footer />
    </Box>
  );
};

export default LazadaHome;

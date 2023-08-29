import React from 'react';
import { Container, Typography, Grid, Link } from '@mui/material';

const Footer: React.FC = () => {
  const footerStyle = {
    backgroundColor: "white",
    padding: "20px 0",
    width:"100%"
  };

  const linkListStyle = {
    listStyle: "none",
    padding: 0,
  };

  const linkStyle = {
    textDecoration: "none",
    color: "#333", // Change the color to your desired text color
  };

  return (
    <footer style={footerStyle}>
      <Container>
        <Grid container spacing={30} display='flex' justifyContent={'space-between'}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6">Quick Links</Typography>
            <ul style={linkListStyle}>
              <li>
                <Link href="/" style={linkStyle}>Home</Link>
              </li>
              <li>
                <Link href="/products" style={linkStyle}>Products</Link>
              </li>
              <li>
                <Link href="/about" style={linkStyle}>About Us</Link>
              </li>
              <li>
                <Link href="/contact" style={linkStyle}>Contact</Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6">Contact Us</Typography>
            <address>
              123 Main Street<br />
              City, Country<br />
              Email: <Link href="mailto:info@lazada.com" style={linkStyle}>info@lazada.com</Link><br />
              Phone: <Link href="tel:+1234567890" style={linkStyle}>+1 (234) 567-890</Link>
            </address>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6">Follow Us</Typography>
            <ul style={linkListStyle}>
              <li>
                <Link href="https://facebook.com/lazada" target="_blank" rel="noopener noreferrer" style={linkStyle}>Facebook</Link>
              </li>
              <li>
                <Link href="https://twitter.com/lazada" target="_blank" rel="noopener noreferrer" style={linkStyle}>Twitter</Link>
              </li>
              <li>
                <Link href="https://instagram.com/lazada" target="_blank" rel="noopener noreferrer" style={linkStyle}>Instagram</Link>
              </li>
            </ul>
          </Grid>
        </Grid>
        <Typography variant="body2" align="center">
          &copy; {new Date().getFullYear()} Lazada. All rights reserved.
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;

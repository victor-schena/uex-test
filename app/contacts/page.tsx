'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import ContactCard from '../components/card';
import MyMap from '../maps/page';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

interface Contact {
  id: number
  name: string,
  phone: string,
  cpf: string,
  zipcode: string,
  state: string,
  city: string,
  neighborhood: string,
  street: string,
  number: string,
  lat: string,
  lng: string
}

function createContact(
  id: number,
  name: string,
  phone: string,
  cpf: string,
  zipcode: string,
  state: string,
  city: string,
  neighborhood: string,
  street: string,
  number: string,
  lat: string,
  lng: string
): Contact {
  return {
    id,
    name,
    cpf,
    phone,
    zipcode,
    state,
    city,
    neighborhood,
    street,
    number,
    lat,
    lng
  };
}

const rows = [
  createContact(1, "Carlos Silva", "+77-88-01234-5678", "123.456.789-00", "83.415-550", "PR", "Colombo", "Bairro", "Avenida dos Santos Martires Pedro e Paulo.", "0", "25.144.8", "25.144.8"),
  createContact(1, "Carla Peres", "+77-88-01234-5678", "123.456.789-00", "83.415-550", "PR", "Colombo", "Bairro", "Avenida dos Santos Martires Pedro e Paulo.", "0", "25.144.8", "25.144.8"),
  createContact(1, "Washington Azevedo", "+77-88-01234-5678", "123.456.789-00", "83.415-550", "PR", "Colombo", "Bairro", "Avenida dos Santos Martires Pedro e Paulo.", "0", "25.144.8", "25.144.8")
];

export default function EnhancedTable() {
  interface Position {
    lat: number;
    lng: number;
  }

  function createPosition(
    lat: number,
    lng: number
  ): Position {
    return {
      lat, lng
    };
  }

  let position = createPosition(-25.29, -49.22);
  return (
    <Box sx={{ width: '100%' }}>
      <Typography variant="body2" color="text.primary">
        Contatos
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          {rows.map((row, index) => {
            const labelId = `enhanced-table-checkbox-${index}`;
            return (
              <ContactCard contact={row} />
            );
          })}
        </Grid>
        <Grid item xs={4}>
          <MyMap />
        </Grid>
      </Grid>
    </Box >
  );
}
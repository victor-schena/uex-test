'use client';
import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import { useRouter } from 'next/navigation';

const defaultTheme = {};

export default function NewUser() {

    const contact = {
        "contact_id": "",
        "name": "name",
        "cpf": "cpf",
        "phone": "phone",
        "zipcode": "zipcode",
        "state": "state",
        "city": "city",
        "neighborhood": "neighborhood",
        "street": "street",
        "number": "number",
        "lat": -25.29,
        "lng": -49.22,
    }
    const router = useRouter();

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        localStorage.setItem("email", data.get('email'));
        localStorage.setItem("password", data.get('password'));
        router.push('/contacts');
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="md">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            error
                            required
                            fullWidth
                            id="name"
                            label="Nome"
                            name="nome"
                            autoComplete="nome"
                            helperText="Nome é obrigatório."
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="cpf"
                            label="CPF"
                            name="cpf"
                            autoComplete="cpf"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="phone"
                            label="Telefone"
                            name="phone"
                            autoComplete="phone"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="cep"
                            label="Cep"
                            name="cep"
                            autoComplete="cep"
                            autoFocus
                        /><TextField
                            margin="normal"
                            required
                            fullWidth
                            id="estado"
                            label="Estado"
                            name="estado"
                            autoComplete="estado"
                            autoFocus
                        /><TextField
                            margin="normal"
                            required
                            fullWidth
                            id="cidade"
                            label="Cidade"
                            name="cidade"
                            autoComplete="cidade"
                            autoFocus
                        /><TextField
                            margin="normal"
                            required
                            fullWidth
                            id="bairro"
                            label="Bairro"
                            name="bairro"
                            autoComplete="bairro"
                            autoFocus
                        /><TextField
                            margin="normal"
                            required
                            fullWidth
                            id="rua"
                            label="Rua"
                            name="rua"
                            autoComplete="rua"
                            autoFocus
                        /><TextField
                            margin="normal"
                            required
                            fullWidth
                            id="numero"
                            label="Numero"
                            name="numero"
                            autoComplete="numero"
                            autoFocus
                        /><TextField
                            margin="normal"
                            required
                            fullWidth
                            id="latitude"
                            label="Latitude"
                            name="latitude"
                            autoComplete="latitude"
                            autoFocus
                        /><TextField
                            margin="normal"
                            required
                            fullWidth
                            id="lonmgitude"
                            label="Longitude"
                            name="longitude"
                            autoComplete="longitude"
                            autoFocus
                        />

                        <Button
                            type="submit"
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Salvar
                        </Button>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}
import React, { useState } from 'react';
import { getDatabase, ref, set } from 'firebase/database';
import { TextField, Button, Container, Box } from '@mui/material';
import UploadImage from './UploadImage';

const FormEventComponent = ({ handleClose }) => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = () => {
    if (title === '' || date === '' || location === '' || imageUrl === '') {
      alert('Preencha todos os campos!');
      return;
    }

    const db = getDatabase();

    const eventRef = ref(db, 'events/' + Date.now());
    set(eventRef, {
      title,
      date,
      location,
      image: imageUrl,
    })
      .then(() => {
        alert('Evento cadastrado com sucesso!');
        handleClose();
      })
      .catch((error) => {
        console.error('Erro ao cadastrar evento:', error);
      });
  };

  return (
    <Container>
      <h2>Cadastrar Evento</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          fullWidth
          sx={{ mb: 2 }}
          required
        />
        <TextField
          label="Data"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          sx={{ mb: 2 }}
          required
        />
        <TextField
          label="Localização"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          fullWidth
          sx={{ mb: 2 }}
          required
        />
        <UploadImage setImageUrl={setImageUrl} />
        <Box sx={{ mt: 4 }}>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Cadastrar Evento
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={handleClose}
            sx={{ ml: 4 }}
          >
            Cancelar
          </Button>
        </Box>
      </form>
    </Container>
  );
};

export default FormEventComponent;

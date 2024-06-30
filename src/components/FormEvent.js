import React, { useState } from 'react';
import { getDatabase, ref, set } from 'firebase/database';
import { TextField, Button, Container, Box } from '@mui/material';
import UploadImage from './UploadImage';

const FormEventComponent = ({ handleClose }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [capacity, setCapacity] = useState('');
  const [date, setDate] = useState('');
  const [address, setAddress] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = () => {
    if (
      title === '' ||
      date === '' ||
      address === '' ||
      imageUrl === '' ||
      price === '' ||
      description === '' ||
      capacity === ''
    ) {
      alert('Preencha todos os campos!');
      return;
    }

    const db = getDatabase();

    const eventRef = ref(db, 'events/' + Date.now());
    set(eventRef, {
      title,
      date,
      address,
      image: imageUrl,
      price,
      capacity,
      description,
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
          value={description}
          required
          onChange={(e) => setDescription(e.target.value)}
          id="filled-multiline-static"
          label="Descrição"
          multiline
          fullWidth
          rows={4}
          sx={{ mb: 2 }}
        />
        <TextField
          label="Valor"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          fullWidth
          sx={{ mb: 2 }}
          required
        />
        <TextField
          label="Capacidade Maxima"
          value={capacity}
          onChange={(e) => setCapacity(e.target.value)}
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
          value={address}
          onChange={(e) => setAddress(e.target.value)}
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

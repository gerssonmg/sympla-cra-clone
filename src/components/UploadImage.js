import React, { useState } from 'react';
import { ref, uploadBytes, getDownloadURL, getStorage } from 'firebase/storage';
import { TextField, Button, CircularProgress, Box } from '@mui/material';
import Typography from '@mui/material/Typography';

export default function UploadImage({ setImageUrl }) {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (image) {
      setLoading(true);

      const storage = getStorage();

      const storageRef = ref(storage, `images/${image.name}`);

      uploadBytes(storageRef, image)
        .then((snapshot) => getDownloadURL(snapshot.ref))
        .then((url) => {
          setImageUrl(url);
          console.log(url);
          setLoading(false);
          alert('Upload bem-sucedido!');
        })
        .catch((error) => {
          setLoading(false);
          console.error('Erro ao fazer upload da imagem:', error);
        });
    } else {
      alert('Por favor, selecione uma imagem primeiro.');
    }
  };

  return (
    <div>
      <TextField type="file" onChange={handleImageChange} fullWidth />
      <Box display="flex" alignItems="center">
        <Button
          variant="contained"
          color="primary"
          onClick={handleUpload}
          disabled={loading}
          sx={{ mr: 1 }}
        >
          {loading ? <CircularProgress size={24} /> : 'Upload'}
        </Button>
        <Typography color="#4395ce" variant="body2">
          Escolha o arquivo e depois clique em UPLOAD
        </Typography>
      </Box>
    </div>
  );
}

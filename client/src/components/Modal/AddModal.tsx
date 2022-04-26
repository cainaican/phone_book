
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function AddModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} fullWidth variant="contained">ДОБАВИТЬ КОНТАКТ</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TextField
            required
            id="outlined-required"
            label="Имя"
            defaultValue=""
            margin='dense'
            fullWidth
          />
          <TextField
            required
            id="outlined-required"
            label="Телефон"
            defaultValue=""            
            margin='dense'
            fullWidth
          />
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <Button onClick={() => console.log('send')} sx={{marginTop: '20px'}} variant="contained">ДОБАВИТЬ</Button>
          <Button onClick={handleClose} sx={{marginTop: '20px'}} variant="contained">ЗАКРЫТЬ</Button>
      </div>
        </Box>
      </Modal>
    </div>
  );
}
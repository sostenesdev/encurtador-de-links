import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


export default function CustomLinksModal({open, handleClose , item}) {

      return (
        <React.Fragment>
          
          <Dialog
            open={open}
            onClose={handleClose}
            slotProps={{
              paper: {
                component: 'form',
                onSubmit: (event) => {
                  event.preventDefault();
                  const formData = new FormData(event.currentTarget);
                  const formJson = Object.fromEntries((formData).entries());
                  const email = formJson.email;
                  console.log(email);
                  handleClose();
                },
              },
            }}
          >
            <DialogTitle>{`${!item? 'Cadastrar': 'Editar'}`} Link</DialogTitle>
            <DialogContent>
              <TextField
                autoFocus
                required
                margin="dense"
                id="url"
                name="url"
                label="Url"
                type="url"
                fullWidth
                variant="standard"
              />
              <TextField
                autoFocus
                required
                margin="dense"
                id="slug"
                name="slug"
                label="Slug"
                type="slug"
                fullWidth
                variant="standard"
              />
              <TextField
                autoFocus
                required
                margin="dense"
                id="description"
                name="description"
                label="Descrição"
                type="descricão"
                fullWidth
                variant="standard"
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color='error' variant='contained'>Cancelar</Button>
              <Button type="submit" variant='contained'>Salvar</Button>
            </DialogActions>
          </Dialog>
        </React.Fragment>
      );
    
}
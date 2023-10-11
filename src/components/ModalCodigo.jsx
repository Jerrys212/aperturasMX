import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ModalCodigo = ({ open, handleClose }) => {
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            variant="h6"
            component="h2"
            sx={{ marginBottom: 2, textAlign: "center" }}
          >
            Ingresa el Código de Verificación
          </Typography>
          <form>
            <TextField
              id="verification-code"
              label="Código de Verificación"
              variant="outlined"
              fullWidth
              sx={{ marginBottom: 2 }}
            />
            <Button
              variant="contained"
              color="primary"
              type="submit"
              sx={{ marginX: "auto" }}
            >
              Enviar
            </Button>
          </form>
        </Box>
      </Modal>
    </>
  );
};

export default ModalCodigo;

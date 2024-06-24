import { FC } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
  Button,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import { Program } from "../../../types/types";

export interface ProgramModalProps {
  program: Program;
  open: boolean;
  onClose: () => void;
}

const ProgramModal: FC<ProgramModalProps> = ({
  program: {
    title,
    description,
    images: {
      "Poster Art": { url },
    },
    releaseYear,
  },
  open,
  onClose,
}) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="md">
      <DialogTitle>
        {title} <i>({releaseYear})</i>
      </DialogTitle>
      <DialogContent sx={{ py: 0, px: 1 }}>
        <Card
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            maxWidth: "100%",
          }}
          elevation={0}
        >
          <CardMedia
            sx={{
              width: { md: "50%", xs: "100%" },
              height: { xs: "auto" },
            }}
            component="img"
            image={url}
            alt={title}
          />
          <CardContent sx={{ flex: "1 0", p: 3, overflow: "hidden" }}>
            <Typography
              variant="h6"
              color="black"
              sx={{
                textAlign: "left",
                mb: 2,
              }}
            >
              {description}
            </Typography>
          </CardContent>
        </Card>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="info">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ProgramModal;

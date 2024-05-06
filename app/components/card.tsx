import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import VisibilityIcon from '@mui/icons-material/Visibility';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

interface Contact {
  id: number
  name: string,
  phone: string,
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

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ContactCard({ contact: Contact }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleViewClick = () => {
    alert("Todo: atualizar o mapa.");
  };

  const handleDeleteClick = () => {
    alert("Todo: deletar o registro.");
  };

  const handleEditClick = () => {
    alert("Todo: deletar o registro.");
  };

  return (
    <Card sx={{ maxWidth: "100%" }} >
      <CardHeader
        title={Contact.name}
        subheader={Contact.phone}
      />
      <CardActions disableSpacing>
        <IconButton aria-label="add" href='/contacts/new' >
          <AddIcon />
        </IconButton>
        <IconButton aria-label="view" onClick={handleViewClick}>
          <VisibilityIcon/>
        </IconButton>
        <IconButton aria-label="delete" onClick={handleDeleteClick}>
          <DeleteIcon />
        </IconButton>
        <IconButton aria-label="edit" onClick={handleEditClick}>
          <ModeEditIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {Contact.street}, {Contact.number}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {Contact.neighborhood}, {Contact.city}
          </Typography>
          <Typography paragraph>CPF: {Contact.cpf}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

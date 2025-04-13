import React, { useState } from 'react';
import { Container, Typography, Paper, Box } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import CardInput from './components/CardInput';
import CardTypeDisplay from './components/CardTypeDisplay';
import { identifyCardType } from './utils/cardUtils';

/**
 * Configuração do tema personalizado para o Material-UI
 * Define a cor primária como azul (#1976d2)
 */
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
  },
});

/**
 * Componente principal da aplicação
 * Gerencia o estado do número do cartão e da bandeira identificada
 */
const App: React.FC = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardType, setCardType] = useState('');

  const handleCardNumberChange = (value: string) => {
    setCardNumber(value);
    setCardType(identifyCardType(value));
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm">
        <Box sx={{ mt: 4, mb: 4 }}>
          <Paper elevation={3} sx={{ p: 4 }}>
            <Typography variant="h4" component="h1" gutterBottom align="center">
              Validador de Cartão
              <CreditCardIcon sx={{ ml: 2, fontSize: 40 }} />
            </Typography>

            <CardInput value={cardNumber} onChange={handleCardNumberChange} />
            <CardTypeDisplay cardType={cardType} />
          </Paper>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default App; 
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

interface CardTypeDisplayProps {
  cardType: string;
}

/**
 * Componente para exibir a bandeira do cartão
 * @param cardType - Nome da bandeira do cartão
 */
const CardTypeDisplay: React.FC<CardTypeDisplayProps> = ({ cardType }) => {
  if (!cardType) return null;

  return (
    <Card sx={{ mt: 3, backgroundColor: '#f5f5f5' }}>
      <CardContent>
        <Typography variant="h6" component="div">
          Bandeira do Cartão:
        </Typography>
        <Typography variant="h5" color="primary" sx={{ mt: 1 }}>
          {cardType}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardTypeDisplay; 
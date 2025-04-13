import React from 'react';
import { TextField } from '@mui/material';
import { formatCardNumber } from '../utils/cardUtils';

interface CardInputProps {
  value: string;
  onChange: (value: string) => void;
}

/**
 * Componente de entrada para número do cartão
 * @param value - Valor atual do campo
 * @param onChange - Função chamada quando o valor muda
 */
const CardInput: React.FC<CardInputProps> = ({ value, onChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const formattedValue = formatCardNumber(event.target.value);
    onChange(formattedValue);
  };

  return (
    <TextField
      fullWidth
      label="Número do Cartão"
      variant="outlined"
      value={value}
      onChange={handleChange}
      sx={{ mt: 3 }}
      inputProps={{ maxLength: 19 }}
      placeholder="Digite o número do cartão"
    />
  );
};

export default CardInput; 
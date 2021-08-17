import { FormEvent, SetStateAction, InputHTMLAttributes } from 'react';
import { Field, Flex, Grid, Button } from 'theme-ui';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  value: number;
  setNumber: (value: SetStateAction<number>) => void;
}

const NumberField = ({ name, label, value, setNumber }: InputProps) => {
  const handleChange = (event: FormEvent) => {
    const number = Number(event.target.value.replace(/\+|-/gi, ''));
    setNumber(number);
  };
  const increment = () => {
    setNumber((prev: number) => prev + 1);
  };
  const decrement = () => {
    setNumber((prev: number) => prev - 1);
  };
  return (
    <Flex>
      <Field
        label={label}
        name={name}
        value={value}
        pattern="[0-9]*"
        onInput={handleChange}
      />
      <Grid gap={1} mt="auto">
        <Button variant="smallOutline" onClick={increment}>
          ▲
        </Button>
        <Button variant="smallOutline" onClick={decrement}>
          ▼
        </Button>
      </Grid>
    </Flex>
  );
};

export default NumberField;

import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "../../UI/Button";
import { addtoBasket } from "../../../store/basket/basketReducer";
import { useDispatch } from "react-redux";
import AddIcon from "@mui/icons-material/Add";
import { TextField } from "@mui/material";

function MealForm({ id, title, price }) {
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(1);

  const amoutChangeHandler = (event) => {
    setAmount(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const basketItem = {
      id,
      price,
      title,
      amount,
    };
    dispatch(addtoBasket(basketItem));
  };

  return (
    <StyledForm>
      <Container>
        <StyledLabel htmlFor={id}>Amount</StyledLabel>

        <StyledText
          id={id}
          type="number"
          value={amount}
          onChange={amoutChangeHandler}
          InputLabelProps={{
            shrink: true,
          }}
          size="small"
          inputProps={{ min: 1, max: 5 }}
        />
      </Container>

      <Button onClick={submitHandler} variant="outlined" styles="rounded">
        <AddIcon />
        Add
      </Button>
    </StyledForm>
  );
}

export default MealForm;

const StyledText = styled(TextField)(() => ({
  marginRight: "10px",
}));

const Container = styled("div")(() => ({
  marginBottom: "12px",
}));
const StyledLabel = styled("label")(() => ({
  fontWeight: "600",
  fontSize: "18px",
  lineHeight: "27px",
  color: "#222222",
}));
const StyledForm = styled("form")(() => ({
  display: "flex",
  alignItems: " flex-end",
  flexDirection: "column",
}));

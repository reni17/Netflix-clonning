"use client";

import { useFormState } from "react-dom";
import { State, create } from "@/actions/create-board";
import { Button } from "@/components/ui/button";
import { FormInput } from "./input";
import { FormButton } from "./form-button";

export const Form = () => {
  const initialState : State = { message: null, errors: {} };
  const [state, dispatch] = useFormState(create, initialState)
  return (
    <form action={dispatch}>
      <FormInput errors={state?.errors}/>
      <FormButton/>
    </form>
  );
};

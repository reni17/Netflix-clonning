"use client";

import {  createBoard } from "@/actions/create-board/index";
import { FormInput } from "./input";
import { FormButton } from "./form-button";
import { useAction } from "@/hooks/use-action";

export const Form = () => {
  const {execute, fieldErrors} = useAction(createBoard, {
    onSuccess: (data) => {
      console.log(data, 'success');
    },
    onError: (error) => {
      console.log(error);
      
    }
  })

  const onSubmit = (formData: FormData) => {
    const title = formData.get("title") as string

    execute({title})
  }
  return (
    <form action={onSubmit}>
      <FormInput errors={fieldErrors}/>
      <FormButton/>
    </form>
  );
};

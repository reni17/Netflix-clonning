"use client";

import {  createBoard } from "@/actions/create-board/index";

import { FormInput } from "@/components/form/form-input";
import { FormSubmit } from "@/components/form/form-submit";

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

    console.log({title});
    

    execute({title})
  }
  return (
    <form action={onSubmit}>
      <FormInput errors={fieldErrors} id="title" label="Board Title"/>
      <FormSubmit>
        Save
      </FormSubmit>
    </form>
  );
};

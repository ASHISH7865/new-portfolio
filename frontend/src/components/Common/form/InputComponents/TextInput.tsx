import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CustomInputProps } from "@/types/formType";
import React from "react";
import { useFormContext } from "react-hook-form";
import { ErrorMessage } from "../ErrorMessage";

const TextInput = ({name , label , ...field} : CustomInputProps ) => {
    const {register , formState: {errors}} = useFormContext();
console.log(errors)
    const error = errors[name]?.message as string | undefined;

    const id = `${name}-${field.type}-${label}`
  return (
    <div className="">
      <Input id={id}  className="col-span-3" {...register(name)} {...field} />
      {/* <ErrorMessage error={error} /> */}
    </div>
  );
};

export default TextInput;

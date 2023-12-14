    import { Label } from "@/components/ui/label";
import { CustomInputProps } from "@/types/formType";
import React from "react";
import { useFormContext } from "react-hook-form";
import { ErrorMessage } from "../ErrorMessage";
import { Textarea } from "@/components/ui/textarea";
import { register } from "module";

const TextareaInput = ({name , label , ...field} : CustomInputProps ) => {
  const { register,formState: {errors}} = useFormContext();

    const error = errors[name]?.message as string | undefined;

    const id = `${name}-${field.type}-${label}`
  return (
    <div className="">
      <Textarea id={id} className="col-span-3" {...register(name)} {...field} />
      {/* <ErrorMessage error={error} /> */}
    </div>
  );
};

export default TextareaInput;

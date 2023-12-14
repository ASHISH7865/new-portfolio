"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider } from "react-hook-form";
import { useForm } from "react-hook-form";
import { InputProps } from "@/types/formType";
import TextInput from "./InputComponents/TextInput";
import TextareaInput from "./InputComponents/TextareaInput";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

interface Props {
  labelButtonSubmit?: string;
  titleForm?: string;
  descriptionForm?: string;
  initialValues: unknown;
  validationSchema: any;
  inputs: InputProps[];
}

export const FormComponent = ({ ...props }: Props) => {
  const { initialValues, inputs, validationSchema, titleForm, descriptionForm, labelButtonSubmit = "Submit" } = props;
  const formMethods = useForm({
    defaultValues: { ...(initialValues || {}) },
    resolver: yupResolver(validationSchema),
  });
  const [dialogOpen, setDialogOpen] = useState(false);

  const { toast } = useToast();

  const onSubmitForm = (data: unknown) => {
    try {
      console.log(data);
      toast({
        title: "Message sent successfully",
        description: "I will get back to you as soon as possible",
        duration: 9000,
      });
      setDialogOpen(false);
      formMethods.reset()
    } catch (error) {}
  };

  return (
    <FormProvider {...formMethods}>
      <form>
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button type="button">
              <span className="text-sm font-medium">Contact</span>
            </Button>
          </DialogTrigger>
          <DialogContent className="w-[95%] sm:max-w-[600px] rounded-2xl backdrop-filter backdrop-blur-3xl bg-transparent  ">
            <DialogHeader>
              <DialogTitle>{titleForm}</DialogTitle>  
              <DialogDescription>{descriptionForm}</DialogDescription>
            </DialogHeader>
            <div className="grid grid-col-1 sm:grid-cols-2 gap-6 mt-4">
              {inputs.map(({ validations, type, ...inputProps }) => (
                <FormField
                  key={inputProps.name}
                  control={formMethods.control}
                  name={inputProps.name as never}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="capitalize">{inputProps.label}</FormLabel>
                      <FormControl>{type === "textarea" ? <Textarea {...field} placeholder={inputProps.placeholder} name={inputProps.name} /> : <Input {...field} name={inputProps.name} type={type} />}</FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              ))}
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button type="button" variant={"ghost"}>
                  Cancel
                </Button>
              </DialogClose>

              <Button onClick={formMethods.handleSubmit(onSubmitForm)} type="submit">
                {labelButtonSubmit}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </form>
    </FormProvider>
  );
};

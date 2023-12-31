"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider } from "react-hook-form";
import { useForm } from "react-hook-form";
import { InputProps } from "@/types/formType";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { set } from "mongoose";
import LoadingSpinner from "../LoadingSpinner";

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
  const [loading, setLoading] = useState(false);

  const { toast } = useToast();

  const onSubmitForm = async (data: unknown) => {
    setLoading(true);
    try {
      const { name, email, phone, subject, hear, message } = data as any;
      const sendMail = await fetch("/api/saveform", {
        method: "POST",
        body: JSON.stringify({
          name,
          email,
          phone,
          subject,
          hear,
          message,
        }),
      });
      setLoading(false);
      toast({
        title: "Message sent successfully",
        description: (
          <div>
            <p className="text-sm text-slate-500">Here is the data you sent:</p>
            <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
              <code className="text-white">{JSON.stringify(data, null, 2)}</code>
            </pre>
            <p className="mt-2 text-sm text-slate-500">We will contact you as soon as possible.</p>
          </div>
        ),
        duration: 9000,
      });
      setDialogOpen(false);
      formMethods.reset();
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
                    <FormItem className={`${type === "textarea" && "col-span-full md:col-span-2"}`}>
                      <FormLabel className="capitalize">{inputProps.label}</FormLabel>
                      <FormControl>
                        {type === "textarea" ? <Textarea {...field} placeholder={inputProps.placeholder} name={inputProps.name} /> : <Input {...field} name={inputProps.name} type={type} placeholder={inputProps.placeholder} />}
                      </FormControl>
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
                {loading ? <LoadingSpinner /> : labelButtonSubmit}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </form>
    </FormProvider>
  );
};

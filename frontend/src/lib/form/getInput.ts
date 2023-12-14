import * as Yup from "yup";
import { AnyObject } from "yup";
import { FormSection, InputProps } from "@/types/formType"
import { forms } from './form';


type YupBoolean = Yup.BooleanSchema<boolean | undefined, AnyObject, boolean | undefined | string>
type YupString = Yup.StringSchema<string | undefined, AnyObject, string | undefined>
type YupNumber = Yup.NumberSchema<number | undefined, AnyObject, number | undefined | string>

const generateValidations = (field: InputProps) => {

    if (!field.validations) return null

    let schema: YupString | YupNumber | YupBoolean = Yup[field.typeValue ? field.typeValue : 'string']()

    for (const rule of field.validations) {
        switch (rule.type) {
            case 'isTrue'   : schema = (schema as YupBoolean).isTrue(rule.message);  break;
            case 'isEmail'  : schema = (schema as YupString).email(rule.message);  break;
            case 'minLength': schema = (schema as YupString).min(rule?.value as number, rule.message);  break;
            case 'oneOf'    : schema = (schema as YupString).oneOf([Yup.ref((rule as any).ref)], rule.message);  break;
            default         : schema = schema.required(rule.message);  break;
        }
    }

    return schema
}

export const getInputs = <T>(section: FormSection) => {

    let initialValues: { [key: string]: any } = {};

    let validationsFields: { [key: string]: any } = {};

    for (const field of forms[section]) {

        initialValues[field.name] = field.value;

        if (!field.validations) continue;

        const schema = generateValidations(field)

        validationsFields[field.name] = schema;
    }

    return {
        validationSchema: Yup.object({ ...validationsFields }),
        initialValues: initialValues as T,
        inputs: forms[section],
    };

};

import { FormSection, InputProps } from "@/types/formType";

export const forms: { [key in FormSection]: InputProps[] } = {
  contact: [
    {
      label: "Name",
      name: "name",
      type: "text",
      placeholder: "Enter your full name",
      value: "",
      validations: [
        {
          type: "minLength",
          value: 3,
          message: "Name must be at least 3 characters long",
        },
        {
          type: "required",
          message: "Name is required",
        },
      ],
    },
    {
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "example@email.com",
      value: "",
      validations: [
        {
          type: "isEmail",
          message: "Email is not valid",
        },
        {
          type: "required",
          message: "Email is required",
        },
      ],
    },
    {
      label: "Phone",
      name: "phone",
      type: "text",
      placeholder: "+91 9999999999",
      value: "",
      validations: [
        {
          type: "required",
          message: "Phone number is required",
        },
      ],
    },
    {
        label:'subject',
        name:'subject',
        type:'text',
        placeholder:'Briefly describe your query',
        value:'',
        validations:[
            {
                type:'required',
                message:'Subject is required'
            }
        ]
    },
    {
        label:"How did you hear about us?",
        name:"hear",
        type:"text",
        placeholder:"Let us know how you heard about us",
        value:"",
        validations:[
            {
                type:"required",
                message:"This field is required"
            }
        ]

    },{
        label:'message',
        name:'message',
        type:'textarea',
        placeholder:'Enter your message',
        value:'',
        validations:[
            {
                type:'required',
                message:'Message is required'
            }
        ]
    }
  ],
    address: [
        {
        label: "Address",
        name: "address",
        type: "text",
        placeholder: "Enter your address",
        value: "",
        validations: [
            {
            type: "required",
            message: "Address is required",
            },
        ],
        },
        {
        label: "City",
        name: "city",
        type: "text",
        placeholder: "Enter your city",
        value: "",
        validations: [
            {
            type: "required",
            message: "City is required",
            },
        ],
        },
        {
        label: "State",
        name: "state",
        type: "text",
        placeholder: "Enter your state",
        value: "",
        validations: [
            {
            type: "required",
            message: "State is required",
            },
        ],
        },
        {
        label: "Zip",
        name: "zip",
        type: "text",
        placeholder: "Enter your zip code",
        value: "",
        validations: [
            {
            type: "required",
            message: "Zip code is required",
            },
        ],
        },
    ],
    payment: [
        {
        label: "Cardholder's Name",
        name: "cardName",
        type: "text",
        placeholder: "Enter your name",
        value: "",
        validations: [
            {
            type: "required",
            message: "Name is required",
            },
        ],
        },
        {
        label: "Card Number",
        name: "cardNumber",
        type: "text",
        placeholder: "Enter your card number",
        value: "",
        validations: [
            {
            type: "required",
            message: "Card number is required",
            },
        ],
        },
        {
        label: "Expiration Date",
        name: "expDate",
        type: "text",
        placeholder: "MM/YY",
        value: "",
        validations: [
            {
            type: "required",
            message: "Expiration date is required",
            },
        ],
        },
        {
        label: "CVV",
        name: "cvv",
        type: "text",
        placeholder: "Enter your CVV",
        value: "",
        validations: [
            {
            type: "required",
            message: "CVV is required",
            },
        ],
        },
    ],
};

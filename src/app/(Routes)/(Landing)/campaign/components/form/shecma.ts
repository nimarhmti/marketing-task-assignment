import * as yup from "yup";
export const schema = yup
  .object()
  .shape({
    name: yup.string().required("نام الزامی است"),
    email: yup.string().email("ایمیل معتبر نیست").required("ایمیل الزامی است"),
    phone: yup
      .string()
      .matches(/^[0-9]{11}$/, "شماره موبایل معتبر نیست")
      .required("شماره موبایل الزامی است"),
    description: yup.string().optional().default(""),
    marketing: yup.boolean().default(false),
    advertising: yup.boolean().default(false),
    content: yup.boolean().default(false),
    social: yup.boolean().default(false),
    design: yup.boolean().default(false),
  })
  .test(
    "atLeastOneChecked",
    "حداقل یک گزینه باید انتخاب شود",
    function (value) {
      return (
        value.marketing ||
        value.advertising ||
        value.content ||
        value.social ||
        value.design
      );
    }
  );

export type FormValues = yup.InferType<typeof schema>;

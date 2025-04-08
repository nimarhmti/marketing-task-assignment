export interface TextFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: React.ReactNode;
  error?: string;
  containerClassName?: string;
}

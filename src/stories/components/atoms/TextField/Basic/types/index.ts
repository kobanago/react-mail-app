import { TextFieldProps as BaseTextFieldProps } from '../../Base/types';

export type TextFieldProps = BaseTextFieldProps & {
  resetTextValue?: string;
};

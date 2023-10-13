/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type StockUpdateFormInputValues = {
    name?: string;
    madeAt?: string;
    remaining?: number;
    comment?: string;
};
export declare type StockUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    madeAt?: ValidationFunction<string>;
    remaining?: ValidationFunction<number>;
    comment?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type StockUpdateFormOverridesProps = {
    StockUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    madeAt?: PrimitiveOverrideProps<TextFieldProps>;
    remaining?: PrimitiveOverrideProps<TextFieldProps>;
    comment?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type StockUpdateFormProps = React.PropsWithChildren<{
    overrides?: StockUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    stock?: any;
    onSubmit?: (fields: StockUpdateFormInputValues) => StockUpdateFormInputValues;
    onSuccess?: (fields: StockUpdateFormInputValues) => void;
    onError?: (fields: StockUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: StockUpdateFormInputValues) => StockUpdateFormInputValues;
    onValidate?: StockUpdateFormValidationValues;
} & React.CSSProperties>;
export default function StockUpdateForm(props: StockUpdateFormProps): React.ReactElement;

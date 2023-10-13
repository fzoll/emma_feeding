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
export declare type FeedUpdateFormInputValues = {
    feedAt?: string;
    name?: string;
    comment?: string;
};
export declare type FeedUpdateFormValidationValues = {
    feedAt?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
    comment?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FeedUpdateFormOverridesProps = {
    FeedUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    feedAt?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    comment?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FeedUpdateFormProps = React.PropsWithChildren<{
    overrides?: FeedUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    feed?: any;
    onSubmit?: (fields: FeedUpdateFormInputValues) => FeedUpdateFormInputValues;
    onSuccess?: (fields: FeedUpdateFormInputValues) => void;
    onError?: (fields: FeedUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FeedUpdateFormInputValues) => FeedUpdateFormInputValues;
    onValidate?: FeedUpdateFormValidationValues;
} & React.CSSProperties>;
export default function FeedUpdateForm(props: FeedUpdateFormProps): React.ReactElement;

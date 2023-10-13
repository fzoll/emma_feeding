/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { fetchByPath, validateField } from "./utils";
import { API } from "aws-amplify";
import { getStock } from "../graphql/queries";
import { updateStock } from "../graphql/mutations";
export default function StockUpdateForm(props) {
  const {
    id: idProp,
    stock: stockModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    madeAt: "",
    remaining: "",
    comment: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [madeAt, setMadeAt] = React.useState(initialValues.madeAt);
  const [remaining, setRemaining] = React.useState(initialValues.remaining);
  const [comment, setComment] = React.useState(initialValues.comment);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = stockRecord
      ? { ...initialValues, ...stockRecord }
      : initialValues;
    setName(cleanValues.name);
    setMadeAt(cleanValues.madeAt);
    setRemaining(cleanValues.remaining);
    setComment(cleanValues.comment);
    setErrors({});
  };
  const [stockRecord, setStockRecord] = React.useState(stockModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await API.graphql({
              query: getStock.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getStock
        : stockModelProp;
      setStockRecord(record);
    };
    queryData();
  }, [idProp, stockModelProp]);
  React.useEffect(resetStateValues, [stockRecord]);
  const validations = {
    name: [{ type: "Required" }],
    madeAt: [{ type: "Required" }],
    remaining: [{ type: "Required" }],
    comment: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          name,
          madeAt,
          remaining,
          comment: comment ?? null,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await API.graphql({
            query: updateStock.replaceAll("__typename", ""),
            variables: {
              input: {
                id: stockRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "StockUpdateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={true}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              madeAt,
              remaining,
              comment,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Made at"
        isRequired={true}
        isReadOnly={false}
        value={madeAt}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              madeAt: value,
              remaining,
              comment,
            };
            const result = onChange(modelFields);
            value = result?.madeAt ?? value;
          }
          if (errors.madeAt?.hasError) {
            runValidationTasks("madeAt", value);
          }
          setMadeAt(value);
        }}
        onBlur={() => runValidationTasks("madeAt", madeAt)}
        errorMessage={errors.madeAt?.errorMessage}
        hasError={errors.madeAt?.hasError}
        {...getOverrideProps(overrides, "madeAt")}
      ></TextField>
      <TextField
        label="Remaining"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={remaining}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              madeAt,
              remaining: value,
              comment,
            };
            const result = onChange(modelFields);
            value = result?.remaining ?? value;
          }
          if (errors.remaining?.hasError) {
            runValidationTasks("remaining", value);
          }
          setRemaining(value);
        }}
        onBlur={() => runValidationTasks("remaining", remaining)}
        errorMessage={errors.remaining?.errorMessage}
        hasError={errors.remaining?.hasError}
        {...getOverrideProps(overrides, "remaining")}
      ></TextField>
      <TextField
        label="Comment"
        isRequired={false}
        isReadOnly={false}
        value={comment}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              madeAt,
              remaining,
              comment: value,
            };
            const result = onChange(modelFields);
            value = result?.comment ?? value;
          }
          if (errors.comment?.hasError) {
            runValidationTasks("comment", value);
          }
          setComment(value);
        }}
        onBlur={() => runValidationTasks("comment", comment)}
        errorMessage={errors.comment?.errorMessage}
        hasError={errors.comment?.hasError}
        {...getOverrideProps(overrides, "comment")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || stockModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || stockModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}

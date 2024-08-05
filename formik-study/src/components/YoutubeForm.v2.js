import {
  ErrorMessage,
  FastField,
  Field,
  FieldArray,
  Form,
  Formik,
  useFormik,
} from "formik";
import React, { memo } from "react";
import * as Yup from "yup";
import TextError from "./TextError";

const YoutubeForm = () => {
  const validationSchema = Yup.object({
    name: Yup.string().required(),
    email: Yup.string().email().required(),
    channel: Yup.string().required(),
    // comments: Yup.string().required(), // Manual validation done below
    address: Yup.string().required(),
    social: Yup.object().shape({
      facebook: Yup.string().required(),
      twitter: Yup.string().required(),
    }),
    phoneNumbers: Yup.array(Yup.string().required()).required(),
  });

  const initialValues = {
    name: "",
    email: "",
    channel: "",
    comments: "",
    address: "",
    social: {
      facebook: "",
      twitter: "",
    },
    phoneNumbers: ["", ""],
    phNumbers: [""],
  };

  const onSubmit = (values) => {
    console.log({ values });
  };

  const validateComments = (value) => {
    let error = "";
    if (!value) error = "Required";
    return error;
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      // validateOnChange={false}
      // validateOnBlur={false}
      // validateOnMount
    >
      {(formik) => {
        return (
          <Form /*method="GET"*/>
            <div className="form-control">
              <label htmlFor="name">Name</label>
              <Field type="text" id="name" name="name" />
              <ErrorMessage name="name" component={TextError} />
            </div>

            <div className="form-control">
              <label htmlFor="email">Email</label>
              <Field type="text" id="email" name="email" />
              <ErrorMessage name="email">
                {(errorMessage) => {
                  return <TextError>{errorMessage}</TextError>;
                }}
              </ErrorMessage>
            </div>

            <div className="form-control">
              <label htmlFor="channel">Channel</label>
              <Field
                type="text"
                id="channel"
                name="channel"
                placeholder="Enter your youtube channel name"
              />
              <ErrorMessage
                name="channel"
                render={(errorMessage) => <p>{errorMessage}</p>}
              />
            </div>

            <div className="form-control">
              <label htmlFor="comments">Comments</label>
              <Field
                as="textarea"
                type="text"
                id="comments"
                name="comments"
                validate={validateComments}
              />
              <ErrorMessage name="comments" />
            </div>

            <div className="form-control">
              <label htmlFor="address">Address</label>
              {/* Will not re render if other input changes */}
              <FastField name="address">
                {(props) => {
                  const { field, form, meta } = props;
                  console.log({ field });
                  return <input type="text" {...field} id="address" />;
                }}
              </FastField>
              <ErrorMessage name="address" />
            </div>

            <div className="form-control">
              <label htmlFor="facbook">Facebook profile</label>
              <Field type="text" id="facebook" name="social.facebook" />
              <ErrorMessage name="social.facebook" />
            </div>

            <div className="form-control">
              <label htmlFor="twitter">Twitter profile</label>
              <Field type="text" id="twitter" name="social.twitter" />
              <ErrorMessage name="social.twitter" />
            </div>

            <div className="form-control">
              <label htmlFor="primaryPhone">Primary phone</label>
              <Field type="text" id="primaryPhone" name="phoneNumbers[0]" />
              <ErrorMessage name="phoneNumbers[0]" />
            </div>

            <div className="form-control">
              <label htmlFor="secondaryPhone">Secondary phone</label>
              <Field type="text" id="secondaryPhone" name="phoneNumbers[1]" />
              <ErrorMessage name="phoneNumbers[1]" />
            </div>

            <div className="form-control">
              <label>List of phone number</label>
              <FieldArray name="phNumbers">
                {(fieldArrayProps) => {
                  return <MemoizedComponent {...fieldArrayProps} />;
                }}
              </FieldArray>
            </div>

            <div className="form-control">
              <button
                type="button"
                onClick={() => {
                  formik.setFieldTouched("comments", true);
                  formik.validateField("comments");
                }}
              >
                Validate comments
              </button>
              <button
                type="button"
                onClick={() => {
                  formik.setTouched({
                    name: true,
                    address: true,
                    channel: true,
                    comments: true,
                  });
                  formik.validateForm();
                }}
              >
                Validate all
              </button>
              <button
                type="submit"
                // dirty && valid then submit otherwise don't
                disabled={!(formik.isValid && formik.dirty)}
              >
                Submit
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

const MemoizedComponent = memo(
  (fieldArrayProps) => {
    const { push, remove, insert, form } = fieldArrayProps;
    const { values } = form;
    const { phNumbers } = values;
    console.log({ msg: "Rendering :(" });
    return (
      <div>
        {phNumbers?.map((phNumber, index) => {
          return (
            <div key={index}>
              <Field name={`phNumbers[${index}]`} />
              <button type="button" onClick={() => remove(index)}>
                -
              </button>
              <button type="button" onClick={() => insert(index + 1, "")}>
                +
              </button>
            </div>
          );
        })}
        <button type="button" onClick={() => push("")}>
          +
        </button>
      </div>
    );
  },
  (preProps, nextProps) => {
    const pPhNumbers = preProps?.form?.values?.phNumbers;
    const nPhNumbers = nextProps?.form?.values?.phNumbers;
    if (JSON.stringify(pPhNumbers) === JSON.stringify(nPhNumbers)) {
      return true; // Done re render
    }

    return false; // Re render
  }
);

export default YoutubeForm;

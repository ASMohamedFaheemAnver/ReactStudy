import {
  ErrorMessage,
  FastField,
  Field,
  FieldArray,
  Form,
  Formik,
  useFormik,
} from "formik";
import React from "react";
import * as Yup from "yup";
import TextError from "./TextError";

const YoutubeForm = () => {
  const validationSchema = Yup.object({
    name: Yup.string().required(),
    email: Yup.string().email().required(),
    channel: Yup.string().required(),
    comments: Yup.string().required(),
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
    phNumbers: ["fafa"],
  };

  const onSubmit = (values) => {
    console.log({ values });
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
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
          <Field as="textarea" type="text" id="comments" name="comments" />
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
              const { push, remove, insert, form } = fieldArrayProps;
              const { values } = form;
              const { phNumbers } = values;
              return (
                <div>
                  {phNumbers?.map((phNumber, index) => {
                    return (
                      <div key={index}>
                        <Field name={`phNumbers[${index}]`} />
                        <button type="button" onClick={() => remove(index)}>
                          -
                        </button>
                        <button
                          type="button"
                          onClick={() => insert(index + 1, "")}
                        >
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
            }}
          </FieldArray>
        </div>

        <div className="form-control">
          <button type="submit">Submit</button>
        </div>
      </Form>
    </Formik>
  );
};

export default YoutubeForm;

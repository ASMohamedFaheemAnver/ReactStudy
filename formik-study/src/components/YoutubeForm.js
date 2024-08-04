import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";

const YoutubeForm = () => {
  const validationSchema = Yup.object({
    name: Yup.string().required(),
    email: Yup.string().email().required(),
    channel: Yup.string().required(),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      channel: "",
    },
    onSubmit: (values) => {
      console.log({ values });
    },
    // validate: (values) => {
    //   // errors.name, errors.email, errors.channel should defined for error tracking
    //   const errors = {};
    //   if (!values.name) {
    //     errors.name = "Required name";
    //   }
    //   if (!values.email) {
    //     errors.email = "Required email";
    //   }
    //   if (!values.channel) {
    //     errors.channel = "Required channel";
    //   }
    //   return errors;
    // },
    validationSchema,
  });

  return (
    <div>
      <form /*method="GET"*/ onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && (
          <span style={{ color: "red" }}>{formik.errors.name}</span>
        )}

        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          // onChange={(e) => formik.handleChange("email")(e?.target?.value)}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />

        {formik.touched.email && (
          <span style={{ color: "red" }}>{formik.errors.email}</span>
        )}

        <label htmlFor="channel">Channel</label>
        <input
          type="text"
          id="channel"
          name="channel"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.channel}
        />

        {formik.touched.channel && (
          <span style={{ color: "red" }}>{formik.errors.channel}</span>
        )}
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default YoutubeForm;

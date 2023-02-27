import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from 'yup';
import React from "react";

export default function CoolForm({ onSubmit = () => { } }) {
  let navigate = useNavigate();
  return (
    <main style={{ padding: "1rem" }}>
      <button onClick={() => { navigate("/home") }}>
        Back to home page
      </button>
      <h2>Form</h2>
      <FormBlank onSubmit={onSubmit} />
    </main>
  );
}

const FormBlank = ({ onSubmit = () => { } }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        onSubmit(values);
        resetForm({ values: '' })
      }}
    >
      {formik => (
        <Form onSubmit={formik.handleSubmit} className='container'>
          <div className="container-fluid">
            <label htmlFor="firstName" className="p-2"> First Name
              <Field id="firstName" type='text' name="firstName" />
              {formik.touched.firstName && formik.errors.firstName ? (
                <div>{formik.errors.firstName}</div>
              ) : null}
            </label>

          </div>
          <div className="container-fluid">
            <label htmlFor="lastName" className="p-2"> Last Name
              <Field id="lastName" type='text' name="lastName" />
              {formik.touched.lastName && formik.errors.lastName ? (
                <div>{formik.errors.lastName}</div>
              ) : null}
            </label>
          </div>
          <div className="container-fluid">
            <label htmlFor="age" className="p-2"> Age
              <Field id="age" type='text' name="age" />
              {formik.touched.age && formik.errors.age ? (
                <div>{formik.errors.age}</div>
              ) : null}
            </label>
          </div>
          <div className="container-fluid">
            <RadioGroup
              name="gender"
              title={"Gender"}
            >
              <RadioGroupItem groupName="gender" value="female" label="Female"></RadioGroupItem>
              <RadioGroupItem groupName="gender" value="male" label="Male"></RadioGroupItem>
              <RadioGroupItem groupName="gender" value="other" label="Other"></RadioGroupItem>

              <div> {formik.errors.gender} </div>
            </RadioGroup>

          </div>
          <div className="container-fluid">
            <div id="state-radio-group">State</div>
            <div aria-labelledby="state-radio-group" role="group">
              <label className="p-2">Living
                <Field type="radio" name="state" value="living" />
              </label>
              <label className="p-2">Deceased
                <Field type="radio" name="state" value="deceased" />
              </label>
              <div>{formik.errors.state}</div>
            </div>
          </div>

          <CheckBoxItem
            id="isPrivate"
            label="Should profile be private?"
            error={formik.errors.isPrivate}
          />

          <CheckBoxItem
            id="isPreferred"
            label="Is this the preferred profile?"
            error={formik.errors.isPreferred}
          />

          <div className="container-fluid">
            <label htmlFor="description" className="p-2"> Add a description (optional)
              <Field id="" type='text' name="description" />
            </label>
          </div>

          <div className="container-fluid p-2">
            <button type='submit'>Save</button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

const CheckBoxItem = ({ id, label, error = "" }) => {
  return (
    <div className="container-fluid">
      <label htmlFor={id} className="p-2"> {label} </label>
      <Field id={id} type='checkbox' name={id} />
      <div>{error}</div>
    </div>
  );
}

const RadioGroup = ({ title, name, children }) => {
  const id = `${name}-radio-group`;

  return <>
    <div id={id}>{title}</div>
    <div aria-labelledby={id} role="group">
      {children}
    </div>
  </>;
}

const RadioGroupItem = ({ groupName, value, label }) => {
  return (
    <label className="p-2">
      <Field type="radio" name={groupName} value={value} className="p-2" />
      {label}
    </label>
  );
};

const initialValues = {
  firstName: '',
  lastName: '',
  age: '',
  gender: '',
  state: '',
  isPrivate: false,
  isPreferred: false,
  description: '',
};

const validationSchema = Yup.object({
  firstName: Yup.string()
    .required('First Name is required')
    .min(4, "First Name must be longer than 4 characters")
    .max(30, "First Name must be shorter than 30 characters"),
  lastName: Yup.string()
    .required('Last Name is required')
    .min(4, "Last Name must be longer than 4 characters")
    .max(30, "Last Name must be shorter than 30 characters"),
  age: Yup.number()
    .required("Age is required")
    .positive()
    .min(1, "Minimum age 1")
    .max(110, "Maximum age 110"),
  state: Yup.string()
    .required("State is required"),
  gender: Yup.string()
    .required("gender is required")
});
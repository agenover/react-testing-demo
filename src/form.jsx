import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from 'yup';

export default function CoolForm() {
    let navigate = useNavigate();
    return (
      <main style={{ padding: "1rem" }}>
        <button onClick={() => {navigate("/home")}}>
          Back to home page
        </button>
        <h2>Form</h2>
        <FormBlank />
      </main>
    );
  }

  const FormBlank = () => {
    return (
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          age: '',
          gender: '',
          isPrivate: false,
          isPreferred: false
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .required('Required')
            .min(4, "First Name must be longer than 4 characters")
            .max(30, "First Name must be shorter than 30 characters"),
          lastName: Yup.string()
            .required('Required')
            .min(4, "Last Name nust be longer than 4 characters")
            .max(30, "Last Name nust be shorter than 30 characters"),
          age: Yup.number().required().positive().integer('Age must be anumber')
        })}
        onSubmit={(values) => (
          console.log(values)
        )}
      >
        {formik => (
          <form onSubmit={formik.handleSubmit}>
            <label htmlFor="firstName"> First Name </label>
            <input id="" type='text' {...formik.getFieldProps('firstName')} />
              {formik.touched.firstName && formik.errors.firstName ? (
                <div>{formik.errors.firstName}</div>
              ) : null}

            <label htmlFor="lastName"> Last Name </label>
            <input id="" type='text'  {...formik.getFieldProps('lastName')} />
              {formik.touched.lastName && formik.errors.lastName ? (
                <div>{formik.errors.lastName}</div>
              ) : null}

            <label htmlFor="age"> Age </label>
            <input id="" type='text' {...formik.getFieldProps('age')} />
              {formik.touched.age && formik.errors.age ? (
                <div>{formik.errors.age}</div>
              ) : null}

            <label htmlFor="gender"> Gender </label>
            <input id="" type='text' />

            <label htmlFor="isPrivate"> Should profile be private </label>
            <input id="" type='checkbox' />

            <label htmlFor="preferred"> Is this the preferred profile </label>
            <input id="" type='checkbox' />

            <label htmlFor="description"> Add a description (optional) </label>
            <input id="" type='text' />

            <button type='submit'>Save</button>
          </form>
        )}
      </Formik>
    );
  };
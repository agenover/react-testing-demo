import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
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
          state: '',
          isPrivate: false,
          isPreferred: false,
          description: '',
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .required('First Name is Required')
            .min(4, "First Name must be longer than 4 characters")
            .max(30, "First Name must be shorter than 30 characters"),
          lastName: Yup.string()
            .required('Last Name is Required')
            .min(4, "Last Name nust be longer than 4 characters")
            .max(30, "Last Name nust be shorter than 30 characters"),
          age: Yup.number()
            .required("Ages is required")
            .positive()
            .min(1, "Minimum age 1")
            .max(110, "Maximum age 110"),
          state: Yup.string()
            .required("State is required"),
          gender: Yup.string()
            .required("gender is required")
        })}
        onSubmit={(values) => (
          console.log(values)
        )}
      >
        {formik => (
          <Form onSubmit={formik.handleSubmit} className='container'>
            <div className="container-fluid">
              <label htmlFor="firstName" className="p-2"> First Name 
                <Field id="" type='text' name="firstName" />
                  {formik.touched.firstName && formik.errors.firstName ? (
                    <div>{formik.errors.firstName}</div>
                  ) : null}
              </label>
              
            </div>
            <div className="container-fluid">
              <label htmlFor="lastName" className="p-2"> Last Name 
                <Field id="" type='text' name="lastName" />
                  {formik.touched.lastName && formik.errors.lastName ? (
                    <div>{formik.errors.lastName}</div>
                  ) : null}
              </label>
            </div>
            <div className="container-fluid">
              <label htmlFor="age" className="p-2"> Age 
                <Field type='text' name="age" />
                  {formik.touched.age && formik.errors.age ? (
                    <div>{formik.errors.age}</div>
                  ) : null}
              </label>
            </div>
            <div className="container-fluid">
              <div id="gender-radio-group">Gender</div>
                <div aria-labelledby="gender-radio-group" role="group">
                  <label className="p-2">
                    <Field type="radio" name="gender" value="male"  className="p-2"/>
                    Male
                  </label>
                  <label>
                    <Field type="radio" name="gender" value="female"  className="p-2"/>
                    Female
                  </label>
                  <label>
                    <Field type="radio" name="gender" value="other"  className="p-2"/>
                    Other
                  </label>
                  <div>{formik.errors.gender}</div>
                </div>
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
            <div className="container-fluid">
              <label htmlFor="isPrivate" className="p-2"> Should profile be private? </label>
                <Field id="" type='checkbox' name="isPrivate"/>
              <div>{formik.errors.isPrivate}</div>
            </div>
            <div className="container-fluid">
              <label htmlFor="isPreferred" className="p-2"> Is this the preferred profile? </label>
                <Field id="" type='checkbox' name="isPreferred" />
              <div>{formik.isPreferred}</div>
            </div>
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
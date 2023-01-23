import { useNavigate } from "react-router-dom";
import { Formik, Field } from "formik";
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
          gender: [],
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
            .integer('Age must be a number between 1 and 110'),
          gender: Yup.string()
            .required("Gender is required"),
        })}
        onSubmit={(values) => (
          console.log(values)
        )}
      >
        {formik => (
          <form onSubmit={formik.handleSubmit} className='container'>
          <div className="container-fluid py-2">
            <label htmlFor="firstName"> First Name </label>
            <input id="" type='text' {...formik.getFieldProps('firstName')} />
              {formik.touched.firstName && formik.errors.firstName ? (
                <div>{formik.errors.firstName}</div>
              ) : null}
          </div>
            
          <div className="container-fluid py-2">
            <label htmlFor="lastName"> Last Name </label>
            <input id="" type='text'  {...formik.getFieldProps('lastName')} />
              {formik.touched.lastName && formik.errors.lastName ? (
                <div>{formik.errors.lastName}</div>
              ) : null}
          </div>
            
          <div className="container-fluid py-2">
            <label htmlFor="age"> Age </label>
            <input id="" type='text' {...formik.getFieldProps('age')} />
              {formik.touched.age && formik.errors.age ? (
                <div>{formik.errors.age}</div>
              ) : null}
          </div>

          <div className="container-fluid py-2">
            <div htmlFor="gender"> Gender
              <label>
                <Field type="radio" name="gender" value="male" />
                Male
              </label>
              <label>
                <Field type="radio" name="gender" value="female" />
                Female
              </label>
              <label>
                <Field type="radio" name="gender" value="other" />
                Other
              </label>
            </div>
            <input id="" type='text' {...formik.getFieldProps('gender')} />
              {formik.touched.gender && formik.errors.gender ? (
                <div>{formik.errors.gender}</div>
              ) : null}
              </div>

              <div className="container-fluid py-2">
              <label htmlFor="state"> State </label>
              <input id="" type='text' />
            </div>

            <div className="container-fluid py-2">
            <label htmlFor="isPrivate"> Should profile be private </label>
              <input id="" type='checkbox' />
            </div>

            <div className="container-fluid py-2">
              <label htmlFor="isPreferred"> Is this the preferred profile </label>
              <input id="" type='checkbox' />
            </div>

            <div className="container-fluid py-2">
              <label htmlFor="description"> Add a description (optional) </label>
              <input id="" type='text' {...formik.getFieldProps('description')} />
            </div>

            <button type='submit'>Save</button>
          </form>
        )}
      </Formik>
    );
  };
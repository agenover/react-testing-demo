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
          isPreferred: Yup.boolean()
        })}
        onSubmit={(values) => (
          console.log(values)
        )}
      >
        {formik => (
          <form onSubmit={formik.handleSubmit} className='container'>
            <div className="container-fluid">
              <label htmlFor="firstName" className="p-2"> First Name </label>
              <input id="" type='text' {...formik.getFieldProps('firstName')} />
                {formik.touched.firstName && formik.errors.firstName ? (
                  <div>{formik.errors.firstName}</div>
                ) : null}
            </div>
              
            <div className="container-fluid">
              <label htmlFor="lastName" className="p-2"> Last Name </label>
              <input id="" type='text'  {...formik.getFieldProps('lastName')} />
                {formik.touched.lastName && formik.errors.lastName ? (
                  <div>{formik.errors.lastName}</div>
                ) : null}
            </div>
              
            <div className="container-fluid">
              <label htmlFor="age" className="p-2"> Age </label>
              <input id="" type='text' {...formik.getFieldProps('age')} />
                {formik.touched.age && formik.errors.age ? (
                  <div>{formik.errors.age}</div>
                ) : null}
            </div>

            <div className="container-fluid">
              <div htmlFor="gender" className="p-2"> Gender
                <label className="p-2">Male</label>
                <input type="radio" name="gender" value="male" />
                <label className="p-2">Female</label>
                <input type="radio" name="gender" value="female" />
                <label className="p-2">Other</label>
                <input type="radio" name="gender" value="other" />
              </div>
            </div>

            <div className="container-fluid">
              <label htmlFor="state" className="p-2"> State </label>
                <input type="radio" name="state" value="living" />
                <label className="p-2">Living</label>
                <input type="radio" name="state" value="deceased" />
                <label className="p-2">Deceased</label>
            </div>

            <div className="container-fluid">
              <label htmlFor="isPrivate" className="p-2"> Should profile be private </label>
              <input id="" type='checkbox' {...formik.getFieldProps('isPrivate')}/>
              <div>{formik.errors.isPrivate}</div>
            </div>

            <div className="container-fluid">
              <label htmlFor="isPreferred" className="p-2"> Is this the preferred profile </label>
              <input id="" type='checkbox' {...formik.getFieldProps('isPreferred')} />
              <div>{formik.isPreferred}</div>
            </div>

            <div className="container-fluid">
              <label htmlFor="description" className="p-2"> Add a description (optional) </label>
              <input id="" type='text' {...formik.getFieldProps('description')} />
            </div>

            <button type='submit'>Save</button>
          </form>
        )}
      </Formik>
    );
  };
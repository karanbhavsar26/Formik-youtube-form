import { Form, field, Formik } from "formik";
import * as Yup from "yup";

export default function Formikform() {
  const initialValues = {};
  const validationSchema = {};
  const onSubmit = (values) => console.log(values);
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (<Form>
          <button type="submit">Submit</button>
        </Form>)
      }}
    </Formik>
  );
}

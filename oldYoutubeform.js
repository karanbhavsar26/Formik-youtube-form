import { useFormik } from "formik";
import * as  YUP from "yup"
const initialValues= {
  name: "",
  email: "",
  channel: "",
}
const onSubmit= (values) => {
  console.log(values);
}

const validationSchema=YUP.object({
  name:YUP.string().required("Required "),
  email:YUP.string().email("invalid Email").required("Required "),
  channel:YUP.string().required("Required ")
})

export default function OldYoutubeform() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    // validate,
    validationSchema
  });
    console.log(formik.touched);
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-control">
        <label for="name">Name</label>
        <input
          type={"text"}
          name="name"
          id="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        ></input>
        {formik.errors.name && formik.touched.name?<div className="error">{formik.errors.name}</div>:null}
        </div>
        <div className="form-control">

        <label for="email">email</label>
        <input
          type={"email"}
          name="email"
          id="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        ></input>
        {formik.errors.email && formik.touched.email?<div className="error">{formik.errors.email}</div>:null}
        </div>

        <div className="form-control">

        <label for="channel">channel</label>
        <input
          type={"text"}
          name="channel"
          id="channel"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.channel}
        ></input>
        {formik.errors.channel && formik.touched.channel?<div className="error">{formik.errors.channel}</div>:null}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

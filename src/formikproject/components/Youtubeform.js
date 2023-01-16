import { Formik, Form, Field, ErrorMessage } from "formik";
import * as YUP from "yup";
const initialValues = {
  name: "",
  email: "",
  channel: "",
  comments: "",
  address: "",
  social:{
    facebook:"",
    twitter:''
  },
  phonenumber:["",'']
};
const onSubmit = (values) => {
  console.log(values);
};

const validationSchema = YUP.object({
  name: YUP.string().required("Required "),
  email: YUP.string().email("invalid Email").required("Required "),
  channel: YUP.string().required("Required "),
});

export default function Youtubeform() {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <Form>
        <div className="form-control">
          <label for="name">Name</label>
          <Field type={"text"} name="name" id="name" placeholder="Name"></Field>
          <ErrorMessage name="name" >{
              (errmsg)=><div className="error">{errmsg}</div>
              
            }
          </ErrorMessage>
        </div>
        <div className="form-control">
          <label for="email">email</label>
          <Field
            type={"email"}
            name="email"
            id="email"
            placeholder="Email"
          ></Field>
          <ErrorMessage name="email" >
            {
              (errmsg)=><div className="error">{errmsg}</div>
              
            }
          </ErrorMessage>
        </div>

        <div className="form-control">
          <label for="channel">channel</label>
          <Field
            type={"text"}
            name="channel"
            id="channel"
            placeholder="Channel"
          ></Field>
          <ErrorMessage name="channel" >{
              (errmsg)=><div className="error">{errmsg}</div>
              
            }
          </ErrorMessage>
        </div>
        <div className="form-control">
          <label htmlFor="comments">Comments</label>
          <Field
            as="textarea"
            name="comments"
            id="comments"
            placeholder="Comments..."
          ></Field>
        </div>
        <div className="form-control">
          <label htmlFor="address">Address</label>
          <Field name="address">
            {(props) => {
              const { field, form, meta } = props;
              return (
                <div>
                  <input type={"text"} id="address" {...field} />
                  {meta.error && meta.touched?<div>{meta.error}</div>:null}
                </div>
              );
             
            }}
          </Field>
        </div>
        <div>
          <label htmlFor="facebook">facebook</label>
          <Field type="text" id="facebook" name="social.facebook"></Field>
        </div>
        <div>
          <label htmlFor="twitter">twitter</label>
          <Field type="text" id="twitter" name="social.twitter"></Field>
        </div>
        <div>
          <label htmlFor="phonenumber">phonenumber 1</label>
          <Field type="text" id="phonenumber" name="phonenumber[0]"></Field>
        </div>
        <div>
          <label htmlFor="phonenumber">phonenumber 2</label>
          <Field type="text" id="phonenumber" name="phonenumber[1]"></Field>
        </div>


        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}

import React, { useState } from "react";
import Article from "components/layouts/Article";
import { Formik } from "formik";
import * as Yup from "yup";
import dynamic from "next/dynamic";
import { EditorProps } from "react-draft-wysiwyg";
import { OutputData } from "@editorjs/editorjs";

export interface IAppProps {}

const schema = Yup.object().shape({
  title: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const EditorBlock = dynamic(() => import("utils/Editor"), {
  ssr: false,
});

export default function App(props: IAppProps) {
  const [data, setData] = useState<OutputData>();
  return (
    <Article>
      <Formik
        validationSchema={schema}
        initialValues={{ title: "" }}
        onSubmit={(values) => {
          alert(JSON.stringify(values));
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <div className="title">
            <div className="form">
              <form noValidate onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="title"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.title}
                  placeholder="Enter Title"
                  className="form-control inp_text"
                  id="title"
                />

                <p className="error">
                  {errors.title && touched.title && errors.title}
                </p>

                <EditorBlock
                  data={data}
                  onChange={setData}
                  holder="editorjs-container"
                />

                <button type="submit">Login</button>
              </form>
            </div>
          </div>
        )}
      </Formik>
    </Article>
  );
}

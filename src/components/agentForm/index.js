import React from "react";
import { ErrorMessage, Formik } from "formik";
import { mixed, object, string } from "yup";
import { Context } from "../../App";
import "./index.scss";
import { useParams } from "react-router-dom";

const CustomErrorMessage = ({ children }) => (
  <span style={{ color: "red", fontSize: "14px" }}>{children}</span>
);

const validationSchema = object().shape({
  addField: mixed()
    .required("File is required")
    .test(
      "fileFormat",
      "Unsupported file format",
      (value) => value && ["image/jpeg", "image/png"].includes(value.type)
    )
    .test(
      "fileSize",
      "File 1 size is too large",
      (value) => value && value.size <= 5000000
    ),
  panField: mixed()
    .required("File is required")
    .test(
      "fileFormat",
      "Unsupported file format",
      (value) => value && ["image/jpeg", "image/png"].includes(value.type)
    )
    .test(
      "fileSize",
      "File 2 size is too large",
      (value) => value && value.size <= 5000000
    ),
  adharField: mixed()
    .required("File is required")
    .test(
      "fileFormat",
      "Unsupported file format",
      (value) => value && ["image/jpeg", "image/png"].includes(value.type)
    )
    .test(
      "fileSize",
      "File 2 size is too large",
      (value) => value && value.size <= 5000000
    ),
  remark: string().required("Remark is required"),
  addRadio: string().required("A option is required"),
  panRadio: string().required("A option is required"),
  adharRadio: string().required("A option is required"),
});

const AgentForm = () => {

  const resetForm = () => {
    Array.from(document.querySelectorAll("input")).forEach(
      (input) => (input.value = "")
    );
  };

  // const { username } = (props.location && props.location.state) || {};
  const { clientName } = useParams();

  return (
    <Context.Consumer>
      {({ openSideBar, LightModeOn }) => {
        return (
          <div
            className={`content content ${LightModeOn ? "light" : ""} ${
              openSideBar ? "" : "open"
            }`}
          >
            <Formik
              enableReinitialize
              validationSchema={validationSchema}
              initialValues={{
                addField: null,
                panField: null,
                adharField: null,
                remark: "",
                addRadio: "",
                panRadio: "",
                adharRadio: "",
              }}
              onSubmit={(
                values,
                { setSubmitting, setFieldError, resetForm }
              ) => {
                resetForm({ values: "" });
                validationSchema
                  .validate(values)
                  .then(() => {
                    console.log(values);
                    // resetForm()
                  })
                  .catch((err) => {
                    setFieldError("file", err.errors[0]);
                  })
                  .finally(() => {
                    setSubmitting(false);
                  });
              }}
            >
              {({
                handleChange,
                handleSubmit,
                values,
                setFieldValue,
                isValid,
              }) => (
                <div className="container-fluid pt-4 px-4">
                  <div className="col">
                    <div
                      className={`${
                        LightModeOn ? "bg-white text-dark" : "bg-secondary"
                      } rounded h-100 p-4`}
                    >
                      <h1>hii</h1>
                      <h6 className={`mb-4 ${LightModeOn ? "text-dark" : ""}`}>
                        Upload the Documents Here
                      </h6>
                      <div className="mb-3">
                        <div className="row g-3 align-items-center mb-4">
                          <div className="col">
                            <label htmlFor="formFile" className="form-label">
                              Address Proof:
                            </label>
                          </div>
                          <div className="col-12 col-lg-4">
                            <input
                              className="form-control bg-dark"
                              type="file"
                              id="formFile"
                              name="addField"
                              onChange={(event) => {
                                setFieldValue(
                                  "addField",
                                  event.currentTarget.files[0]
                                );
                              }}
                            />
                          </div>
                          <div className="col">
                            <ErrorMessage
                              component={CustomErrorMessage}
                              name="addField"
                            />
                          </div>
                        </div>
                        <div className="row g-3 align-items-center mb-4">
                          <div className="col">
                            <label htmlFor="formFile" className="form-label">
                              Pan Card:
                            </label>
                          </div>
                          <div className="col-12 col-lg-4">
                            <input
                              className="form-control bg-dark"
                              type="file"
                              id="formFile"
                              name="panField"
                              onChange={(event) => {
                                setFieldValue(
                                  "panField",
                                  event.currentTarget.files[0]
                                );
                              }}
                            />
                          </div>
                          <div className="col">
                            <ErrorMessage
                              component={CustomErrorMessage}
                              name="panField"
                            />
                          </div>
                        </div>
                        <div className="row g-3 align-items-center mb-4">
                          <div className="col">
                            <label htmlFor="formFile" className="form-label">
                              Aadhaar Card:
                            </label>
                          </div>
                          <div className="col-12 col-lg-4">
                            <input
                              className="form-control bg-dark"
                              type="file"
                              id="formFile"
                              name="adharField"
                              onChange={(event) => {
                                setFieldValue(
                                  "adharField",
                                  event.currentTarget.files[0]
                                );
                              }}
                            />
                          </div>
                          <div className="col">
                            <ErrorMessage
                              component={CustomErrorMessage}
                              name="adharField"
                            />
                          </div>
                        </div>
                        <div className="row g-3 align-items-center mb-4">
                          <div className="col">
                            <label htmlFor="formFile" className="form-label">
                              Is Address Proof valid?
                            </label>
                          </div>
                          <div className="col-12 col-lg-4">
                            <div className="form-check form-check-inline">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="addRadio"
                                onChange={(event) => {
                                  setFieldValue(
                                    "addRadio",
                                    event.currentTarget.value
                                  );
                                }}
                                id="inlineRadio1"
                                value="yes"
                                checked={values.addRadio === "yes"}
                              />
                              <label
                                className="form-check-label"
                                htmlFor="inlineRadio1"
                              >
                                Yes
                              </label>
                            </div>
                            <div className="form-check form-check-inline">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="addRadio"
                                onChange={(event) => {
                                  setFieldValue(
                                    "addRadio",
                                    event.currentTarget.value
                                  );
                                }}
                                id="inlineRadio2"
                                value="no"
                                checked={values.addRadio === "no"}
                              />
                              <label
                                className="form-check-label"
                                htmlFor="inlineRadio2"
                              >
                                No
                              </label>
                            </div>
                          </div>
                          <div className="col">
                            <ErrorMessage
                              component={CustomErrorMessage}
                              name="addRadio"
                            />
                          </div>
                        </div>
                        <div className="row g-3 align-items-center mb-4">
                          <div className="col">
                            <label htmlFor="formFile" className="form-label">
                              Is Pan valid?
                            </label>
                          </div>
                          <div className="col-12 col-lg-4">
                            <div className="form-check form-check-inline">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="panRadio"
                                onChange={(event) => {
                                  setFieldValue(
                                    "panRadio",
                                    event.currentTarget.value
                                  );
                                }}
                                id="inlineRadio1"
                                value="yes"
                                checked={values.panRadio === "yes"}
                              />
                              <label
                                className="form-check-label"
                                htmlFor="inlineRadio1"
                              >
                                Yes
                              </label>
                            </div>
                            <div className="form-check form-check-inline">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="panRadio"
                                onChange={(event) => {
                                  setFieldValue(
                                    "panRadio",
                                    event.currentTarget.value
                                  );
                                }}
                                id="inlineRadio2"
                                value="no"
                                checked={values.panRadio === "no"}
                              />
                              <label
                                className="form-check-label"
                                htmlFor="inlineRadio2"
                              >
                                No
                              </label>
                            </div>
                          </div>
                          <div className="col">
                            <ErrorMessage
                              component={CustomErrorMessage}
                              name="panRadio"
                            />
                          </div>
                        </div>
                        <div className="row g-3 align-items-center mb-4">
                          <div className="col">
                            <label htmlFor="formFile" className="form-label">
                              Is Aadhaar valid?
                            </label>
                          </div>
                          <div className="col-12 col-lg-4">
                            <div className="form-check form-check-inline">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="adharRadio"
                                onChange={(event) => {
                                  setFieldValue(
                                    "adharRadio",
                                    event.currentTarget.value
                                  );
                                }}
                                id="inlineRadio1"
                                value="yes"
                                checked={values.adharRadio === "yes"}
                              />
                              <label
                                className="form-check-label"
                                htmlFor="inlineRadio1"
                              >
                                Yes
                              </label>
                            </div>
                            <div className="form-check form-check-inline">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="adharRadio"
                                onChange={(event) => {
                                  setFieldValue(
                                    "adharRadio",
                                    event.currentTarget.value
                                  );
                                }}
                                id="inlineRadio2"
                                value="no"
                                checked={values.adharRadio === "no"}
                              />
                              <label
                                className="form-check-label"
                                htmlFor="inlineRadio2"
                              >
                                No
                              </label>
                            </div>
                          </div>
                          <div className="col">
                            <ErrorMessage
                              component={CustomErrorMessage}
                              name="adharRadio"
                            />
                          </div>
                        </div>
                        <div className="row g-3 align-items-center mb-4">
                          <div className="col">
                            <label htmlFor="formFile" className="form-label">
                              Remarks:
                            </label>
                          </div>
                          <div className="col-12 col-lg-4">
                            <input
                              type="text"
                              className="form-control"
                              aria-describedby="passwordHelpInline"
                              name="remark"
                              value={values.remark}
                              onChange={handleChange("remark")}
                            />
                          </div>
                          <div className="col">
                            <ErrorMessage
                              component={CustomErrorMessage}
                              name="remark"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="m-n2">
                        <button
                          type="button"
                          onClick={() => {
                            handleSubmit();
                            resetForm();
                          }}
                          className="btn-upload m-2"
                          disabled={!isValid}
                        >
                          Upload
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </Formik>
          </div>
        );
      }}
    </Context.Consumer>
  );
};

export default AgentForm;

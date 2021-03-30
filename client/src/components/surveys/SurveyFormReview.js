import React from "react";
import { connect } from "react-redux";
import formFields from "./formFields";
import { withRouter } from "react-router-dom";
import * as actions from "../../actions";

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
  const reviewFields = formFields.map(({ label, name }) => {
    return (
      <div key={name} style={{ marginBottom: "20px" }}>
        <label> {label} </label>
        <div>{formValues[name]}</div>
      </div>
    );
  });

  return (
    <div
      style={{
        maxWidth: "70%",
        margin: "auto",
        marginTop: "40px",
        overflow: "auto",
      }}
    >
      <h5>Please confirm your entries</h5>
      {reviewFields}
      <button
        className="yellow darken-2 white-text btn-flat"
        onClick={onCancel}
      >
        Go back
      </button>
      <button
        onClick={() => submitSurvey(formValues, history)}
        className="green  btn-flat white-text right"
      >
        Send Survey
        <i className="material-icons right">email</i>
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { formValues: state.form.surveyForm.values };
};

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));

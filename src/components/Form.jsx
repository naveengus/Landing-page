import React from "react";

function Form() {
  return (
    <>
      <form
        className="form-subscribe"
        id="contactFormFooter"
        data-sb-form-api-token="API_TOKEN"
      >
        {/* <!-- Email address input--> */}
        <div className="row">
          <div className="col">
            <input
              className="form-control form-control-lg"
              id="emailAddressBelow"
              type="email"
              placeholder="Email Address"
              data-sb-validations="required,email"
            />
            <div
              className="invalid-feedback text-white"
              data-sb-feedback="emailAddressBelow:required"
            >
              Email Address is required.
            </div>
            <div
              className="invalid-feedback text-white"
              data-sb-feedback="emailAddressBelow:email"
            >
              Email Address Email is not valid.
            </div>
          </div>
          <div className="col-auto">
            <button
              className="btn btn-primary btn-lg disabled"
              id="submitButton"
              type="submit"
            >
              Submit
            </button>
          </div>
        </div>
        {/* <!-- Submit success message-->
                            <!---->
                            <!-- This is what your users will see when the form-->
                            <!-- has successfully submitted--> */}
        <div className="d-none" id="submitSuccessMessage">
          <div className="text-center mb-3">
            <div className="fw-bolder">Form submission successful!</div>
            <p>To activate this form, sign up at</p>
            <a
              className="text-white"
              href="https://startbootstrap.com/solution/contact-forms"
            >
              https://startbootstrap.com/solution/contact-forms
            </a>
          </div>
        </div>
        {/* <!-- Submit error message-->
                            <!---->
                            <!-- This is what your users will see when there is-->
                            <!-- an error submitting the form--> */}
        <div className="d-none" id="submitErrorMessage">
          <div className="text-center text-danger mb-3">
            Error sending message!
          </div>
        </div>
      </form>
    </>
  );
}

export default Form;

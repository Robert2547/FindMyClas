import React from 'react';
import FormField from './FormField';

const SignupForm = ({ form }) => {
  return (
    <div className="content-section">
      <form method="POST" action="">
        {form.hidden_tag()}
        <fieldset className="form-group">
          <legend className="border-bottom mb-4">Join Today</legend>
          <FormField label={form.username.label} input={form.username} />
          <FormField label={form.email.label} input={form.email} />
          <FormField label={form.password.label} input={form.password} />
          <FormField label={form.confirm_password.label} input={form.confirm_password} />
        </fieldset>
        <div className="form-group">
          {form.submit({ className: 'btn btn-outline-info' })}
        </div>
      </form>
    </div>
  );
};

export default SignupForm;

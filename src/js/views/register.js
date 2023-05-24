import React  from "react";
import "../../styles/register.css";

export const Register = () => {

	return (
		<div className="container form_box">
			<div class="mb-3">
  				<label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
  				<input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Name & Surname" />
			</div>
		</div>
	);
};

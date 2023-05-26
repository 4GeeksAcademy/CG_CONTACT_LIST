import React, {useState}  from "react";
import "../../styles/register.css";
import { Link, useNavigate } from "react-router-dom";

export const Register = () => {

	const [data, setData] = useState({
		full_name: "",
		email: "",
		agenda_slug: "carlosgarciare2",
		address: "",
		phone: ""
	});
	const navigate = useNavigate()
	const handleChange = (event) => {
		setData(event.target.value)
	}


	const handleSubmit = (event) => {
		event.preventDefault()

		fetch ("https://assets.breatheco.de/apis/fake/contact/", {
			method: "POST",
			body: JSON.stringify(data),
			headers: {
				"content-Type": "application/json"
			}
		})
		.then ((response) => response.json())
		.catch (error => console.error("error:", error))
		.then ((response) => navigate("/"))
	}
	return (
		<div className="container form_box">
			<form onSubmit={handleSubmit}>
				<div className="row">
					<div className="col-12">
						<label htmlFor="name" className="form-label">Name</label>
						<input type="text" className="form-control" id="full_name" placeholder="Name" onChange={handleChange}/>
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<label htmlFor="email" className="form-label">Email</label>
						<input type="text" className="form-control" id="email" placeholder="@" onChange={handleChange}/>
					</div>
				</div>
				<div className="row">
					<div className="col-6">
						<label htmlFor="adress" className="form-label">Address</label>
						<input type="text" className="form-control" id="address" placeholder="Address" onChange={handleChange}/>
					</div>
					<div className="col-6">
						<label htmlFor="phone" className="form-label">Phone number</label>
						<input type="text" className="form-control" id="phone" placeholder="Phone" onChange={handleChange}/>
					</div>
				</div>
				<div className="row-final">
					<Link to="/">
						<button className="back_register">Back</button>
					</Link>	
					<button className="btn_save" type="submit"> Save </button>
				</div>
			</form>
		</div>
	);
};

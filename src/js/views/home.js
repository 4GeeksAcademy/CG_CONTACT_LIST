import React, {useEffect, useState} from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => {	

	const [contacts, setContacts] = useState([])

	useEffect(() => {
		fetch ("https://assets.breatheco.de/apis/fake/contact/agenda/carlosgarciare2")
		.then((response) => response.json())
		.then((response) => {
			console.log(response)
			setContacts(response)
	})
	}, [])
	
	const deleteContact = (id) => {
		const config = {
			method: "DELETE",
		}
	
	fetch (`https://assets.breatheco.de/apis/fake/contact/${id}`, config)
	.then ((response)=> response.json())
	.then (response => console.log("success"))
	}

	
	return (
		<div className="container">
				<ol>
					{
						contacts.map((contact,index) => {
							return (
								<div className="row">
									<div className="contact_box" key={index}>
										<div className="col-3 col-md-3 col-sm-3">
											<img className="img_contact" src="https://www.pngkey.com/png/full/195-1957117_contacts-icon-gray-contacts-icon-png.png" />
										</div>
										<div className="col-8 col-md-6 col-sm-6">
											<li className="individual_contact">
												<h3>{contact.full_name}</h3>
												<p><i className="fas fa-map-marker-alt"></i>{contact.address}</p>
												<p><i className="fas fa-phone"></i>{contact.phone}</p>
												<p><i className="fas fa-at"></i>{contact.email}</p>
											</li>
										</div>
										<div className="col-1 col-md-3 col-sm-3">
											<div className="edition_box">
												<Link to={`/edit/${contact.id}`}>
													<img className="user_edit" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQipXVIg2fEyboGw36rRV34_3sQk3rBj_ucG3VlSGBdjsgY8aINs0STmvt2ITzuFzDJ1bA&usqp=CAU" />
												</Link>
												<img className="trash" src="https://static.vecteezy.com/system/resources/previews/008/325/704/original/black-trash-icon-logo-clipart-isolated-in-white-background-image-free-vector.jpg" onClick={() => {deleteContact(contact.id)}} />
											</div>
										</div>
									</div>
								</div>
							)
						})
					}
				</ol>
			</div>
	)
};

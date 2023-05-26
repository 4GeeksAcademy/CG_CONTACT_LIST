import React, {useEffect, useState} from "react";
import "../../styles/home.css";

export const Home = () => {	

	const [contacts, setContacts] = useState([])
	useEffect(() => {
		fetch ("https://assets.breatheco.de/apis/fake/contact/agenda/carlosgarciare2")
		.then((response) => response.json())
		.then((response) => {
			setContacts(response)
	}, [])
	

	})
	return (
		<div className="container">
			<div className="box">
				<ul>
					{
						contacts.map((contact,index) => {
							return (
								<div className="contact_box">
									<li key={index}>
										<h3>{contact.full_name}</h3>
										<p><i class="fas fa-map-marker-alt"></i>{contact.address}</p>
										<p><i class="fas fa-phone"></i>{contact.phone}</p>
										<p><i class="fas fa-at"></i>{contact.email}</p>
									</li>
								</div>
							)
						})
					}
					
				</ul>
			</div>
		</div>
	)
};

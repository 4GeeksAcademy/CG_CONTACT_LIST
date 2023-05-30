import React, {useState, useEffect}  from "react";
import "../../styles/register.css";
import { Link, useNavigate, useParams } from "react-router-dom";

export const Edit = () => {
    const [contact,setContact] = useState()
    const navigate = useNavigate()
    const params = useParams()
    const [data, setData] = useState({
		full_name: "",
		email: "",
		agenda_slug: "carlosgarciare2",
		address: "",
		phone: ""
	});

    useEffect (() => {
        const recargar = (id) => {
            fetch("https://assets.breatheco.de/apis/fake/contact/"+params.id)
            .then((response) => response.json())
            .then((response) => {
                console.log(response)
            })
        }
    }, [])

	const editContact = () => {
		const config2 = {
			method: 'PUT',
			body: JSON.stringify(contact),
			headers: {
				"content-Type" : "application/json"
			}
		}
		event.preventDefault()
		fetch(`https://assets.breatheco.de/apis/fake/contact/${params.id}`, config2)
		.then ((response) => response.json())
		.then ((response) => {
            navigate("/")
            console.log(response)
        })

	}

	return (
		<div className="container form_box">
			<form onSubmit={editContact}>
                        <div className="row">
                            <div className="col-12">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input type="text" className="form-control" id="full_name" placeholder="Name" onChange={(event) => {
                                    setContact({...contact, full_name: event.target.value})
                                }}></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="text" className="form-control" id="email" placeholder="@" onChange={(event) => {
                                    setContact({...contact, email: event.target.value})
                                }}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <label htmlFor="adress" className="form-label">Address</label>
                                <input type="text" className="form-control" id="address" placeholder="Address" onChange={(event) => {
                                    setContact({...contact, address: event.target.value})
                                }}/>
                            </div>
                            <div className="col-6">
                                <label htmlFor="phone" className="form-label">Phone number</label>
                                <input type="text" className="form-control" id="phone" placeholder="Phone" onChange={(event)=> {
                                    setContact({...contact, phone: event.target.value})
                                }}/>
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

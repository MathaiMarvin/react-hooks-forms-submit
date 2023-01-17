import React, { useState } from "react";

function Form(props) {
	const [firstName, setFirstName] = React.useState("");
	const [lastName, setLastName] = React.useState("");
	const [dataSubmit, setdataSubmit] = React.useState([]);
	const [errors, setErrors] = React.useState([]);

	function handleFirstNameChange(event) {
		setFirstName(event.target.value);
	}

	function handleLastNameChange(event) {
		setLastName(event.target.value);
	}
	// Handling of submission of form
	const handleSubmitForm= (event) => {
		event.preventDefault();



		if (firstName.length > 0) {
			const formData = { firstName, lastName };
			const nameData = [...dataSubmit, formData];
			// Create a copy of all the data submitted using spread operator

			setdataSubmit([...dataSubmit, nameData]);
			setdataSubmit(nameData);
			console.log(nameData);
      
			setFirstName("");
			setLastName("");
		} else {
			setErrors(["First Name is required"]);
		}
	};

	const handleSubmissionNames = dataSubmit.map((data, index) => {
		return (
			<div key={index}>
				<p>
					{`${data.firstName} 
						${data.lastName}`}
				</p>
			</div>
		);
	});

	return (
		<>
			<form onSubmit={handleSubmitForm}>
				<input type="text" onChange={handleFirstNameChange} value={firstName} />
				<input type="text" onChange={handleLastNameChange} value={lastName} />
				<button type="submit">Submit</button>
			</form>
			{/* Rendering of the Error Message */}
			{errors.length > 0 && (
				<div>
					{errors.map((error, index) => (
						<p key={index}>{error}</p>
					))}
				</div>
			)}

			<h3>Submissions</h3>
			{handleSubmissionNames}
		</>
	);
}
export default Form;

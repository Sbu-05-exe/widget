import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({options, selected, onSelectedChange, label}) => {

	const [open, setOpen] = useState(false)
	const ref = useRef();

	const renderedOptions = options.map(option => {
		if (option.value === selected.value) {
			return null
		}

		return (
			<div
				key={option.value}
				className="item" 
				onClick={() => { 
					onSelectedChange(option)
				}} 
			>
				
				{option.label}
			</div>
		)
	})
	
	useEffect(() => {
		const onBodyClick = (event) => {
			if (ref.current.contains(event.target)) {
				return;
			}
			setOpen(false);
		}

		document.body.addEventListener('click', onBodyClick); 

		return () => {
			document.body.removeEventListener('click', onBodyClick);
		}
	},[]) //making sure this useEffect only runs once

	return(
		<div ref={ref} className="ui form">
			<div className="field">
				<label className="label">{label}</label>
				<div 
					onClick={() => {
						setOpen(!open)
					}}
					className={`ui selection dropdown ${open ? 'visible active' : ''}`}
				>
					<i className="dropdown icon">
					</i>
					<div className="text">{selected.label}</div>
					<div className={`menu ${open ? 'visible transition': ''}`}>
						{renderedOptions}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Dropdown;

// several different concepts to actually implement this. And the reason fro that is 
// It turns out that these different concepts are going to come up in your web development
// Careeer. Why is this challenging?
// I have kind of a rough sketch out. More or less. A body element at the very top.
// Maybe we are showign the dropdown component
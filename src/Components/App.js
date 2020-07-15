import React from 'react';
import Accordion from './Accordion';


// This is hardcoded why? I have no idea
const items = [
	{
		title: 'What is React',
		content: 'React is a frontend framework'
	},
	{
		title: 'Why use React',
		content: 'React is a favorite JS library among engineers'
	}, 
	{
		title: 'How do you use React',
		content: 'You use React by creating components'

	}
]

export default () => {
	return (
		<div>
			<br/>
			<Accordion items={items}/>
		</div>
	);
}
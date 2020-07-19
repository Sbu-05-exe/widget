import React, { useState } from 'react';
// import Accordion from './Accordion';
// import Search from './Search'
// import Dropdown from './Dropdown'
import Translate from './Translate';

// This is hardcoded why? I have no idea
// const items = [
// 	{
// 		title: 'What is React',
// 		content: 'React is a frontend framework'
// 	},
// 	{
// 		title: 'Why use React',
// 		content: 'React is a favorite JS library among engineers'
// 	}, 
// 	{
// 		title: 'How do you use React',
// 		content: 'You use React by creating components'

// 	}
// ]

// const options = [
// 	{
// 		label: 'The color red',
// 		value: 'red'
// 	},
// 	{
// 		label: 'The color green',
// 		value: 'green'
// 	},
// 	{
// 		label: 'A shade of Blue',
// 		value: 'blue'
// 	}
// ]

export default () => {

	return (
		<div>
			<br/>
			{/*<Accordion items={items}/>*/}
			{/*<Search/>*/}
			{/*showDropdown ? 
				<Dropdown 
					options={options} 
					selected={selected} 
					onSelectedChange={setSelected}
				/> : null*/}
			<Translate/>
		</div>
	);
}
import React, {useState} from 'react';

const Accordion = ({items}) => {

	const [activeIndex,setActiveIndex] = useState(null)

	const renderedItems = items.map((item, index) => {
		return (
			<React.Fragment key={item.title}>
				<div 
					className="title active"
					onClick={() => {setActiveIndex(index)}}
				>
					<i className="dropdown icon"></i>
					{item.title}
				</div>
				<div className="content active">
					<p className="item content">{item.content}</p>
				</div>
			</React.Fragment>
		);		
	});

	return (
		<div className='ui styled accordion'>
			{renderedItems}
			<h1>{activeIndex}</h1>
		</div>
	)
}

export default Accordion;
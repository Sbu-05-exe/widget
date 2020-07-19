import React, {useState } from 'react';
import Dropdown from './Dropdown'

const options = [

	{
		label:'Afrikaans',
		value:'af'
	},
	{
		label:'Arabic',
		value:'ar'
	},
	{
		label:'Hindi',
		value:'hi'
	}

]

const Translate = () => {
	const [text, setText] = useState('')
	const [language, setLanguage] = useState(options[0]) 

	return (
		<div>
			<div className="ui form">
				<div className="field">
					<label>Enter Text
						<input 
							value={text} 
							type="text"
							onChange={(e)=> {setText(e.target.value)}}
						/>
					</label>
				</div>
			</div>
			<Dropdown 
				options={options}
				selected={language}
				onSelectedChange={setLanguage}
				label='Select a language'
			/>
		</div>
	)
}

export default Translate
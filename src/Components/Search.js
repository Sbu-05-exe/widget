import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Search = () => {
	const [term,setTerm] = useState('programming')
	const [debouncedTerm, setDebouncedTerm] = useState(term)
	const [results, setResults] = useState([])

	// useEffect(()=> {
	// 	console.log('I run only once')

	// }, [])

	// useEffect(()=>{
	// 	console.log('I run with ever render and at initial render')
	// })

	// useEffect(()=> {
	// 	console.log('I run with ever render and at initial rerender and if some piece of state has changed')

	// },[someStateVariable])

	useEffect (()=> {
		if (term) {
			// If the term is not a empty string then make a request
			const timerid = setTimeout(()=> {
				// Throttle requests made with a timeout functiond that will 
				// be cancelled with the return statement
				setDebouncedTerm(term)
			}, 1000);

			return () => {
				clearTimeout(timerid)
			}
		}

	}, [term])

	useEffect(()=>{
		// Hint we are not allowed to use async and await inside useEffect function
		const search = async () => {
			const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
				params: {
					action: 'query',
					list: 'search',
					origin: '*',
					format: 'json',
					srsearch: debouncedTerm
				}
			});
			setResults(data.query.search)
		}

		search()

	} , [debouncedTerm])

	const renderedResults = results.map(({pageid, snippet, title})=> {
		return (
			<div key={pageid} className="item">
				<div className="right floated content">
					<a 
						className="ui button" 
						href={`https://en.wikipedia.org?curid=${pageid}`}>Go</a>
				</div>
				<div className="content">
					<div className="header">
						{title}
					</div>
					<span dangerouslySetInnerHTML={{__html:snippet}}></span>
				</div>
			</div>
		)
	})


	return (
		<div>
			<div className="ui form">
				<div className="field">
					<label htmlFor="">Enter search term</label>
					<input 
						value={term} 
						type="text" 
						className="input"
						onChange={(e) => {setTerm(e.target.value)}}
					/>
				</div>
			</div>
			<div className="ui celled list">
				{renderedResults}
			</div>
		</div>
	)
};

export default Search;
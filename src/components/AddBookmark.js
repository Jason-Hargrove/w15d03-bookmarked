import React from 'react';
import { useState } from 'react';

const AddBookmark = ({ onAdd }) => {
	const [title, setTitle] = useState('');
	const [url, setUrl] = useState('');

	const onSubmit = e => {
		e.preventDefault();

		if (!title) {
			alert('Please add a bookmark');
			return;
		}
		onAdd({ title, url });
		setTitle('');
		setUrl('');
	};

	return (
		<form className="add-form" onSubmit={onSubmit}>
			<div className="form-control">
				<label>Title</label>
				<input
					type="text"
					placeholder="Add Bookmark"
					value={title}
					onChange={e => setTitle(e.target.value)}
				/>
			</div>
			<div className="form-control">
				<label>url</label>
				<input
					type="text"
					placeholder="Add url"
					value={url}
					onChange={e => setUrl(e.target.value)}
				/>
			</div>

			<input type="submit" value="Save Task" className="btn btn-block" />
		</form>
	);
};

export default AddBookmark;

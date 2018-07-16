import React from 'react';

class ValueEdit extends React.Component {
	render() {
		const editValue = (
			<input
				onChange={this.props.controlFunc}
				className="form-input"
				value={this.props.value}
				placeholder={'12, 24...'}/>
		);

		return (
		<div className="form-group">
			<label className="form-label capitalize">
				{this.props.label}
				<input
					name={this.props.label + 'checkbox'}
					className="form-checkbox"
					onChange={this.props.cbControlFunc}
					checked={this.props.cbValue}
					type={'checkbox'} />
			{this.props.cbValue && editValue}
			</label>
		</div>
		)
	}
};

export default ValueEdit;
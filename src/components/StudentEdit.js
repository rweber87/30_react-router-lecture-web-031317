import React, { Component } from 'react'

class StudentEdit extends Component{

	constructor(props) {
		super()
		this.state = {

			student: props.student
		}
	}

	handleInputChange(e){
		const input = e.target.value
		this.setState(prevState => ({
			student: Object.assign({}, prevState.student, {name: input})
		}))
	}

	handleStudentUpdate(e){
		e.preventDefault(); 
		this.props.updateStudent(this.state.student)
	}

	render() {
		return(
			<div>
			<h1></h1>
				<form onSubmit={this.handleStudentUpdate.bind(this)} >
					<input type='text' defaultValue={this.state.student.name} onChange={this.handleInputChange.bind(this)} />
					<button>Update Student</button>
				</form>
			</div>
		)
	}	
}

export default StudentEdit
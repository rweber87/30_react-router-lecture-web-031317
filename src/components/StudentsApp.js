import React from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import StudentForm from './StudentForm'
import StudentEdit from './StudentEdit'

function StudentList(props) {
  const nameEls = props.students.map( (student, i) => <li key={i}><Link to={`/students/${student.id}`}>{student.name}</Link></li>)

	  return (
	  	<div>
		  	<div className='col-md-4'>
		        <ul>
		          { nameEls }
		        </ul>
		        <Switch>
		        	<Route path='/students/new'/>
		        	<Route path='/students' render={() => <Link to='/students/new'>Add a Student</Link>}/>
		        </Switch>    
		    </div>

		    <div className='col-md-8'>
		    	<Switch>
		    		<Route path='/students/:id/edit' render={({match}) => {
		    			const student = props.students.find(student => student.id === parseInt(match.params.id))
		    			console.log(student)
		    			if(!student){
			    			return <h3>Loading</h3>
			    		}
		    			return  <StudentEdit student={student} updateStudent={props.onUpdate}/>}} />
			    	<Route path='/students/new' render={() => < StudentForm  onSubmit={ props.onSubmit }/>} />
			    	<Route path='/students/:id' render={({ match }) => {
			    		const student = props.students.find(student => student.id === parseInt(match.params.id))
			    		if(!student){
			    			return <h3>Loading</h3>
			    		}
			    		return (
			    		<div>
				    		<h1>{student.name}</h1>
				    		<button className='btn btn-default' onClick={ () => { props.onDelete(event, student) } }>Delete a Student</button>
				    		<Link className='btn btn-default' to={`/students/${student.id}/edit`}>Update User</Link>
				    	</div>
				    	)}
			    	} />
		    	</Switch>
		    </div>	
	    </div>
	  )
}

export default StudentList

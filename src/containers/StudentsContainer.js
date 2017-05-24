import React, { Component } from 'react'

import StudentsApp from '../components/StudentsApp'


import { fetchStudents, createStudent, deleteStudent, updateStudent }  from '../api'

class StudentsContainer extends Component {

  constructor(){
    super()
    this.state = {
      students: []
    }
  }

  componentDidMount(prevProps, prevS){
    fetchStudents()
      .then( students => this.setState({
        students: students
      }) )
  }

  handleAddStudent(name){
    createStudent(name)
    .then( student => this.setState( prevState =>  ({ students: [...prevState.students, student] }) ))
      .catch(e => console.log(e))
  }

  handleDelete(event, student){
    deleteStudent(student.id)
    .then(this.setState( prevState => ({ students: prevState.students.filter( scott => scott !== student) })))
    this.props.history.push('/students')
  }

  handleUpdate(student){
    updateStudent(student)
    .then(updatedStudent => this.setState(prevState => ({students: prevState.students.map(student => student.id === updatedStudent.id ? updatedStudent : student ) }) ) )
    this.props.history.push(`/students/${student.id}`)
  }

  render(){
    return (
        < StudentsApp students={this.state.students} onDelete={this.handleDelete.bind(this)} onUpdate={this.handleUpdate.bind(this)} onSubmit={this.handleAddStudent.bind(this)} />
    )
  }
}

export default StudentsContainer

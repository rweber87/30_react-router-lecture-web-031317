export function fetchStudents(){
  return fetch("http://localhost:3000/api/v1/students")
    .then( res => res.json() )
}

export function createStudent(name){
  return fetch("http://localhost:3000/api/v1/students", {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify( {student: {name: name}} )
  }).then( res => res.json() )
}

export function deleteStudent(id){
  return fetch(`http://localhost:3000/api/v1/students/${id}`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'DELETE'
  })
}

export function updateStudent(student){
  return fetch(`http://localhost:3000/api/v1/students/${student.id}`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'PATCH',
    body: JSON.stringify( {student: {name: student.name}} )
  }).then( res => res.json() )
}
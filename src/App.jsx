import { useState } from 'react'

function App() {
// const allImages = ['react.svg', 'my-image.jpeg', 'vit.svg']

// const [myImage, setMyImage] = useState('vite.svg')

const [user, setUser] = useState({
  name: "esther",
  score: 100,
  location: "Delta"
})

const changeImage = () => {
// setUser({name:"Onyebuchio"}) THIS WILL CHANGE AND CREATE A NEW ARRAY

setUser({...user, name:"Onyebuchi Esther"})
}

const [names, setNames] = useState(['Esther', 'John'])

const addName = () => {
  let _name = prompt("Enter a Name") 
  setNames([...names, _name])
}
const RemoveLastName = () => {
  names.pop()
setNames([...names])
}

const removeSelected = (index) => {

  names.splice(index, 1)
  setNames([...names])
}

return (
  <main>
    <button onClick={RemoveLastName}>Remove Last Name</button>

    

    <button onClick={addName}>Add name</button>
<h2>User Details</h2>
<h3>{user.name}</h3>
<h3>{user.score}</h3>
<h3>{user.location}</h3>

<input type="text" />

<button onClick={changeImage}>Change Name</button>

{/* list Iteration */}
<div style={{display:'flex', flexWrap:'wrap'}}>
{names.map((item, index) => (
  
    <div key={index} style={{boxShadow: '0 0 10px black', border: '1px solid blue', margin:'10px 10px'}}>  <h1>My name is {item}</h1>
  <p>and i am number {index + 1}</p>
  <button onClick={ () => removeSelected(index)}> Remove Selected</button>
  </div>
  
 
 
  
))}

</div>

  </main>


)




}


export default App

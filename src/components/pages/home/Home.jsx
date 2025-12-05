import React ,{useContext} from 'react'
import Layout from '../../layout/Layout'
import myContext from '../../../context/data/Mycontext'

function Home() {
  const context = useContext(myContext)
  console.log(context) // {name: 'Kamal Nayan', class: '9 C'}
  // Destructure 
  const {name ,rollno} = context
  console.log(name) // Kamal Nayan
  return (
    <Layout>
      <h1>Name : {name}</h1>
      <h1>Roll.no:{rollno}</h1>
    </Layout>
  )
}

export default Home

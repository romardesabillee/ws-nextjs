import Navbar from "@/components/Navbar";

export default function Home() {
  
  const todos = [
    { title: 'Todo 1', description: 'Todo 1 description'},
    { title: 'Todo 2', description: 'Todo 2 description'},
    { title: 'Todo 3', description: 'Todo 2 description'},
  ]
  
  function todosDisplay(){
    return todos.map((data, index) => {
      return(
        <li key={index}>Title: {data.title} &nbsp; Description: {data.description}</li>
      )
    })
  }

  return (

    <div>
      <Navbar />
      <div>Home</div>
      <ul>
        {todosDisplay()}
      </ul>
    </div>
  )
}

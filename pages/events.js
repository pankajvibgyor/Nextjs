import {useState} from 'react' 
import {useRouter} from 'next/router'
function Events({eventList}) {
    const [events,setEvents]=useState(eventList)
    const router=useRouter()
    const fetchSportsEvents=async()=>{
       const response=await fetch(`http://localhost:4000/events?category=bollywood`)
        const data=await response.json()
        setEvents(data)
        router.push('/events?category=sports',undefined,{shallow:true})
    }
  return (
      <>
      <button onClick={fetchSportsEvents}>Bollywood Events</button>
    <h1>List of event</h1>
    {
        events.map(event=>{
            return(
                <div key={event.id}>
                    <h2>{event.id} {event.title} |{event.category}</h2>
                    <p>{event.description}</p>
          
                </div>
            )
        })

    }
    </>
  )
}

export default Events
export async function getServerSideProps(context){
    const {query}=context
    const {category}=query
    const queryString=category ?'category=bollywood':''
    const response=await fetch(`http://localhost:4000/events${queryString}`)
    const data=await response.json()
    return{
        props:{
            eventList:data,
        }
    }

}
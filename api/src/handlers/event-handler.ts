import makeEvent from '../makers/event-maker'
import Event from '../models/event'
import { notify } from '../observers/event/event-observer'

export async function create(eventInfo: any){

  const event = await makeEvent(eventInfo)

  const newEvent = new Event(event)
  const result = await newEvent.save()
  
  await notify(result)
  
  return result

}
import makeEvent from '../makers/event-maker'
import Event from '../models/event'
import EventObserver from '../observers/event/event-observer'

export default class EventHandler {

  static async create(eventInfo: any){

    const event = await makeEvent(eventInfo)

    const newEvent = new Event(event)
    const result = await newEvent.save()
    
    await EventObserver.notify(result)
    
    return result

  }
  
}
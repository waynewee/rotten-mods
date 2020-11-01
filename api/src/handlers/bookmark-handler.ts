import makeBookmark from '../makers/bookmark-maker'
import Bookmark from '../models/bookmark'
import { ObjectNotFoundError } from '../errors'
  
export async function findByUserId( userId: string ){
  const bookmark = await Bookmark.find({ userId })
  return bookmark
}

export async function findById(id: string){
    
  const bookmark = await Bookmark.findById(id)

  if(!bookmark){
    throw new ObjectNotFoundError('Bookmark')
  }

  return bookmark

}

export async function create(bookmarkInfo: any){

  const bookmark = await makeBookmark(bookmarkInfo)
  const newBookmark = new Bookmark(bookmark)
  return newBookmark.save()

}

export async function remove(id: string){
  const result = await Bookmark.deleteOne({_id: id})

  if( result.n === 0 ){
    throw new ObjectNotFoundError("Bookmark")
  }

  return result
}
import PouchDB from 'pouchdb'
import _ from 'lodash'

const db = new PouchDB('testdb')
const store = {}

PouchDB.debug.disable()

store.create = data => {
  return db.post(data)
}

store.find = () => {
  return db.allDocs({include_docs: true})
}

store.findPosts = () => {
  function map (doc, emit) {
    if (doc.type === 'post') {
      emit(doc.createdAt)
    }
  }
  return db.query(map, {include_docs: true}).then(posts =>
    _.map(posts.rows, (post) => post.doc)
  )
}

store.findPostById = (id) => {
  return db.get(id)
}

store.findCommentsByPostId = (postId) => {
  function map (doc, emit) {
    if (doc.postId === postId) {
      emit(doc.createdAt)
    }
  }
  return db.query(map, {include_docs: true}).then(comments =>
    _.map(comments.rows, (comment) => comment.doc)
  )
}

store.reloadPosts = (obj, prop) => {
  store.findPosts().then(posts => {
    obj[prop] = _.map(posts, (post) => post)
  })
}

store.reloadComments = (obj, prop, postId) => {
  store.findCommentsByPostId(postId).then(comments => {
    obj[prop] = _.map(comments, (comment) => comment)
  })
}

window.PouchDB = PouchDB

export default store

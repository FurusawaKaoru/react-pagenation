import firebase from "../firebase/index"

const itemRef = firebase.firestore().collection('items')

export async function fetchItemsAll() {
  const items = await itemRef
    .get()
    .then((querySnapshot) => {
      return querySnapshot.docs.map((doc) => {
        const data = doc.data()
        data.id = doc.id

        return data
      })
    })

  return items
}

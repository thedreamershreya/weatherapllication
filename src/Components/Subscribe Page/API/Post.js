
const Post = async (newPost)=>{
  await fetch('https://jsonplaceholder.typicode.com/comments', {
      method: 'POST',
      body: JSON.stringify(newPost),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
  })
  .then((response) => response.json())
  .then((json) => console.log(json));
}

export default Post
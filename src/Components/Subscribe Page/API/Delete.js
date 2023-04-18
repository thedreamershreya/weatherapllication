
const Delete = async(email)=>{
    await fetch(`https://jsonplaceholder.typicode.com/comments/${email}`, {
        method: 'DELETE',
      });
    return console.log('deleted')
}

export default Delete
const getPostContents = () => {
  
  const post1 = document.querySelector('#post-1');
  const post2 = document.querySelector('#post-2');
  const post3 = document.querySelector('#post-3');

  return [post1, post2, post3];

}

console.log(getPostContents());


module.exports = getPostContents
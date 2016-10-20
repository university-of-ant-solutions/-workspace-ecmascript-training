import test from 'tape';

test('es2015 \ 10-promises \ chaining promises ANSWER', (t) => {
  t.plan(1);
  const posts = [
    { title: 'I love JavaScript', author: 'Wes Bos', id: 1 },
    { title: 'CSS!', author: 'Chris Coyier', id: 2 },
    { title: 'Dev tools tricks', author: 'Addy Osmani', id: 3 },
  ];
  const authors = [
    { name: 'Wes Bos', twitter: '@wesbos', bio: 'Canadian Developer' },
    { name: 'Chris Coyier', twitter: '@chriscoyier', bio: 'CSS Tricks and CodePen' },
    { name: 'Addy Osmani', twitter: '@addyosmani', bio: 'Googler' },
  ];
  function getPostById(id) {
    return new Promise((resolve, reject) => {
      // find the post
      setTimeout(() => {
        const post = posts.find(post => post.id === id);
        if(post) {
          resolve(post);
        } else {
          reject(Error('Post not found!'));
        }
      }, 100);
    });
  }
  function hydrateAuthor(post) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const authorDetails = authors.find(person => person.name === post.author);
        if(authorDetails) {
          post.author = authorDetails;
          resolve(post);
        } else {
          reject(Error('Author not Found!'));
        }
      }, 100);
    });
  }
  getPostById(1)
  .then(post => {
    return hydrateAuthor(post);
  })
  .then(author => {
    t.deepEqual({ title: 'I love JavaScript', author: { name: 'Wes Bos', twitter: '@wesbos', bio: 'Canadian Developer' }, id: 1 }, author);
  })
  .catch(err => {
    t.fail(err.message);
  })
});

const loadBtnEl = document.querySelector('#btnLoadPosts');
const postselectEl = document.querySelector('#posts');
const vieBtnEl = document.querySelector('#btnViewPost');
const titleH1El = document.querySelector('#post-title');
const BodyEl = document.querySelector('#post-body');
const commentUlEl = document.querySelector('#post-comments');


function attachEvents() {
    loadBtnEl.addEventListener('click', handleLoadPost);
    vieBtnEl.addEventListener('click',handleDisplayPost);

    async function handleLoadPost(){
        const postRes =await fetch('http://localhost:3030/jsonstore/blog/posts');
        const postData = await postRes.json();
        const postArr = Object.values(postData);

        postArr.forEach(postob => {
            const optionalEl = document.createElement('option');
            optionalEl.value = postob.id;
            optionalEl.textContent= postob.title ;

            postselectEl.appendChild(optionalEl);
        })
        

    }

    async function handleDisplayPost(){
        const selectPostId = postselectEl.value;

        const postRes =await fetch('http://localhost:3030/jsonstore/blog/posts');
        const postData = await postRes.json();

        const postArr = Object.values(postData);
        const selectedPostObj = postArr.find(p => p.id === selectPostId);
        titleH1El.textContent =selectedPostObj.title;
        BodyEl.textContent =selectedPostObj.body;   

        const commentRes = await fetch('http://localhost:3030/jsonstore/blog/comments');
        const commentsData= await commentRes.json();
        const commentsArr = Object.values(commentsData);
        const filteredComments = commentsArr.filter(c => c.postId ===selectPostId);

        commentUlEl.innerHTML = '';
        
        filteredComments.forEach(coomentobj => {
            const lisEl = document.createElement('li');
            lisEl.textContent =coomentobj.text;
            commentUlEl.appendChild(lisEl);
        })

    }

    

}

attachEvents();

//
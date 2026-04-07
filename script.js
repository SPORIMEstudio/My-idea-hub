const posts = [
    {
        title: "The Visionary Node",
        description: "A Holographic Telepresence Node",
        image: "Posts/Visionary/images/post_thumb.png",
        link: "Posts/Visionary/index.html"
    }];
function displayPosts() {
    const postGrid = document.getElementById('post-grid');
    if (!postGrid) return;
    postGrid.textContent = '';
    posts.forEach(post => {
        const card = document.createElement('div');
        card.className = 'card';
        card.onclick = () => {
            const target = new URL(post.link, window.location.origin);
            window.location.href = target.href;
        };
        const img = document.createElement('img');
        img.src = post.image; 
        img.alt = post.title;
        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';
        const h3 = document.createElement('h3');
        h3.textContent = post.title; 
        const p = document.createElement('p');
        p.textContent = post.description; 
        cardBody.appendChild(h3);
        cardBody.appendChild(p);
        card.appendChild(img);
        card.appendChild(cardBody); 
        postGrid.appendChild(card);
    });
}
document.addEventListener('DOMContentLoaded', displayPosts);

// Add your posts here. The "link" property should point to your folder's index.html
const posts = [
    {
        title: "The Visionary Node",
        description: "A Holographic Telepresence Node",
        image: "/Posts/Visionary/images/post_thumb.png",
        link: "Posts/Visionary/index.html"
    }
];

function displayPosts() {
    const postGrid = document.getElementById('post-grid');
    if (!postGrid) return;

    posts.forEach(post => {
        const card = document.createElement('div');
        card.className = 'card';
        
        // Handle the redirection
        card.onclick = () => {
            window.location.href = post.link;
        };

        card.innerHTML = `
            <img src="${post.image}" alt="${post.title}">
            <div class="card-body">
                <h3>${post.title}</h3>
                <p>${post.description}</p>
            </div>
        `;
        postGrid.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', displayPosts);

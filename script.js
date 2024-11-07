// Function to load blog posts from local storage and display them
function loadBlogPosts() {
    // Get the blog posts data from local storage
    const posts = JSON.parse(localStorage.getItem('blogPosts')) || [];

    // Get the container to display the posts
    const postsContainer = document.getElementById('new-post');

    // Clear the container
    postsContainer.innerHTML = '';

    // Loop through the posts and create a list item for each one
    posts.forEach(post => {
        const listItem = document.createElement('li');
        listItem.textContent = post.title; // Assuming each post has a 'title' property
        postsContainer.appendChild(listItem);
    });
}

//----------------------------------------------------------------------------//

// Function to load blog posts from local storage and display them
function loadBlogPosts() {
    const posts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    const postsContainer = document.getElementById('blog-posts');
    postsContainer.innerHTML = '';

    posts.forEach(post => {
        const listItem = document.createElement('li');
        listItem.textContent = post.title; // Display the title
        postsContainer.appendChild(listItem);
    });
}

// Function to save a new blog post to local storage
function saveBlogPost(title, content) {
    const posts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    const newPost = { title, content };
    posts.push(newPost);
    localStorage.setItem('blogPosts', JSON.stringify(posts));
}

// Event listener for the form submission
document.getElementById('post-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    
    saveBlogPost(title, content); // Save the new post
    loadBlogPosts(); // Reload the blog posts to display the new one

    // Clear the form fields
    document.getElementById('post-form').reset();
});

// Load existing blog posts when the page loads
window.onload = loadBlogPosts;
//---------------------------------------------------------------------------//


// Call the function to load blog posts when the page loads
window.onload = loadBlogPosts;

// Function to load posts from local storage and display them
function loadPosts() {
    const postList = document.getElementById('post-list');
    const posts = JSON.parse(localStorage.getItem('posts')) || []; // Get posts from local storage

    // Clear the list
    postList.innerHTML = '';

    // Check if there are any posts
    if (posts.length === 0) {
        postList.innerHTML = '<li>No posts available.</li>';
        return;
    }

    // Loop through each post and create a list item
    posts.forEach((post, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.content}</p>
            <a href="post.html?id=${index}">View/Edit</a>
        `;
        postList.appendChild(listItem);
    });
}

// Call loadPosts when the page loads
document.addEventListener('DOMContentLoaded', loadPosts);

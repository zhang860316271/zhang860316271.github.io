var posts=["posts/31ea.html","posts/undefined.html"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};
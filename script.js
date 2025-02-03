document.addEventListener("DOMContentLoaded", function () {
    const posts = [
        { title: "Bài viết 1", content: "Đây là nội dung của bài viết 1..." },
        { title: "Bài viết 2", content: "Nội dung của bài viết 2 rất hấp dẫn..." },
        { title: "Bài viết 3", content: "Khám phá bài viết 3 ngay tại đây..." }
    ];

    const blogContainer = document.getElementById("blog-container");

    posts.forEach(post => {
        const postElement = document.createElement("div");
        postElement.classList.add("post");

        postElement.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.content}</p>
            <a href="#" class="read-more">Đọc thêm</a>
        `;

        blogContainer.appendChild(postElement);
    });
});

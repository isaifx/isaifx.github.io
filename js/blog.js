document.addEventListener("DOMContentLoaded", function () {
  const blogList = document.getElementById("post-links");
  const blogContent = document.getElementById("blog-content");
  const blogListContainer = document.getElementById("blog-list");
  const backButton = document.getElementById("back-button");

  const blogPosts = [
    { file: "index.md", title: "Intro" },
    { file: "another_post.md", title: "Another Blog Post" }
  ];

  blogPosts.forEach(post => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = "#";
    a.textContent = post.title;
    a.classList.add("blog-link");
    a.onclick = () => loadPost(post.file);
    li.appendChild(a);
    blogList.appendChild(li);
  });

  marked.setOptions({
    highlight: function (code, lang) {
      return hljs.highlightAuto(code).value;
    }
  });

  window.goBackToList = function () {
    blogContent.style.display = "none";
    backButton.style.display = "none";
    blogListContainer.style.display = "block";
  };

  function loadPost(filename) {
    fetch(`blog/${filename}`)
      .then(res => res.text())
      .then(md => {
        blogListContainer.style.display = "none";
        blogContent.style.display = "block";
        backButton.style.display = "block";
        blogContent.innerHTML = marked.parse(md);
        hljs.highlightAll();
      });
  }
});

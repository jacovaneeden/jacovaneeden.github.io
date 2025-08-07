type Link = {
  label: string;
  href: string;
};

const links: Link[] = [
  { label: "GitHub", href: "https://github.com/YOUR_USERNAME" },
  { label: "LinkedIn", href: "https://linkedin.com/in/YOUR_PROFILE" },
  { label: "Email Me", href: "mailto:you@example.com" },
  { label: "Download CV", href: "/cv.pdf" },
  { label: "About Me", href: "/about.html" }
];

const list = document.getElementById("link-list");

if (list) {
  links.forEach((link) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = link.href;
    a.textContent = link.label;
    a.target = "_blank";
    li.appendChild(a);
    list.appendChild(li);
  });
}
import gridsCollection from "../assets/images/grids-collection-section.png";
import productGrids from "../assets/images/products-grid-section.png";
import blogCard from "../assets/images/blog-card.png";
import profileCard from "../assets/images/profile-card.png";
import newsletterSection from "../assets/images/newsletter-section.png";

export const PORTFOLIO_PROJECTS = [
  {
    name: "Products Grid Section",
    description: "A responsive and modular section that displays featured product listings in a grid that changes price and images based on sku selection.",
    image: productGrids,
    link: "https://ashok3107.github.io/product-grid-section/",
    techStack: ["react", "typescript", "html", "css", "vite", "responsive"]
  },
  {
    name: "Newsletter Section",
    description: "A responsive newsletter subscription section with a form where users can enter their emails to sign up for the newsletter with error validations & success toasters in Javascript.",
    image: newsletterSection,
    link: "https://ashok3107.github.io/newsletter-section/",
    techStack: ["html", "css", "javascript", "responsive"]
  },
  {
    name: "Grids Collection Section",
    description: "A responsive featured collections section based on the supplied designs, which have been adapted for desktop, tablet and mobile views with data integrated via Javascript.",
    image: gridsCollection,
    link: "https://ashok3107.github.io/grid-collections-section/",
    techStack: ["html", "css", "javascript", "responsive"]
  },
  {
    name: "Profile Card",
    description: "A simple profile card that includes a profile picture, name, title, links to social media profiles, and a call-to-action (CTA) button.",
    image: profileCard,
    link: "https://ashok3107.github.io/profile-card/",
    techStack: ["html", "css", "responsive"]
  },
  {
    name: "Blog Card",
    description: "Blog card featuring editorial content, including an article cover image, a content category tag, a title, a brief description, and a read-only call-to-action (CTA) link.",
    image: blogCard,
    link: "https://ashok3107.github.io/blog-card/",
    techStack: ["html", "css", "responsive"]
  },
];

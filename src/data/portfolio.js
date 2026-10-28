// ============================================================
//  EDIT THIS FILE to update your whole portfolio.
//  Images: put files in /public/images and use "/images/name.jpg"
//  Icons: layout, server, globe, wrench, search, rocket, pen, code, send,
//         github, linkedin, twitter, dribbble (see components/icons.js)
// ============================================================

export const profile = {
  name: 'Arslan Haider',
  logo: 'AH',
  eyebrow: "Hi, I'm Arslan Haider",
  headline: ['I build high-impact', 'web applications', 'that drive results'],
  tagline: 'Web Developer crafting fast, scalable websites and software applications with modern technologies.',
  image: '/images/avatar.png', // e.g. '/images/me.png' (transparent PNG looks best)
  resumeUrl: '/images/Arslan Haider Resume.pdf',
  about: [
    'I’m a passionate Full Stack Developer skilled in building responsive, user-friendly web applications using React, JavaScript, Node.js, and MongoDB.',
    'I enjoy turning ideas into modern digital solutions with clean code, seamless functionality, and a great user experience.',
  ],
  stats: [
    { value: 2, suffix: '+', label: 'Years experience' },
    { value: 6, suffix: '+', label: 'Projects completed' },
    { value: 5, suffix: '', label: 'Happy clients' },
  ],
}

export const nav = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export const projects = [
  { title: 'Project One', type: 'Pending DN Management', tag: 'JavaScript', image: '/images/tokens-app.png', link: 'https://script.google.com/macros/s/AKfycbxxA2OsAW84Q7vtWVoiELfRzNbsfpZCxgZIGQfSQsCawZ6alP7n6ehm1OFDV_GcztkF-w/exec', description: 'Created in google sheets using App Script.' },
  { title: 'Project One', type: 'Ecommerce Landing Page', tag: 'JavaScript', image: '/images/ecommerce.png', link: 'https://ecomrece-landing-page.vercel.app/', description: 'Short description.' },
  { title: 'Project Two', type: 'Notes App', tag: 'JavaScript', image: '/images/sticky.png', link: 'https://notes-app-livid-two-81.vercel.app/', description: 'Short description.' },
  { title: 'Project Three', type: 'Quiz App', tag: 'JavaScript', image: '/images/quiz.png', link: 'https://quiz-application-nine-alpha.vercel.app/', description: 'Short description.' },
  { title: 'Project Four', type: 'Stop Watch', tag: 'JavaScript', image: '/images/stopwatch.png', link: 'https://stop-watch-chi-beryl.vercel.app/', description: 'Short description.' },
  { title: 'Project Five', type: 'Calculator App', tag: 'JavaScript', image: '/images/calculator.png', link: 'https://caclutor-app.vercel.app/', description: 'Short description.' },
  { title: 'Project Six', type: 'Signup Form', tag: 'Material UI', image: '/images/gaming.png', link: 'https://signup-and-login-form-theta.vercel.app/', description: 'Short description.' },
  { title: 'Project Seven', type: 'Signup/Login Form', tag: 'HTML,CSS', image: '/images/signup-login.png', link: 'https://login-and-registration-form-kappa.vercel.app/', description: 'Short description.' },
]

export const services = [
  { icon: 'layout', title: 'Frontend Development', text: 'Responsive, accessible interfaces built with React and modern CSS.' },
  { icon: 'server', title: 'Backend & APIs', text: 'Secure, scalable APIs and server logic with clean architecture.' },
  { icon: 'globe', title: 'Website Development', text: 'Fast, SEO-friendly websites tailored to your brand and goals.' },
  { icon: 'wrench', title: 'Maintenance & Support', text: 'Updates, performance tuning, and ongoing care for live products.' },
]

export const skillBars = [
  { name: 'Frontend', level: 95 },
  { name: 'React.js', level: 90 },
  { name: 'Backend / APIs', level: 60 },
  { name: 'Databases', level: 80 },
  { name: 'DevOps & Tools', level: 70 },
]
export const toolBadges = ['HTML', 'CSS', 'JS', 'TS', 'React', 'Node', 'Git', 'SQL']

export const results = [
  { value: 120, suffix: '%', label: 'Average performance gain' },
  { value: 85, suffix: '%', label: 'Client retention' },
  { value: 2.4, suffix: 'x', label: 'Average ROI', decimals: 1 },
  { value: 48, suffix: '+', label: 'Successful projects' },
]

export const process = [
  { icon: 'search', title: 'Discover', text: 'Understanding your goals, audience, and challenges.' },
  { icon: 'rocket', title: 'Plan', text: 'Defining scope, architecture, and the right tech stack.' },
  { icon: 'pen', title: 'Design', text: 'Wireframes and UI that communicate and convert.' },
  { icon: 'code', title: 'Develop', text: 'Building fast, responsive, and scalable products.' },
  { icon: 'send', title: 'Deliver', text: 'Testing, refining, and launching with confidence.' },
]

export const experience = [
  { role: 'Senior Web Developer', company: 'Freelance', period: '2024 - Present', text: 'Describe what you built and the impact it had.' },
  { role: 'Full-Stack Developer', company: 'Saylani Welfare International Trust / Freelancer', period: '2024 - 2026', text: 'Describe what you built and the impact it had.' },
  { role: 'Junior Developer', company: 'Freelance', period: '2024 - 2025', text: 'Describe what you built and the impact it had.' },
]

export const testimonials = [
  { name: 'Hasnain', role: 'Founder, Company', avatar: '', text: 'Delivered a responsive web application with smooth functionality and clean design.' },
  { name: 'Saylani', role: 'CEO, Company', avatar: '', text: 'Great communication and a modern, professional website. Highly recommended!' },
  { name: 'Saylani', role: 'Marketing Director', avatar: '', text: 'Professional, reliable, and focused on turning ideas into practical digital solutions.' },
]

export const contact = {
  heading: "Let's build something great",
  text: "Have a project in mind or just want to say hi? I'd love to hear from you.",
  email: 'arslanh735@gmail.com',
  phone: '+92 349 117 5954',
  location: 'Islamabad, Pakistan',
  availability: 'Open for new projects',
  projectTypes: ['Website', 'Web application', 'E-commerce', 'Other'],
}

export const socials = [
  { icon: 'github', label: 'GitHub', href: 'https://github.com/Arslanh735' },
  { icon: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/arslan-haider-704273337/' },
  { icon: 'twitter', label: 'Twitter', href: 'https://twitter.com/' },
  { icon: 'dribbble', label: 'Dribbble', href: 'https://dribbble.com/' },
]

// Snippets floating in the animated background
export const codeSnippets = [
  '<div className="app">', '</section>', 'const [state, setState] = useState()', 'display: grid;',
  'export default function App() {', '{ }', '=> {', 'npm run dev', 'git commit -m "ship it"',
  'useEffect(() => {}, [])', 'async function fetchData()', 'flex-direction: column;', '<Route path="/" />',
  'import React from "react"', 'return ( <Hero /> )', '$ vite build', 'border-radius: 12px;',
  'await fetch("/api")', '</>', 'const router = express.Router()', 'SELECT * FROM users;', '/* TODO */',
]

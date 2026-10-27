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
  image: '', // e.g. '/images/me.png' (transparent PNG looks best)
  resumeUrl: '/public/images/Arslan Haider Resume.pdf',
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
  { title: 'Project One', type: 'Ecommerce Landing Page', tag: 'JavaScript', image: '/public/images/Ecommerce.png', link: 'https://ecomrece-landing-page.vercel.app/', description: 'Short description.' },
  { title: 'Project Two', type: 'Notes App', tag: 'JavaScript', image: '/public/images/Sticky.png', link: 'https://notes-app-livid-two-81.vercel.app/', description: 'Short description.' },
  { title: 'Project Three', type: 'Quiz App', tag: 'JavaScript', image: '/public/images/Quiz.png', link: 'https://quiz-application-nine-alpha.vercel.app/', description: 'Short description.' },
  { title: 'Project Four', type: 'Stop Watch', tag: 'JavaScript', image: '/public/images/Stopwatch.png', link: 'https://stop-watch-chi-beryl.vercel.app/', description: 'Short description.' },
  { title: 'Project Five', type: 'Calculator App', tag: 'JavaScript', image: '/public/images/Calculator.png', link: 'https://caclutor-app.vercel.app/', description: 'Short description.' },
  { title: 'Project Six', type: 'Signup Form', tag: 'JavaScript', image: '/public/images/gaming.png', link: 'https://signup-and-login-form-theta.vercel.app/', description: 'Short description.' },
]

export const services = [
  { icon: 'layout', title: 'Frontend Development', text: 'Responsive, accessible interfaces built with React and modern CSS.' },
  { icon: 'server', title: 'Backend & APIs', text: 'Secure, scalable APIs and server logic with clean architecture.' },
  { icon: 'globe', title: 'Website Development', text: 'Fast, SEO-friendly websites tailored to your brand and goals.' },
  { icon: 'wrench', title: 'Maintenance & Support', text: 'Updates, performance tuning, and ongoing care for live products.' },
]

export const skillBars = [
  { name: 'Frontend', level: 95 },
  { name: 'React / Next.js', level: 90 },
  { name: 'Backend / APIs', level: 80 },
  { name: 'Databases', level: 75 },
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
  { role: 'Senior Web Developer', company: 'Company Name', period: '2023 - Present', text: 'Describe what you built and the impact it had.' },
  { role: 'Full-Stack Developer', company: 'Company Name', period: '2021 - 2023', text: 'Describe what you built and the impact it had.' },
  { role: 'Junior Developer', company: 'Company Name', period: '2019 - 2021', text: 'Describe what you built and the impact it had.' },
]

export const testimonials = [
  { name: 'Client Name', role: 'CEO, Company', avatar: '', text: 'Write a testimonial from a happy client here. Keep it short and specific.' },
  { name: 'Client Name', role: 'Founder, Company', avatar: '', text: 'Write a testimonial from a happy client here. Keep it short and specific.' },
  { name: 'Client Name', role: 'Marketing Director', avatar: '', text: 'Write a testimonial from a happy client here. Keep it short and specific.' },
]

export const contact = {
  heading: "Let's build something great",
  text: "Have a project in mind or just want to say hi? I'd love to hear from you.",
  email: 'hello@example.com',
  phone: '+1 (234) 567-8901',
  location: 'City, Country',
  availability: 'Open for new projects',
  projectTypes: ['Website', 'Web application', 'E-commerce', 'Other'],
}

export const socials = [
  { icon: 'github', label: 'GitHub', href: 'https://github.com/' },
  { icon: 'linkedin', label: 'LinkedIn', href: 'https://linkedin.com/' },
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

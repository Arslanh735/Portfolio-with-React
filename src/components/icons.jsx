import { Layout, Server, Globe, Wrench, Search, Rocket, PenTool, Code2, Send, Github, Linkedin, Twitter, Dribbble, Mail, Phone, MapPin, Clock, ArrowUpRight, ArrowRight, Download, Menu, X, ChevronDown } from 'lucide-react'
const map = { layout: Layout, server: Server, globe: Globe, wrench: Wrench, search: Search, rocket: Rocket, pen: PenTool, code: Code2, send: Send, github: Github, linkedin: Linkedin, twitter: Twitter, dribbble: Dribbble }
export { Mail, Phone, MapPin, Clock, ArrowUpRight, ArrowRight, Download, Menu, X, ChevronDown, Send }
export const Icon = ({ name, size = 22 }) => { const C = map[name] || Code2; return <C size={size} strokeWidth={1.6} /> }

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Menu,
  X,
  Code2,
  Palette,
  Smartphone,
  Cpu,
  ExternalLink,
  Send,
  Sparkles,
  CheckCircle2,
  Moon,
  Sun,
  Globe,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  ChevronRight,
  Database,
  Layers,
  Terminal,
  MousePointerClick
} from 'lucide-react'

// Custom Github component as Lucide 4 doesn't include trademark logos
const Github = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
)

const translations = {
  ar: {
    navHome: "الرئيسية",
    navServices: "خدماتنا",
    navProjects: "مشاريعنا",
    navSkills: "مهاراتنا",
    navContact: "تواصل معنا",
    heroBadge: "🚀 نصنع المستقبل الرقمي",
    heroTitle: "نبني تطبيقات ويب استثنائية وسريعة",
    heroSubtitle: "مطور برمجيات متكامل (Full-Stack) متخصص في تحويل الأفكار الطموحة إلى تطبيقات رقمية فريدة، وحلول تفاعلية مؤتمتة بأعلى معايير الأداء والجمال البصري.",
    btnContact: "تواصل معي",
    btnProjects: "عرض المشاريع",
    servicesTitle: "الخدمات التي أقدمها",
    servicesSubtitle: "حلول رقمية متكاملة ومصممة خصيصاً لتلبية احتياجات عملك ونموه الرقمي",
    service1Title: "تطوير تطبيقات الويب",
    service1Desc: "تطوير تطبيقات ويب سريعة، آمنة ومتجاوبة بالكامل مع مختلف الشاشات باستخدام React و Node.js و Next.js.",
    service2Title: "تصميم واجهات المستخدم (UI/UX)",
    service2Desc: "تصميم واجهات مستخدم جذابة وسهلة الاستخدام تركز على توفير تجربة مستخدم استثنائية وسلسة للعملاء.",
    service3Title: "تطوير تطبيقات الهواتف",
    service3Desc: "بناء تطبيقات هواتف ذكية ممتازة وتعمل بكفاءة عالية على نظامي iOS و Android لتوفير وصول أسهل لعملائك.",
    service4Title: "حلول الذكاء الاصطناعي والأتمتة",
    service4Desc: "دمج الذكاء الاصطناعي وأتمتة العمليات اليومية لتوفير الوقت والجهد وتطوير الكفاءة التشغيلية.",
    projectsTitle: "أحدث أعمالي",
    projectsSubtitle: "استعرض مجموعة من المشاريع الواقعية التي قمت بتطويرها بمختلف التقنيات الحديثة",
    all: "الكل",
    web: "ويب",
    mobile: "هواتف",
    ai: "ذكاء اصطناعي",
    project1Title: "منصة تجارة إلكترونية متكاملة",
    project1Desc: "متجر إلكتروني فائق السرعة مع لوحة تحكم متطورة لإدارة المنتجات، الطلبات، وبوابات دفع مدمجة وآمنة.",
    project2Title: "لوحة تحكم ذكية للبيانات",
    project2Desc: "لوحة تحكم تعرض إحصائيات فورية، تحليلات تفصيلية ورسوم بيانية تفاعلية ممتازة لتتبع أداء المبيعات.",
    project3Title: "تطبيق توصيل وتتبع الشحنات",
    project3Desc: "تطبيق للهواتف الذكية يتيح للمستخدمين حجز وتتبع طلبات التوصيل في الوقت الفعلي مع خرائط تفاعلية.",
    project4Title: "مساعد الذكاء الاصطناعي للأعمال",
    project4Desc: "شات بوت ذكي مدمج مع نماذج لغوية متقدمة (GPT) لتقديم الدعم الفني الفوري وأتمتة الردود للعملاء.",
    skillsTitle: "المهارات والخبرات التقنية",
    skillsSubtitle: "الأدوات والتقنيات التي أتقنها لإنتاج برمجيات ومواقع ذات جودة عالمية",
    contactTitle: "لنبدأ مشروعك القادم معاً",
    contactSubtitle: "هل لديك فكرة مشروع طموحة؟ تواصل معي الآن لتحويلها إلى منتج رقمي مذهل وناجح.",
    formName: "الاسم الكامل",
    formEmail: "البريد الإلكتروني",
    formSubject: "موضوع الرسالة",
    formMessage: "تفاصيل رسالتك",
    formSubmit: "إرسال الرسالة",
    formSending: "جاري الإرسال...",
    formSuccess: "تم إرسال رسالتك بنجاح! سأتصل بك قريباً.",
    formError: "حدث خطأ ما، يرجى إعادة المحاولة.",
    footerText: "جميع الحقوق محفوظة © 2026. تم التطوير بكل شغف.",
    contactInfo: "معلومات الاتصال",
    techStack: "التقنيات المستخدمة"
  },
  en: {
    navHome: "Home",
    navServices: "Services",
    navProjects: "Projects",
    navSkills: "Skills",
    navContact: "Contact",
    heroBadge: "🚀 Shaping the Digital Future",
    heroTitle: "Building Exceptional Web & Digital Experiences",
    heroSubtitle: "A passionate Full-Stack Developer specializing in transforming ambitious concepts into high-performance web applications, fluid designs, and intelligent automated solutions.",
    btnContact: "Contact Me",
    btnProjects: "View Projects",
    servicesTitle: "What I Do",
    servicesSubtitle: "Comprehensive digital services engineered to scale your business and engage your audience.",
    service1Title: "Web Development",
    service1Desc: "Developing blazing-fast, secure, and fully responsive websites and applications using React, Next.js, and Node.js.",
    service2Title: "UI/UX Design",
    service2Desc: "Designing gorgeous, user-centric interfaces focused on sleek navigation and engaging customer journeys.",
    service3Title: "Mobile Development",
    service3Desc: "Crafting beautiful, native-feel cross-platform mobile apps for iOS and Android built on cutting-edge frameworks.",
    service4Title: "AI & Automation",
    service4Desc: "Integrating cognitive AI engines and automating business processes to drive speed, accuracy, and growth.",
    projectsTitle: "Featured Projects",
    projectsSubtitle: "A curated display of real-world applications engineered to deliver business value and clean code.",
    all: "All",
    web: "Web",
    mobile: "Mobile",
    ai: "AI",
    project1Title: "Full-Scale E-Commerce Hub",
    project1Desc: "A complete storefront featuring modular product listings, comprehensive analytics dashboard, and secure checkout portals.",
    project2Title: "SaaS Analytics Dashboard",
    project2Desc: "Interactive real-time monitoring dashboard visualizing business KPIs, user engagement metrics, and financial reports.",
    project3Title: "On-Demand Delivery Tracker",
    project3Desc: "A high-fidelity mobile app with real-time mapping integrations and automated tracking alerts for instant shipping.",
    project4Title: "AI Enterprise Assistant",
    project4Desc: "An advanced conversational LLM assistant integrated into helpdesks to automate support tickets and answer queries.",
    skillsTitle: "Technical Expertise",
    skillsSubtitle: "The advanced technologies, systems, and languages I master to forge top-tier digital systems.",
    contactTitle: "Let's Scale Your Idea Together",
    contactSubtitle: "Have a project or a business challenge? Reach out, and let's turn it into a premium reality.",
    formName: "Full Name",
    formEmail: "Email Address",
    formSubject: "Subject",
    formMessage: "Message Details",
    formSubmit: "Send Message",
    formSending: "Sending Message...",
    formSuccess: "Message sent successfully! I will get back to you shortly.",
    formError: "An error occurred. Please try again.",
    footerText: "All rights reserved © 2026. Crafted with passion & pixel-perfect precision.",
    contactInfo: "Contact Details",
    techStack: "Technologies Used"
  }
}

function App() {
  const [lang, setLang] = useState('ar')
  const [darkMode, setDarkMode] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [projectFilter, setProjectFilter] = useState('all')
  const [contactForm, setContactForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success' | 'error'

  const t = translations[lang]

  useEffect(() => {
    // Sync dark mode class
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const handleLangToggle = () => {
    setLang(prev => (prev === 'ar' ? 'en' : 'ar'))
  }

  const handleContactSubmit = (e) => {
    e.preventDefault()
    if (!contactForm.name || !contactForm.email || !contactForm.message) {
      setSubmitStatus('error')
      return
    }

    setIsSubmitting(true)
    setSubmitStatus(null)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setContactForm({ name: '', email: '', subject: '', message: '' })
    }, 1500)
  }

  const services = [
    { icon: Code2, title: t.service1Title, desc: t.service1Desc, tech: ['React', 'Next.js', 'Node.js', 'Tailwind'] },
    { icon: Palette, title: t.service2Title, desc: t.service2Desc, tech: ['Figma', 'UI/UX Prototypes', 'Design Systems'] },
    { icon: Smartphone, title: t.service3Title, desc: t.service3Desc, tech: ['React Native', 'Flutter', 'Mobile UI'] },
    { icon: Cpu, title: t.service4Title, desc: t.service4Desc, tech: ['OpenAI API', 'LangChain', 'Python Automation'] },
  ]

  const projects = [
    {
      id: 1,
      category: 'web',
      title: t.project1Title,
      desc: t.project1Desc,
      tech: ['React', 'Node.js', 'Tailwind CSS', 'Stripe'],
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80',
      demo: '#',
      github: '#'
    },
    {
      id: 2,
      category: 'web',
      title: t.project2Title,
      desc: t.project2Desc,
      tech: ['Vite', 'React', 'Recharts', 'Tailwind CSS'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      demo: '#',
      github: '#'
    },
    {
      id: 3,
      category: 'mobile',
      title: t.project3Title,
      desc: t.project3Desc,
      tech: ['React Native', 'Expo', 'Google Maps API'],
      image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=800&q=80',
      demo: '#',
      github: '#'
    },
    {
      id: 4,
      category: 'ai',
      title: t.project4Title,
      desc: t.project4Desc,
      tech: ['Python', 'OpenAI', 'Next.js', 'PostgreSQL'],
      image: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=800&q=80',
      demo: '#',
      github: '#'
    }
  ]

  const skillCategories = [
    {
      title: lang === 'ar' ? "الواجهات الأمامية" : "Frontend Development",
      icon: Code2,
      skills: [
        { name: "React / React 19", level: 95 },
        { name: "JavaScript / TypeScript", level: 90 },
        { name: "Tailwind CSS v4", level: 98 },
        { name: "Next.js", level: 85 },
      ]
    },
    {
      title: lang === 'ar' ? "الواجهات الخلفية" : "Backend & Databases",
      icon: Database,
      skills: [
        { name: "Node.js / Express", level: 88 },
        { name: "Python / FastAPI", level: 80 },
        { name: "PostgreSQL / MongoDB", level: 85 },
        { name: "RESTful & GraphQL APIs", level: 90 },
      ]
    },
    {
      title: lang === 'ar' ? "الأدوات والذكاء الاصطناعي" : "AI & Cloud Tools",
      icon: Terminal,
      skills: [
        { name: "Git / GitHub / CI-CD", level: 92 },
        { name: "Docker & AWS Basics", level: 75 },
        { name: "OpenAI API Integration", level: 88 },
        { name: "UI Design (Figma)", level: 82 },
      ]
    }
  ]

  const filteredProjects = projectFilter === 'all'
    ? projects
    : projects.filter(p => p.category === projectFilter)

  return (
    <div className={`min-h-screen font-sans ${lang === 'ar' ? 'rtl' : 'ltr'} bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-purple-500 selection:text-white overflow-x-hidden`}>
      
      {/* Background glowing decorations */}
      <div className="glowing-blob w-[400px] h-[400px] bg-purple-600 top-20 left-[-100px]" />
      <div className="glowing-blob w-[500px] h-[500px] bg-indigo-600 top-[800px] right-[-150px]" />
      <div className="glowing-blob w-[300px] h-[300px] bg-fuchsia-600 bottom-40 left-10" />

      {/* Glassmorphic Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div 
              initial={{ opacity: 0, x: lang === 'ar' ? 20 : -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-600 flex items-center justify-center text-white font-bold shadow-md shadow-purple-500/20">
                <Sparkles size={20} className="animate-pulse" />
              </div>
              <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-500 dark:from-purple-400 dark:to-indigo-300">
                {lang === 'ar' ? 'نبذة رقمية' : 'DigitalCraft'}
              </span>
            </motion.div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-8 font-medium">
              {[
                { name: t.navHome, href: "#home" },
                { name: t.navServices, href: "#services" },
                { name: t.navProjects, href: "#projects" },
                { name: t.navSkills, href: "#skills" },
                { name: t.navContact, href: "#contact" },
              ].map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors text-sm relative group py-2"
                  whileHover={{ scale: 1.02 }}
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-purple-500 to-indigo-500 transition-all duration-300 group-hover:w-full"></span>
                </motion.a>
              ))}
            </div>

            {/* Utility buttons (Lang / Theme / Menu) */}
            <div className="flex items-center gap-3">
              {/* Language Switcher */}
              <button
                onClick={handleLangToggle}
                className="p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors border border-slate-200/50 dark:border-slate-800/50 flex items-center gap-1.5 text-xs font-semibold cursor-pointer"
                aria-label="Toggle language"
              >
                <Globe size={16} />
                <span>{lang === 'ar' ? 'English' : 'عربي'}</span>
              </button>

              {/* Theme Switcher */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors border border-slate-200/50 dark:border-slate-800/50 cursor-pointer"
                aria-label="Toggle dark mode"
              >
                {darkMode ? <Sun size={18} className="text-amber-400" /> : <Moon size={18} className="text-slate-700" />}
              </button>

              {/* Contact Button Desktop */}
              <a
                href="#contact"
                className="hidden lg:flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-medium text-sm py-2.5 px-5 rounded-xl transition-all shadow-md shadow-purple-500/20 hover:shadow-lg hover:shadow-purple-500/30 active:scale-95"
              >
                <span>{t.btnContact}</span>
                <ArrowUpRight size={16} className={lang === 'ar' ? 'rotate-270' : ''} />
              </a>

              {/* Mobile Burger Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-900 md:hidden border border-slate-200/50 dark:border-slate-800/50"
                aria-label="Toggle Mobile Menu"
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-slate-200/50 dark:border-slate-800/50 bg-white/95 dark:bg-slate-950/95 backdrop-blur-lg overflow-hidden"
            >
              <div className="px-4 py-5 space-y-3">
                {[
                  { name: t.navHome, href: "#home" },
                  { name: t.navServices, href: "#services" },
                  { name: t.navProjects, href: "#projects" },
                  { name: t.navSkills, href: "#skills" },
                  { name: t.navContact, href: "#contact" },
                ].map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-2.5 rounded-lg text-base font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900 hover:text-purple-600 dark:hover:text-purple-400 transition-all"
                  >
                    {link.name}
                  </a>
                ))}
                <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex justify-center">
                  <a
                    href="#contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full text-center flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium py-3 rounded-xl shadow-md"
                  >
                    <span>{t.btnContact}</span>
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col space-y-6 text-center lg:text-start items-center lg:items-start">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-purple-500/10 dark:bg-purple-400/10 text-purple-600 dark:text-purple-300 text-xs sm:text-sm font-semibold border border-purple-500/20"
              >
                <Sparkles size={14} className="animate-spin" />
                <span>{t.heroBadge}</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight sm:leading-none tracking-tight text-slate-950 dark:text-white"
              >
                {lang === 'ar' ? (
                  <>
                    نبني تطبيقات ويب <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-500 to-fuchsia-500 dark:from-purple-400 dark:via-indigo-300 dark:to-fuchsia-400">استثنائية وسريعة</span>
                  </>
                ) : (
                  <>
                    Building Exceptional <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-500 to-fuchsia-500 dark:from-purple-400 dark:via-indigo-300 dark:to-fuchsia-400">Web & Digital</span> Experiences
                  </>
                )}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed font-normal"
              >
                {t.heroSubtitle}
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto pt-4"
              >
                <a
                  href="#contact"
                  className="w-full sm:w-auto text-center flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold py-3.5 px-8 rounded-xl transition-all shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 hover:-translate-y-0.5"
                >
                  {t.btnContact}
                  <Send size={16} className={lang === 'ar' ? 'rotate-180' : ''} />
                </a>
                <a
                  href="#projects"
                  className="w-full sm:w-auto text-center flex items-center justify-center gap-2 bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-800 font-semibold py-3.5 px-8 rounded-xl transition-all hover:-translate-y-0.5"
                >
                  {t.btnProjects}
                  <MousePointerClick size={16} />
                </a>
              </motion.div>
            </div>

            {/* Right Interactive Card Column */}
            <div className="lg:col-span-5 relative flex justify-center items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative w-full max-w-[400px] h-[400px] flex items-center justify-center"
              >
                {/* Visual Glassmorphic Tech Stack Circle */}
                <div className="absolute w-[300px] h-[300px] rounded-full border border-dashed border-purple-500/30 dark:border-purple-400/20 animate-spin" style={{ animationDuration: '40s' }} />
                <div className="absolute w-[220px] h-[220px] rounded-full border border-dashed border-indigo-500/30 dark:border-indigo-400/20 animate-spin" style={{ animationDuration: '25s', animationDirection: 'reverse' }} />

                {/* Core logo container */}
                <div className="absolute w-24 h-24 rounded-3xl bg-slate-900/10 dark:bg-white/5 border border-white/20 flex items-center justify-center shadow-2xl backdrop-blur-xl group hover:scale-105 transition-transform duration-300">
                  <Cpu size={48} className="text-purple-500 dark:text-purple-400 animate-pulse" />
                </div>

                {/* Orbiting Tech Cards */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  className="absolute top-10 right-2 glass-card py-2.5 px-4 rounded-2xl flex items-center gap-2.5 shadow-lg border border-white/20"
                >
                  <Code2 className="text-purple-500" size={18} />
                  <span className="text-xs font-bold font-mono">React 19</span>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.5 }}
                  className="absolute bottom-12 left-2 glass-card py-2.5 px-4 rounded-2xl flex items-center gap-2.5 shadow-lg border border-white/20"
                >
                  <Sparkles className="text-indigo-500 animate-spin" size={18} style={{ animationDuration: '8s' }} />
                  <span className="text-xs font-bold font-mono">Tailwind v4</span>
                </motion.div>

                <motion.div
                  animate={{ x: [0, -8, 0] }}
                  transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.2 }}
                  className="absolute top-48 left-0 glass-card py-2.5 px-4 rounded-2xl flex items-center gap-2.5 shadow-lg border border-white/20"
                >
                  <Terminal className="text-emerald-500" size={18} />
                  <span className="text-xs font-bold font-mono">Vite Fast</span>
                </motion.div>

                <motion.div
                  animate={{ x: [0, 8, 0] }}
                  transition={{ repeat: Infinity, duration: 4.8, ease: "easeInOut", delay: 0.7 }}
                  className="absolute bottom-24 right-0 glass-card py-2.5 px-4 rounded-2xl flex items-center gap-2.5 shadow-lg border border-white/20"
                >
                  <Database className="text-amber-500" size={18} />
                  <span className="text-xs font-bold font-mono">Node.js</span>
                </motion.div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white dark:bg-slate-900/50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 dark:text-white mb-4">
              {t.servicesTitle}
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
              {t.servicesSubtitle}
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="p-6 rounded-2xl border border-slate-200/60 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 hover:shadow-xl hover:shadow-purple-500/5 transition-all group duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 dark:bg-purple-500/20 flex items-center justify-center text-purple-600 dark:text-purple-300 mb-5 group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 shadow-md">
                  <service.icon size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-slate-100 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-5">
                  {service.desc}
                </p>
                
                {/* Tech chips */}
                <div className="flex flex-wrap gap-1.5 mt-auto pt-2 border-t border-slate-200/50 dark:border-slate-800/50">
                  {service.tech.map((tech, i) => (
                    <span key={i} className="text-[10px] font-semibold bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 px-2 py-0.5 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Showcase Section */}
      <section id="projects" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 dark:text-white mb-4">
              {t.projectsTitle}
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
              {t.projectsSubtitle}
            </p>
          </div>

          {/* Project Filters */}
          <div className="flex justify-center flex-wrap gap-2.5 mb-12">
            {[
              { id: 'all', name: t.all },
              { id: 'web', name: t.web },
              { id: 'mobile', name: t.mobile },
              { id: 'ai', name: t.ai },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setProjectFilter(tab.id)}
                className={`py-2 px-6 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  projectFilter === tab.id
                    ? 'bg-purple-600 text-white shadow-md shadow-purple-500/20'
                    : 'bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300'
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>

          {/* Projects Cards Grid */}
          <motion.div 
            layout 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200/60 dark:border-slate-800 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col"
                >
                  {/* Image Container with Hover Zoom & Tech Tags Overlay */}
                  <div className="relative overflow-hidden aspect-video bg-slate-100 dark:bg-slate-800">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-80" />
                    
                    {/* Floating Category Badge */}
                    <span className="absolute top-4 right-4 bg-purple-600 text-white text-[11px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow">
                      {t[project.category]}
                    </span>
                  </div>

                  {/* Details */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold mb-2.5 text-slate-950 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-5 leading-relaxed flex-grow">
                      {project.desc}
                    </p>

                    {/* Meta & Links */}
                    <div className="flex flex-col gap-4 pt-4 border-t border-slate-100 dark:border-slate-800/80">
                      {/* Technical Stack used */}
                      <div className="flex flex-wrap gap-1.5">
                        {project.tech.map((tag, i) => (
                          <span key={i} className="text-[11px] font-semibold bg-purple-500/10 dark:bg-purple-500/20 text-purple-700 dark:text-purple-300 px-2 py-0.5 rounded">
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Action Links */}
                      <div className="flex items-center gap-4 text-sm font-semibold pt-1">
                        <a 
                          href={project.demo} 
                          className="flex items-center gap-1.5 text-purple-600 dark:text-purple-400 hover:underline hover:text-purple-500"
                        >
                          <span>Live Demo</span>
                          <ExternalLink size={14} />
                        </a>
                        <a 
                          href={project.github} 
                          className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                        >
                          <Github size={15} />
                          <span>Code</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Skills / Technical Expertise Section */}
      <section id="skills" className="py-20 bg-white dark:bg-slate-900/50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 dark:text-white mb-4">
              {t.skillsTitle}
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
              {t.skillsSubtitle}
            </p>
          </div>

          {/* Skill Groups */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="p-6 rounded-2xl border border-slate-200/60 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-purple-500/10 dark:bg-purple-500/20 flex items-center justify-center text-purple-600 dark:text-purple-300 shadow">
                    <category.icon size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                    {category.title}
                  </h3>
                </div>

                {/* List of Skills with Progress Bar */}
                <div className="space-y-4.5">
                  {category.skills.map((skill, sIdx) => (
                    <div key={sIdx}>
                      <div className="flex justify-between items-center mb-1.5 text-xs sm:text-sm">
                        <span className="font-semibold text-slate-700 dark:text-slate-300">{skill.name}</span>
                        <span className="font-bold text-purple-600 dark:text-purple-400 font-mono">{skill.level}%</span>
                      </div>
                      <div className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: sIdx * 0.1, ease: "easeOut" }}
                          className="h-full bg-gradient-to-r from-purple-600 to-indigo-500 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Information Side (Col-5) */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <h2 className="text-3xl sm:text-4xl font-black text-slate-950 dark:text-white mb-4">
                  {t.contactTitle}
                </h2>
                <p className="text-base text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                  {t.contactSubtitle}
                </p>

                {/* Quick Info Cards */}
                <div className="space-y-4.5">
                  <div className="flex items-center gap-4 p-4 rounded-xl border border-slate-200/50 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 shadow-sm">
                    <div className="w-10 h-10 rounded-lg bg-purple-500/10 dark:bg-purple-500/20 flex items-center justify-center text-purple-600 dark:text-purple-300">
                      <Mail size={18} />
                    </div>
                    <div>
                      <span className="block text-[11px] font-bold text-slate-400 uppercase tracking-wide">Email</span>
                      <a href="mailto:info@digitalcraft.com" className="text-sm font-semibold hover:text-purple-600 dark:hover:text-purple-400 transition-colors">info@digitalcraft.com</a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 rounded-xl border border-slate-200/50 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 shadow-sm">
                    <div className="w-10 h-10 rounded-lg bg-indigo-500/10 dark:bg-indigo-500/20 flex items-center justify-center text-indigo-600 dark:text-indigo-300">
                      <Phone size={18} />
                    </div>
                    <div>
                      <span className="block text-[11px] font-bold text-slate-400 uppercase tracking-wide">Phone</span>
                      <a href="tel:+201000000000" className="text-sm font-semibold hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors" dir="ltr">+20 100 000 0000</a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 rounded-xl border border-slate-200/50 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 shadow-sm">
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/10 dark:bg-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-300">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <span className="block text-[11px] font-bold text-slate-400 uppercase tracking-wide">Location</span>
                      <span className="text-sm font-semibold">{lang === 'ar' ? 'الجيزة، مصر' : 'Giza, Egypt'}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Icons inside Footer/Left Block */}
              <div className="flex gap-3.5 mt-10">
                {[
                  { icon: Github, link: "#" },
                  { icon: Mail, link: "#" },
                  { icon: Phone, link: "#" },
                ].map((social, sI) => (
                  <a
                    key={sI}
                    href={social.link}
                    className="w-11 h-11 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-sm"
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Form Side (Col-7) */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-6 sm:p-8 rounded-2xl border border-slate-200/60 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-md relative"
              >
                <form onSubmit={handleContactSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-2">
                        {t.formName} *
                      </label>
                      <input
                        type="text"
                        required
                        value={contactForm.name}
                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-sm focus:outline-none focus:border-purple-500 dark:focus:border-purple-400 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-2">
                        {t.formEmail} *
                      </label>
                      <input
                        type="email"
                        required
                        value={contactForm.email}
                        onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-955 text-sm focus:outline-none focus:border-purple-500 dark:focus:border-purple-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-2">
                      {t.formSubject}
                    </label>
                    <input
                      type="text"
                      value={contactForm.subject}
                      onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-955 text-sm focus:outline-none focus:border-purple-500 dark:focus:border-purple-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-2">
                      {t.formMessage} *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-955 text-sm focus:outline-none focus:border-purple-500 dark:focus:border-purple-400 transition-colors resize-none"
                    />
                  </div>

                  {/* Submit state message */}
                  <AnimatePresence>
                    {submitStatus === 'success' && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="p-3.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs sm:text-sm font-bold rounded-xl flex items-center gap-2"
                      >
                        <CheckCircle2 size={16} />
                        <span>{t.formSuccess}</span>
                      </motion.div>
                    )}
                    {submitStatus === 'error' && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="p-3.5 bg-rose-500/10 border border-rose-500/20 text-rose-600 dark:text-rose-400 text-xs sm:text-sm font-bold rounded-xl flex items-center gap-2"
                      >
                        <X size={16} />
                        <span>{t.formError}</span>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold py-3.5 rounded-xl transition-all shadow-lg shadow-purple-500/10 flex items-center justify-center gap-2 active:scale-[0.98] disabled:opacity-70 cursor-pointer"
                  >
                    <span>{isSubmitting ? t.formSending : t.formSubmit}</span>
                    <Send size={15} className={lang === 'ar' ? 'rotate-180' : ''} />
                  </button>
                </form>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-slate-200/60 dark:border-slate-900 bg-slate-50/50 dark:bg-slate-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col md:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
          <div>
            <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-400">
              {lang === 'ar' ? 'نبذة رقمية' : 'DigitalCraft'}
            </span>
          </div>
          <p>{t.footerText}</p>
          <div className="flex items-center gap-4.5">
            <a href="#home" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">{t.navHome}</a>
            <a href="#services" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">{t.navServices}</a>
            <a href="#projects" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">{t.navProjects}</a>
          </div>
        </div>
      </footer>

    </div>
  )
}

export default App

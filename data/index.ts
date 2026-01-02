export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a Hotel Project",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Octalink Global Sourcing - Global Textile Company",
    des: "OCTALINK GLOBAL SOURCING utilizes React.js, Tailwind CSS, MongoDB, Framer Motion, and AWS with dynamic animations to streamline global textile sourcing and procurement.",
    img: "/bg1.JPG",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/md.svg", "/fm.svg"],
    link: "https://www.octalink-bd.com/",
    architecture: {
      nodes: [
        { id: "client", label: "Client", subLabel: "React + Tailwind", icon: "💻" },
        { id: "backend", label: "Backend", subLabel: "Node.js / Express", icon: "⚙️" },
        { id: "db", label: "Database", subLabel: "MongoDB", icon: "🗄️" },
        { id: "cloud", label: "Cloud", subLabel: "AWS S3", icon: "☁️" },
      ],
      edges: [
        { source: "client", target: "backend", label: "API REST" },
        { source: "backend", target: "db", label: "Query" },
        { source: "backend", target: "cloud", label: "Uploads" },
      ]
    }
  },
  {
    id: 2,
    title: "Avalon Sky a Banking Management Platform",
    des: "Avalon Sky is a secure and intuitive platform designed to manage all your banking needs in one place. From tracking transactions to transferring funds and adding multiple bank accounts, BankVault offers a streamlined solution for handling your financial information. With a focus on security and ease of use, it simplifies the complexities of managing various bank accounts, ensuring you stay in control of your finances with confidence.",
    img: "/project_bank.JPG",
    iconLists: ["/next.svg", "/tail.svg", "/md.svg", "/js.svg", "/fm.svg"],
    link: "https://banking-website-32fi.vercel.app/sign-in",
  },
  {
    id: 3,
    title: "Clinica a Easy Solution For Your Daily Checkup",
    des: "Clinica is a convenient online platform that simplifies the process of booking doctor appointments. With Clinica, patients can easily find and reserve checkup slots with healthcare professionals at their preferred time, all from the comfort of their home. Whether you're looking for a general checkup or a specialist consultation, Clinica connects you with qualified doctors, helping you manage your health appointments efficiently and stress-free.",
    img: "/project_clinic.JPG",
    iconLists: ["/next.svg", "/tail.svg", "/md.svg", "/js.svg", "/fm.svg"],
    link: "https://clinica-drab.vercel.app/",
  },

  {
    id: 4,
    title: "TrekTales a Tourist Website",
    des: "TrekTales is a curated travel platform using React.js, Tailwind CSS, MongoDB, AWS, and Framer Motion to explore Europe's hidden gems and popular destinations.",
    img: "/bg3.JPG",
    iconLists: ["/next.svg", "/tail.svg", "/js.svg", "/three.svg", "/fm.svg"],
    link: "https://trektales0108.netlify.app/",
  },
  {
    id: 5,
    title: "Career Canvas - Job Seeking Website",
    des: "CareerCanvas is a sleek job hunting and recruitment platform using React.js, Tailwind CSS, MongoDB, AWS, and Framer Motion for smooth animations.",
    img: "/bg2.JPG",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://career-canvas.netlify.app/",
  },
  {
    id: 6,
    title: "Donation Service Platform Design",
    des: "Explore the wonders of our donation service website, we used React.js, Tailwind CSS, and MongoDB with cool animations to connect donors to impactful causes worldwide.",
    img: "/bg4.JPG",
    iconLists: ["/re.svg", "/tail.svg", "/md.svg", "/js.svg", "/fm.svg"],
    link: "https://life-stream-donate-0108.netlify.app/",
  },



];

export const testimonials = [
  {
    quote:
      "Collaborating with Atiqul Islam was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Atiqul's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, they are the ideal partner.",
    name: "Kamrul Hasan",
    title: "CEO of Octalink Global Sourcing",
    img: "/test1.jpg"
  },
  {
    quote:
      "Working with Atiqul Islam was a delight. His professionalism, timeliness, and commitment to excellence were clear from start to finish. Atiqul's  passion for development shines through in every aspect. If you want to enhance your website and brand, they are the perfect choice.",
    name: "Rashedul Islam",
    title: "Managing Director of Career Canvas",
    img: '/test2.JPG'
  },
  {
    quote:
      "Partnering with Atiqul Islam was a remarkable experience. Throughout our project, his professionalism, timeliness, and dedication to achieving outstanding results were consistently evident. Atiqul's  enthusiasm for all aspects of development is truly impressive. If you're aiming to elevate your website and brand, they are the perfect collaborator.",
    name: "MD Saiful Islam Anik",
    title: "Director of TrekTales",
    img: "/test4.jpg"
  }
  // {
  //   quote:
  //     "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
  //   name: "Michael Johnson",
  //   title: "Director of AlphaStream Technologies",
  // },
  // {
  //   quote:
  //     "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
  //   name: "Michael Johnson",
  //   title: "Director of AlphaStream Technologies",
  // },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Full Stack Engineer Intern",
    desc: "Developed full-stack web applications using React.js and Node.js, implementing both frontend interfaces and backend APIs.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Full Stack Software Developer - PH",
    desc: "Architected and developed complete web applications using React.js, Next.js, Node.js, MongoDB, and cloud services.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance Full Stack Developer",
    desc: "Led end-to-end development of client applications, from system design and database architecture to deployment and maintenance.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Full Stack Developer",
    desc: "Spearheaded development of scalable software solutions, managing both client-side and server-side architecture with modern technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: 'https://github.com/atikxcode?tab=repositories'
  },
  {
    id: 2,
    img: "/fb.svg",
    link: 'https://www.facebook.com/atiqulislam.0108'
  },
  {
    id: 3,
    img: "/link.svg",
    link: 'https://www.linkedin.com/in/atiqul-islam-901464288/'
  },
];
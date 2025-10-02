// Personal Information
export const personal = {
	name: 'Your Name',
	title: 'Full Stack Developer',
	location: 'San Francisco, CA',
	email: 'your@email.com',
};

// About Section
export const about = {
	intro: "I'm a passionate software engineer who loves building products that make a difference. With expertise across the full stack, I specialize in creating seamless user experiences backed by robust, scalable systems.",
	resumeUrl: '/resume.pdf', // Path to your resume PDF
};

// Social Links
export const socials = [
	{ name: 'GitHub', url: 'https://github.com/yourusername' },
	{ name: 'LinkedIn', url: 'https://linkedin.com/in/yourprofile' },
	{ name: 'Twitter', url: 'https://twitter.com/yourhandle' },
	{ name: 'Email', url: 'mailto:your@email.com' }
];

// Technologies - SVG logos should be placed in /public/icons/ folder
export const technologies = [
	{ name: 'TypeScript', logo: '/icons/typescript.svg' },
	{ name: 'JavaScript', logo: '/icons/javascript.svg' },
	{ name: 'React', logo: '/icons/react.svg' },
	{ name: 'Next.js', logo: '/icons/nextjs.svg' },
	{ name: 'Tailwind CSS', logo: '/icons/tailwindcss.svg' },
	{ name: 'Python', logo: '/icons/python.svg' },
	{ name: 'Hugging Face', logo: '/icons/huggingface.svg' },
	{ name: 'Pinecone', logo: '/icons/pinecone.svg' },
	{ name: 'AWS', logo: '/icons/aws.svg' },
	{ name: 'Docker', logo: '/icons/docker.svg' },
	{ name: 'MySQL', logo: '/icons/mysql.svg' },
	{ name: 'OpenAI', logo: '/icons/openai.svg' },
	{ name: 'Node.js', logo: '/icons/nodejs.svg' },
	{ name: 'Express', logo: '/icons/express.svg' },
	{ name: 'Vim', logo: '/icons/vim.svg' },
	{ name: 'Git', logo: '/icons/git.svg' },
];

// Work Experience
export const workExperience = [
	{
		company: 'Tech Company',
		companyUrl: 'https://techcompany.com',
		location: 'San Francisco, CA',
		roles: [
			{
				title: 'Senior Software Engineer',
				period: '2023 - Present',
				description: 'Led development of key features and mentored junior developers. Built scalable systems serving millions of users.',
				highlights: [
					'Architected microservices infrastructure serving 10M+ requests/day',
					'Reduced deployment time by 60% through CI/CD optimization',
					'Mentored team of 5 junior engineers'
				]
			},
			{
				title: 'Software Engineer',
				period: '2022 - 2023',
				description: 'Built scalable web applications using modern frameworks.',
				highlights: [
					'Implemented real-time collaboration features',
					'Improved application performance by 40%',
					'Led migration to TypeScript'
				]
			}
		]
	},
	{
		company: 'Another Tech Co',
		companyUrl: 'https://anothertech.com',
		location: 'Remote',
		roles: [
			{
				title: 'Full Stack Developer',
				period: '2020 - 2022',
				description: 'Built features that improved user engagement by 40%.',
				highlights: [
					'Developed RESTful APIs with Node.js and Express',
					'Built responsive UIs with React and Tailwind',
					'Implemented automated testing pipeline'
				]
			}
		]
	}
];

// Education
export const education = [
	{
		degree: 'Bachelor of Science in Computer Science',
		school: 'University Name',
		location: 'City, State',
		period: '2016 - 2020',
		gpa: '3.8/4.0',
		honors: ['Dean\'s List', 'Summa Cum Laude'],
		relevantCourses: ['Data Structures', 'Algorithms', 'Database Systems', 'Machine Learning']
	},
	{
		degree: 'High School Diploma',
		school: 'High School Name',
		location: 'City, State',
		period: '2012 - 2016',
		gpa: '4.0/4.0',
		honors: ['Valedictorian'],
	}
];

// Projects
export const projects = [
	{
		name: 'Project One',
		description: 'A cool project that does something interesting with modern tech. Built with scalability and performance in mind.',
		tech: ['React', 'Node.js', 'PostgreSQL'],
		githubUrl: 'https://github.com/yourusername/project-one',
		liveUrl: 'https://project-one.com',
		highlights: [
			'Built real-time collaboration features',
			'Achieved 99.9% uptime',
			'Scaled to 100K+ active users'
		]
	},
	{
		name: 'Project Two',
		description: 'Another awesome project showcasing advanced development skills. Features real-time collaboration and AI integration.',
		tech: ['TypeScript', 'Next.js', 'Tailwind', 'OpenAI'],
		githubUrl: 'https://github.com/yourusername/project-two',
		liveUrl: 'https://project-two.com',
		highlights: [
			'Integrated GPT-4 for intelligent features',
			'Built responsive UI with Tailwind CSS',
			'Implemented serverless architecture'
		]
	},
	{
		name: 'Project Three',
		description: 'Open source tool that helps developers be more productive. Used by thousands of engineers worldwide.',
		tech: ['Rust', 'WebAssembly', 'React'],
		githubUrl: 'https://github.com/yourusername/project-three',
		highlights: [
			'1000+ GitHub stars',
			'Featured on Hacker News front page',
			'50+ contributors'
		]
	}
];

// Certifications
export const certifications = [
	{
		name: 'AWS Certified Solutions Architect',
		issuer: 'Amazon Web Services',
		date: 'January 2024',
		credentialUrl: 'https://aws.amazon.com/certification/',
	},
	{
		name: 'Google Cloud Professional Cloud Architect',
		issuer: 'Google Cloud',
		date: 'March 2023',
		credentialUrl: 'https://cloud.google.com/certification',
	},
	{
		name: 'Certified Kubernetes Administrator',
		issuer: 'Cloud Native Computing Foundation',
		date: 'June 2023',
		credentialUrl: 'https://www.cncf.io/certification/cka/',
	}
];

// Fun Facts
export const funFacts = [
	{ emoji: '🎵', fact: 'Audiophile with a collection of high-end headphones' },
	{ emoji: '⌨️', fact: 'Mechanical keyboard enthusiast - currently rocking a custom split ergo' },
	{ emoji: '🏎️', fact: 'Huge F1 fan - never miss a race weekend' },
	{ emoji: '🏍️', fact: 'MotoGP fanatic - love the Isle of Man TT' },
];

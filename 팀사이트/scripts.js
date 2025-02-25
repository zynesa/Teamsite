    document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    const scrollThreshold = 10;
    const settingsIcon = document.getElementById('settingsIcon');
    const settingsModal = document.getElementById('settingsModal');
    const languageSelect = document.getElementById('language');
    const themeToggle = document.getElementById('themeToggle');
    const messageTextarea = document.getElementById('message');
    const charCount = document.getElementById('charCount');

    // Team and Project Data
    const teamData = [
        {
            name: "Zyn",
            role: "Main Developer",
            bio: "I am a full-stack developer with over 7 years of experience, proficient in website design and development. I am also skilled in Discord bot development.",
            skills: ["Python", "Node.js", "Typescript", "HTML", "CSS", "Docker", "JavaScript", "And more."],
            socialLinks: {
                github: "https://github.com/zynesa"
            },
            image: "assets/zyn.png"
        },
        {
            name: "dk",
            role: "Co-Developer",
            bio: "I am a full-stack developer with over 18 years of experience in freelancing.",
            skills: ["Python", "Node.js", "Typescript", "C#", "JavaScript", "And more."],
            socialLinks: {
                github: "#"
            },
            image: "assets/dkpro.png"
        }
    ];

    const projectData = [
        {
            title: "Hannibot",
            description: "Hannibot is a versatile Discord bot that simplifies server management and enhances community engagement with intuitive moderation, music features, and utility tools.",
            technologies: [
                "Python",
                "Py-cord",
                "Lavalink",
                "Sqlite3"
            ],
            image: "assets/hanni.png"
        }
    ];
            // 드래그 방지
            document.addEventListener("dragstart", (event) => {
                event.preventDefault();
            });
    
            document.addEventListener("selectstart", (event) => {
                event.preventDefault();
            });

    window.addEventListener('scroll', () => {
        if (window.scrollY > scrollThreshold) {
            header.style.boxShadow = '0 1px 0 0 rgba(0, 0, 0, 0.08)';
        } else {
            header.style.boxShadow = 'none';
        }
        
        // Scroll animations
        document.querySelectorAll('.animate-on-scroll').forEach(element => {
            if (isElementInViewport(element)) {
                element.classList.add('show');
            }
        });
    });

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    settingsIcon.addEventListener('click', () => {
        openModal('settingsModal');
    });

    languageSelect.addEventListener('change', (e) => {
        setLanguage(e.target.value);
        localStorage.setItem('language', e.target.value);
    });

    themeToggle.addEventListener('change', () => {
        document.body.classList.toggle('dark-theme');
        localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light');
    });

    messageTextarea.addEventListener('input', () => {
        const remaining = 2000 - messageTextarea.value.length;
        charCount.textContent = `${messageTextarea.value.length} / 2000`;
    });

    const translations = {
        en: {
            teamName: "Architecture",
            team: "Team",
            projects: "Projects",
            contact: "Contact",
            heroTitle: "Team Architecture",
            heroSubtitle: "We will keep advancing until the day we collaborate with NewJeans.",
            getInTouch: "Get in Touch",
            ourTeam: "Teammates",
            zynRole: "Main Developer",
            dkRole: "Co-Developer",
            learnMore: "Learn More",
            ourProjects: "Projects",
            hannibotDescription: "An intelligent Discord bot providing NewJeans information and server management features.",
            projectDetails: "Project Details",
            name: "Name",
            email: "Email",
            message: "Message",
            sendMessage: "Send Message",
            supportServer: "Support Server",
            termsOfService: "Terms of Service",
            privacyPolicy: "Privacy Policy",
            allRightsReserved: "All rights reserved.",
            settings: "Settings",
            language: "Language",
            darkMode: "Dark Mode",
            close: "Close",
            coreSkills: "Core Skills",
            technologies: "Technologies",
            challenges: "Key Challenges",
            impact: "Project Impact",
            charCount: "0 / 2000",
            zynBio: "I am a full-stack developer with over 7 years of experience, proficient in website design and development. I am also skilled in Discord bot development.",
            dkBio: "full-stack developer with 18 years of experience in freelancing.",
            legal: "Legal"
        },
        ko: {
            teamName: "Architecture",
            team: "팀",
            projects: "프로젝트",
            contact: "문의하기",
            heroTitle: "Architecture",
            heroSubtitle: "뉴진스와 콜라보하는 그날까지.",
            getInTouch: "문의하기",
            ourTeam: "팀원",
            zynRole: "메인 개발자",
            dkRole: "공동 개발자",  
            learnMore: "자세히 보기",
            ourProjects: "프로젝트",
            hannibotDescription: "뉴진스의 정보와 서버 관리 기능을 제공하는 다기능 디스코드 봇입니다.",
            projectDetails: "자세히 보기",
            name: "이름",
            email: "이메일",
            message: "메시지",
            sendMessage: "메시지 보내기",
            supportServer: "서포트 서버",
            termsOfService: "서비스 약관",
            privacyPolicy: "개인정보 처리방침",
            allRightsReserved: "All rights reserved.",
            settings: "설정",
            language: "언어",
            darkMode: "다크 모드",
            close: "닫기",
            coreSkills: "언어",
            technologies: "사용 언어",
            challenges: "주요 과제",
            impact: "프로젝트 영향",
            charCount: "0 / 2000",
            zynBio: "7년 이상의 경력이 있는 풀스택 개발자로, 웹사이트 설계 및 개발에 능숙합니다. 또한 디스코드 봇 개발에도 능숙합니다.",
            dkBio: "외주 경력 18년차인 풀스택 개발자입니다.",
            legal: "법적 고지"
        }
    };

    function setLanguage(lang) {
        document.querySelectorAll('[data-translate-key]').forEach(element => {
            const key = element.getAttribute('data-translate-key');
            if (translations[lang] && translations[lang][key]) {
                element.innerHTML = translations[lang][key];
            }
        });
        document.documentElement.lang = lang;
    }

    const savedLanguage = localStorage.getItem('language') || 'ko';
    const savedTheme = localStorage.getItem('theme');

    setLanguage(savedLanguage);
    languageSelect.value = savedLanguage;

    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        themeToggle.checked = true;
    } else {
        document.body.classList.remove('dark-theme');
        themeToggle.checked = false;
    }

    // Modal functions
    window.openModal = (modalId) => {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.add('show');
            document.body.style.overflow = 'hidden';
            setTimeout(() => {
                modal.querySelector('.modal-content').style.transform = 'scale(1)';
                modal.querySelector('.modal-content').style.opacity = '1';
            }, 50);
        }
    };

    window.closeModal = (modalId) => {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.querySelector('.modal-content').style.transform = 'scale(0.9)';
            modal.querySelector('.modal-content').style.opacity = '0';
            setTimeout(() => {
                modal.classList.remove('show');
                document.body.style.overflow = '';
            }, 300);
        }
    };

    // Team Modal Handler
    window.openTeamModal = (index) => {
        const member = teamData[index - 1];
        const modalContent = `
            <div class="modal-grid">
                <div class="modal-image">
                    <img src="${member.image}" alt="${member.name}">
                    <div class="social-icons">
                        ${member.socialLinks.github ? `<a href="${member.socialLinks.github}" target="_blank"><i class="fab fa-github"></i></a>` : ''}
                    </div>
                </div>
                <div class="modal-details">
                    <h3>${member.name}</h3>
                    <p><strong data-translate-key="${index === 1 ? 'zynRole' : 'dkRole'}"></strong></p>
                    <p data-translate-key="${index === 1 ? 'zynBio' : 'dkBio'}"></p>
                    <h4 data-translate-key="coreSkills"></h4>
                    <div class="skill-tags">
                        ${member.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                    </div>
                </div>
            </div>
        `;
        document.getElementById('teamModalContent').innerHTML = modalContent;
        setLanguage(languageSelect.value);
        openModal('teamModal');
    };
    
    // Project Modal Handler
    window.openProjectModal = (index) => {
        const project = projectData[index - 1];
        const modalContent = `
            <div class="modal-grid">
                <div class="modal-image">
                    <img src="${project.image}" alt="${project.title}">
                </div>
                <div class="modal-details">
                    <h3>${project.title}</h3>
                    <p data-translate-key="hannibotDescription"></p>
                    <h4 data-translate-key="technologies"></h4>
                    <div class="skill-tags">
                        ${project.technologies.map(tech => `<span class="skill-tag">${tech}</span>`).join('')}
                    </div>
                </div>
            </div>
        `;
        document.getElementById('projectModalContent').innerHTML = modalContent;
        setLanguage(languageSelect.value);
        openModal('projectModal');
    };

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
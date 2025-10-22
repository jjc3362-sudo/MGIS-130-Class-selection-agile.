// Course data embedded directly
const courseData = {
  "courses": [
    {
      "id": "ACCT-110",
      "courseCode": "ACCT-110",
      "title": "Financial Accounting",
      "department": "Accounting",
      "credits": 3,
      "description": "An introduction to financial reporting for corporations. Topics include the accounting cycle, financial statements, revenue recognition, and analysis of financial performance.",
      "prerequisites": [],
      "terms": ["Fall", "Spring"],
      "level": 100
    },
    {
      "id": "ACCT-210",
      "courseCode": "ACCT-210",
      "title": "Managerial Accounting",
      "department": "Accounting",
      "credits": 3,
      "description": "Introduction to the use of accounting information by managers. Explores cost accounting, budgeting, performance evaluation, and strategic decision making.",
      "prerequisites": ["ACCT-110"],
      "terms": ["Fall", "Spring"],
      "level": 200
    },
    {
      "id": "ACCT-305",
      "courseCode": "ACCT-305",
      "title": "The Accounting Profession",
      "department": "Accounting",
      "credits": 3,
      "description": "Examination of the accounting profession including ethics, professional standards, career paths, and contemporary issues facing accountants.",
      "prerequisites": ["ACCT-110"],
      "terms": ["Fall", "Spring"],
      "level": 300
    },
    {
      "id": "ACCT-360",
      "courseCode": "ACCT-360",
      "title": "Intermediate Financial Accounting I",
      "department": "Accounting",
      "credits": 3,
      "description": "In-depth study of financial reporting standards, including revenue recognition, cash and receivables, inventory, and property, plant, and equipment.",
      "prerequisites": ["ACCT-210"],
      "terms": ["Fall"],
      "level": 300
    },
    {
      "id": "ACCT-365",
      "courseCode": "ACCT-365",
      "title": "Intermediate Financial Accounting II",
      "department": "Accounting",
      "credits": 3,
      "description": "Continuation of ACCT-360 covering long-term liabilities, stockholders' equity, earnings per share, and statement of cash flows.",
      "prerequisites": ["ACCT-360"],
      "terms": ["Spring"],
      "level": 300
    },
    {
      "id": "ACCT-420",
      "courseCode": "ACCT-420",
      "title": "Personal and Small Business Taxation",
      "department": "Accounting",
      "credits": 3,
      "description": "Federal income taxation of individuals and small businesses including sole proprietorships, partnerships, and S corporations.",
      "prerequisites": ["ACCT-210"],
      "terms": ["Fall", "Spring"],
      "level": 400
    },
    {
      "id": "ACCT-430",
      "courseCode": "ACCT-430",
      "title": "Cost Accounting",
      "department": "Accounting",
      "credits": 3,
      "description": "Advanced study of cost systems, cost behavior analysis, budgeting, variance analysis, and performance measurement.",
      "prerequisites": ["ACCT-210"],
      "terms": ["Fall", "Spring"],
      "level": 400
    },
    {
      "id": "MGMT-101",
      "courseCode": "MGMT-101",
      "title": "Business 1: Introduction to Business",
      "department": "Management",
      "credits": 3,
      "description": "Introduction to business communication, planning, and analysis. Develops foundational skills for business professionals.",
      "prerequisites": [],
      "terms": ["Fall", "Spring"],
      "level": 100
    },
    {
      "id": "MGMT-102",
      "courseCode": "MGMT-102",
      "title": "Business 2: Business Planning and Professional Development",
      "department": "Management",
      "credits": 3,
      "description": "Continuation of MGMT-101 focusing on business planning, professional development, and career readiness.",
      "prerequisites": ["MGMT-101"],
      "terms": ["Fall", "Spring"],
      "level": 100
    },
    {
      "id": "MGMT-215",
      "courseCode": "MGMT-215",
      "title": "Organizational Behavior",
      "department": "Management",
      "credits": 3,
      "description": "Study of individual and group behavior in organizations. Topics include motivation, leadership, team dynamics, and organizational culture.",
      "prerequisites": [],
      "terms": ["Fall", "Spring", "Summer"],
      "level": 200
    },
    {
      "id": "MGMT-360",
      "courseCode": "MGMT-360",
      "title": "Digital Entrepreneurship",
      "department": "Management",
      "credits": 3,
      "description": "Explores entrepreneurship in the digital age, including business model innovation, lean startup methodologies, and digital venture creation.",
      "prerequisites": ["MGMT-101"],
      "terms": ["Fall", "Spring"],
      "level": 300
    },
    {
      "id": "MGMT-560",
      "courseCode": "MGMT-560",
      "title": "Strategic Management",
      "department": "Management",
      "credits": 3,
      "description": "Capstone course integrating functional areas of business. Develops skills in strategic analysis, planning, and implementation.",
      "prerequisites": ["MGMT-215", "MKTG-230", "FINC-220"],
      "terms": ["Fall", "Spring"],
      "level": 500
    },
    {
      "id": "MGIS-130",
      "courseCode": "MGIS-130",
      "title": "Information Systems & Technology",
      "department": "Management Information Systems",
      "credits": 3,
      "description": "Introduction to management information systems including systems thinking, data management, business processes, and the role of technology in organizations.",
      "prerequisites": [],
      "terms": ["Fall", "Spring"],
      "level": 100
    },
    {
      "id": "MGIS-230",
      "courseCode": "MGIS-230",
      "title": "Database Design and Applications",
      "department": "Management Information Systems",
      "credits": 3,
      "description": "Introduction to database concepts, design, and SQL. Students learn to design, implement, and query relational databases.",
      "prerequisites": ["MGIS-130"],
      "terms": ["Fall", "Spring"],
      "level": 200
    },
    {
      "id": "MGIS-340",
      "courseCode": "MGIS-340",
      "title": "Emerging Business Technologies",
      "department": "Management Information Systems",
      "credits": 3,
      "description": "Examination of cutting-edge technologies and their business applications including AI, blockchain, IoT, and cloud computing.",
      "prerequisites": ["MGIS-130"],
      "terms": ["Fall", "Spring"],
      "level": 300
    },
    {
      "id": "MGIS-360",
      "courseCode": "MGIS-360",
      "title": "Building a Web Business",
      "department": "Management Information Systems",
      "credits": 3,
      "description": "Development of e-commerce and web-based business applications. Covers web technologies, online business models, and digital marketing.",
      "prerequisites": ["MGIS-130"],
      "terms": ["Fall", "Spring"],
      "level": 300
    },
    {
      "id": "MGIS-425",
      "courseCode": "MGIS-425",
      "title": "Systems Analysis and Design",
      "department": "Management Information Systems",
      "credits": 3,
      "description": "Methods for analyzing business requirements and designing information systems. Covers SDLC, agile methodologies, and system modeling.",
      "prerequisites": ["MGIS-230"],
      "terms": ["Fall", "Spring"],
      "level": 400
    },
    {
      "id": "MKTG-230",
      "courseCode": "MKTG-230",
      "title": "Principles of Marketing",
      "department": "Marketing",
      "credits": 3,
      "description": "Introduction to marketing concepts including market research, consumer behavior, segmentation, targeting, positioning, and the marketing mix.",
      "prerequisites": [],
      "terms": ["Fall", "Spring", "Summer"],
      "level": 200
    },
    {
      "id": "MKTG-310",
      "courseCode": "MKTG-310",
      "title": "Marketing Research",
      "department": "Marketing",
      "credits": 3,
      "description": "Methods for collecting and analyzing marketing data. Covers research design, sampling, questionnaire development, and data interpretation.",
      "prerequisites": ["MKTG-230", "STAT-145"],
      "terms": ["Fall", "Spring"],
      "level": 300
    },
    {
      "id": "MKTG-330",
      "courseCode": "MKTG-330",
      "title": "Consumer Behavior",
      "department": "Marketing",
      "credits": 3,
      "description": "Psychological, sociological, and cultural factors influencing consumer decision making and behavior.",
      "prerequisites": ["MKTG-230"],
      "terms": ["Fall", "Spring"],
      "level": 300
    },
    {
      "id": "MKTG-360",
      "courseCode": "MKTG-360",
      "title": "Professional Selling",
      "department": "Marketing",
      "credits": 3,
      "description": "Development of consultative selling skills including prospecting, needs analysis, presentation techniques, and relationship management.",
      "prerequisites": ["MKTG-230"],
      "terms": ["Fall", "Spring"],
      "level": 300
    },
    {
      "id": "MKTG-370",
      "courseCode": "MKTG-370",
      "title": "Advertising & Promotion Management",
      "department": "Marketing",
      "credits": 3,
      "description": "Integrated marketing communications including advertising, public relations, sales promotion, and direct marketing strategies.",
      "prerequisites": ["MKTG-230"],
      "terms": ["Fall", "Spring"],
      "level": 300
    },
    {
      "id": "MKTG-410",
      "courseCode": "MKTG-410",
      "title": "Search Engine Marketing & Analytics",
      "department": "Marketing",
      "credits": 3,
      "description": "Digital marketing strategies focusing on SEO, SEM, web analytics, and data-driven marketing decision making.",
      "prerequisites": ["MKTG-230"],
      "terms": ["Fall", "Spring"],
      "level": 400
    },
    {
      "id": "MKTG-430",
      "courseCode": "MKTG-430",
      "title": "Social Media Marketing",
      "department": "Marketing",
      "credits": 3,
      "description": "Strategic use of social media platforms for marketing purposes. Covers content strategy, community management, and social media analytics.",
      "prerequisites": ["MKTG-230"],
      "terms": ["Fall", "Spring"],
      "level": 400
    },
    {
      "id": "MKTG-489",
      "courseCode": "MKTG-489",
      "title": "Seminar in Marketing",
      "department": "Marketing",
      "credits": 3,
      "description": "Capstone course integrating marketing concepts through case analysis, strategic planning, and applied projects.",
      "prerequisites": ["MKTG-310", "MKTG-330"],
      "terms": ["Fall", "Spring"],
      "level": 400
    },
    {
      "id": "FINC-220",
      "courseCode": "FINC-220",
      "title": "Corporate Finance",
      "department": "Finance",
      "credits": 3,
      "description": "Introduction to financial management including time value of money, capital budgeting, risk and return, and capital structure decisions.",
      "prerequisites": ["ACCT-110"],
      "terms": ["Fall", "Spring"],
      "level": 200
    },
    {
      "id": "FINC-320",
      "courseCode": "FINC-320",
      "title": "Professional Financial Management",
      "department": "Finance",
      "credits": 3,
      "description": "Advanced financial management topics including working capital management, dividend policy, and corporate restructuring.",
      "prerequisites": ["FINC-220"],
      "terms": ["Fall", "Spring"],
      "level": 300
    },
    {
      "id": "FINC-352",
      "courseCode": "FINC-352",
      "title": "Financial Management II",
      "department": "Finance",
      "credits": 3,
      "description": "Advanced corporate finance topics including mergers and acquisitions, international finance, and derivatives.",
      "prerequisites": ["FINC-220"],
      "terms": ["Fall", "Spring"],
      "level": 300
    },
    {
      "id": "FINC-362",
      "courseCode": "FINC-362",
      "title": "Intermediate Investments",
      "department": "Finance",
      "credits": 3,
      "description": "Analysis of investment vehicles including stocks, bonds, and portfolios. Covers valuation, risk management, and portfolio theory.",
      "prerequisites": ["FINC-220"],
      "terms": ["Fall", "Spring"],
      "level": 300
    },
    {
      "id": "FINC-460",
      "courseCode": "FINC-460",
      "title": "Financial Analysis and Modeling",
      "department": "Finance",
      "credits": 3,
      "description": "Development of financial models using Excel for valuation, forecasting, and decision analysis. Emphasis on practical applications.",
      "prerequisites": ["FINC-320"],
      "terms": ["Fall", "Spring"],
      "level": 400
    },
    {
      "id": "HSPT-210",
      "courseCode": "HSPT-210",
      "title": "Introduction to Hospitality Management",
      "department": "Hospitality & Tourism",
      "credits": 3,
      "description": "Overview of the hospitality industry including lodging, food service, tourism, and event management sectors.",
      "prerequisites": [],
      "terms": ["Fall", "Spring"],
      "level": 200
    },
    {
      "id": "HSPT-320",
      "courseCode": "HSPT-320",
      "title": "Hotel Operations Management",
      "department": "Hospitality & Tourism",
      "credits": 3,
      "description": "Management of hotel operations including front office, housekeeping, food and beverage, and property management systems.",
      "prerequisites": ["HSPT-210"],
      "terms": ["Fall", "Spring"],
      "level": 300
    },
    {
      "id": "HSPT-340",
      "courseCode": "HSPT-340",
      "title": "Event Planning and Management",
      "department": "Hospitality & Tourism",
      "credits": 3,
      "description": "Planning and execution of meetings, conferences, and special events. Covers budgeting, logistics, and vendor management.",
      "prerequisites": ["HSPT-210"],
      "terms": ["Fall", "Spring"],
      "level": 300
    },
    {
      "id": "STAT-145",
      "courseCode": "STAT-145",
      "title": "Introduction to Statistics I",
      "department": "Statistics",
      "credits": 3,
      "description": "Descriptive statistics, probability, sampling distributions, confidence intervals, and hypothesis testing.",
      "prerequisites": [],
      "terms": ["Fall", "Spring", "Summer"],
      "level": 100
    },
    {
      "id": "STAT-146",
      "courseCode": "STAT-146",
      "title": "Introduction to Statistics II",
      "department": "Statistics",
      "credits": 3,
      "description": "Continuation of STAT-145 covering ANOVA, regression, chi-square tests, and nonparametric methods.",
      "prerequisites": ["STAT-145"],
      "terms": ["Fall", "Spring"],
      "level": 100
    },
    {
      "id": "DECS-310",
      "courseCode": "DECS-310",
      "title": "Operations Management",
      "department": "Decision Sciences",
      "credits": 3,
      "description": "Management of operations and supply chains including process analysis, quality management, inventory control, and project management.",
      "prerequisites": ["STAT-145"],
      "terms": ["Fall", "Spring"],
      "level": 300
    },
    {
      "id": "BANA-255",
      "courseCode": "BANA-255",
      "title": "Data Literacy, Analytics, and Decision Making",
      "department": "Business Analytics",
      "credits": 3,
      "description": "Introduction to data analysis for business decisions. Covers data visualization, descriptive analytics, and business intelligence tools.",
      "prerequisites": ["STAT-145"],
      "terms": ["Fall", "Spring"],
      "level": 200
    },
    {
      "id": "INTB-225",
      "courseCode": "INTB-225",
      "title": "Global Business Environment",
      "department": "International Business",
      "credits": 3,
      "description": "Analysis of the global business environment including economic, political, cultural, and legal factors affecting international operations.",
      "prerequisites": [],
      "terms": ["Fall", "Spring"],
      "level": 200
    },
    {
      "id": "BLEG-250",
      "courseCode": "BLEG-250",
      "title": "Law, Business, and Society",
      "department": "Business Law",
      "credits": 3,
      "description": "Legal and regulatory environment of business including contracts, torts, employment law, and business ethics.",
      "prerequisites": [],
      "terms": ["Fall", "Spring"],
      "level": 200
    }
  ]
};

// Global state
let allCourses = [];
let filteredCourses = [];
let selectedCourses = new Set();
let currentCourse = null;

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    loadCourses();
    setupEventListeners();
    populateDepartmentFilter();
    displayCourses();
    updateSelectedCoursesDisplay();
});

// Load courses from embedded data
function loadCourses() {
    allCourses = courseData.courses;
    filteredCourses = [...allCourses];
}

// Setup event listeners
function setupEventListeners() {
    // Filter inputs
    document.getElementById('search').addEventListener('input', applyFilters);
    document.getElementById('department').addEventListener('change', applyFilters);
    document.getElementById('level').addEventListener('change', applyFilters);
    document.getElementById('term').addEventListener('change', applyFilters);
    document.getElementById('credits').addEventListener('change', applyFilters);
    
    // Clear filters button
    document.getElementById('clearFilters').addEventListener('click', clearFilters);
    
    // Sort dropdown
    document.getElementById('sort').addEventListener('change', () => {
        sortCourses();
        displayCourses();
    });
    
    // Export button
    document.getElementById('exportSelection').addEventListener('click', exportSelection);
    
    // Modal
    const modal = document.getElementById('courseModal');
    const closeBtn = document.querySelector('.close');
    
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });
    
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // Modal buttons
    document.getElementById('modalAddButton').addEventListener('click', () => {
        if (currentCourse) {
            addCourse(currentCourse.id);
            updateModalButtons();
        }
    });
    
    document.getElementById('modalRemoveButton').addEventListener('click', () => {
        if (currentCourse) {
            removeCourse(currentCourse.id);
            updateModalButtons();
        }
    });
}

// Populate department filter dropdown
function populateDepartmentFilter() {
    const departments = [...new Set(allCourses.map(c => c.department))].sort();
    const select = document.getElementById('department');
    
    departments.forEach(dept => {
        const option = document.createElement('option');
        option.value = dept;
        option.textContent = dept;
        select.appendChild(option);
    });
}

// Apply filters
function applyFilters() {
    const searchTerm = document.getElementById('search').value.toLowerCase();
    const department = document.getElementById('department').value;
    const level = document.getElementById('level').value;
    const term = document.getElementById('term').value;
    const credits = document.getElementById('credits').value;
    
    filteredCourses = allCourses.filter(course => {
        const matchesSearch = course.title.toLowerCase().includes(searchTerm) ||
                            course.courseCode.toLowerCase().includes(searchTerm) ||
                            course.description.toLowerCase().includes(searchTerm);
        
        const matchesDepartment = !department || course.department === department;
        const matchesLevel = !level || course.level.toString() === level;
        const matchesTerm = !term || course.terms.includes(term);
        const matchesCredits = !credits || course.credits.toString() === credits;
        
        return matchesSearch && matchesDepartment && matchesLevel && matchesTerm && matchesCredits;
    });
    
    sortCourses();
    displayCourses();
}

// Clear all filters
function clearFilters() {
    document.getElementById('search').value = '';
    document.getElementById('department').value = '';
    document.getElementById('level').value = '';
    document.getElementById('term').value = '';
    document.getElementById('credits').value = '';
    applyFilters();
}

// Sort courses
function sortCourses() {
    const sortBy = document.getElementById('sort').value;
    
    filteredCourses.sort((a, b) => {
        switch (sortBy) {
            case 'code':
                return a.courseCode.localeCompare(b.courseCode);
            case 'title':
                return a.title.localeCompare(b.title);
            case 'credits':
                return b.credits - a.credits;
            case 'level':
                return a.level - b.level;
            default:
                return 0;
        }
    });
}

// Display courses
function displayCourses() {
    const courseList = document.getElementById('courseList');
    
    if (filteredCourses.length === 0) {
        courseList.innerHTML = '<p class="empty-message">No courses found matching your filters.</p>';
        return;
    }
    
    courseList.innerHTML = filteredCourses.map(course => `
        <div class="course-card ${selectedCourses.has(course.id) ? 'selected' : ''}" 
             onclick="showCourseDetails('${course.id}')">
            <div class="course-code">${course.courseCode}</div>
            <div class="course-title">${course.title}</div>
            <div class="course-meta">
                <span class="badge badge-credits">${course.credits} Credits</span>
                <span class="badge badge-level">Level ${course.level}</span>
                ${course.terms.map(term => 
                    `<span class="badge badge-term">${term}</span>`
                ).join('')}
            </div>
        </div>
    `).join('');
}

// Show course details in modal
function showCourseDetails(courseId) {
    const course = allCourses.find(c => c.id === courseId);
    if (!course) return;
    
    currentCourse = course;
    
    const modal = document.getElementById('courseModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    
    modalTitle.textContent = `${course.courseCode} - ${course.title}`;
    
    modalBody.innerHTML = `
        <div class="modal-section">
            <h3>Course Information</h3>
            <p><strong>Department:</strong> ${course.department}</p>
            <p><strong>Credits:</strong> ${course.credits}</p>
            <p><strong>Level:</strong> ${course.level}</p>
            <p><strong>Terms Offered:</strong> ${course.terms.join(', ')}</p>
        </div>
        
        <div class="modal-section">
            <h3>Description</h3>
            <p>${course.description}</p>
        </div>
        
        ${course.prerequisites.length > 0 ? `
            <div class="modal-section">
                <h3>Prerequisites</h3>
                <ul>
                    ${course.prerequisites.map(prereq => `<li>${prereq}</li>`).join('')}
                </ul>
            </div>
        ` : '<div class="modal-section"><h3>Prerequisites</h3><p>None</p></div>'}
    `;
    
    updateModalButtons();
    modal.style.display = 'block';
}

// Update modal buttons based on selection state
function updateModalButtons() {
    const addButton = document.getElementById('modalAddButton');
    const removeButton = document.getElementById('modalRemoveButton');
    
    if (currentCourse && selectedCourses.has(currentCourse.id)) {
        addButton.style.display = 'none';
        removeButton.style.display = 'block';
    } else {
        addButton.style.display = 'block';
        removeButton.style.display = 'none';
    }
}

// Add course to selection
function addCourse(courseId) {
    selectedCourses.add(courseId);
    updateSelectedCoursesDisplay();
    displayCourses();
}

// Remove course from selection
function removeCourse(courseId) {
    selectedCourses.delete(courseId);
    updateSelectedCoursesDisplay();
    displayCourses();
}

// Update selected courses display
function updateSelectedCoursesDisplay() {
    const selectedList = document.getElementById('selectedList');
    const totalCreditsElement = document.getElementById('totalCredits');
    
    if (selectedCourses.size === 0) {
        selectedList.innerHTML = '<p class="empty-message">No courses selected yet. Click on courses to add them.</p>';
        totalCreditsElement.textContent = '0 credits';
        return;
    }
    
    const selectedCoursesArray = Array.from(selectedCourses).map(id => 
        allCourses.find(c => c.id === id)
    ).filter(c => c);
    
    const totalCredits = selectedCoursesArray.reduce((sum, course) => sum + course.credits, 0);
    totalCreditsElement.textContent = `${totalCredits} credits`;
    
    selectedList.innerHTML = selectedCoursesArray.map(course => `
        <div class="selected-item">
            <div class="selected-item-info">
                <h4>${course.courseCode} - ${course.title}</h4>
                <p>${course.credits} credits • ${course.department}</p>
            </div>
            <button class="remove-btn" onclick="removeCourseFromList('${course.id}')">Remove</button>
        </div>
    `).join('');
}

// Remove course from selected list (called from button)
function removeCourseFromList(courseId) {
    removeCourse(courseId);
}

// Export selection
function exportSelection() {
    if (selectedCourses.size === 0) {
        alert('No courses selected to export.');
        return;
    }
    
    const selectedCoursesArray = Array.from(selectedCourses).map(id => 
        allCourses.find(c => c.id === id)
    ).filter(c => c);
    
    const totalCredits = selectedCoursesArray.reduce((sum, course) => sum + course.credits, 0);
    
    const exportData = {
        exportDate: new Date().toISOString(),
        totalCredits: totalCredits,
        courseCount: selectedCourses.size,
        courses: selectedCoursesArray.map(course => ({
            courseCode: course.courseCode,
            title: course.title,
            credits: course.credits,
            department: course.department,
            level: course.level,
            terms: course.terms,
            prerequisites: course.prerequisites
        }))
    };
    
    const dataStr = JSON.stringify(exportData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = `course_selection_${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}

// Global state
let allCourses = [];
let filteredCourses = [];
let selectedCourses = new Set();
let currentCourse = null;

// Initialize the application
document.addEventListener('DOMContentLoaded', async () => {
    await loadCourses();
    setupEventListeners();
    populateDepartmentFilter();
    displayCourses();
    updateSelectedCoursesDisplay();
});

// Load courses from JSON file
async function loadCourses() {
    try {
        const response = await fetch('/mnt/user-data/uploads/rit_courses.json');
        const data = await response.json();
        allCourses = data.courses;
        filteredCourses = [...allCourses];
    } catch (error) {
        console.error('Error loading courses:', error);
        document.getElementById('courseList').innerHTML = 
            '<p class="loading">Error loading courses. Please refresh the page.</p>';
    }
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

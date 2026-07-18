// Representative NED University undergraduate departments/programmes.
// Source: NED faculties & departments listing, department pages, and
// public prospectus summaries (see README for links). Verify exact
// current-cycle seat counts and codes against the official prospectus
// before publishing live figures.

export const faculties = [
  {
    code: "CPL",
    name: "Civil and Petroleum Engineering",
    departments: [
      "Civil Engineering",
      "Urban and Infrastructure Engineering",
      "Petroleum Engineering",
      "Earthquake Engineering",
      "Environmental Engineering"
    ]
  },
  {
    code: "ECE",
    name: "Electrical and Computer Engineering",
    departments: [
      "Electrical Engineering",
      "Electronic Engineering",
      "Telecommunications Engineering",
      "Computer and Information Systems Engineering",
      "Bio-Medical Engineering",
      "Computer Science & Information Technology",
      "Software Engineering"
    ]
  },
  {
    code: "MME",
    name: "Mechanical and Manufacturing Engineering",
    departments: [
      "Mechanical Engineering",
      "Industrial and Manufacturing Engineering",
      "Textile Engineering",
      "Automotive and Marine Engineering"
    ]
  },
  {
    code: "CPE",
    name: "Chemical & Process Engineering",
    departments: [
      "Chemical Engineering",
      "Polymer and Petrochemical Engineering",
      "Materials Engineering",
      "Metallurgical Engineering",
      "Food Engineering"
    ]
  },
  {
    code: "ASC",
    name: "Architecture & Sciences",
    departments: [
      "Architecture and Planning",
      "Economics and Management Sciences",
      "Physics",
      "Chemistry",
      "Mathematics",
      "English Linguistics & Allied Studies",
      "Essential Studies"
    ]
  },
  {
    code: "TIEST",
    name: "Thar Institute of Engineering, Sciences & Technology",
    departments: [
      "Civil Engineering [TIEST]",
      "Computer Science and Technology [TIEST]"
    ]
  }
];

// This safely rebuilds the object structure your teammate's code expects 
// so the AI Branch Recommendation form doesn't crash!
export const allDepartments = faculties.flatMap((f) =>
  f.departments.map((deptName) => ({ 
    name: deptName, 
    faculty: f.name,
    blurb: 'Official NED Undergraduate Programme',
    interests: [] 
  }))
);
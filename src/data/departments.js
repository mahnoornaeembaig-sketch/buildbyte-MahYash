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

// Interest/goal tags used by the AI Branch Recommendation matcher.
// Keep tags short and specific — they're matched as substrings/words
// against the student's free-text interests and career goal.
const interestMap = {
  "Civil Engineering": ["construction", "structures", "buildings", "infrastructure", "concrete", "surveying", "roads", "bridges"],
  "Urban and Infrastructure Engineering": ["urban planning", "infrastructure", "city", "transport", "roads", "public works"],
  "Petroleum Engineering": ["oil", "gas", "petroleum", "drilling", "reservoir", "energy", "fuel"],
  "Earthquake Engineering": ["earthquake", "seismic", "structural safety", "disaster", "geotechnical"],
  "Environmental Engineering": ["environment", "pollution", "sustainability", "water treatment", "waste", "climate", "ecology"],

  "Electrical Engineering": ["electrical", "circuits", "power", "energy systems", "electronics", "wiring", "grid"],
  "Electronic Engineering": ["electronics", "circuits", "embedded systems", "hardware", "chips", "signal processing"],
  "Telecommunications Engineering": ["telecom", "networks", "communication systems", "wireless", "signal", "5g"],
  "Computer and Information Systems Engineering": ["computer systems", "networks", "information systems", "databases", "it infrastructure"],
  "Bio-Medical Engineering": ["biomedical", "medical devices", "healthcare technology", "biology", "medicine", "health"],
  "Computer Science & Information Technology": ["programming", "coding", "computer science", "software", "algorithms", "data", "ai", "artificial intelligence", "web development", "apps"],
  "Software Engineering": ["software", "programming", "coding", "apps", "web development", "software products", "development"],

  "Mechanical Engineering": ["mechanical", "machines", "engines", "design", "manufacturing", "robotics", "thermodynamics"],
  "Industrial and Manufacturing Engineering": ["manufacturing", "production", "industrial", "supply chain", "quality control", "factories"],
  "Textile Engineering": ["textile", "fabric", "fashion", "clothing", "yarn", "weaving"],
  "Automotive and Marine Engineering": ["automotive", "cars", "vehicles", "engines", "marine", "ships", "boats"],

  "Chemical Engineering": ["chemistry", "chemical processes", "reactions", "plants", "process design"],
  "Polymer and Petrochemical Engineering": ["polymers", "plastics", "petrochemicals", "materials"],
  "Materials Engineering": ["materials", "metals", "composites", "material science"],
  "Metallurgical Engineering": ["metallurgy", "metals", "mining", "alloys"],
  "Food Engineering": ["food", "food processing", "food science", "agriculture", "nutrition"],

  "Architecture and Planning": ["architecture", "design", "buildings", "urban planning", "aesthetics", "interior design", "drawing", "sketching"],
  "Economics and Management Sciences": ["business", "economics", "management", "finance", "entrepreneurship", "marketing"],
  "Physics": ["physics", "science", "research", "theoretical", "experiments"],
  "Chemistry": ["chemistry", "science", "research", "lab work", "experiments"],
  "Mathematics": ["mathematics", "math", "statistics", "logic", "problem solving", "numbers"],
  "English Linguistics & Allied Studies": ["english", "linguistics", "writing", "literature", "language", "communication"],
  "Essential Studies": ["general studies", "foundational courses"],

  "Civil Engineering [TIEST]": ["construction", "structures", "buildings", "infrastructure", "roads", "bridges"],
  "Computer Science and Technology [TIEST]": ["programming", "coding", "computer science", "software", "technology", "it"]
};

export const allDepartments = faculties.flatMap((f) =>
  f.departments.map((deptName) => ({
    name: deptName,
    faculty: f.name,
    blurb: 'Official NED Undergraduate Programme',
    interests: interestMap[deptName] || []
  }))
);
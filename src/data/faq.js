// Static FAQ context for the assistant widget. No RAG/vector DB —
// the whole list is matched against the visitor's question directly.

export const faqs = [

  // --- ADMISSION FORM & PROCESS ---
  {
    q: 'How can I get the Admission Form?',
    a: 'Application for Undergraduate Admissions is available at the official Admission Web Portal: www.neduet.edu.pk/admission.',
    keywords: ['admission form', 'get form', 'apply', 'portal', 'where to apply'],
  },
  {
    q: 'Who is eligible to apply for Admission?',
    a: 'Applicants appearing in HSC-II (or Equivalent) in 2025 who have passed their previous exams, or those who passed HSC-II / Equivalent in 2024, 2023, or 2022 are eligible.',
    keywords: ['eligible', 'eligibility', 'who can apply', 'year', 'passing year'],
  },
  {
    q: 'When is the Entry Test held?',
    a: 'Phase-I test: 12-15 June. Phase-II test: 6-9 July. Dates are subject to change by the university, always confirm on the official admission portal.',
    keywords: ['entry test dates', 'phase 1 dates', 'phase 2 dates', 'test schedule', 'when is the test', '12 june', '15 june', '6 july', '9 july', 'entry test', 'when is the entry test', 'test date', 'admission test'],
  },
  {
    q: 'What is the minimum percentage required in HSC?',
    a: 'For BE, B.Arch, and BS(CS), a minimum of 60% is required. However, candidates with 57% in HSC-Part I can apply conditionally (must secure 60% overall). For all other BS programmes, a minimum of 50% is required.',
    keywords: ['minimum percentage', 'hsc marks', 'required percentage', '60%', '50%'],
  },
  {
    q: 'Where do I submit the Admission Form?',
    a: 'You must print the Admission Form and Annexures (I & II), get them signed by an Oath Commissioner, and submit them with required documents to the Admission Office at the time of your interview.',
    keywords: ['submit form', 'where to submit', 'physical form', 'interview', 'oath commissioner'],
  },
  {
    q: 'What documents do I need to bring to my interview?',
    a: 'You must submit the following at the time of interview/admission:\n' +
       'Attested Photocopies:\n' +
       '• Admit Card of NED UET Pre-Admission Entry Test\n' +
       '• S.S.C or Equivalent Certificate\n' +
       '• S.S.C or Equivalent Marks Certificate\n' +
       '• CNIC / B-Form (original to be retained by NED UET)\n' +
       '• HSC or Equivalent Marks Certificate\n' +
       '• IBCC Equivalence Certificate (for Foreign Board candidates)\n' +
       '• Domicile\n' +
       '• Affidavit of Non-Political Activities\n' +
       '• Photographs (06 Nos.) — see the photograph guideline for size/format details\n' +
       '• Admission Form (printed from the Admission Portal, filled completely, and signed, with Annexures)\n' +
       'Additional Documents (if applicable):\n' +
       '• Migration Certificate (required for candidates other than Karachi Board)',
    keywords: ['documents', 'what to bring', 'required documents', 'documents needed', 'checklist', 'interview documents', 'document checklist'],
  },
  {
    q: 'How can I pay the Application Fee?',
    a: 'After completing the online application, a Transaction Slip with a Transaction ID will be generated. Print it and pay the fee at any specified bank branch against that exact Transaction ID.',
    keywords: ['pay fee', 'application fee', 'challan', 'transaction id', 'bank'],
  },

  // --- MERIT & CALCULATIONS ---
  {
    q: 'How is NED merit calculated?',
    a: 'Merit Score = 60% of your NED Entry Test Marks + 40% of your HSC Part-I (or O-Level equivalency / Equivalent Examinations) marks. Use the Merit Calculator on this page for an instant number.',
    keywords: ['merit', 'formula', 'calculate', 'aggregate', '60/40', 'merit score'],
  },
  {
    q: 'Is Matric counted in merit?',
    a: 'No. The undergraduate merit formula only uses your Entry Test score (60%) and HSC Part-I / equivalency (40%). Matriculation marks are not part of the formula.',
    keywords: ['matric', 'ssc', 'counted', 'weight'],
  },

  // --- ENTRY TEST ---
  {
    q: 'What are the passing marks for the Entry Test?',
    a: 'You must secure at least 50% marks in the pre-admission entry test to qualify for admission.',
    keywords: ['passing marks', 'pass test', 'entry test marks', '50%'],
  },
  {
    q: 'How many times can I appear in the entry test?',
    a: 'The test is held twice (Phase-I and Phase-II). You can appear in both by paying the fee for each. Whichever score is higher will be considered for your admission.',
    keywords: ['how many times', 'attempts', 'phase 1', 'phase 2', 'higher score'],
  },
  {
    q: 'What does the entry test cover?',
    a: 'The computer-based test has 4 sections (25 MCQs each). Pre-Engineering covers English, Math, Physics, Chemistry. Pre-Medical covers English, Biology, Physics, Chemistry. Computer Science covers English, Math, Physics, and CS.',
    keywords: ['entry test pattern', 'syllabus', 'subjects', 'mcqs', 'sections'],
  },
  {
    q: 'When is the Entry Test held?',
    a: 'Phase-I test: 12–15 June. Phase-II test: 6–9 July. Dates are subject to change by the university, always confirm on the official admission portal.',
    keywords: ['entry test dates', 'phase 1 dates', 'phase 2 dates', 'test schedule', 'when is the test', '12 june', '15 june', '6 july', '9 july'],
  },
  {
    q: 'When is the first merit list announced?',
    a: '1st provisional merit list: 16 July. Merit is calculated as 60% Entry Test + 40% HSC Part-I / O-Level / Equivalent Examinations marks. Dates are subject to change by the university, always confirm on the official admission portal.',
    keywords: ['first merit list', 'provisional list', '16 july', 'merit list date', 'when is merit list'],
  },
  {
    q: 'How do I get my Admit Card?',
    a: 'Once your fee payment is confirmed by the bank and your uploaded photograph is verified, your ADMIT CARD will be available to download from the Online Admission Portal.',
    keywords: ['admit card', 'download admit card', 'test slip'],
  },

  // --- FEES & FINANCES ---
  {
    q: 'How much is the Self Finance fee?',
    a: 'For the 2026 intake, the Self-Finance (Regular) fee is Rs. 916,700. For Self-Finance (Sponsored Seats), the fee is Rs. 1,133,000. This must be paid by the deadline for the online application form.',
    keywords: ['self finance', 'self sponsor', 'sponsored seat', '916700', '1133000'],
  },
  {
    q: 'How much are the regular fees?',
    a: 'For 2026, the fee is Rs. 123,700 for most BE, BS, and B.Arch programmes. Computing and select programmes (BS CS, BE Software, BE CIS at Main Campus, plus BS CS/BE Civil/BS Mgt Sci/BS English at TIEST) are Rs. 134,700.',
    keywords: ['fee', 'fees', 'cost', 'tuition', 'structure', '123700', '134700'],
  },
  {
    q: 'Is the Self-Finance fee refunded if I get a regular seat?',
    a: 'Yes. If you opt for admission on a Regular Seat, the total self-finance fee will be refunded. You will need to submit a self-finance refund form.',
    keywords: ['refund', 'self finance refund', 'regular seat', 'money back'],
  },
  {
    q: 'Can I pay the admission fee later?',
    a: 'No, your admission will not be confirmed until the admission fee is paid on the day of your interview/admission. It must be paid via Cash, Pay Order, or Demand Draft.',
    keywords: ['admission fee', 'pay later', 'interview day', 'cash', 'pay order'],
  },
  {
    q: 'What is the schedule for subsequent call lists?',
    a: 'Subsequent lists depend on seat availability. Key upcoming dates: \n' +
       '• Federal/Aga Khan/Other/Foreign/DAE/Minorities: 2nd List (Display: 29-07-2026, Interview: 04-08-2026); 3rd List (Display: 06-08-2026, Interview: 10-08-2026).\n' +
       '• Hyderabad/Sukkur/Larkana/Nawabshah: 2nd List (Display: 29-07-2026, Interview: 06-08-2026); 3rd List (Display: 06-08-2026, Interview: 11-08-2026).\n' +
       '• Karachi Board/Sponsors: 2nd List (Display: 03-08-2026, Interview: 07-08-2026); 3rd List (Display: 07-08-2026, Interview: 12-08-2026).\n' +
       'NOTE: Lists are subject to vacant seats. Specific categories (R-6, R-9, R-10a) will be notified separately. The University reserves the right to change this schedule.',
    keywords: ['schedule', 'call lists', 'subsequent lists', 'interview dates', '2026 dates'],
  },

  // --- MISCELLANEOUS & CAMPUSES ---
  {
    q: 'How many campuses does NED have and where are classes held?',
    a: 'Most engineering classes are at the Main Campus. B.Arch and BS Development Studies are at the City Campus (near DJ Science College). Bio-Medical Engineering is at the LEJ Campus (opposite Liaquat National Hospital).',
    keywords: ['campus', 'campuses', 'location', 'city campus', 'lej campus'],
  },
  {
    q: 'What is the duration of the degree programmes?',
    a: 'All Bachelor degree programmes are of four years duration, except for the Bachelor of Architecture (B.Arch) which is a five-year programme.',
    keywords: ['duration', 'how long', 'years', 'degree length'],
  },
  {
    q: 'Which department should I choose?',
    a: 'It depends on your interests and strengths — try the Branch Recommendation tool on this page. It takes your marks, interests, and goals and suggests departments with reasoning.',
    keywords: ['which department', 'branch', 'recommend', 'choose', 'best department'],
  }
];

export const fallbackAnswer =
  "I don't have a confirmed answer for that yet — this assistant only answers from verified FAQ content. Please check the official NED admission portal (www.neduet.edu.pk/admission), or ask one of the questions below.";
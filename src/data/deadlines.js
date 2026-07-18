// Seed timeline for NED Undergraduate Admissions 2026, drawn from the
// official admissions schedule published by the Registrar's office.
// Replace/extend with confirmed dates from neduet.edu.pk before demo day.

export const timeline = [
  {
    phase: 'Phase I',
    label: 'Registration opens',
    detail: 'Online registration window for Phase I of the entry test.',
    date: 'Closed 9 June 2026',
    status: 'past',
  },
  {
    phase: 'Phase I',
    label: 'Entry test (Phase I)',
    detail: 'Pre-admission entry test conducted at designated centers.',
    date: '12–15 June 2026',
    status: 'past',
  },
  {
    phase: 'Phase II',
    label: 'Registration closes',
    detail: 'Final window to register for the Phase II entry test.',
    date: 'Closed ahead of July test',
    status: 'past',
  },
  {
    phase: 'Phase II',
    label: 'Entry test (Phase II)',
    detail: 'Second entry test window for candidates who missed Phase I.',
    date: '6–9 July 2026',
    status: 'past',
  },
  {
    phase: 'Merit',
    label: 'HSC-I / equivalency marks entry',
    detail: 'Candidates enter HSC Part-I (or O-Level equivalent) marks on the admission portal.',
    date: 'Per portal schedule',
    status: 'past',
  },
  {
    phase: 'Merit',
    label: 'First provisional merit list',
    detail: 'Call list / first provisional merit list notified on the university website, by category.',
    date: '16 July 2026',
    status: 'current',
  },
  {
    phase: 'Merit',
    label: 'Subsequent merit lists',
    detail: 'Further merit lists released in phases as seats are confirmed and vacated.',
    date: 'Rolling  check portal',
    status: 'upcoming',
  },
  {
    phase: 'Enrollment',
    label: 'Document verification & fee submission',
    detail: 'Selected candidates submit original documents and pay dues to confirm their seat.',
    date: 'Per merit list notice',
    status: 'upcoming',
  },
]

export const meritFormula = {
  entryTestWeight: 0.6,
  academicWeight: 0.4,
  note: 'Merit Score = 60% × Entry Test (as %) + 40% × HSC Part-I / equivalency (as %). Matriculation marks are not factored into the undergraduate formula.',
}

export const quickFacts = [
  { label: 'Founded', value: '1921' },
  { label: 'Status', value: 'Public  Govt. of Sindh' },
  { label: 'Campuses', value: '4, across Sindh' },
  { label: 'Typical closing merit (top depts.)', value: '75–85%' },
]

export const officialLinks = [
  {
    title: 'NED Admission Portal',
    desc: 'Register, submit documents, and track your application status.',
    href: 'https://www.neduet.edu.pk/admission',
  },
  {
    title: 'Entry Test Registration',
    desc: 'Sign up for the Phase I / Phase II pre-admission entry test.',
    href: 'https://www.neduet.edu.pk/admission',
  },
  {
    title: 'Admission Schedule (PDF)',
    desc: 'The official, dated schedule of every admission milestone.',
    href: 'https://www.neduet.edu.pk/sites/default/files/Admissions-2026/ADMISSIONS_SCHEDULE_2026.pdf',
  },
  {
    title: 'NED University  Home',
    desc: 'Main university website for news, faculties, and contacts.',
    href: 'https://www.neduet.edu.pk/',
  },
]

export const meritLists = [
  { year: '2025', title: 'Provisional Merit List  2025 Intake', href: '#' },
  { year: '2024', title: 'Provisional Merit List  2024 Intake', href: '#' },
  { year: '2023', title: 'Provisional Merit List  2023 Intake', href: '#' },
]

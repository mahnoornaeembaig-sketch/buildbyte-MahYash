import { supabase } from '../lib/supabaseClient.js'

// Flat list, used directly by the recommender.
export async function fetchAllDepartments() {
  const { data, error } = await supabase
    .from('departments')
    .select('name, faculty, blurb, interests')
    .order('sort_order', { ascending: true })

  if (error) {
    console.error('Failed to fetch departments:', error)
    return []
  }

  return data
}

// Grouped by faculty, shaped like the old static `faculties` export so
// Departments.jsx needs minimal changes.
export async function fetchFaculties() {
  const { data, error } = await supabase
    .from('departments')
    .select('name, faculty, faculty_code, sort_order')
    .order('sort_order', { ascending: true })

  if (error) {
    console.error('Failed to fetch faculties:', error)
    return []
  }

  const grouped = new Map()
  data.forEach((d) => {
    const key = d.faculty
    if (!grouped.has(key)) {
      grouped.set(key, { code: d.faculty_code || '', name: d.faculty, departments: [] })
    }
    grouped.get(key).departments.push(d.name)
  })

  return [...grouped.values()]
}
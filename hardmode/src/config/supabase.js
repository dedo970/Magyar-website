import { createClient } from '@supabase/supabase-js'

const supabaseUrl =" https://yairyhhhcbfkplqilyyg.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlhaXJ5aGhoY2Jma3BscWlseXlnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE0MjYzNDQsImV4cCI6MjAwNzAwMjM0NH0.TT0102cPO5uXjM-mc8V9o2B3ngsFpQr2cZYiC1pxess"

const supabase = createClient(supabaseUrl, supabaseAnonKey)

export default supabase
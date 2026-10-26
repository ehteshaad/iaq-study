// ===== EDIT ONLY THE TWO SUPABASE LINES BELOW =====
// Supabase > Project Settings > API: "Project URL" (base URL only, no /rest/v1) and the publishable (anon) key.
// NEVER paste a service_role or secret key here: everything in this file is public.
window.APP_CONFIG = {
  SUPABASE_URL: 'https://aicshitynyuodlpmclgg.supabase.co',
  SUPABASE_KEY: 'sb_publishable_2rOqKtYIHpQUlU8qmJOa3w_EhKQvPup',
  // ==================================================
  STUDY_TITLE: 'Classroom Air Quality and Thinking Study',
  CONSENT_HTML: '<p><b>[Replace with your ethics-approved information sheet and consent text.]</b></p><p>This study looks at how classroom air quality relates to how you feel and how you perform on short thinking tasks. It takes about 8 minutes. Do not enter your name or roll number. Taking part is voluntary and you may stop at any time.</p>',
  CLASSROOMS: ['Room-101', 'Room-102', 'Room-201', 'Room-202'],
  SCHEMA_VERSION: '1.0.0',
  PVT: { DURATION_MS: 120000, ISI_MIN_MS: 2000, ISI_MAX_MS: 10000,
         FALSE_START_MS: 100,   // response < this after stimulus = false_start
         LAPSE_MS: 500,         // response > this = lapse
         MAX_RESPONSE_MS: 10000 // no tap within this = missed
  },
  STROOP: { N_TRIALS: 20, BLANK_MS: 400,
            COLORS: { RED: '#d32f2f', GREEN: '#2e7d32', BLUE: '#1565c0', YELLOW: '#f9a825' } }
};

# Convert Supabase & Clerk Lessons to i18n Pattern

## Overview
Convert 12 lesson pages (6 Supabase + 6 Clerk) from hardcoded Arabic to i18n translation-based pattern, matching the HTML lesson pattern.

## Reference Pattern (`app/learn/html/01-introduction-to-html/page.js`)
- `"use client"` directive at top
- `useLanguage()` hook for language switching
- `rawTranslations` import for structured content
- `renderContent()` helper for section rendering
- `correctAnswers` per language (en/fr/de)
- `challengeCode` string for code editor
- `cheatSheetData` per language
- `getLessonBySlug()` for lesson metadata

## Current State
- All 12 pages are server components (no `"use client"`)
- Hardcoded Arabic content with rich JSX (tables, code blocks, callouts)
- i18n translation files exist but pages don't use them
- Translation files have simpler structure than current pages

## Translation File Structure
```js
{ en: { sections: [...], quiz: [...], challenge: {...}, cheatSheet: {...} }, fr: {...}, de: {...} }
```

## Approach
For each page:
1. Add `"use client"` directive
2. Import `useLanguage` from `@/components/LanguageProvider`
3. Import `rawTranslations` from `@/i18n/lessons/[stage]/[slug]`
4. Define `correctAnswers` per language
5. Define `challengeCode` string
6. Define `cheatSheetData` per language
7. Add `renderContent()` function for section rendering
8. Use `getLessonBySlug()` for lesson metadata
9. Render content from translations

## Files to Modify

### Supabase (6 files)
1. `app/learn/supabase/01-what-is-supabase/page.js`
2. `app/learn/supabase/02-setup-with-nextjs/page.js`
3. `app/learn/supabase/03-database-and-crud/page.js`
4. `app/learn/supabase/04-row-level-security/page.js`
5. `app/learn/supabase/05-storage-and-realtime/page.js`
6. `app/learn/supabase/06-supabase-final-project/page.js`

### Clerk (6 files)
1. `app/learn/clerk/01-what-is-clerk/page.js`
2. `app/learn/clerk/02-setup-with-nextjs/page.js`
3. `app/learn/clerk/03-sign-in-sign-up/page.js`
4. `app/learn/clerk/04-protecting-routes/page.js`
5. `app/learn/clerk/05-user-and-sessions/page.js`
6. `app/learn/clerk/06-clerk-final-project/page.js`

## Correct Answers (extracted from current pages)
### Supabase
- 01: [2, 2, 0, 2] (4 questions)
- 02: [1, 1, 2, 1] (4 questions)
- 03: [2, 1, 3, 2] (4 questions)
- 04: [1, 2, 3, 1] (4 questions)
- 05: [2, 2, 1, 1] (4 questions)
- 06: [1, 1, 1] (3 questions)

### Clerk
- 01: [1, 2, 1] (3 questions)
- 02: [1, 1, 1] (3 questions)
- 03: [1, 2, 1] (3 questions)
- 04: [1, 1, 1] (3 questions)
- 05: [1, 1, 1] (3 questions)
- 06: [1, 2, 1, 1, 1] (5 questions)

## Execution Order
1. Start with Supabase 01 as template
2. Complete all Supabase lessons (01-06)
3. Complete all Clerk lessons (01-06)
4. Test language switching on each page

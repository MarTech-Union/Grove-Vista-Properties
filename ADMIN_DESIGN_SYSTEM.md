# Grove Vista Admin — Design System Extension

> Extends the public Grove Vista design system (Tailwind v4, Geist/Manrope fonts, blue-600 primary, slate neutrals) with admin-specific components. All tokens stay in the existing Tailwind palette — no new design tokens introduced.

---

## Design Tokens (Inherited)

| Token | Value | Usage in Admin |
|-------|-------|----------------|
| `blue-600` | #2563EB | Primary actions, active nav, focus rings |
| `slate-900` | #0F172A | Sidebar background, headings |
| `slate-50/100` | #F8FAFC / #F1F5F9 | Table header, card borders, hover states |
| `red-600` | #DC2626 | Destructive actions, delete buttons |
| `emerald-500` | #10B981 | "Ready" status badge |
| `amber-500` | #F59E0B | "Off Plan" status badge |
| `white` | #FFFFFF | Card/table backgrounds, main content area |
| `rounded-xl` | 0.75rem | Standard component radius |
| `rounded-2xl` | 1rem | Card/panel radius |

---

## Layout Architecture

### AdminLayout (fixed overlay)
- **Strategy:** `position: fixed; inset: 0; z-index: 100` — covers the public Header/Footer without restructuring the route tree.
- **Structure:** Sidebar (left, fixed width) + Main (flex-1, scrollable)
- **Responsive:** Sidebar becomes a slide-in drawer on mobile (hamburger trigger in topbar)
- **Collapse:** Sidebar collapses to icon-only (w-16) on desktop via toggle

```
┌──────────────────────────────────────────┐
│  AdminSidebar (w-60 / w-16 collapsed)    │  AdminTopbar (h-16)  │
│  ─────────────────────────────────────   │  ────────────────────│
│  Logo                                    │  <PageTitle>    [A] →│
│  ─ Dashboard                             ├──────────────────────┤
│  ─ Contacts                              │                      │
│  ─ Applications                          │   <Page Content>     │
│  ─ Properties                            │   max-w-6xl mx-auto  │
│  ─────────────────────────────────────   │                      │
│  View Site ↗                             │                      │
│  Logout                                  │                      │
│  ← Collapse                              │                      │
└──────────────────────────────────────────┘
```

---

## Components

### AdminSidebar
**Purpose:** Primary navigation + logout  
**Variants:** Expanded (w-60) · Collapsed (w-16, icons only)  
**States:** Active link (bg-blue-600 text-white) · Hover (bg-white/10) · Logout hover (bg-red-500/20 text-red-400)

| Prop | Type | Description |
|------|------|-------------|
| `collapsed` | boolean | Icon-only mode |
| `onToggle` | () => void | Toggle collapse |

**Accessibility:** All icon-only links include `title` attribute for tooltip. Logout button has clear label.

---

### AdminTopbar
**Purpose:** Page title breadcrumb + mobile hamburger + quick logout  
**Auto-derives** page title from `usePathname()` — no prop needed.

| Prop | Type | Description |
|------|------|-------------|
| `onMenuClick` | () => void | Toggles mobile sidebar drawer |

---

### StatCard
**Purpose:** KPI metric display on Dashboard  
**Token usage:** `bg-blue-50 text-blue-600` icon container · `text-slate-900` value · `text-emerald-600` positive trend

| Prop | Type | Description |
|------|------|-------------|
| `icon` | ReactNode | SVG icon (24×24) |
| `label` | string | Metric name |
| `value` | string \| number | Primary display value |
| `trend` | string | Optional trend label |
| `trendUp` | boolean | Green if true, slate if false |

---

### DataTable
**Purpose:** Reusable sortable/searchable/paginated table with bulk delete  
**Responsive:** Full table on md+, card stack on mobile  
**Pagination:** 10 rows/page, prev/next controls

| Prop | Type | Description |
|------|------|-------------|
| `columns` | Column[] | `{ key, label, sortable?, render? }` |
| `rows` | object[] | Data rows (must have `id` field) |
| `onDelete` | (id) => void | Single-row delete handler |
| `onBulkDelete` | (ids[]) => void | Bulk delete handler |
| `searchPlaceholder` | string | Search input placeholder |
| `emptyMessage` | string | Empty state text |

**Column config:**
```js
{
  key: "email",          // row field key
  label: "Email",        // header display
  sortable: true,        // default true
  render: (val, row) => <span>{val}</span>  // optional custom cell
}
```

**States:** Default · Hover (bg-slate-50/60) · Selected (checkbox checked) · Empty (centered message) · Bulk selected (red delete button appears in toolbar)

---

### PropertyForm
**Purpose:** Create/edit property listing with live image preview  
**Validation:** title, price, location, type, status required (HTML5 + API-level)  
**Image preview:** Renders below URL field on valid URL input

| Prop | Type | Description |
|------|------|-------------|
| `initialData` | Property \| null | Pre-fills form for edit mode |
| `onSubmit` | (formData) => Promise | Called with form values; throw to show error |
| `submitLabel` | string | Button label (default "Save Property") |

**Fields:** title · price (display) · priceCr (numeric) · location · type (select) · status (select) · tag (select) · beds · baths · sqft · image URL · description

---

### AdminLoginForm
**Purpose:** Password entry for admin authentication  
**Features:** Show/hide password toggle · Loading state during POST · Error display

**States:** Idle · Loading (spinner, button disabled) · Error (red banner) · Success (redirects)

**Accessibility:** `htmlFor`/`id` on all inputs · `aria-label` on icon button

---

### ConfirmModal
**Purpose:** Reusable confirmation dialog for destructive actions  
**Behavior:** Closes on backdrop click or Cancel · Auto-focuses confirm button on open

| Prop | Type | Description |
|------|------|-------------|
| `open` | boolean | Controls visibility |
| `title` | string | Dialog heading |
| `message` | string | Body copy |
| `confirmLabel` | string | Confirm button text (default "Delete") |
| `danger` | boolean | Red (true) vs blue (false) styling |
| `onConfirm` | () => void | Confirm handler |
| `onCancel` | () => void | Cancel handler |

**Accessibility:** Focus trapped to confirm button on open · Backdrop click dismisses

---

## Page Patterns

### List Page (Contacts / Applications)
Client component · Fetches on mount → passes to `DataTable` · Handles delete/bulk-delete inline (optimistic remove from state)

### Detail Page (Contact / Application)
Server component · Reads JSON directly via `dataStore.readJSON` · `Delete` button is a separate client component to avoid "use client" on the whole page

### Properties Grid Page
Client component · Card grid layout · Inline delete with `ConfirmModal` · Add/Edit via links

### Form Page (New / Edit Property)
Client component · `PropertyForm` with `onSubmit` wired to POST/PUT API

---

## Do's and Don'ts

| ✅ Do | ❌ Don't |
|------|---------|
| Use `ConfirmModal` before any DELETE | Delete without confirmation |
| Keep server pages server components where possible | Add "use client" to pages that only read data |
| Use `router.refresh()` after mutations | Rely on stale cached data after POST/DELETE |
| Use `force-dynamic` on server pages reading JSON | Let Next.js cache stale data from file reads |
| Set `httpOnly` on session cookie | Expose session token to JS |
| Read `.env.local` values only server-side | Log or expose `ADMIN_PASSWORD` in client code |

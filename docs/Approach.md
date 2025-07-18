# RoleBoard by Timothy Kiige

## Problem Statement
Build a responsive admin dashboard for viewing, filtering, and managing users with:
- User table (pagination + filtering)
- Modal-based editing
- Tag-based role management (Admin, Editor, Viewer)
- Data persistence via localStorage

## Purpose (Why)
- Quick user management without backend
- Clean UI for role assignment
- Ideal for internal tools or MVPs

## Expected Outcome
- Persistent user data
- Seamless UX for editing/filtering
- Scalable for future backend integration

## Approach (Milestones)

### Setup
- Initialize React (Vite) + Tailwind CSS

### Data Layer
- Schema: `{ id, name, email, roles: [] }`
- Load/save via localStorage
- CRUD utilities

### UI Components
- **UserTable**: Responsive table + filters
- **UserModal**: Edit user details
- **RoleTags**: Role assignment UI
- **FilterBar**: Search + role filters

### State Management
- useState, useEffect
- Sync updates to localStorage

### Modal Editing
- Trigger from table
- Pre-fill + persist changes

### Filtering & Tags
- Search by name/email
- Filter by role
- Add/remove roles via tags

## Possible Challenges
- Modal form validation
- Filtering performance (large datasets)
- LocalStorage limits (~5MB, no relational queries)

## Assumptions
- Small user dataset
- Predefined roles
- No auth/access controls

## Technologies
React, Vite, Tailwind CSS, LocalStorage

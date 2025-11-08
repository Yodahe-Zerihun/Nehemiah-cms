Nehemiah CMS — Church Management System

A modern, Laravel-based Church Management System for managing members (with spouse/parent-child relationships), ministries, staff, assets, finances, activity logs, and analytics. Built with a clean architecture, RBAC, and a delightful UI powered by Tailwind and Chart.js.

Table of Contents

Vision & Core Features

Tech Stack

Architecture Overview

Database Model

Getting Started (Local Dev)

Environment Variables

Running Migrations & Seeders

RBAC & Access Control

Key Modules

API (Sample Endpoints)

Analytics & Charts

Testing

Quality & Tooling

Deployment

Roadmap

Contributing

License

Vision & Core Features

Vision: Give churches a dependable system to organize people, ministries, and resources—while staying simple, fast, and secure.

Core Features

Member Management

Full member profile (contact, demographics)

Relationships: spouses in a dedicated spouse table; parent-child in parent_child

Previous church history inside Member (no separate controller)

Document uploads (ID, certificates)

Ministry Management

Ministries (e.g., Choir, Ushering) via MinistryController

Assign/remove ministry members; roles within a ministry

Staff Management

StaffController (renamed from HumanResourceController)

Roles, positions, start dates, status

Assets & Finance

Asset registry and lifecycle

Finance module (income, expenses, categories, attachments)

Security & RBAC

Roles: System Admin, Operator, Member

Route middleware, Policies, and Permissions

Activity Logs

Track who did what & when

Analytics

Member stats (gender, age, marital status), growth trends, ministry engagement

Chart.js dashboards

Auth

Laravel Breeze

Session or Sanctum (optional) for API authentication

Tech Stack

Backend: Laravel 11+, PHP 8.2+

Auth: Laravel Breeze (+ Sanctum if SPA/API)

Database: MySQL/MariaDB

Frontend: Blade + Tailwind CSS (optionally React via Vite)

Charts: Chart.js

Build: Vite

Testing: Pest or PHPUnit

Architecture Overview
app/
  Http/
    Controllers/
      Auth/
      MemberController.php
      MinistryController.php
      StaffController.php
      AssetController.php
      FinanceController.php
      ActivityLogController.php
    Middleware/
      CheckRole.php
    Requests/           # Form Request validation
  Models/
    Member.php
    Ministry.php
    Staff.php
    Asset.php
    Transaction.php     # Finance
    Spouse.php
    ParentChild.php
    ActivityLog.php
    Role.php
    Permission.php
  Policies/
  Services/             # Business logic services (optional)
bootstrap/
config/
database/
  migrations/
  seeders/
public/
resources/
  views/                # Blade templates
  js/                   # Vite (optional React)
  css/
routes/
  web.php
  api.php

Database Model

Core tables (minimum):

users (Breeze default)

roles, permissions, role_user, permission_role

members (core profile)

spouse (id, member_id_1, member_id_2, marriage_date)

parent_child (id, child_id, parent_id_1, parent_id_2)

ministries, ministry_member (pivot: ministry_id, member_id, role)

staff (user_id or member_id, position, status)

assets (category, status, acquisition info)

transactions (type: income/expense, amount, category_id, memo, attachment)

activity_logs (actor_id, action, subject_type, subject_id, meta)

ERD: (add a diagram link or export later)

Getting Started (Local Dev)

Prereqs

PHP 8.2+, Composer

MySQL 8+/MariaDB 10.6+

Node 18+

Git

Setup

# 1) Clone
git clone https://github.com/<org>/nehemiah-cms.git
cd nehemiah-cms

# 2) Install PHP deps
composer install

# 3) Copy env & generate app key
cp .env.example .env
php artisan key:generate

# 4) Install JS deps
npm install

# 5) Create DB 'nehemiah_cms' and update .env accordingly

# 6) Run migrations + seeders (creates roles & admin)
php artisan migrate --seed

# 7) Run dev servers
php artisan serve
npm run dev


Login with the seeded System Admin credentials printed by the seeder or set in .env (see below).

Environment Variables
APP_NAME="Nehemiah CMS"
APP_ENV=local
APP_KEY=base64:...
APP_DEBUG=true
APP_URL=http://localhost:8000

# DB
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=nehemiah_cms
DB_USERNAME=root
DB_PASSWORD=

# Auth (Breeze)
SESSION_DRIVER=file
SESSION_LIFETIME=120

# Sanctum (if SPA/API)
SANCTUM_STATEFUL_DOMAINS=localhost,127.0.0.1,localhost:5173,127.0.0.1:5173
SESSION_DOMAIN=localhost

# Seed admin (optional)
SEED_ADMIN_NAME="System Admin"
SEED_ADMIN_EMAIL=admin@nehemiah.test
SEED_ADMIN_PASSWORD=password

Running Migrations & Seeders
php artisan migrate
php artisan db:seed
# Or all-in-one:
php artisan migrate --seed


Included seeders

RolePermissionSeeder – creates System Admin, Operator, Member roles and baseline permissions

AdminUserSeeder – creates an initial admin user and assigns System Admin

(Optional) DemoDataSeeder – sample ministries, members, transactions

RBAC & Access Control

Roles

System Admin – full access (manage operators, settings)

Operator – manage members, ministries, assets, staff, finance; view analytics

Member – limited self-service (profile, documents), submit join request

Recommended Layers

Middleware: CheckRole to gate route groups

Policies: fine-grained access to Member, Ministry, Transaction, etc.

Permissions: attach capabilities to roles (CRUD by module)

Example route group

// routes/web.php
Route::middleware(['auth', 'role:system-admin,operator'])->group(function () {
    Route::resource('members', MemberController::class);
    Route::resource('ministries', MinistryController::class);
    Route::resource('staff', StaffController::class);
    Route::resource('assets', AssetController::class);
    Route::resource('finance', FinanceController::class)->parameters(['finance' => 'transaction']);
});

Key Modules
Member Management

CRUD members, upload docs

Relationships: spouse & parent-child (via dedicated tables)

Previous church info stored on the member model (no separate controller)

Activity log on significant updates

Ministry Management

CRUD ministries

Assign/remove members; define roles per ministry

Attendance (optional extension)

Staff Management

StaffController replacing HumanResourceController

Staff profiles, positions, status changes, history

Assets

Asset registry, categories, locations, depreciation fields (optional)

Finance

Transactions (income/expense), categories, attachments

Basic reporting: totals by month/category, trends

API (Sample Endpoints)

If using Sanctum + SPA/React, expose a minimal API.

GET    /api/members
POST   /api/members
GET    /api/members/{id}
PUT    /api/members/{id}
DELETE /api/members/{id}

POST   /api/members/{id}/spouse
POST   /api/members/{id}/parents         # parent_child relations

GET    /api/ministries
POST   /api/ministries
POST   /api/ministries/{id}/members      # attach/detach

GET    /api/finance/transactions
POST   /api/finance/transactions
GET    /api/analytics/member-stats


Auth: Sanctum cookie or token. Protect routes with role middleware + policies.

Analytics & Charts

Member Distribution: gender, age buckets, marital status

Growth Over Time: monthly new members, baptisms (optional)

Ministry Engagement: membership counts, active participation

Finance: monthly income vs. expenses, category breakdown

Implementation: Blade or React components that call small endpoints and render with Chart.js. Keep datasets cached for performance.

Testing
# Feature & unit tests
php artisan test
# or Pest
./vendor/bin/pest


Add tests for: auth, RBAC, core CRUD, relationship integrity (spouse, parent_child), finance calculations.

Quality & Tooling

Static Analysis: Larastan (PHPStan)

Style: Laravel Pint

Git Hooks: pre-commit to run Pint + tests (optional)

CI: GitHub Actions (phpunit + pint + build)

Deployment

Environment: PHP 8.2, Nginx/Apache, MySQL

Build:

composer install --no-dev --optimize-autoloader
php artisan migrate --force
php artisan config:cache && php artisan route:cache && php artisan view:cache
npm ci && npm run build


Queue/Jobs: configure queue:work if using async tasks

Backups: database + storage/app

Roadmap

✅ RBAC foundation (roles: Admin, Operator, Member)

✅ Member relationships (spouse, parent_child)

✅ Rename HumanResourceController → StaffController

✅ Drop TeamController (ministries cover teams)

◻️ Document management per member (expiry reminders)

◻️ Attendance tracking (service & ministry)

◻️ Finance exports (CSV/XLSX), bank import

◻️ Advanced audit trails & diff views

◻️ Notifications (email/SMS) for key events

◻️ Multi-tenant (future)

Contributing

Fork & create a feature branch:

git checkout -b feat/<short-name>


Write tests and keep coverage reasonable.

Run formatters & linters:

./vendor/bin/pint
php artisan test


Open a PR with:

Problem statement

Solution & screenshots

Testing notes

Migration impact

Commit convention: feat: ..., fix: ..., chore: ..., docs: ..., refactor: ..., test: ...

License

This project is licensed under the MIT License. See LICENSE for details.

Maintainers & Support

Product Owner: TBD

Tech Lead: TBD

Contact: TBD (issues & discussions via GitHub)

Tip: If you’re running a React SPA with Sanctum, ensure SANCTUM_STATEFUL_DOMAINS and SESSION_DOMAIN are set correctly, and run Vite on http://localhost:5173 while the Laravel app serves API routes on http://localhost:8000.

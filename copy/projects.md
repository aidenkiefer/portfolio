# Projects Page — Content, Structure, and Intent

This file defines the structure, philosophy, and written content for the Projects page.

The Projects page is the center of gravity for this site.
Its purpose is to demonstrate how I think, design, and reason as a software engineer through concrete work.

This page prioritizes:
- problem-solving over polish
- decision-making over features
- clarity over volume

This is not a gallery.
This is evidence.

---

## 1. Page Title & Framing

### Page Title (H1)
Projects

> Keep the title simple and unembellished.
> Clarity is intentional.

---

### Intro Paragraph (Below Title)

Each project is presented as a case study in problem-solving. I focus on design decisions, technical tradeoffs, and what I learned—not just what I built. These projects reflect how I approach systems, ambiguity, and real engineering constraints.

This paragraph should remain short, readable, and unchanged in tone.

---

## 2. Project Index Philosophy

The Projects page should present a **curated set of meaningful projects**.

Guiding principles:
- Not every assignment belongs here
- Not every experiment is worth listing
- Every project shown should be something I can discuss in depth during an interview

Quality > quantity.

Projects are intentionally a mix of:
- academic work
- applied engineering
- professional production systems

---

## 3. Project Card System

Each project is represented by a **Project Card**.

### Purpose of a Card
A project card is a summary and entry point — not the project itself.

Its job is to:
- clearly state the problem
- signal technical depth
- encourage clicking into a full case study (when applicable)

---

### Card Layout (Conceptual)

Each card should include:

1. **Project Title** (primary)
2. **Short Overview** (2–3 sentences)
3. **Frameworks / Stack**
4. **Topics / Skills**
5. **Case Study Indicator** (implicit via link or explicit label)

Cards should feel:
- structured
- calm
- readable
- consistent

Avoid:
- screenshots by default
- long descriptions
- marketing language

---

## 4. Project Cards — Final Content

### 4.1 Tracking Shifts: Climate Change & Bird Migration Forecasting

**Overview**  
An end-to-end data science and machine learning project analyzing long-term climate trends and forecasting their impact on bird migration patterns. I built a full modeling pipeline using historical climate data (1961–2005) to evaluate model performance on recent data (2005–2024) and generate forward-looking projections through 2050. The project emphasizes data integrity, model validation, and the limitations of long-horizon forecasting.

**Frameworks / Stack**
- Python  
- pandas  
- NumPy  
- scikit-learn  
- Jupyter Notebook  
- Matplotlib  

**Topics / Skills**
- Data cleaning and wrangling  
- Time-series analysis  
- Feature engineering  
- Regression and forecasting models  
- Train / validation separation  
- Model evaluation and interpretation  
- Reproducible ML pipelines  
- Reasoning about uncertainty  

**Case Study**
✅ Yes — flagship case study

---

### 4.2 Decision Tree Learning with ID3 (From Scratch)

**Overview**  
A from-scratch implementation of the ID3 decision tree algorithm to deeply understand entropy, information gain, and recursive model construction. Rather than relying on libraries, I focused on translating theoretical concepts into clean, explainable code and validating behavior on controlled datasets.

**Frameworks / Stack**
- Python  
- NumPy  

**Topics / Skills**
- Supervised learning fundamentals  
- Entropy and information gain  
- Recursive algorithms  
- Algorithm correctness  
- Translating theory into implementation  
- Model interpretability  
- Debugging algorithmic edge cases  

**Case Study**
✅ Yes — focused, shorter case study

---

### 4.3 Relational Database Design & Normalization Case Study

**Overview**  
An end-to-end relational database design project focused on modeling real-world requirements using ER diagrams, normalization, and SQL. The work emphasizes schema design tradeoffs, data integrity, and writing expressive queries that reflect business rules.

**Frameworks / Stack**
- MySQL  
- SQL  
- ER diagramming tools  

**Topics / Skills**
- Entity-relationship modeling  
- Database normalization (3NF / BCNF)  
- Primary and foreign key design  
- Constraint enforcement  
- Analytical SQL queries  
- Translating requirements into schema  

**Case Study**
✅ Yes — concise backend-focused case study

---

### 4.4 Systems Programming Labs: Memory, Concurrency, and ELF Internals

**Overview**  
A collection of systems programming labs exploring low-level concepts such as memory management, ELF binaries, and multithreading. These projects required careful debugging, reasoning about data layout, and understanding how programs interact with the operating system.

**Frameworks / Stack**
- C  
- Linux  
- GCC / GDB  
- Make  
- POSIX APIs  

**Topics / Skills**
- Memory management  
- Pointers and data layout  
- ELF symbol tables  
- Low-level debugging  
- Multithreading with pthreads  
- Reading technical specifications  
- Systems-level reasoning  

**Case Study**
⚠️ Optional — best presented as a single aggregate case study

---

### 4.5 Custom E-Commerce Storefront & Marketing Platform (N-2 Water)

**Overview**  
A production e-commerce storefront built with React and Next.js, integrating Shopify APIs and supporting real-world marketing and SEO constraints. This project involved architectural decisions around rendering strategies, performance optimization, and collaboration with non-technical stakeholders.

**Frameworks / Stack**
- React  
- Next.js  
- TypeScript  
- Shopify Storefront API  
- Tailwind CSS  
- Vercel / Cloudflare  

**Topics / Skills**
- API integration  
- Server-side vs client-side rendering  
- Production React architecture  
- Performance optimization  
- SEO considerations  
- Working with real stakeholders  
- Maintaining live systems  

**Case Study**
✅ Yes — professional, polished case study

---

### 4.6 Dynamic Content Website for Community Organization (Thrive Vineyard)

**Overview**  
A dynamic, content-driven website built and maintained for a community organization, involving custom frontend work and third-party system integrations. The project required balancing usability, accessibility, and long-term maintainability on a live production site.

**Frameworks / Stack**
- WordPress  
- JavaScript  
- HTML / CSS  
- Third-party embeds  

**Topics / Skills**
- Frontend customization  
- Integrating external systems  
- Accessibility considerations  
- Content-driven architecture  
- Maintaining production sites  
- UX tradeoffs  

**Case Study**
❌ No — supporting project

---

### 4.7 Data Wrangling & Analysis Toolkit

**Overview**  
A set of data analysis exercises and utilities focused on cleaning, structuring, and visualizing real-world datasets. This work reinforces best practices in reproducible analysis and exploratory data workflows.

**Frameworks / Stack**
- Python  
- pandas  
- scikit-learn  
- Matplotlib  

**Topics / Skills**
- Data cleaning  
- Feature engineering  
- Exploratory data analysis  
- Visualization for insight  
- Reproducible notebooks  

**Case Study**
❌ No — supporting project

---

## 5. Organization & Display Rules

- Display all projects in a uniform grid or vertical list
- Case-study projects should link to dedicated pages
- Supporting projects should not visually dominate
- Do not distinguish projects using color alone
- Use spacing and hierarchy, not decoration

---

## 6. Relationship to Case Studies

This page is an index.

Each case study page should:
- go deep
- explain decisions
- show tradeoffs
- include reflection

The Projects page should remain skimmable and calm.

---

## 7. Success Criteria

A recruiter or engineer should:
- immediately understand the scope of my work
- see evidence of real engineering judgment
- feel compelled to read at least one case study

If someone thinks:
> “I want to see how this person approached that problem.”

Then the Projects page has succeeded.

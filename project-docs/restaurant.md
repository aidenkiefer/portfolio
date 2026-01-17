---
title: "Restaurant Decision Tree Classifier"
slug: "restaurant-decision-tree"
date_range: "2025"
role: "Solo"
status: "Completed"
visibility: "Public"
case_study_recommended: false
repo_public: true
links:
  repo: "TODO"
  demo: "TODO"
  writeup: "TODO"
tech_stack:
  - "Python — evidence: main.py (standard library: csv, math, collections)"
tags:
  - "machine-learning"
  - "decision-trees"
  - "id3"
  - "classification"
  - "python"
---

## Overview
Implemented the ID3 decision tree learning algorithm from scratch in Python to predict whether a customer will wait at a restaurant based on multiple attributes. The implementation includes entropy calculation, information gain optimization, and recursive tree construction without external machine learning libraries.

## Problem / Motivation
Decision tree learning is a fundamental machine learning algorithm that demonstrates core concepts in information theory and supervised learning. This project required implementing the ID3 algorithm from first principles, including the mathematical foundations (entropy and information gain) used to select optimal attributes for splitting. The restaurant dataset provides a clear, interpretable classification problem with discrete attributes, making it ideal for understanding how decision trees learn hierarchical decision rules.

## What I Built
- Built a complete ID3 decision tree learning implementation with recursive tree construction
- Implemented entropy calculation using Shannon's entropy formula: H(S) = -Σ p_i log₂(p_i)
- Implemented information gain metric to select optimal splitting attributes at each node
- Created a DecisionTreeNode class to represent internal nodes and leaf nodes
- Built tree visualization and classification functions for prediction on new examples
- Implemented CSV data loading and preprocessing for the restaurant dataset

## Technical Highlights
- Implemented information gain calculation from scratch, computing entropy reduction for each candidate attribute
- Used recursive tree construction following the DECISION-TREE-LEARNING pseudocode structure
- Handled edge cases including empty example sets, uniform class distributions, and unseen attribute values during classification
- Designed a clean separation between tree construction, utility functions (entropy, information gain), and classification logic
- Implemented plurality value fallback for handling empty branches and missing attributes

## Architecture (High-level)
Single-file implementation with modular function design:

```
main.py
├── DecisionTreeNode (class)
├── Utility Functions (entropy, information_gain, best_attribute)
├── Core Algorithm (decision_tree_learning)
├── Classification (classify, print_tree)
└── Data Loading (load_restaurant_dataset)
```

Data flow: CSV → Examples (dicts) → Decision Tree → Classification

## Evidence-based Stack & Tools
- Python — evidence: main.py uses Python syntax and standard library imports (csv, math, collections)
- CSV file handling — evidence: main.py line 224-234 uses csv.reader to parse restaurant.csv
- Standard library only — evidence: no requirements.txt, Pipfile, or external dependencies; only uses built-in modules

## Key Concepts Demonstrated
- Information gain and entropy (information theory)
- Recursive algorithm design
- Greedy attribute selection (ID3 heuristic)
- Decision tree induction
- Supervised classification learning
- Data preprocessing and feature representation

## How to Run Locally
- Prereqs: Python 3.x (standard library only, no external dependencies)
- Install: No installation needed
- Run: `python main.py`
- Tests: TODO (no test files found in repository)

## What I'd Improve Next
- Add pruning mechanisms (e.g., reduced-error pruning) to prevent overfitting
- Implement cross-validation for model evaluation and accuracy metrics
- Add support for continuous/numeric attributes (currently handles discrete only)
- Implement alternative splitting criteria (e.g., Gini impurity) for comparison
- Add visualization output (e.g., graphviz export) for better tree representation
- Include unit tests for entropy, information gain, and tree construction functions

## Notes / Redactions (if needed)
- This is a CS411 homework assignment (Assignment10_CS411_undergrad.pdf present in repository)
- The restaurant.csv dataset appears to be a standard educational dataset (12 examples)
- No sensitive data or API keys present; safe for public portfolio
- Consider removing or redacting the assignment PDF if publishing publicly

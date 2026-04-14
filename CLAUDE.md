# Healthy Habits - Recipe & Grocery Project

## Goal

Curate a collection of healthy recipes and generate quick grocery lists from them. This is a personal tool for meal planning and shopping.

## Context

- **Location:** Portugal
- **Supermarket:** Pingo Doce — all recipes should use ingredients readily available there
- **Recipe focus:** Healthy, practical meals using ingredients common in Portuguese supermarkets (fresh produce, fish, legumes, olive oil, Portuguese cheeses, etc.)
- **Seasonal awareness:** Prefer ingredients that are seasonal and affordable in Portugal

## File Structure

- `recipes.html` — Main recipe collection. Self-contained HTML file with all recipes, images, and grocery list generation.
- `images/` — Downloaded recipe images (referenced locally, not via external URLs)

## Rules

- All recipe images must be downloaded and stored in `images/`, referenced as local paths in the HTML
- Recipes should include: name, ingredients with quantities, instructions, prep/cook time, and tags (e.g., "quick", "high-protein", "vegetarian")
- Grocery list feature should allow selecting multiple recipes and combining ingredient lists
- Ingredients should use metric units and Portuguese-friendly naming where helpful
- Keep the HTML file self-contained (inline CSS/JS) so it works by just opening the file in a browser

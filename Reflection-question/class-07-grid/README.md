THEORY 

QUESTION 1

The most important distinction is flexbox is one dimensional. It is like the super powered version of the text-align property, giving you a number of options for spacing, order and how you want elements to reflow in their container

CSS grid on the other hand is designed for two dimensional positioning in mind. It has the concept of columns and rows familiar with those from a print media background. It has similar properties to flexbox allowing you to specify how you want your elements to be spaced and reflowed

Scenarios
1. when we are working with product card it will make sense to use grid over flebox because it contails two dimensional. 

2. Working with Magazines Layout grid gives better structure and layout 

3. Full page layout:you can specify the entire architechture of a page using grid fr and rest


QUESTION 2 

Grid template area lets us draw our layout as an ASCII map directly in CSS instead of using pixel for grid template columns. we can use it when rearranging layout or working in large teams. 


ENGINEERING THINKING 

QUESTION 1 

+-------------------------------------------------+

|                    Hero Area                    |
|                 (Full Spanner)                  |
+------------------------+------------------------+

|      Secondary 1       |      Secondary 2       |
|       (Left Col)       |      (Right Col)       |
+------------------------+------------------------+

|                   Wide Article                  |
|                 (Bottom Area)                   |
+------------+--------------+------------+--------+

|   Small 1  |   Small 2    |   Small 3  |
+------------+--------------+------------+--------+


CSS GRID CODE:
.magazine-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
}

.hero-article {
  grid-column: span 3; 
}

.secondary-1 {
  grid-column: span 2;
}
.secondary-2 {
  grid-column: span 1;
}

.wide-article {
  grid-column: 1 / -1;
}

.small-article-1, 
.small-article-2, 
.small-article-3 {
  grid-column: span 1;
}

fr (Fractional Unit): This is the ideal unit for fluid magazine layouts. Using repeat(3, 1fr) perfectly divides the grid into 3 equal columns, making it extremely easy to span items across fractions of those columns.

auto: This unit sizes tracks based entirely on the size of the content they contain. Uing auto for the entire layout can result in misaligned or uneven columns if one article has a longer title or a wider image than the others.

Percentages (%): Defining columns with percentages can be highly problematic in Grid when using gap values. If you have three 33% columns plus gaps, the total width exceeds 100%, causing horizontal scrolling or layout breakages. Percentages require manual calc() functions to handle gutters, making fr the more robust, predictable, and modern choice.


QUESTION 2 

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Responsive CSS Grid Dashboard</title>
  </head>
<body>

  <div class="dashboard-container">
    
    <aside class=" Panel sidebar">
      <h2>Navigation</h2>
      <p>This IS sidebar.</p>
    </aside>

    <main class="Panel main-content">
      <h2>Main Dashboard Metrics</h2>
      <p>the main content.</p>
      
      <div class="card-grid">
        <div class="card"><strong>Stat A</strong><br>1,245</div>
        <div class="card"><strong>Stat B</strong><br>$4,320</div>
        <div class="card"><strong>Stat C</strong><br>98.4%</div>
      </div>
    </main>

    <section class="Panel right-panel">
      <h2>Activity Feed</h2>
      <p>This is right panel.</p>
    </section>

  </div>

</body>
</html>

CSS 

 {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background-color: #f3f4f6;
      color: #1f2937;
      height: 100vh;
    }

    .dashboard-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 16px;
      padding: 16px;
      min-height: 100vh;
      align-content: start;
    }


    .main-content {
      grid-column: span min(2, auto);
    }

    .panel {
      background-color: #ffffff;
      padding: 24px;
      border-radius: 8px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
      border: 1px solid #e5e7eb;
    }

    .sidebar {
      background-color: #1e293b;
      color: #f8fafc;
    }

    .right-panel {
      background-color: #ffffff;
    }

    h2 {
      font-size: 1.25rem;
      margin-bottom: 12px;
    }

    p {
      font-size: 0.95rem;
      color: #4b5563;
      line-height: 1.5;
    }

    .sidebar p {
      color: #cbd5e1;
    }

    .card-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
      gap: 12px;
      margin-top: 16px;
    }

    .card {
      background-color: #f9fafb;
      padding: 16px;
      border-radius: 6px;
      border: 1px solid #e5e7eb;
      text-align: center;
    }

    
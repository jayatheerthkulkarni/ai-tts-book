<script>
    // Svelte-specific logic can be added here later
  </script>
  
  <style>
    /* Basic Reset and Global Styles (Scoped to this component) */
    :global(body) {
      margin: 0;
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      background-color: #0a192f;
      color: #ffffff;
      line-height: 1.6;
    }
  
    a {
      color: inherit;
      text-decoration: none;
    }
  
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }
  
    /* Header and Navigation Bar Styles (THIN VERSION) */
    .site-header {
      background-color: #0a192f;
      padding: 8px 0; /* Reduced vertical padding */
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }
  
    .nav-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  
    /* Logo Style (Smaller text) */
    .logo {
      font-size: 1.4em; /* Reduced logo text size */
      font-weight: 700;
      color: #ffffff;
    }
  
    /* Navigation Links Styles (Smaller text, less gap) */
    .nav-links {
      display: flex;
      gap: 20px; /* Reduced gap between links */
    }
  
    .nav-links a {
      font-size: 0.9em; /* Reduced link text size */
      color: #ccd6f6;
      transition: color 0.2s ease-in-out;
    }
  
    .nav-links a:hover {
      color: #ffffff;
    }
  
    /* Hero Section Styles (to mimic image context) */
    .hero-section {
      text-align: center;
      padding: 80px 20px 60px 20px; /* Padding top/bottom */
    }
  
    .hero-section h1 {
      font-size: 3.5em; /* Large heading */
      margin-bottom: 15px;
      color: #ffffff;
      font-weight: 700;
    }
  
    .hero-section p {
      font-size: 1.1em;
      color: #ccd6f6; /* Softer white for paragraph */
      max-width: 600px; /* Limit width */
      margin: 0 auto; /* Center paragraph */
    }
  
    /* Placeholder for the app section */
    .app-section {
      background-color: #112240; /* Slightly lighter dark blue for contrast */
      padding: 50px 20px;
      min-height: 400px; /* Just to give some space */
      /* Add styles for your Text-to-Speech box here */
    }
  </style>
  
  <header class="site-header">
    <nav class="main-nav">
      <div class="nav-container">
        <a href="/" class="logo">DataWind</a>
        <ul class="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/get-started">Get started</a></li>
        </ul>
      </div>
    </nav>
  </header>
  
 
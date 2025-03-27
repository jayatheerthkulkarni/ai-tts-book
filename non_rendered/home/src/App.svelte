<script>
  import Navbar from "./lib/navbar.svelte";
</script>

<!-- Add this line in your main app.html <head> section if you haven't already -->
<!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" crossorigin="anonymous" referrerpolicy="no-referrer" /> -->
<!-- Also ensure you have the Poppins font linked, e.g., from Google Fonts -->
<!-- <link rel="preconnect" href="https://fonts.googleapis.com"> -->
<!-- <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> -->
<!-- <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet"> -->


<!-- HTML Structure -->
<Navbar/>
<div class="container">
    <header class="page-header">
        <h1>DataWind</h1>
        <h4>We are building complex AI models and bringing it to your pockets at an insane ease of use.</h4>
    </header>

    <main>
        <!-- Updated Image Placeholder/Container -->
        <div class="image-container">
            <!-- FIX: Added alt attribute -->
            <img src="/banner.jpeg" alt="DataWind Technology Banner">
        </div>

        <section class="description">
            <h2>About Us</h2>
            <p>This project focused on developing a simple web-based application that can instantly generate an audiobook from a given text while synchronizing the audio with the displayed transcript. The main goal was to make text-to-speech (TTS) more interactive by adding real-time text highlighting as the words are spoken.</p>
            <p>The system takes an input text, converts it into speech using a text-to-speech (TTS) API, and plays the generated audio while dynamically highlighting the corresponding words in the transcript. The interface includes a basic audio player with standard controls like play, pause, and seek, along with an auto-scrolling transcript that keeps pace with the narration.</p>
            <p>Our contribution involved integrating a TTS engine using the Web Speech API for text-to-speech conversion, syncing audio with text by matching timestamps from the speech synthesis process to highlight words in real time, building the frontend with a simple HTML, CSS, and JavaScript interface for easy user interaction, and implementing auto-scrolling and highlighting to update the transcript dynamically as the audio progresses.</p>
            <p>Throughout the project, we tested different approaches to improve synchronization and responsiveness. While there were challenges with handling speech rate variations and precise word highlighting, we were able to create a functional prototype that effectively converts text into an audiobook with synchronized highlighting. This project helped us explore text-to-speech technology, JavaScript event handling, and UI development.</p>
        </section>

        <h2 class="section-heading">Our Team</h2>

        <section id="team-members">
            <!-- Member 1 -->
            <div class="member">
                <div>
                    <h4>C. V. N. Sai Siva Sarvan</h4>
                </div>
                <div class="contact-info">
                    <a href="https://www.linkedin.com/in/sarvan-c-a8275128b/" target="_blank" rel="noopener noreferrer">
                        <i class="fab fa-linkedin"></i> LinkedIn
                    </a>
                    <a href="https://github.com/Sarvan-0" target="_blank" rel="noopener noreferrer">
                        <i class="fab fa-github"></i> GitHub
                    </a>
                    <div class="contact-item">
                        <i class="fas fa-envelope"></i> sarvan.cvnss@gmail.com
                    </div>
                    <div class="contact-item">
                        <i class="fas fa-phone"></i> 8367552092
                    </div>
                </div>
            </div>
            <!-- Member 2 -->
            <div class="member">
                <div>
                     <h4>K. Jayatheerth</h4>
                </div>
                <div class="contact-info">
                    <a href="https://www.linkedin.com/in/jayatheerth-k-0a3685297" target="_blank" rel="noopener noreferrer">
                        <i class="fab fa-linkedin"></i> LinkedIn
                    </a>
                    <a href="https://github.com/jayatheerthkulkarni" target="_blank" rel="noopener noreferrer">
                        <i class="fab fa-github"></i> GitHub
                    </a>
                    <div class="contact-item">
                        <i class="fas fa-envelope"></i> jayatheerthkulkarni2005@gmail.com
                    </div>
                    <div class="contact-item">
                        <i class="fas fa-phone"></i> 9381476271
                    </div>
                </div>
            </div>
            <!-- Member 3 -->
            <div class="member">
                <div>
                    <h4>K. Advaith</h4>
                </div>
                <div class="contact-info">
                    <a href="https://www.linkedin.com/in/kambhampati-advaith-2300592b0/" target="_blank" rel="noopener noreferrer">
                        <i class="fab fa-linkedin"></i> LinkedIn
                    </a>
                    <a href="https://github.com/KambhampatiAdvaith" target="_blank" rel="noopener noreferrer">
                        <i class="fab fa-github"></i> GitHub
                    </a>
                    <div class="contact-item">
                        <i class="fas fa-envelope"></i> kadvaith22@gmail.com
                    </div>
                    <div class="contact-item">
                        <i class="fas fa-phone"></i> 8247809593
                    </div>
                </div>
            </div>
            <!-- Member 4 -->
            <div class="member">
                <div>
                    <h4>A. Shreyas</h4>
                </div>
                <div class="contact-info">
                    <a href="https://www.linkedin.com/in/a-shreyas" target="_blank" rel="noopener noreferrer">
                        <i class="fab fa-linkedin"></i> LinkedIn
                    </a>
                    <a href="https://github.com/a-shreyas" target="_blank" rel="noopener noreferrer">
                        <i class="fab fa-github"></i> GitHub
                    </a>
                     <div class="contact-item">
                        <i class="fas fa-envelope"></i> shreyas.a@gmail.com
                    </div>
                    <div class="contact-item">
                        <i class="fas fa-phone"></i> 6305671890
                    </div>
                </div>
            </div>
        </section>
    </main>


</div>


<style>
    /* CSS Variables - Applied globally */
    :root {
        --bg-color: #08101E;
        --bg-gradient-start: #1a2a45; /* For enhanced background */
        --primary-text-color: #E0E0E0;
        --heading-color: #FFFFFF;
        --secondary-text-color: #A0B0C0;
        --accent-color: rgb(214, 214, 148);
        --card-bg-color: #111c30;
        --border-color: rgba(255, 255, 255, 0.1);
        --shadow-color: rgba(0, 0, 0, 0.3); /* Slightly darker shadow */
        --hover-shadow-color: rgba(0, 0, 0, 0.45); /* Slightly darker hover shadow */
        --link-color: var(--accent-color);
        --link-hover-color: #ffffff;
        --icon-color: #f1f1e2; /* Your preferred icon color */
        --space-unit: 1rem;
        --border-radius-base: 8px;
        --border-radius-large: 12px; /* For image curve */
    }

    /* Global Styles - Ideally move to a global CSS file or app.html <style> */
    /* Using :global() inside component style is possible but less standard */
    :global(*, *::before, *::after) {
        box-sizing: border-box;
    }

    :global(body) {
        /* --- MODIFIED: Added gradient background --- */
        background: radial-gradient(ellipse at top center, var(--bg-gradient-start) 0%, var(--bg-color) 70%);
        background-attachment: fixed; /* Keep gradient fixed */
        /* --- END MODIFICATION --- */

        color: var(--primary-text-color);
        font-family: 'Poppins', Arial, sans-serif; /* Ensure Poppins is loaded */
        margin: 0;
        padding: 0;
        line-height: 1.7;
        font-size: 16px;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        min-height: 100vh; /* Ensure gradient covers full height */
    }

     /* Component-Specific Styles (Svelte scopes these automatically) */
    .container {
        max-width: 1140px;
        margin: 0 auto;
        padding: 0 calc(var(--space-unit) * 1.5);
    }

    .page-header {
        text-align: center;
        padding: calc(var(--space-unit) * 4) 0;
        margin-bottom: calc(var(--space-unit) * 1); /* Reduced margin */
        /* --- REMOVED: border-bottom --- */
    }

    .page-header h1 {
        font-size: 3em; /* Slightly larger */
        font-weight: 700;
        margin-bottom: calc(var(--space-unit) * 0.75);
        color: var(--heading-color);
        letter-spacing: 1.5px; /* Increased spacing */
        /* --- ADDED: text-shadow --- */
        text-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    }

    .page-header h4 {
        font-size: 1.2em; /* Slightly larger */
        font-weight: 300;
        max-width: 750px;
        margin: 0 auto;
        color: var(--secondary-text-color);
        line-height: 1.6;
    }

    /* --- UPDATED: Image Styling --- */
    .image-container {
        margin: calc(var(--space-unit) * 3) auto;
        max-width: 90%; /* Adjust as needed */
        border-radius: var(--border-radius-large); /* Use variable for curve */
        overflow: hidden; /* Crucial for applying radius to the img */
        box-shadow: 0 10px 30px var(--shadow-color); /* Add shadow for depth */
        line-height: 0; /* Prevent extra space below image */
    }

    .image-container img {
        display: block; /* Remove potential extra space */
        width: 100%;
        height: auto; /* Maintain aspect ratio */
        max-height: 450px; /* Optional: Set a max height */
        object-fit: cover; /* Cover the container, crop if necessary */
        border-radius: var(--border-radius-large); /* Match container radius */
    }
    /* --- END Image Styling Update --- */

    .description {
        max-width: 850px;
        margin: calc(var(--space-unit) * 4) auto; /* Increased top/bottom margin */
        padding: calc(var(--space-unit) * 1) calc(var(--space-unit) * 0.5); /* Adjust padding slightly */
        background-color: transparent; /* Keep transparent */
        text-align: left;
        color: var(--primary-text-color);
        font-size: 1.05em;
    }

    /* --- ADDED: Heading within description --- */
    .description h2 {
        font-size: 1.6em;
        font-weight: 600;
        color: var(--heading-color);
        margin-bottom: calc(var(--space-unit) * 1.5);
        padding-bottom: calc(var(--space-unit) * 0.5);
        border-bottom: 2px solid var(--accent-color);
        display: inline-block; /* Make border only span text width */
    }

    .description p {
        margin-bottom: var(--space-unit);
    }

    .section-heading {
        text-align: center;
        font-size: 2.2em; /* Slightly larger */
        font-weight: 600;
        color: var(--heading-color);
        margin-top: calc(var(--space-unit) * 4.5); /* Increased top margin */
        margin-bottom: calc(var(--space-unit) * 3); /* Increased bottom margin */
        position: relative;
        padding-bottom: calc(var(--space-unit) * 0.75); /* Slightly more padding */
    }

    .section-heading::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 70px; /* Slightly wider */
        height: 3px;
        background-color: var(--accent-color);
        border-radius: 2px;
    }


    #team-members {
        display: grid;
        /* --- MODIFIED: Changed from auto-fit to fixed 2 columns --- */
        grid-template-columns: repeat(2, 1fr); /* Creates exactly two equal columns */
        /* --- END MODIFICATION --- */
        gap: calc(var(--space-unit) * 2.5); /* Slightly larger gap */
        padding-bottom: calc(var(--space-unit) * 5); /* Increased bottom padding */
        /* --- ADDED: Align items to the start if heights differ --- */
        align-items: start; /* Prevents shorter cards stretching */
    }

    .member {
        border: 1px solid var(--border-color);
        padding: calc(var(--space-unit) * 2); /* Increased padding */
        box-shadow: 0 5px 15px var(--shadow-color); /* Updated shadow */
        border-radius: var(--border-radius-base);
        background-color: var(--card-bg-color);
        text-align: center;
        transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 280px; /* Give cards a consistent minimum height */
    }

    .member:hover {
        transform: translateY(-8px); /* Increased hover lift */
        box-shadow: 0 10px 25px var(--hover-shadow-color); /* Updated hover shadow */
        border-color: var(--accent-color);
    }

    .member h4 {
        margin-top: 0;
        margin-bottom: calc(var(--space-unit) * 1.5); /* Increased margin */
        font-size: 1.3em; /* Slightly larger */
        font-weight: 600;
        color: var(--heading-color);
    }

    .member .contact-info {
         margin-top: var(--space-unit);
         display: flex; /* Use flexbox for alignment */
         flex-direction: column;
         gap: calc(var(--space-unit) * 0.7); /* Space between items */
    }

    .member a, .member .contact-item {
        color: var(--link-color);
        text-decoration: none;
        font-weight: 400;
        /* removed margin-bottom, using gap now */
        display: inline-flex; /* Use inline-flex for better alignment with icon */
        align-items: center;
        justify-content: center;
        transition: color 0.3s ease;
        font-size: 0.95em;
        gap: 8px; /* Space between icon and text */
    }

     .member .contact-item {
         color: var(--primary-text-color); /* Keep non-link text primary */
     }

    .member a:hover {
        color: var(--link-hover-color);
    }

    /* Keep your icon color change */
    .member a i, .member .contact-item i {
        /* margin-right: 8px; */ /* Replaced by gap */
        width: 1.2em; /* Keep width for alignment */
        text-align: center;
        color: var(--icon-color); /* Use variable */
        flex-shrink: 0; /* Prevent icon shrinking */
        transition: color 0.3s ease; /* Add transition to icon */
    }

     .member a:hover i {
         color: var(--link-hover-color); /* Make icon color change on hover too */
     }

    /* FIX: CSS selector now matches the HTML element */
    /* Make sure you have a <footer class="page-footer">...</footer> element */
    .page-footer {
        text-align: center;
        padding: calc(var(--space-unit) * 2.5) 0; /* Increased padding */
        margin-top: calc(var(--space-unit) * 3);
        border-top: 1px solid var(--border-color);
        font-size: 0.9em;
        color: var(--secondary-text-color);
    }

    /* --- Media Queries (Adjusted for new grid layout) --- */
    @media (max-width: 992px) {
        .container {
            padding: 0 var(--space-unit);
        }
        .page-header h1 { font-size: 2.6em; }
        .page-header h4 { font-size: 1.15em; }
        .section-heading { font-size: 2em; }

    }

    @media (max-width: 768px) {
        :global(body) { font-size: 15px; } /* Adjusted global font size */

        .page-header h1 { font-size: 2.3em; }
        .page-header h4 { font-size: 1.1em; }
        .section-heading { font-size: 1.8em; }

        #team-members {
             gap: calc(var(--space-unit) * 1.8); /* Adjust gap for single column */
             /* --- ENSURE single column on smaller screens --- */
             grid-template-columns: 1fr;
             /* --- END --- */
        }
         .member {
             padding: calc(var(--space-unit) * 1.8);
         }
         /* Team grid already handles stacking via auto-fit */
    }
     @media (max-width: 480px) {
        :global(body) { font-size: 14px; } /* Further adjust font size */
        .page-header h1 { font-size: 2em; }
        .page-header h4 { font-size: 1em; }
        .section-heading { font-size: 1.6em; }
        #team-members {
             grid-template-columns: 1fr; /* Force single column explicitly on smallest screens */
        }
        .member {
             min-height: auto; /* Remove min-height on smallest screens */
        }
     }

</style>
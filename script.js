// Countryside Xperience Center Master Interactions
document.addEventListener('DOMContentLoaded', () => {
  console.log("Premium architectural design layer active.");

  // ==========================================================================
  // ZERO-TOUCH DYNAMIC WHATSAPP PREMIUM CONCIERGE ENGINE
  // ==========================================================================
  
  // 1. Scan for every main navigation booking button
  const mainBookButtons = document.querySelectorAll(".book-btn");
  mainBookButtons.forEach(button => {
    // Collect the base link from your HTML (https://wa.me/233208530897)
    const baseHref = button.getAttribute("href") || "https://wa.me/233208530897";
    
    // Elevated luxury message for general site inquiries
    const premiumGeneralMsg = encodeURIComponent(
      "Warm greetings! I am exploring the Countryside Xperience Center website and would love to connect with a concierge to check luxury availability and reservation options for an upcoming stay."
    );
    
    // Stitch them together and execute cleanly in a separate window tab
    button.setAttribute("href", `${baseHref}?text=${premiumGeneralMsg}`);
    button.setAttribute("target", "_blank");
    button.setAttribute("rel", "noopener noreferrer");
  });

  // 2. Scan every individual card or grid box on the page
  const cards = document.querySelectorAll(".card, .grid-box");
  
  cards.forEach(card => {
    // Find the WhatsApp link button inside this specific card
    const button = card.querySelector(".btn");
    if (!button) return; // Skip if this card element doesn't have a button

    // Find the specific title text (<h3>) inside this card
    const titleElement = card.querySelector("h3");
    const itemTitle = titleElement ? titleElement.textContent.trim() : "Reservations";

    // Grab the phone link you already wrote in the HTML
    const baseHref = button.getAttribute("href") || "https://wa.me/233208530897";

    // Curated dynamic message pulling in the exact feature title
    const premiumCustomMsg = `Hello! I am currently viewing your premium experiences online and would like to inquire about booking details and exclusive arrangements for: "${itemTitle}".`;
    
    // Inject the final smart link with the premium text attached
    button.setAttribute("href", `${baseHref}?text=${encodeURIComponent(premiumCustomMsg)}`);
    button.setAttribute("target", "_blank");
    button.setAttribute("rel", "noopener noreferrer");
  });
});

# AWall Media
## Overview
This is a website build for AWall Media. The main purpose of the website is to provide blog posts, video tutorials, and any valuable information that the owner, Andrew Wallace, has to offer.
## Technologies used
The website will be built with React. The remaining tech stack is still to be determined.

## Component Structure
### 1. App Component
- Main component wrapping all other components.
- Manages the overall state of the application.

### 2. Header Component
- Contains the navigation menu with links to different sections like Home, Blog, Tutorials, Store, etc.
- May include a search bar, user authentication, and cart icon (for future e-commerce functionality).

### 3. Footer Component
- Includes links to important pages like About Us, Contact, Terms of Service, Privacy Policy, etc.
- May include social media icons and a newsletter subscription form.

### 4. Home Component
- Displays featured content, announcements, and highlights from the blog, tutorials, and store.
- May include a carousel/slider with featured items.

### 5. Blog Component
- Lists all blog posts with titles, excerpts, author, publication date, and thumbnail images.
- Clicking on a post opens a detailed view of the blog post.

### 6. Blog Post Component
- Displays the full content of a blog post with comments, social sharing buttons, and related posts.

### 7. Tutorials Component
- Lists short video tutorials with titles, thumbnails, descriptions, and maybe a play button.
- Clicking on a tutorial opens a modal or a new page with the video player.

### 8. Store Component
- Lists products available for sale, including courses, PDFs, and physical products.
- Each product has a title, description, price, and thumbnail.
- Clicking on a product opens a detailed view with more information and the option to add it to the cart.

### 9. Product Detail Component
- Displays detailed information about a product, including images, description, price, and purchasing options.
- Includes an "Add to Cart" button.

### 10. Cart Component
- Displays the items added to the cart.
- Allows users to adjust quantities, remove items, and proceed to checkout.

### 11. Checkout Component
- Integrates with Stripe for secure payment processing.
- Collects shipping and payment information from the user.
- Confirms the order and displays a confirmation message.

### 12. 404 Component
- Displays a "Page Not Found" message for URLs that don't match any routes.

### 13. Authentication Components
- Login, Register, Forgot Password, and Profile components for user authentication and account management.

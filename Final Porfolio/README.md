Some rough notes I made during the works. I divided them based on the flow pages. 

I made changes directly to my midterm code, added and deleted stuff from it. 

About - Quite similar to midterm, changes in text. 

Skills - Remove emojis 


Experience-
Thought process- I wanted a something that shows a glimpse of my roles. But an option to read more.... Therefore, I went with the open and close box

The open box has my role title and when clicked, the box streches and shows the deets of the roles. 

In the code, the button has data-bs-toggle="collapse" which tells Bootstrap: “open or close this box when clicked.”

The data-bs-target="#exp1" connects the button to the hidden content, so it knows which box to open.

The accordion container makes sure only one box stays open at a time, so opening a new one closes the others.


Projects-
Thought Process - I wanted to firstly have pictures in it. Since due to NDA, I can't really share the major deets of the project but I can share my job, and feedback. Therefore, I added the feedbacks I recieved from the supervisors as the photos and need to small tags/key words.

The layout uses Bootstrap columns so cards appear in a clean 2 column grid.

Each project card has data-bs-toggle="modal" and data-bs-target="#modal1" so clicking it opens a popup window (modal) with more details.

Inside each card, there’s an image, title, description, and tags to quickly show what the project is about.

There is a popup window (modal) that stays hidden until the user click a project card.

The id= "modal1" connects it to the project card, so clicking the card opens this modal automatically.

It has a header (title + close button), and a body where the image, description, and tags are shown.

Bootstrap handles the animation and background dimming so it feels like a focused “zoom-in” view of the project. 

Challenge - How does it now when to titl the projects? I looked at some tutorials, and W3 Schools for the syntaxs. 
How it works right now - 
On mousemove, it calculates the cursor’s position inside the card using getBoundingClientRect(), then finds how far the mouse is from the center (x and y offsets). Those values are converted into small rotation angles using rotateX and rotateY, combined with a perspective(900px) so the tilt looks realistic in 3D. When the mouse leaves the card (mouseleave), the transform is reset so the card smoothly returns to its original flat position.

NOTE: I lost photos because my phone broke and yahhh... therefore Im currently missing photo for Tandon and SES. I will try to click pictures in the fall sem, and refresh the site. 


Gallery-
Thought Process - This section is a photo gallery using a Bootstrap carousel, like a sliding photo viewer 📸.

The carousel-inner holds multiple images, and only one shows at a time (the “active” one).

The indicators (dots/buttons) let you jump to a specific image slide.

Bootstrap automatically handles the sliding animation when users click or it auto-rotates.

NOTE: I lost photos because my phone broke and yahhh... therefore Im currently missing photo for Tandon and SES. I will try to click pictures in the fall sem, and refresh the site. 


Contact Page - 
I need to re do this page to add a better form that matches the aesthetics. Added a google form for now. 



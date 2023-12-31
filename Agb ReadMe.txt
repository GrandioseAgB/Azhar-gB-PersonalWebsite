https://github.com/minimal-ui-kit/material-kit-react/blob/main/README.md
Recommended Node.js v18.x.
Install: yarn install
Start: yarn dev
Build: yarn build



sections.jsx
 Left hand side navigation bar
 
 Added Curriculum Vitae
     in /src/layouts/dashboard/config-navigation.jsx --> added Curriculm Vitae.----> But not sure how this page is renderred on the screen
	in Sections.jsx: Added CurriculumVitae line # 12 and created curriculm-vitae.jsx file under src/pages
	in Sections.jsx added path Line #44
	Under sections folder, I created a new folder for curriculumVitae which I copied from blogs
	
	To remove contents: 
	  a) I commented in curriculumVitae-view.jsx under sections/curriculumVitae
	
    There was Search in Header. And Notification icon next to Accounts icon.  I commented that out in headers.jsx	
	
	Avatar Photo and Name:
	in accounts.js under src--> mock
	
	Main Logo on the left top --> I commented out code in logo.jsx which made that hide
	
	In left navigation, there was a girl avatar with GET MORE for $69, I commented in nav.jsx (src/layouts/dashboard)
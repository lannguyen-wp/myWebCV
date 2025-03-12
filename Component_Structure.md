# MyWebCV Component Structure

## Home.jsx
1. **Main Container** (`LAYOUT.pageContainer`)
   - **CV Container** (`LAYOUT.container` with `id="cv-content"`)
     - **Grid Container** (`LAYOUT.gridContainer`)
       
       ### First Row
       - **Left Column** (`LAYOUT.gridColLeft`) - Empty
       - **Right Column** (`LAYOUT.gridColRightHeader`) - Contains Header component
       
       ### Second Row
       - **Left Column** (`LAYOUT.gridColLeft`) - Dark themed components:
         - Contact
         - Education
         - Achievements
         - Skills
         - References
       - **Right Column** (`LAYOUT.gridColRightContent`) - Bright themed components:
         - Profile
         - WorkExperience
         - Publications

export const analyzeHTML = (htmlContent) => {
  if (!htmlContent) {
    console.log('No content to analyze');
    return {};
  }

  try {
    // Create a temporary DOM to parse HTML
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, 'text/html');
    const result = {};
    let itemCount = 1;
    
    // Function to check if content is just whitespace or &nbsp;
    const isEmptyContent = (content) => {
      return !content || content.replace(/&nbsp;/g, '').trim() === '';
    };

    // Function to count words in a string
    const countWords = (str) => {
      return str.split(/\s+/).filter(word => word.length > 0).length;
    };

    // Process all body content elements
    const bodyContent = doc.querySelector('body').children;
    Array.from(bodyContent).forEach(element => {
      // Skip processing if element is empty
      if (isEmptyContent(element.innerHTML)) {
        return;
      }
      const tagName = element.tagName.toLowerCase();
      const itemKey = `element_${itemCount}`;
      switch (tagName) {
        case 'p':
          // Handle paragraphs
          const spans = element.querySelectorAll('span');
          if (spans.length > 0) {
            // Process each span
            spans.forEach(span => {
              const spanHtml = span.innerHTML;
              if (isEmptyContent(spanHtml)) {
                return; // Skip empty spans
              }
              const wordCount = countWords(spanHtml);
              result[`element_${itemCount}`] = {
                type: wordCount < 10 ? "text_line" : "paragraph",
                value: spanHtml
              };
              itemCount++;
            });
          } else {
            const paragraphHtml = element.innerHTML;
            const wordCount = countWords(paragraphHtml);
            result[itemKey] = {
              type: wordCount < 10 ? "text_line" : "paragraph",
              value: paragraphHtml
            };
            itemCount++;
          }
          break;
        
        case 'ul':
        case 'ol':
          // Handle lists and extract span content
          const listItems = element.querySelectorAll('li');
          const processedItems = [];
          // Process each list item to extract spans
          Array.from(listItems).forEach(li => {
            const spans = li.querySelectorAll('span');
            
            if (spans.length > 0) {
              // Extract content from each span
              spans.forEach(span => {
                const spanContent = span.innerHTML;
                if (!isEmptyContent(spanContent)) {
                  processedItems.push(spanContent);
                }
              });
            } else {
              // If no spans, use the entire li content
              const liContent = li.innerHTML;
              if (!isEmptyContent(liContent)) {
                processedItems.push(liContent);
              }
            }
          });
          result[itemKey] = {
            type: tagName === 'ul' ? "bullet_list" : "numbered_list",
            value: processedItems // Array of span contents
          };
          itemCount++;
          break;

        default:
          // Handle other elements
          result[itemKey] = {
            type: tagName,
            value: element.innerHTML
          };
          itemCount++;
      }
    });
    
    return result;
  } catch (error) {
    console.error('Error analyzing HTML:', error);
    return {};
  }
};

// Function to convert JSON back to HTML
export const json2HTML = (json) => {
  let html = '';
  const keys = Object.keys(json);
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const item = json[key];
    // Check adjacent elements for context-based styling
    const prevItem = i > 0 ? json[keys[i-1]] : null;
    const nextItem = i < keys.length - 1 ? json[keys[i+1]] : null;
    
    switch (item.type) {
      case 'text_line':
        // Check if the next item is paragraph or list
        const isNextParaOrList = nextItem && (nextItem.type === 'paragraph' || nextItem.type === 'bullet_list' || nextItem.type === 'numbered_list');
        // Apply margin bottom based on context
        const marginBottom = (isNextParaOrList) ? 'margin-bottom: 8px;' : '';
        html += `<p style="${marginBottom}"><span>${item.value}</span></p>`;
        break;
      
      case 'paragraph':
        html += `<p style="text-align: justify; margin-bottom: 8px;"><span>${item.value}</span></p>`;
        break;
      
      case 'bullet_list':
        // Fix: Use proper CSS for the list styling
        html += `<ul style="margin-bottom: 8px; padding-left: 32px; list-style-type: disc;">`;
        for (let j = 0; j < item.value.length; j++) {
          html += `<li style="text-align: justify;">
                    <span>${item.value[j]}</span>
                   </li>`;
        }
        html += `</ul>`;
        break;
      
      case 'numbered_list':
        // Fix: Use proper CSS for the list styling
        html += `<ol style="margin-bottom: 8px; padding-left: 32px; list-style-type: decimal;">`;
        for (let j = 0; j < item.value.length; j++) {
          html += `<li style="text-align: justify;">
                    <span>${item.value[j]}</span>
                   </li>`;
        }
        html += `</ol>`;
        break;
      
      default:
        html += `<p style="margin-bottom: 5px;"><span>${item.value}</span></p>`;
    }
  }
  return html;
};
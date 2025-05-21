// Get the Handlebars template from the HTML
const source = document.getElementById('languagesTemp').innerHTML;
// Compile the Handlebars template
const template = Handlebars.compile(source);

// Define the context data: a list of languages with their 'modern' status
const context = {
  languages: [
    {
      name: 'HTML',
      modern: true
    },
    {
      name:'CSS',
      modern: true
    }, 
    {
      name: 'JavaScript',
      modern: true
    },
    {
      name: 'COBOL',
      modern: false
    }
  ]
};

// Generate the HTML by applying the context to the template
const compiledHtml = template(context);

// Insert the generated HTML into the page
const displayGoals = document.getElementById('goals');
displayGoals.innerHTML = compiledHtml;

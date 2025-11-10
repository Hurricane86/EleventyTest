CMS.registerEditorComponent({
  id: "card",
  label: "Card",
  fields: [
    { name: "title", label: "Titolo", widget: "string" },
    { name: "content", label: "Contenuto", widget: "text" }
  ],

  // Regex per catturare il blocco nel Markdown
  pattern: /{%\s*card\s*"([^"]+)"\s*,\s*"([^"]+)"\s*%}/,

  fromBlock(match) {
    return {
      title: match[1],
      content: match[2]
    };
  },

  toBlock({ title, content }) {
    // Genera il markup da salvare nel Markdown
    return `{% card "${title}", "${content}" %}`;
  },

  toPreview({ title, content }) {
    return `
      <div class="card">
        <h3>${title}</h3>
        <p>${content}</p>
      </div>
    `;
  },
});
CMS.registerEditorComponent({
  id: "card",
  label: "Card",
  fields: [
    { name: "title", label: "Titolo", widget: "string" },
    { name: "content", label: "Contenuto", widget: "text" },
    { name: "image", label: "Immagine", widget: "image", required: false },
    { name: "link", label: "Link", widget: "string", required: false },
  ],

  // Come appare nel markdown
  pattern: /^::card\s+([^|]+)\s*\|\s*([^|]+)\s*\|\s*([^|]*)\s*\|\s*([^|]*)::/s,

  fromBlock(match) {
    return {
      title: match[1],
      content: match[2],
      image: match[3],
      link: match[4],
    };
  },

  toBlock({ title, content, image = "", link = "" }) {
    return `::card ${title} | ${content} | ${image} | ${link}::`;
  },

  toPreview({ title, content, image, link }) {
    return `
      <div class="card">
        ${image ? `<img src="${image}" alt="">` : ""}
        <h3>${title}</h3>
        <p>${content}</p>
        ${link ? `<a href="${link}">Scopri di più</a>` : ""}
      </div>
    `;
  },
});

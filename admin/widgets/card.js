const CardControl = createClass({
  render() {
    const { value, onChange } = this.props;
    const data = value || { title: "", content: "" };

    return h("div", {},
      h("label", {}, "Titolo:"),
      h("input", {
        type: "text",
        value: data.title,
        onChange: e => onChange({ ...data, title: e.target.value })
      }),
      h("label", {}, "Contenuto:"),
      h("textarea", {
        value: data.content,
        onChange: e => onChange({ ...data, content: e.target.value })
      })
    );
  }
});

const CardPreview = createClass({
  render() {
    const { value } = this.props;
    if (!value) return h("div", {}, "Nessun contenuto");
    const { title, content } = value;
    return h("div", { className: "card" },
      h("h3", {}, title),
      h("p", {}, content)
    );
  }
});

CMS.registerWidget('card', CardControl, CardPreview);

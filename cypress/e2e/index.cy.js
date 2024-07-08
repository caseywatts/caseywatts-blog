const skipRequestValidation = ["https://www.etsy.com/shop/heycaseywattsup/", "https://linkedin.com/in/heycaseywattsup"];

it("titles are correct", () => {
  const page = cy.visit("/");

  page.get("title").should("have.text", "Hi, I'm Casey!");
});

it("footer links all work", () => {
  const page = cy.visit("/");
  cy.get("a").each((link) => {
    const href = link.prop("href");
    if (href) {
      if (skipRequestValidation.includes(href)) {
        return; // skip these
      } else {
        cy.request({
          url: href,
        });
      }
    }
  });
});

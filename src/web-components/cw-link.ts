import {html, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('cw-link')
export class SimpleGreeting extends LitElement {

  @property({type: String})
  href = 'https://www.caseywatts.com/';

  render() {
    return html`
    <a href="${this.href}">
      <slot></slot>
      <a href="#>lol</a>
    </a>`;
  }
}
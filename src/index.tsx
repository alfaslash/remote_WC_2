import { h, render } from 'preact';
import { App, AppProps } from './components/App';

class RemoteWC2Components extends HTMLElement {
	private container: HTMLDivElement;
	private options: AppProps;

	constructor() {
		super();

		try {
			this.options = JSON.parse(this.getAttribute("props"));
		} catch (ex) {
			console.log(ex);
		}
	}

	set props(props: AppProps) {
		this.options = props;
		this.render();
	}

	connectedCallback() {
		this.container = document.createElement('div');
		this.appendChild(this.container);

		this.render()
	}

	disconnectedCallback() {
		render(null, this.container);
	}

	private render() {
		if (!!this.container) {
			render(<App {...this.options} />, this.container);
		}
	}
}

customElements.define('remote-wc2-components', RemoteWC2Components);

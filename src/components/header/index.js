import {h, Component} from 'preact';
import {Slot} from '../../lib/preact-slots';
// import {Slot} from 'preact-slots';
import style from './style.css';

export default class Header extends Component {
	render() {
		return (
			<header class={style.header}>
				<h1>
					<Slot name="title">Default Title</Slot>
				</h1>
				<Slot name="links">{links => <nav>{links}</nav>}</Slot>
			</header>
		);
	}
}

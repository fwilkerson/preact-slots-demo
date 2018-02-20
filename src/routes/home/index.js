import {h, Component} from 'preact';
import {Link} from 'preact-router/match';
import {SlotContent} from '../../lib/preact-slots';
// import {SlotContent} from 'preact-slots';

import style from './style.css';

export default class Home extends Component {
	render() {
		return (
			<div class={style.home}>
				<SlotContent slot="title">Home Page</SlotContent>
				<h1>Home</h1>
				<p>This is the Home component.</p>
				<SlotContent slot="links">
					<Link activeClassName="active" href="/">
						Home
					</Link>
					<Link activeClassName="active" href="/profile">
						Profile
					</Link>
				</SlotContent>
			</div>
		);
	}
}

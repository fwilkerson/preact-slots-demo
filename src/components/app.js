import {h, Component} from 'preact';
import {Router} from 'preact-router';
import {SlotProvider} from '../lib/preact-slots';
// import {SlotProvider} from 'preact-slots';

import Home from '../routes/home';
import Profile from '../routes/profile';
import Header from './header';

if (module.hot) {
	require('preact/debug'); // eslint-disable-line import/no-unassigned-import
}

export default class App extends Component {
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<SlotProvider>
				<div id="app">
					<Header />
					<Router onChange={this.handleRoute}>
						<Home path="/" />
						<Profile path="/profile/" user="me" />
						<Profile path="/profile/:user" />
					</Router>
				</div>
			</SlotProvider>
		);
	}
}
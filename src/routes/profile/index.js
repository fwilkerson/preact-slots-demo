import {h, Component} from 'preact';
import {Link} from 'preact-router/match';
import {SlotContent} from '../../lib/preact-slots';
// import {SlotContent} from 'preact-slots';
import style from './style.css';

export default class Profile extends Component {
	state = {
		time: Date.now(),
		count: 10,
	};

	// Gets called when this route is navigated to
	componentDidMount() {
		// Start a timer for the clock:
		this.timer = setInterval(this.updateTime, 1000);
	}

	// Gets called just before navigating away from the route
	componentWillUnmount() {
		clearInterval(this.timer);
	}

	// Update the current time
	updateTime = () => {
		this.setState({time: Date.now()});
	};

	increment = () => {
		this.setState(state => ({count: state.count + 1}));
	};

	// Note: `user` comes from the URL, courtesy of our router
	render({user}, {time, count}) {
		return (
			<div class={style.profile}>
				<SlotContent slot="links">
					<Link activeClassName="active" href="/">
						Home
					</Link>
				</SlotContent>
				<h1>Profile: {user}</h1>
				<p>This is the user profile for a user named {user}.</p>

				<div>Current time: {new Date(time).toLocaleString()}</div>

				<p>
					<button type="button" onClick={this.increment}>
						Click Me
					</button>
					&nbsp;Clicked {count} times.
				</p>
			</div>
		);
	}
}

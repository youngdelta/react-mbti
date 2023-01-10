import { Component } from 'react';
import { Link } from 'react-router-dom';
import '../js/share.js';
import Routers from '../route/Routers';

class Home extends Component {
	state = {};
	render() {
		return (
			<>
				<h2 className="page-subtitle">MBTI</h2>
				<h1 className="page-title">
					내 안에 숨어있는
					<br />
					직업캐 찾기!
				</h1>
				<img
					className="character"
					src="/images/main_character.png"
					alt="메인 이미지"
				/>

				<Link
					className="btn btn-orange"
					to="/questions">
					본캐 찾으러 GO!
				</Link>
				<div className="btn btn-green btn-small share-or-copy">주변에 알리기</div>
			</>
		);
	}
}

export default Home;

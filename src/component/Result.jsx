import React from 'react';
import { results, mbtis } from '../js/data.js';
import '../js/share.js';

class Result extends React.Component {
	constructor(props) {
		super(props);
	}

	state = {
		subTitle: '',
		title: '',
		characterSrc: '',
		lectureImg: '',
		lectureHref: '',
		results: [],
		jobs: [],
	};

	componentDidMount() {
		this.setResult();
	}

	setResult() {
		const mbti = new URLSearchParams(window.location.search).get('mbti');
		// const mbti = this.$route.query.mbti;
		// const { mbti } = this.props;

		const result = results[mbtis[mbti]] || {};
		console.log('🚀 ~ file: results.js:6 ~ result', result);

		this.setState({
			subTitle: this.state.subTitle + ` ${mbti?.toUpperCase() || ''}`,
			title: result.title,
			characterSrc: `.${result.character}`,
			lectureImg: `.${result.lectureImg}`,
			lectureHref: `${result.lectureUrl}`,
			results: result.results,
			jobs: result.jobs,
		});
	}

	render() {
		return (
			<>
				<h2 className="page-subtitle">{this.state.subTitle}</h2>
				<h1
					className="page-title"
					dangerouslySetInnerHTML={{ __html: this.state.title }}></h1>
				<img
					className="character"
					src={this.state.characterSrc}
					alt="character"
				/>

				<div className="result">
					{this.state.results.map((r, i) => (
						<div
							className="box"
							key={i}
							dangerouslySetInnerHTML={{ __html: r }}></div>
					))}
				</div>

				<div className="result">
					<h3>이런 내가 직업을 갖는다면?</h3>
					<div className="jobs">
						{this.state.jobs.map((r, i) => (
							<div
								className="job"
								key={i}
								dangerouslySetInnerHTML={{ __html: r }}></div>
						))}
					</div>
				</div>

				<div className="result">
					<h3>이런 직업 강의는 어떤가요?</h3>
					<a
						href="lectureHref"
						target="_blank"
						className="lecture">
						<img
							src={this.state.lectureImg}
							alt="강의"
						/>
					</a>
				</div>

				<div className="btn btn-green btn-small share-or-copy">결과 공유하기</div>
				<a
					href="/"
					className="btn btn-gray btn-small">
					다시 테스트
				</a>
			</>
		);
	}
}

export default Result;

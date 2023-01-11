import React from 'react';
import { questions } from '../js/data.js';
import store from '../store/store.js';
import { useNavigate } from 'react-router-dom';
import Result from './Result.jsx';
// import { reducer } from '../store/store';

class Questions extends React.Component {
	constructor(props) {
		super(props);
		// this.showResultPage = this.showResultPage.bind(this);
		console.log('Questions props===>   ', props);
	}

	state = {
		mbti: '',
		currentNumber: 0,
		question: {},
		numberElTxt: 1,
		choice1ElTxt: '',
		choice2ElTxt: '',
		progressStyle: {},
		// navigate: useNavigate(),
	};

	componentDidMount() {
		// console.log('🚀 ~ file: Questions.jsx:13 ~ Questions ~ componentDidMount ~ componentDidMount : ', 'componentDidMount');
		this.renderQuestion();
	}

	componentDidUpdate() {
		// console.log('🚀 ~ file: Questions.jsx:42 ~ Questions ~ componentDidUpdate ~ componentDidUpdate', 'method--> componentDidUpdate');
		// this.renderQuestion();
	}

	renderQuestion() {
		const question = questions?.[this.state.currentNumber] || {};
		console.log(this.props);
		console.log(this.store);
		console.log('store : ', store);

		this.setState({
			// currentNumber: question?.number || 0,
			question: question,
			numberElTxt: question?.number || 0,
			choice1ElTxt: question?.choices?.[0]?.text || '',
			choice2ElTxt: question?.choices?.[1]?.text || '',
			progressStyle: {
				width: `${(this.state.currentNumber + 1) * 10}%`,
			},
		});

		// this.numberElTxt = question?.number || 0;
		// this.questionElTxt = question?.question || '';
		// this.choice1ElTxt = question?.choices?.[0]?.text || '';
		// this.choice2ElTxt = question?.choices?.[1]?.text || '';

		// this.$refs.refProgressValue.style.width = `${(this.currentNumber + 1) * 10}%`;
	}

	onClickChoice(val) {
		// console.log('🚀 ~ file: QuestionsView.vue:56 ~ onClickChoice ~ val  : ', val);
		// const choiceNum = e.target.classList.contains('choice1') ? 0 : 1;
		const newMbti = (this.state.mbti += questions?.[this.currentNumber]?.choices?.[val]?.value || '');

		this.setState({ mbti: newMbti });

		// this.mbti += questions?.[this.currentNumber]?.choices?.[val]?.value || '';
		console.log('🚀 ~ file: questions.js:44 ~ eventListener ~ mbti : ', this.state.mbti);
		/* 
		if (this.state.currentNumber === questions.length - 1) {
			this.showResultPage();
			return;
		}
        */

		// this.currentNumber++;
		this.setState({ currentNumber: ++this.state.currentNumber }, () => {
			this.renderQuestion();
		});
	}

	showResultPage() {
		// window.location.href = `/result?mbti=${this.mbti}`;
		// this.$router.push({ name: 'ResultView', query: { mbti: this.mbti } });
		// this.props.navigate(`/result?mbti=${this.state.mbti}`);
		// reducer.navigate(`/result?mbti=${this.state.mbti}`);
		// this.props.store.navigate(`/result?mbti=${this.state.mbti}`);
		// store.dispatch(`/result?mbti=${this.state.mbti}`);
	}

	render() {
		/* 
		const tempStyle = {
			width: `${(this.state.currentNumber || this.state.currentNumber + 1) * 10}%`,
		};
        console.log('🚀 ~ file: Questions.jsx:82 ~ Questions ~ render ~ this.state.currentNumber', this.state.currentNumber, (this.state.currentNumber || this.state.currentNumber + 1) * 10);
        */
		console.log('🚀 ~ file: Questions.jsx:82 ~ Questions ~ render ~ this.state.currentNumber', this.state.currentNumber);

		return (
			<>
				{this.state.currentNumber && this.state.currentNumber > 9 ? (
					<Result />
				) : (
					<>
						<div className="progress">
							<div
								className="value"
								style={this.state.progressStyle}></div>
						</div>
						<div className="question-box">
							<div className="number">{this.state.numberElTxt}</div>
							<div
								className="question"
								v-html="questionElTxt"></div>
							<div
								className="btn btn-gray choice choice1"
								onClick={() => this.onClickChoice(0)}
								dangerouslySetInnerHTML={{ __html: this.state.choice1ElTxt }}></div>
							<div
								className="btn btn-gray choice choice2"
								onClick={() => this.onClickChoice(1)}
								dangerouslySetInnerHTML={{ __html: this.state.choice2ElTxt }}></div>
						</div>
					</>
				)}
			</>
		);
	}
}

export default Questions;

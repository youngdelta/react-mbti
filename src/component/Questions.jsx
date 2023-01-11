import React from 'react';
import { questions } from '../js/data.js';

class Questions extends React.Component {
	state = {
		mbti: '',
		currentNumber: 1,
		question: {},
		numberElTxt: 1,
		choice1ElTxt: '',
		choice2ElTxt: '',
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
		console.log(question);
		console.log(question?.number || 0);

		this.setState({
			// currentNumber: question?.number || 0,
			question: question,
			numberElTxt: question?.number || 0,
			choice1ElTxt: question?.choices?.[0]?.text || '',
			choice2ElTxt: question?.choices?.[1]?.text || '',
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
		if (this.state.currentNumber === questions.length) {
			this.showResultPage();
			return;
		}

		// this.currentNumber++;
		this.setState({ currentNumber: ++this.state.currentNumber }, () => {
			this.renderQuestion();
		});
	}

	showResultPage() {
		// window.location.href = `/result?mbti=${this.mbti}`;
		// this.$router.push({ name: 'ResultView', query: { mbti: this.mbti } });
	}

	render() {
		const tempStyle = {
			width: `${this.state.currentNumber * 10}%`,
		};

		return (
			<>
				<div className="progress">
					<div
						className="value"
						style={tempStyle}></div>
				</div>
				<div className="question-box">
					<div className="number">{this.state.currentNumber}</div>
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
		);
	}
}

export default Questions;

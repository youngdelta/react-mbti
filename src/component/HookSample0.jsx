import { setSelectionRange } from '@testing-library/user-event/dist/utils';
import { useState } from 'react';

const HookSample0 = () => {
	const [myName, setMyName] = useState('GodHappy');
	const [cnt, setCnt] = useState(0);
	const updateCnt = () => setCnt(cnt + 1);
	const clearCnt = () => setCnt(0);

	const changeName = () => {
		// myName = myName === 'GodHappy!!' ? 'GodSmaile!!' : myName;
		// console.log(myName);
		setMyName(myName === 'GodHappy!!' ? 'GodSmaile!!' : myName);
	};

	return (
		<div>
			클릭한 회수는 {cnt}번 입니다.
			<div>
				<button onClick={updateCnt}>Update Count</button>
				<button onClick={clearCnt}>Clear Count</button>
			</div>
			<h1>안녕하세요. {myName}</h1>
			<button onClick={changeName}>Change</button>
		</div>
	);
};

export default HookSample0;

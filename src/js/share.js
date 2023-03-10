const btnEl = document.querySelector('.share-or-copy');

// 각 지원 기능 확인!
export const isSupportedShare = !!navigator?.share;
export const isSupportedClipboard = !!navigator?.clipboard;
export const isSupportedClipboardCommand = document.queryCommandSupported?.('copy');

// 공유 및 복사 기능 상태 체크!
const healthEl = document.createElement('div');
healthEl.style.display = 'none';
healthEl.innerHTML = `s: ${isSupportedShare}, c: ${isSupportedClipboard}, cc: ${isSupportedClipboardCommand}`;
document.body.append(healthEl);

// 모바일 브라우저 내장 공유 기능!
export async function startNativeShare() {
	await navigator.share({
		title: '내 안에 숨어있는 직업캐 찾기!',
		text: '누구나 찰떡인 직업이 있어요! 내 안에 숨어있는 직업캐를 찾아보세요!',
		url: window.location.href, // 현재 페이지 주소!
	});
}

// 주소 복사 기능!
export async function copyToClipboard() {
	// 레거시 우선!
	if (isSupportedClipboardCommand) {
		const textarea = document.createElement('textarea');
		textarea.style.position = 'fixed';
		textarea.style.top = 0;
		textarea.style.left = 0;
		textarea.value = window.location.href;

		document.body.appendChild(textarea);
		textarea.focus();
		textarea.select();

		document.execCommand('copy');
		document.body.removeChild(textarea);
		alert('링크를 복사했어요 ><');
		return;
	}
	if (isSupportedClipboard) {
		await navigator.clipboard.writeText(window.location.href);
		alert('링크를 복사했어요 ><');
	}
}

// 모든 기능이 없는 경우 공유 버튼 제거!
if (!isSupportedShare && !isSupportedClipboard && !isSupportedClipboardCommand) {
	btnEl.style.display = 'none';
}

// 공유 버튼을 클릭했을 떄!
btnEl?.addEventListener('click', async () => {
	if (isSupportedShare) {
		await startNativeShare();
		return;
	}
	if (isSupportedClipboard || isSupportedClipboardCommand) {
		await copyToClipboard();
	}
});

/**
 *
 * @returns
 */
export const onShare = async () => {
	if (isSupportedShare) {
		await startNativeShare();
		return;
	}
	if (isSupportedClipboard || isSupportedClipboardCommand) {
		await copyToClipboard();
	}
};

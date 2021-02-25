export const getErrorMessage: (errorCode: string) => string = (errorCode) =>
  errorCode.includes('already')
    ? MESSAGES.ALREADY_EXIST
    : MESSAGES.NOT_VALID_PASSWORD;

export const MESSAGES = {
  ALREADY_EXIST: '계정이 이미 존재합니다',
  NOT_VALID_PASSWORD: '비밀번호는 6자 이상으로 입력해주세요',
};

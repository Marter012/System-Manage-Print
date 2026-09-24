import styled from "styled-components";

export const LoginContainer = styled.main`
  width: 100%;
  min-height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 24px;

  box-sizing: border-box;

  background:
    radial-gradient(
      circle at top left,
      rgba(218, 202, 186, 0.45),
      transparent 40%
    ),
    #f5efe9;
`;

export const LoginCard = styled.div`
  width: 100%;
  max-width: 420px;

  padding: 38px 34px;

  box-sizing: border-box;

  background: #ffffff;

  border: 1px solid #e3d9d0;
  border-radius: 20px;

  box-shadow:
    0 18px 45px rgba(73, 48, 31, 0.12),
    0 4px 12px rgba(73, 48, 31, 0.06);

  text-align: center;

  @media (max-width: 500px) {
    padding: 32px 24px;
    border-radius: 17px;
  }
`;

export const LoginLogo = styled.div`
  width: 72px;
  height: 72px;

  margin: 0 auto 18px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  background: #d9c7b5;
  color: #653007;

  font-size: 24px;
  font-weight: 800;

  box-shadow:
    0 6px 18px rgba(101, 48, 7, 0.12);
`;

export const LoginTitle = styled.h1`
  margin: 0;

  color: #4b3527;

  font-size: 27px;
  font-weight: 700;
  line-height: 1.2;

  @media (max-width: 500px) {
    font-size: 24px;
  }
`;

export const LoginSubtitle = styled.p`
  margin: 9px 0 28px;

  color: #8a786a;

  font-size: 14px;
  line-height: 1.5;
`;

export const LoginForm = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;

  text-align: left;
`;

export const LoginLabel = styled.label`
  margin-bottom: 8px;

  color: #5b4637;

  font-size: 14px;
  font-weight: 600;
`;

export const LoginInput = styled.input`
  width: 100%;
  height: 48px;

  padding: 0 14px;

  box-sizing: border-box;

  border: 1px solid #d9cec4;
  border-radius: 11px;

  background: #faf8f6;

  color: #4b3527;

  font-size: 15px;

  outline: none;

  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    background 0.2s ease;

  &::placeholder {
    color: #aa9b90;
  }

  &:focus {
    background: #ffffff;
    border-color: #9b7559;

    box-shadow:
      0 0 0 3px rgba(155, 117, 89, 0.12);
  }
`;

export const LoginButton = styled.button`
  width: 100%;
  height: 48px;

  margin-top: 20px;

  border: none;
  border-radius: 11px;

  background: #653007;
  color: #ffffff;

  font-size: 15px;
  font-weight: 700;

  cursor: pointer;

  transition:
    background 0.2s ease,
    transform 0.15s ease,
    box-shadow 0.2s ease;

  &:hover {
    background: #7a3b0b;

    box-shadow:
      0 6px 16px rgba(101, 48, 7, 0.18);
  }

  &:active {
    transform: translateY(1px);
  }
`;

export const LoginError = styled.span`
  display: block;

  margin-top: 9px;

  color: #b23a2b;

  font-size: 13px;
  font-weight: 500;
`;
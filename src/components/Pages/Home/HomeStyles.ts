import styled from "styled-components";

export const HomeHeader = styled.section`
  width: 88%;
  max-width: 1250px;
  padding: 24px 28px;
  box-sizing: border-box;

  background: rgba(115, 77, 44, 0.72);
  border-radius: 16px;

  color: #f4e9d8;

  box-shadow: 0 8px 25px rgba(101, 48, 7, 0.08);

  @media (max-width: 900px) {
    width: 92%;
    padding: 22px;
  }

  @media (max-width: 600px) {
    width: calc(100% - 24px);
    padding: 18px;
    border-radius: 13px;
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: stretch;
    gap: 18px;
  }
`;

export const Greeting = styled.div`
  flex: 1;
  min-width: 0;

  span {
    display: block;
    margin-bottom: 6px;

    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;

    color: #c29e70;
  }

  h1 {
    margin: 0;

    font-size: clamp(1.45rem, 3vw, 2rem);
    line-height: 1.15;
    font-weight: 700;
  }

  p {
    margin: 8px 0 0;

    max-width: 520px;

    font-size: 0.88rem;
    line-height: 1.45;

    opacity: 0.72;
  }
`;

export const UserBadge = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 11px;
  width: 30%;

  padding: 9px 10px 9px 9px;

  background: rgba(244, 233, 216, 0.1);
  border: 1px solid rgba(244, 233, 216, 0.14);
  border-radius: 12px;

  flex-shrink: 0;
  .user-info{
    width: 100%;
    display: flex;
    justify-content: space-evenly;
  }
  @media (max-width: 700px) {
    width: 100%;
    box-sizing: border-box;
  }
`;

export const UserAvatar = styled.div`
  width: 38px;
  height: 38px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  background: #c29e70;
  color: #653007;

  font-size: 0.95rem;
  font-weight: 800;

  flex-shrink: 0;
`;

export const UserDetails = styled.div`
  min-width: 0;

  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const UserName = styled.strong`
  max-width: 150px;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  font-size: 0.82rem;
  color: #fff5e8;
`;

export const UserEmail = styled.span`
  max-width: 180px;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  font-size: 0.7rem;
  opacity: 0.6;
`;

export const LogoutButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;

  height: 34px;
  padding: 0 11px;

  border: 1px solid rgba(244, 233, 216, 0.2);
  border-radius: 8px;

  background: rgba(101, 48, 7, 0.35);

  color: #f4e9d8;

  font-family: inherit;
  font-size: 0.72rem;
  font-weight: 600;

  cursor: pointer;

  transition:
    background 0.2s ease,
    transform 0.2s ease;

  &:hover {
    background: rgba(101, 48, 7, 0.65);
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }

  svg {
    font-size: 0.72rem;
  }

  @media (max-width: 450px) {
    span {
      display: none;
    }

    width: 34px;
    padding: 0;
  }
`;

/* =====================================================
   INTRO
===================================================== */

export const Intro = styled.section`
  width: 88%;
  max-width: 1250px;

  margin-top: 22px;

  @media (max-width: 900px) {
    width: 92%;
  }

  @media (max-width: 600px) {
    width: calc(100% - 24px);
    margin-top: 18px;
  }
`;

export const IntroTitle = styled.h2`
  margin: 0;

  color: #653007;

  font-size: 1.15rem;
  font-weight: 700;
`;

export const IntroText = styled.p`
  margin: 4px 0 0;

  color: #653007;

  font-size: 0.78rem;
  opacity: 0.62;
`;

/* =====================================================
   QUICK ACTIONS
===================================================== */

export const QuickActions = styled.section`
  width: 88%;
  max-width: 1250px;

  display: grid;
  grid-template-columns: repeat(4, 1fr);

  gap: 12px;

  margin-top: 13px;

  @media (max-width: 1050px) {
    width: 92%;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    width: calc(100% - 24px);
    grid-template-columns: repeat(2, 1fr);
    gap: 9px;
  }

  @media (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`;

export const ActionItem = styled.article`
  position: relative;

  min-height: 126px;

  padding: 17px;

  box-sizing: border-box;

  display: flex;
  gap: 13px;

  background: rgba(115, 77, 44, 0.08);

  border: 1px solid rgba(115, 77, 44, 0.12);
  border-radius: 12px;

  transition:
    transform 0.2s ease,
    background 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);

    background: rgba(115, 77, 44, 0.13);

    box-shadow: 0 7px 18px rgba(101, 48, 7, 0.07);
  }

  @media (max-width: 600px) {
    min-height: 118px;
    padding: 14px;
    gap: 10px;
  }
`;

export const ActionIcon = styled.div`
  width: 38px;
  height: 38px;

  display: flex;
  align-items: center;
  justify-content: center;

  flex-shrink: 0;

  border-radius: 9px;

  background: #c29e70;
  color: #653007;

  svg {
    font-size: 0.95rem;
  }

  @media (max-width: 600px) {
    width: 33px;
    height: 33px;

    border-radius: 8px;

    svg {
      font-size: 0.8rem;
    }
  }
`;

export const ActionContent = styled.div`
  min-width: 0;

  display: flex;
  flex-direction: column;
`;

export const ActionNumber = styled.span`
  margin-bottom: 2px;

  color: #653007;

  font-size: 0.62rem;
  font-weight: 800;

  opacity: 0.45;
`;

export const ActionTitle = styled.h3`
  margin: 0;

  color: #653007;

  font-size: 0.9rem;
  line-height: 1.25;
`;

export const ActionDescription = styled.p`
  margin: 5px 0 0;

  color: #653007;

  font-size: 0.72rem;
  line-height: 1.4;

  opacity: 0.62;
`;

/* =====================================================
   WORKFLOW
===================================================== */

export const Workflow = styled.section`
  width: 88%;
  max-width: 1250px;

  margin-top: 20px;
  padding: 18px 20px;

  box-sizing: border-box;

  background: rgba(194, 158, 112, 0.15);

  border-radius: 12px;

  @media (max-width: 900px) {
    width: 92%;
  }

  @media (max-width: 600px) {
    width: calc(100% - 24px);

    margin-top: 16px;

    padding: 15px;
  }
`;

export const WorkflowHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 15px;
`;

export const WorkflowTitle = styled.h2`
  margin: 0;

  color: #653007;

  font-size: 0.95rem;
`;

export const WorkflowDescription = styled.p`
  margin: 3px 0 0;

  color: #653007;

  font-size: 0.7rem;

  opacity: 0.58;
`;

export const WorkflowSteps = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 16px;

  @media (max-width: 800px) {
    gap: 9px;
  }

  @media (max-width: 600px) {
    flex-direction: column;

    gap: 5px;
  }
`;

export const WorkflowStep = styled.div`
  display: flex;
  align-items: center;

  gap: 7px;

  color: #653007;

  font-size: 0.76rem;
  font-weight: 700;

  white-space: nowrap;

  @media (max-width: 600px) {
    width: 100%;

    justify-content: center;

    padding: 6px;
  }
`;

export const WorkflowIcon = styled.div`
  width: 28px;
  height: 28px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  background: rgba(194, 158, 112, 0.65);

  color: #653007;

  svg {
    font-size: 0.72rem;
  }
`;

export const WorkflowArrow = styled.div`
  display: flex;
  align-items: center;

  color: #653007;

  opacity: 0.35;

  svg {
    font-size: 0.7rem;
  }

  @media (max-width: 600px) {
    transform: rotate(90deg);
  }
`;

/* =====================================================
   TIP
===================================================== */

export const Tip = styled.div`
  width: 88%;
  max-width: 1250px;

  margin-top: 14px;
  margin-bottom: 8px;

  display: flex;
  align-items: center;

  gap: 9px;

  box-sizing: border-box;

  color: #653007;

  span {
    font-size: 1rem;
  }

  strong {
    display: block;

    margin-bottom: 1px;

    font-size: 0.7rem;
  }

  p {
    margin: 0;

    font-size: 0.68rem;

    opacity: 0.58;
  }

  @media (max-width: 900px) {
    width: 92%;
  }

  @media (max-width: 600px) {
    width: calc(100% - 24px);

    align-items: flex-start;

    margin-top: 12px;
  }
`;

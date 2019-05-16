import styled from "styled-components";
import { Card } from "antd";

export const StyledCard = styled(Card)`
  margin: 5px;
  border: none;
  box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  .ant-card-body {
    padding: 18px;
  }
`;

export const ErrorMessageDiv = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
import styled from "styled-components";
import { Colors } from "../../../theme/colors";

export const FormWrapper = styled.div`
  width: 100%;
  max-width: 590px;
  label {
    color: #f5f5f6;
    font-size: 16px;
    padding-bottom: 8px;
  }
  input {
    color: ${Colors.gray_600};
    height: 40px;
    padding: 12px;
    border-radius: 4px;
  }
  input::placeholder {
    color: ${Colors.gray_300};
    padding: 0 0 0 5px;
  }
  input::focus {
    outline: none;
  }
  textarea {
    border: 1px solid #ccccd1;
    border-radius: 4px;
    resize: none;
    overflow: auto;
  }
`;

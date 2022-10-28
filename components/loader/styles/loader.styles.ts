import styled from 'styled-components'
import { Colors } from '../../../theme/colors'

export const LoaderWrapper=styled.div`

  border: 5px solid ${Colors.primary}; 
  border-top: 5px solid ${Colors.primary_blue_50}; 
  border-radius: 50%;
  width: 24px;
  height: 24px;
  animation: spin .6s linear infinite;

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

`
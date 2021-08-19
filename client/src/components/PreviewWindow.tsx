import styled from 'styled-components';

const PreviewWrapper = styled.div`
  height: 100%;
  grid-column: 3;
  grid-row: 2;
  iframe {
    width: 100%;
    height: 100%;
  }
`;
const PreviewWindow = () => {
  return (
    <PreviewWrapper>
      <iframe src='https://dakotahg.dev' title='preview'></iframe>
    </PreviewWrapper>
  );
};

export default PreviewWindow;

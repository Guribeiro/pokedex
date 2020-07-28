import styled from 'styled-components';

const Container = styled.section`

    border: 1px solid gray;
    max-width: 1200px;
	background: #fff;
	border-radius: 4px;
	box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
	margin: 80px auto;
    padding: 30px;
    
	h1{
		display: flex;
		align-items: center;
        font-size: 20px;
        
		svg{
			margin-right: 10px;
		}
	}

`;

export default Container;
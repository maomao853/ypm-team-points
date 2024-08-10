import Logo from '../../public/ypm-logo.svg?react';

export function Banner() {
  return(
    <div style={divStyle}>
        <Logo style={logoStyle} />
        <p style={textStyle}>Team Points</p>
    </div>
  );
}

const divStyle = {
  backgroundColor: '#001b56',
  maxWidth: '100%',
  height: '64px',
  margin: '8px',
  display: 'flex',
}

const logoStyle = {
  color: 'white',
  height: '100%',
  width: 'fit-content',
  padding: '8px',
  alignSelf: 'center',
}

const textStyle = {
  color: 'white',
  alignSelf: 'center',
  margin: '0',
  marginLeft: '4px',
  fontFamily: 'Montserrat',
  fontSize: '20px',
  fontWeight: 'bold',
}
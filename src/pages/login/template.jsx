import { CookieUtil } from '@/src/utils';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { BASE_API_URL } from '@/src/utils/api';

const { default: Styled } = require('./template.styled');

const Login = () => {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (event) => {
    if (event.target.name == 'username') setUsername(event.target.value);
    else setPassword(event.target.value);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const [disabled, setDisabled] = useState(false);

  const handleClick = () => {
    toast.loading('Please Wait', { id: 'login' });
    setDisabled(true);
    fetch(`${BASE_API_URL}/auth/login`, {
      method: 'POST',
      body: JSON.stringify({
        username,
        password,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.jwt) {
          CookieUtil.setCookie('FriennlyUser', res.jwt);
          toast.success('Login Successful', { id: 'login' });
          router.push('/');
        } else {
          toast.error('Login Failed, Please check your username / password', {
            id: 'login',
          });
          setDisabled(false);
        }
      });
  };

  return (
    <Styled.Container>
      <Styled.Logo
        onClick={() => {
          router.push('/');
        }}>
        Friennly
      </Styled.Logo>
      <img src="/images/LoginPage.png" width="50%" alt="Image" />
      <Styled.MainContainer>
        <Styled.TextContainer>
          <Styled.SignInTitle>Sign In</Styled.SignInTitle>
          <Styled.SignInText>
            blah blah blah blah blah blah blah blah blah blah blah blah blah
            blah blah blah
          </Styled.SignInText>
        </Styled.TextContainer>
        <Styled.InputBoxes>
          <Styled.InputBoxContainer>
            <Styled.Input.InputLabel>Username</Styled.Input.InputLabel>
            <Styled.Input.BoxContainer>
              <Styled.Input.InputContainer>
                <Styled.Input.InputField
                  type="text"
                  placeholder="Enter your username"
                  name="username"
                  value={username}
                  onChange={handleChange}
                />
              </Styled.Input.InputContainer>
            </Styled.Input.BoxContainer>
          </Styled.InputBoxContainer>
          <Styled.InputBoxContainer>
            <Styled.Input.InputLabel>Password</Styled.Input.InputLabel>
            <Styled.Input.BoxContainer>
              <Styled.Input.InputContainer>
                <Styled.Input.InputField
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="Enter your Password"
                  value={password}
                  onChange={handleChange}
                />
                {!showPassword && (
                  <Styled.Input.ShowPassword onClick={toggleShowPassword}>
                    <img
                      src="/images/HideShowPassword.png"
                      height={'21px'}
                      width={'21px'}
                      alt="hide"
                    />
                  </Styled.Input.ShowPassword>
                )}

                {showPassword && (
                  <Styled.Input.ShowPassword onClick={toggleShowPassword}>
                    <img
                      src="/images/ShowPassword.png"
                      height={'21px'}
                      width={'21px'}
                      alt="show"
                    />
                  </Styled.Input.ShowPassword>
                )}
              </Styled.Input.InputContainer>
            </Styled.Input.BoxContainer>
          </Styled.InputBoxContainer>
        </Styled.InputBoxes>
        <Styled.LoginButtonContainer>
          <Styled.LoginButton onClick={handleClick} disabled={disabled}>
            Login
          </Styled.LoginButton>
          <Styled.LoginText>
            Don’t have an account?{' '}
            <span
              style={{
                color: disabled ? '#27114f' : '#5627B0',
                cursor: disabled ? 'not-allowed' : 'pointer',
              }}
              onClick={() => {
                if (!disabled) router.push('/register');
              }}>
              Register here
            </span>
          </Styled.LoginText>
        </Styled.LoginButtonContainer>
      </Styled.MainContainer>
    </Styled.Container>
  );
};

export default Login;

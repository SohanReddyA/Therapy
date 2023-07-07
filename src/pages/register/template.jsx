import { CookieUtil } from '@/src/utils';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { BASE_API_URL } from '@/src/utils/api';

const { default: Styled } = require('./template.styled');

const Register = () => {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const handleChange = (event) => {
    if (event.target.name == 'username') setUsername(event.target.value);
    else if (event.target.name == 'password') setPassword(event.target.value);
    else if (event.target.name == 'email') setEmail(event.target.value);
    else setConfirmPassword(event.target.value);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const validateEmail = (email) => {
    // Regular expression pattern for email validation
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailPattern.test(email);
  };

  // const validatePassword = (password) => {
  //   // Regular expression pattern for password validation
  //   const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  //   return passwordPattern.test(password);
  // };

  const handleClick = () => {
    if (!email) toast.error('Enter your email');
    else if (!username) toast.error('Enter a username');
    else if (!password) toast.error('Enter a password');
    else if (!validateEmail(email)) {
      toast.error('Enter a valid Email');
    } else if (password != confirmPassword) {
      toast.error('Passwords do not match');
    } else {
      toast.loading('Please Wait', { id: 'signup' });
      setDisabled(true);
      fetch(`${BASE_API_URL}/auth/signup`, {
        method: 'POST',
        body: JSON.stringify({
          username,
          password,
          email,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.error) {
            if (res.error.includes('username already exists')) {
              toast.error('Username already exists', { id: 'signup' });
            } else if (
              res.error.includes('email already used with a different account')
            ) {
              toast.error('Email already in use', { id: 'signup' });
            }
            setDisabled(false);
          } else if (res.jwt) {
            CookieUtil.setCookie('FriennlyUser', res.jwt);
            toast.success('Signup Successful', { id: 'signup' });
            router.push('/');
          }
        });
    }
  };

  return (
    <Styled.Container>
      <Styled.Logo
        onClick={() => {
          router.push('/');
        }}>
        Friennly
      </Styled.Logo>
      <img
        src="/images/LoginPage.png"
        width="50%"
        height={'100vh !important'}
        alt="Image"
      />
      <Styled.MainContainer>
        <Styled.TextContainer>
          <Styled.SignInTitle>Sign Up</Styled.SignInTitle>
          <Styled.SignInText>
            blah blah blah blah blah blah blah blah blah blah blah blah blah
            blah blah blah
          </Styled.SignInText>
        </Styled.TextContainer>
        <Styled.InputBoxes>
          <Styled.InputBoxContainer>
            <Styled.Input.InputLabel>Email</Styled.Input.InputLabel>
            <Styled.Input.BoxContainer>
              <Styled.Input.InputContainer>
                <Styled.Input.InputField
                  type="email"
                  placeholder="Enter your email/phone number"
                  name="email"
                  value={email}
                  onChange={handleChange}
                />
              </Styled.Input.InputContainer>
            </Styled.Input.BoxContainer>
          </Styled.InputBoxContainer>
          <Styled.InputBoxContainer>
            <Styled.Input.InputLabel>Username</Styled.Input.InputLabel>
            <Styled.Input.BoxContainer>
              <Styled.Input.InputContainer>
                <Styled.Input.InputField
                  type="text"
                  placeholder="Enter a username"
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
                      alt="hide"
                    />
                  </Styled.Input.ShowPassword>
                )}
              </Styled.Input.InputContainer>
            </Styled.Input.BoxContainer>
          </Styled.InputBoxContainer>
          <Styled.InputBoxContainer>
            <Styled.Input.InputLabel>Confirm Password</Styled.Input.InputLabel>
            <Styled.Input.BoxContainer>
              <Styled.Input.InputContainer>
                <Styled.Input.InputField
                  type={showConfirmPassword ? 'text' : 'password'}
                  name="confirm password"
                  placeholder="Enter your Password"
                  value={confirmPassword}
                  onChange={handleChange}
                />
                {!showConfirmPassword && (
                  <Styled.Input.ShowPassword
                    onClick={toggleShowConfirmPassword}>
                    <img
                      src="/images/HideShowPassword.png"
                      height={'21px'}
                      width={'21px'}
                      alt="hide"
                    />
                  </Styled.Input.ShowPassword>
                )}
                {showConfirmPassword && (
                  <Styled.Input.ShowPassword
                    onClick={toggleShowConfirmPassword}>
                    <img
                      src="/images/ShowPassword.png"
                      height={'21px'}
                      width={'21px'}
                      alt="hide"
                    />
                  </Styled.Input.ShowPassword>
                )}
              </Styled.Input.InputContainer>
            </Styled.Input.BoxContainer>
          </Styled.InputBoxContainer>
        </Styled.InputBoxes>
        <Styled.LoginButtonContainer>
          <Styled.LoginButton onClick={handleClick} disabled={disabled}>
            Register
          </Styled.LoginButton>
          <Styled.LoginText>
            Already have an account?{' '}
            <span
              style={{
                color: disabled ? '#27114f' : '#5627B0',
                cursor: disabled ? 'not-allowed' : 'pointer',
              }}
              onClick={() => {
                if (!disabled) router.push('/register');
              }}>
              Login here
            </span>
          </Styled.LoginText>
        </Styled.LoginButtonContainer>
      </Styled.MainContainer>
    </Styled.Container>
  );
};

export default Register;

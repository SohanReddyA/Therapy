const getCurrentEnvironment = () => {
  return process.env.NODE_ENV || 'development';
};

export default getCurrentEnvironment;

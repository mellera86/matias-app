export const INCREMENT = 'INCREMENT';
export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';

export const increment = (nmb) => {
  return {
    type: INCREMENT,
    payload: {
      nmb: nmb
    }
  }
}

export const login = () => {
  return {
    type: LOG_IN
  }
}

export const logout = () => {
  return {
    type: LOG_OUT
  }
}

import jwt from 'jsonwebtoken';

// validate the token
export function validateToken(token, secret) {
  try {
    // jwt.verify checks the validity of the token and decodes it
    const decoded = jwt.verify(token, secret);
    return decoded;
  } catch (err) {
    throw new Error('Invalid or expired token');
  }
}

// This function should receive user object and a secret, and return a JWT if credentials are valid
export function generateToken(user, secret) {
  // You should validate the user credentials before calling this function!
  // For demonstration, we assume user is already validated and contains id, name, and role
  const payload = { sub: user.id, username: user.name, role: user.role };
  const access_token = jwt.sign(payload, secret, { expiresIn: '1h' });
  return { access_token };
}
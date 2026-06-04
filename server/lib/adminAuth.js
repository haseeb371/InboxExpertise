import { jwtVerify } from 'jose';

const secret = () => new TextEncoder().encode(process.env.JWT_SECRET || 'your-secret-key');

export async function verifyAdmin(req, res, next) {
  const token = req.cookies['admin-token'];

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    await jwtVerify(token, secret());
    next();
  } catch {
    return res.status(401).json({ error: 'Invalid token' });
  }
}

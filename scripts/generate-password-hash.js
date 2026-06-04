import bcrypt from 'bcryptjs';

const password = process.argv[2];

if (!password) {
  console.error('Error: Please provide a password as argument');
  console.log('Usage: npm run hash-password -- YourPasswordHere');
  process.exit(1);
}

try {
  const hash = await bcrypt.hash(password, 10);
  const escapedHash = hash.replace(/\$/g, '\\$');

  console.log('\nPassword hash generated successfully!\n');
  console.log(`ADMIN_PASSWORD_HASH=${escapedHash}`);
  console.log('\nFull .env.local template:');
  console.log('---');
  console.log('ADMIN_EMAIL=admin@inboxexpertise.local');
  console.log(`ADMIN_PASSWORD_HASH=${escapedHash}`);
  console.log('JWT_SECRET=your_jwt_secret_key');
  console.log('MONGODB_URI=your_mongodb_connection_string');
  console.log('API_PORT=4000');
  console.log('---\n');
} catch (error) {
  console.error('Error generating hash:', error);
  process.exit(1);
}

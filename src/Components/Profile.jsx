export default function Profile({ name, email, age }) {
  return (
    <>
      <h1>Profile</h1>
      <h3>Name: {name}</h3>
      <h5>Email: {email}</h5>
      <h5>Age: {age} years</h5>
    </>
  );
}

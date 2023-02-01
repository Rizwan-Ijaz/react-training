export default function Degree({degreetitle, degreetotalcgpa, degreeyourcgpa, degreecompletionyear }) {
  return (
    <>
      <h1>Degree Details</h1>
      <h3>Degree Title: {degreetitle}</h3>
      <h5>Degree Total CGPA: {degreetotalcgpa}</h5>
      <h5>Degree Your CGPA: {degreeyourcgpa}</h5>
      <h5>Degree Completion Year: {degreecompletionyear} </h5>
    </>
  );
}

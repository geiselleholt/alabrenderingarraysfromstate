import Score from "./Score";

export default function Learner({ name, bio, scores }) {
  let scoreList = scores.map((el, i) => {
    return <Score key={i} {...el} />;
  });

  return (
    <div>
      <h2>{name}</h2>
      <h3>{bio}</h3>
      <ul>{scoreList}</ul>
    </div>
  );
}

export const BlogCard = ({ name, avatar, poster, tag, title, description }) => {
  return (
    <div>
      
      <h2>name {name}</h2>
      <img src={avatar} alt={name} />
      <p>tag{tag}</p>
      <img src={poster} alt={tag} />
      <p>title {title}</p>
      <p>description {description}</p>
    </div>
  );
};

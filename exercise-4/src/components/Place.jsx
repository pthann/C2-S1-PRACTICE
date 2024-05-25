export default function Place({title,src, alt}) {
  return (
    <li key="the place id" className="place-item">
      <button>
        <img src={src} alt={alt} />
        <h3>{title}</h3>
      </button>
    </li>
  );
}

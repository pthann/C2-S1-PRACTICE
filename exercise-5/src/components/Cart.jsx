export default function Cart({cart}) {
    return (
        <div class="card">
          <h4>{cart.name}</h4>
          <small>{cart.title}</small>
          <p>
            {cart.description}
          </p>
          <img src={cart.image.src} alt={cart.image.alt} />
        </div>
    );
  }
  
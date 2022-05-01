import { fireEvent, render, screen } from '@testing-library/react';
import App from '../App';
import productsList from '../components/products.json';
import IProduct from '../components/IProduct';
import ProductCard from '../components/ProductCard';

describe('App component', () => {
  test('it renders home page and checks if products are rendered', () => {
    const addItemToCart = () => { };
    let products = productsList as IProduct[];
    let element = products.map((product: IProduct) => (
      <div className='col-md-3 mt-4' key={product.id}>
        <ProductCard product={product} addToCart={addItemToCart} />
      </div>
    ));
    render(<App />);
    expect(element).toBeTruthy();
  });

  test('checks addtocart button', () => {
    render(<App />);
    const buttons = screen.getAllByText('Add to Cart');
    buttons.forEach(button => {
      expect(fireEvent.click(button)).toBe(true);
    });
  });
})

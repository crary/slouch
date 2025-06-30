import React from 'react';
import { Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: 'Posture Corrector Brace',
    description: 'Adjustable posture corrector for upper back support.',
    price: 29.99,
    imageUrl: 'https://images.pexels.com/photos/6457574/pexels-photo-6457574.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    affiliateLink: 'https://www.amazon.com/dp/B08J24995H?th=1&psc=1',
  },
  {
    id: 2,
    name: 'Lumbar Support Pillow',
    description: 'Ergonomic lumbar support pillow for office chairs.',
    price: 24.99,
    imageUrl: 'https://images.pexels.com/photos/4946601/pexels-photo-4946601.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    affiliateLink: 'https://www.amazon.com/Everlasting-Comfort-Pillow-Office-Chair/dp/B01EBDV7RM',
  },
  {
    id: 3,
    name: 'Standing Desk Converter',
    description: 'Adjustable standing desk converter for ergonomic workspace.',
    price: 149.99,
    imageUrl: 'https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    affiliateLink: 'https://www.amazon.com/VIVO-Adjustable-Converter-Workstation-DESK-V000E/dp/B0733F9R3R',
  },
  {
    id: 4,
    name: 'Ergonomic Chair',
    description: 'Ergonomic office chair with adjustable height and lumbar support.',
    price: 299.99,
    imageUrl: 'https://images.pexels.com/photos/3757055/pexels-photo-3757055.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    affiliateLink: 'https://www.amazon.com/Ergonomic-Computer-Adjustable-Executive-High-Back/dp/B07Y1RQZ28',
  },
  {
    id: 5,
    name: 'Foam Roller',
    description: 'High-density foam roller for muscle recovery and posture alignment.',
    price: 19.99,
    imageUrl: 'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    affiliateLink: 'https://www.amazon.com/AmazonBasics-High-Density-Round-Foam-Roller/dp/B00VFKN0VU',
  },
  {
    id: 6,
    name: 'Upright GO 2',
    description: 'A small device that sticks to your upper back and vibrates when you slouch.',
    price: 79.99,
    imageUrl: 'https://m.media-amazon.com/images/I/31jJk9WnGuL._AC_UF400,400_QL80_.jpg',
    affiliateLink: 'https://www.amazon.com/dp/B07XD32DDM',
  },
  {
    id: 7,
    name: 'BetterBack Posture Support Belt',
    description: 'A posture support belt that wraps around your knees and back to encourage better posture.',
    price: 59.99,
    imageUrl: 'https://m.media-amazon.com/images/I/41KR0J44xiL._AC_UF400,400_QL80_.jpg',
    affiliateLink: 'https://www.amazon.com/dp/B01NAW8E78',
  },
  {
    id: 8,
    name: 'AlignBack Straightener',
    description: 'An adjustable posture corrector designed to straighten your back and align your spine.',
    price: 39.99,
    imageUrl: 'https://m.media-amazon.com/images/I/41fJt-TKjKL._AC_UF400,400_QL80_.jpg',
    affiliateLink: 'https://www.amazon.com/back-alignment-brace/s?k=back+alignment+brace',
  },
  {
    id: 9,
    name: 'Evoke Pro A300',
    description: 'A posture corrector with a smart sensor that vibrates to remind you to sit up straight.',
    price: 99.99,
    imageUrl: 'https://m.media-amazon.com/images/I/41NZxEuKjDL._AC_UF400,400_QL80_.jpg',
    affiliateLink: 'https://www.amazon.com/dp/B08J24995H',
  },
  {
    id: 10,
    name: 'BackEmbrace',
    description: 'A posture support that gently pulls your shoulders back to improve posture.',
    price: 49.99,
    imageUrl: 'https://m.media-amazon.com/images/I/319PGbh5WJL._AC_UF400,400_QL80_.jpg',
    affiliateLink: 'https://www.amazon.com/dp/B07XD32DDM',
  },
];

function Products() {
  return (
    <div className="container mx-auto px-6 py-8">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
              <p className="text-gray-700 leading-relaxed">{product.description}</p>
              <p className="text-lg font-semibold text-gray-800 mt-2">${product.price.toFixed(2)}</p>
              <Link to={`/products/${product.id}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 inline-block">
                View Details
              </Link>
              <a href={product.affiliateLink} target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4 inline-block ml-2">
                View on Amazon
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;

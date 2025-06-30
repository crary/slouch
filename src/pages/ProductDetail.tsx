import React from 'react';
import { useParams } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: 'Posture Corrector Brace',
    description: 'The Posture Corrector Brace is designed to provide support to your upper back and shoulders, helping to align your spine and improve your posture. Made from high-quality, breathable materials, this brace is comfortable to wear under or over your clothing. It features adjustable straps to ensure a perfect fit for all body types. Regular use of this brace can help reduce slouching, alleviate back pain, and boost your overall confidence.',
    price: 29.99,
    imageUrl: 'https://images.pexels.com/photos/6457574/pexels-photo-6457574.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    imageUrls: [
      'https://images.pexels.com/photos/6457574/pexels-photo-6457574.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      'https://images.pexels.com/photos/6457571/pexels-photo-6457571.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      'https://images.pexels.com/photos/6457568/pexels-photo-6457568.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      'https://images.pexels.com/photos/6457566/pexels-photo-6457566.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    ],
    affiliateLink: 'https://www.amazon.com/dp/B08J24995H?th=1&psc=1',
  },
  {
    id: 2,
    name: 'Lumbar Support Pillow',
    description: 'The Lumbar Support Pillow is an ergonomic pillow designed to provide optimal support to your lower back while sitting. Ideal for use in office chairs, car seats, or even at home, this pillow helps maintain the natural curve of your spine, reducing strain and discomfort. Made from high-density memory foam, it conforms to your body shape and provides long-lasting support. The breathable mesh cover ensures proper ventilation, keeping you cool and comfortable throughout the day.',
    price: 24.99,
    imageUrl: 'https://images.pexels.com/photos/4946601/pexels-photo-4946601.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    imageUrls: [
      'https://images.pexels.com/photos/4946601/pexels-photo-4946601.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      'https://images.pexels.com/photos/4946598/pexels-photo-4946598.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      'https://images.pexels.com/photos/4946597/pexels-photo-4946597.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      'https://images.pexels.com/photos/4946594/pexels-photo-4946594.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    ],
    affiliateLink: 'https://www.amazon.com/Everlasting-Comfort-Pillow-Office-Chair/dp/B01EBDV7RM',
  },
  {
    id: 3,
    name: 'Standing Desk Converter',
    description: 'The Standing Desk Converter is an adjustable workstation that allows you to easily switch between sitting and standing positions. This converter sits on top of your existing desk and provides a stable and ergonomic platform for your monitor, keyboard, and mouse. It features a smooth and quiet lifting mechanism, allowing you to adjust the height with ease. By using a standing desk converter, you can reduce sedentary behavior, improve your posture, and increase your energy levels throughout the day.',
    price: 149.99,
    imageUrl: 'https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    imageUrls: [
      'https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      'https://images.pexels.com/photos/712512/pexels-photo-712512.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      'https://images.pexels.com/photos/712511/pexels-photo-712511.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      'https://images.pexels.com/photos/712509/pexels-photo-712509.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    ],
    affiliateLink: 'https://www.amazon.com/VIVO-Adjustable-Converter-Workstation-DESK-V000E/dp/B0733F9R3R',
  },
  {
    id: 4,
    name: 'Ergonomic Chair',
    description: 'The Ergonomic Chair is designed to provide maximum comfort and support for long hours of sitting. This chair features adjustable height, lumbar support, and armrests, allowing you to customize the fit to your body. The breathable mesh back keeps you cool and comfortable, while the padded seat provides cushioning for extended periods. By using an ergonomic chair, you can reduce the risk of back pain, neck pain, and other posture-related issues.',
    price: 299.99,
    imageUrl: 'https://images.pexels.com/photos/3757055/pexels-photo-3757055.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    imageUrls: [
      'https://images.pexels.com/photos/3757055/pexels-photo-3757055.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      'https://images.pexels.com/photos/3757056/pexels-photo-3757056.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      'https://images.pexels.com/photos/3757053/pexels-photo-3757053.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      'https://images.pexels.com/photos/3757052/pexels-photo-3757052.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    ],
    affiliateLink: 'https://www.amazon.com/Ergonomic-Computer-Adjustable-Executive-High-Back/dp/B07Y1RQZ28',
  },
  {
    id: 5,
    name: 'Foam Roller',
    description: 'The High-Density Foam Roller is a versatile tool for muscle recovery and posture alignment. This foam roller can be used to massage sore muscles, release tension, and improve flexibility. It is particularly effective for targeting the muscles in your back, shoulders, and legs. Regular use of a foam roller can help improve your posture, reduce muscle pain, and enhance your overall well-being.',
    price: 19.99,
    imageUrl: 'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    imageUrls: [
      'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      'https://images.pexels.com/photos/3822621/pexels-photo-3822621.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      'https://images.pexels.com/photos/3822619/pexels-photo-3822619.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      'https://images.pexels.com/photos/3822618/pexels-photo-3822618.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    ],
    affiliateLink: 'https://www.amazon.com/AmazonBasics-High-Density-Round-Foam-Roller/dp/B00VFKN0VU',
  },
];

function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id || '', 10));

  if (!product) {
    return <div className="container mx-auto px-6 py-8">Product not found</div>;
  }

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img src={product.imageUrl} alt={product.name} className="w-full h-64 object-cover mb-4" />
        <div className="flex overflow-x-auto mb-4">
          {product.imageUrls.map((url, index) => (
            <img key={index} src={url} alt={`${product.name} preview ${index + 1}`} className="w-40 h-40 object-cover mr-2 rounded-lg" />
          ))}
        </div>
        <div className="p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">{product.name}</h2>
          <p className="text-gray-700 leading-relaxed mb-4">{product.description}</p>
          <p className="text-lg font-semibold text-gray-800 mb-4">${product.price.toFixed(2)}</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;

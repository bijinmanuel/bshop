import { Product } from '@/types/product';

// export const products: Product[] = [
//     {
//         id: '1',
//         name: 'Premium Wireless Headphones',
//         slug: 'premium-wireless-headphones',
//         description: 'High-quality wireless headphones with noise cancellation and premium sound quality. Perfect for music lovers and professionals.',
//         price: 299.99,
//         originalPrice: 399.99,
//         category: 'Electronics',
//         image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=500',
//         images: [
//             'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800',
//             'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=800'
//         ],
//         inStock: true,
//         featured: true,
//         rating: 4.8,
//         reviewCount: 142,
//         specifications: {
//             'Battery Life': '30 hours',
//             'Connectivity': 'Bluetooth 5.0',
//             'Weight': '250g',
//             'Color': 'Black'
//         },
//         tags: ['wireless', 'noise-cancelling', 'premium', 'electronics']
//     },
//     {
//         id: '2',
//         name: 'Smart Fitness Watch',
//         slug: 'smart-fitness-watch',
//         description: 'Advanced fitness tracking watch with heart rate monitoring, GPS, and smartphone integration.',
//         price: 199.99,
//         category: 'Wearables',
//         image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=500',
//         images: [
//             'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=800',
//             'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=800'
//         ],
//         inStock: true,
//         featured: true,
//         rating: 4.6,
//         reviewCount: 89,
//         specifications: {
//             'Display': '1.4" AMOLED',
//             'Battery Life': '7 days',
//             'Water Resistance': '5ATM',
//             'GPS': 'Built-in'
//         },
//         tags: ['fitness', 'smartwatch', 'gps', 'health']
//     },
//     {
//         id: '3',
//         name: 'Professional Camera Lens',
//         slug: 'professional-camera-lens',
//         description: 'High-performance 50mm prime lens for professional photography with exceptional clarity and bokeh.',
//         price: 899.99,
//         category: 'Photography',
//         image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=500',
//         images: [
//             'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=800',
//             'https://images.pexels.com/photos/191429/pexels-photo-191429.jpeg?auto=compress&cs=tinysrgb&w=800'
//         ],
//         inStock: true,
//         featured: false,
//         rating: 4.9,
//         reviewCount: 67,
//         specifications: {
//             'Focal Length': '50mm',
//             'Aperture': 'f/1.4',
//             'Mount': 'Canon EF',
//             'Weight': '680g'
//         },
//         tags: ['photography', 'lens', 'professional', 'portrait']
//     },
//     {
//         id: '4',
//         name: 'Ergonomic Office Chair',
//         slug: 'ergonomic-office-chair',
//         description: 'Premium ergonomic office chair with lumbar support and adjustable features for all-day comfort.',
//         price: 449.99,
//         originalPrice: 599.99,
//         category: 'Furniture',
//         image: 'https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?auto=compress&cs=tinysrgb&w=500',
//         images: [
//             'https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?auto=compress&cs=tinysrgb&w=800'
//         ],
//         inStock: true,
//         featured: true,
//         rating: 4.7,
//         reviewCount: 203,
//         specifications: {
//             'Material': 'Mesh & Leather',
//             'Max Weight': '120kg',
//             'Warranty': '5 years',
//             'Adjustability': 'Height, Tilt, Arms'
//         },
//         tags: ['office', 'ergonomic', 'furniture', 'comfort']
//     },
//     {
//         id: '5',
//         name: 'Mechanical Gaming Keyboard',
//         slug: 'mechanical-gaming-keyboard',
//         description: 'RGB mechanical gaming keyboard with customizable switches and programmable keys.',
//         price: 159.99,
//         category: 'Gaming',
//         image: 'https://images.pexels.com/photos/1194713/pexels-photo-1194713.jpeg?auto=compress&cs=tinysrgb&w=500',
//         images: [
//             'https://images.pexels.com/photos/1194713/pexels-photo-1194713.jpeg?auto=compress&cs=tinysrgb&w=800'
//         ],
//         inStock: true,
//         featured: false,
//         rating: 4.5,
//         reviewCount: 156,
//         specifications: {
//             'Switch Type': 'Cherry MX Blue',
//             'Backlight': 'RGB',
//             'Layout': 'Full Size',
//             'Connection': 'USB-C'
//         },
//         tags: ['gaming', 'mechanical', 'rgb', 'keyboard']
//     },
//     {
//         id: '6',
//         name: 'Portable Bluetooth Speaker',
//         slug: 'portable-bluetooth-speaker',
//         description: 'Waterproof portable speaker with 360-degree sound and long battery life.',
//         price: 79.99,
//         category: 'Audio',
//         image: 'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=500',
//         images: [
//             'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=800'
//         ],
//         inStock: true,
//         featured: false,
//         rating: 4.4,
//         reviewCount: 94,
//         specifications: {
//             'Battery Life': '12 hours',
//             'Water Rating': 'IPX7',
//             'Connectivity': 'Bluetooth 5.0',
//             'Output': '20W'
//         },
//         tags: ['audio', 'portable', 'waterproof', 'bluetooth']
//     },
//     {
//         id: '7',
//         name: '4K Ultra HD Smart TV',
//         slug: '4k-ultra-hd-smart-tv',
//         description: 'Experience stunning visuals with this 55-inch 4K Ultra HD Smart TV featuring built-in streaming apps.',
//         price: 599.99,
//         originalPrice: 799.99,
//         category: 'Electronics',
//         image: 'https://images.pexels.com/photos/4009402/pexels-photo-4009402.jpeg?auto=compress&cs=tinysrgb&w=500',
//         images: [
//             'https://images.pexels.com/photos/4009402/pexels-photo-4009402.jpeg?auto=compress&cs=tinysrgb&w=800'
//         ],
//         inStock: true,
//         featured: true,
//         rating: 4.6,
//         reviewCount: 183,
//         specifications: {
//             'Screen Size': '55-inch',
//             'Resolution': '4K UHD',
//             'Smart Features': 'Yes',
//             'Connectivity': 'WiFi, HDMI, USB'
//         },
//         tags: ['tv', 'smart', '4k', 'electronics']
//     },
//     {
//         id: '8',
//         name: 'Electric Standing Desk',
//         slug: 'electric-standing-desk',
//         description: 'Adjustable height electric standing desk with memory presets and spacious work surface.',
//         price: 379.99,
//         category: 'Furniture',
//         image: 'https://images.pexels.com/photos/4064845/pexels-photo-4064845.jpeg?auto=compress&cs=tinysrgb&w=500',
//         images: [
//             'https://images.pexels.com/photos/4064845/pexels-photo-4064845.jpeg?auto=compress&cs=tinysrgb&w=800'
//         ],
//         inStock: true,
//         featured: true,
//         rating: 4.8,
//         reviewCount: 121,
//         specifications: {
//             'Height Range': '28" - 48"',
//             'Controls': 'Electric with presets',
//             'Material': 'Bamboo top, metal frame',
//             'Load Capacity': '120kg'
//         },
//         tags: ['desk', 'standing', 'furniture', 'ergonomic']
//     },
//     {
//         id: '9',
//         name: 'Noise-Cancelling Earbuds',
//         slug: 'noise-cancelling-earbuds',
//         description: 'Compact wireless earbuds with active noise cancellation and touch controls.',
//         price: 129.99,
//         category: 'Audio',
//         image: 'https://images.pexels.com/photos/3756766/pexels-photo-3756766.jpeg?auto=compress&cs=tinysrgb&w=500',
//         images: [
//             'https://images.pexels.com/photos/3756766/pexels-photo-3756766.jpeg?auto=compress&cs=tinysrgb&w=800'
//         ],
//         inStock: true,
//         featured: false,
//         rating: 4.3,
//         reviewCount: 76,
//         specifications: {
//             'Noise Cancellation': 'Active',
//             'Battery Life': '24 hours',
//             'Water Resistance': 'IPX5',
//             'Bluetooth': '5.2'
//         },
//         tags: ['earbuds', 'audio', 'wireless', 'bluetooth']
//     },
//     {
//         id: '10',
//         name: 'Smart Home Security Camera',
//         slug: 'smart-home-security-camera',
//         description: '1080p HD indoor security camera with night vision and motion detection.',
//         price: 89.99,
//         category: 'Home Security',
//         image: 'https://images.pexels.com/photos/24347621/pexels-photo-24347621.jpeg?auto=compress&cs=tinysrgb&w=500',
//         images: [
//             'https://images.pexels.com/photos/27574914/pexels-photo-27574914.jpeg?auto=compress&cs=tinysrgb&w=800',
//             'https://images.pexels.com/photos/27505236/pexels-photo-27505236.jpeg?auto=compress&cs=tinysrgb&w=800'

//         ],
//         inStock: true,
//         featured: false,
//         rating: 4.5,
//         reviewCount: 132,
//         specifications: {
//             'Resolution': '1080p',
//             'Night Vision': 'Yes',
//             'Field of View': '130°',
//             'Storage': 'Cloud & SD Card'
//         },
//         tags: ['security', 'camera', 'home', 'smart']
//     },
//     {
//         id: '11',
//         name: 'Stainless Steel Cookware Set',
//         slug: 'stainless-steel-cookware-set',
//         description: '10-piece premium stainless steel cookware set for professional cooking performance.',
//         price: 249.99,
//         category: 'Kitchen',
//         image: 'https://images.pexels.com/photos/3682218/pexels-photo-3682218.jpeg?auto=compress&cs=tinysrgb&w=500',
//         images: [
//             'https://images.pexels.com/photos/3682218/pexels-photo-3682218.jpeg?auto=compress&cs=tinysrgb&w=800',
//             'https://images.pexels.com/photos/7135968/pexels-photo-7135968.jpeg?auto=compress&cs=tinysrgb&w=800'
//         ],
//         inStock: true,
//         featured: false,
//         rating: 4.7,
//         reviewCount: 54,
//         specifications: {
//             'Material': 'Stainless Steel',
//             'Pieces': '10',
//             'Compatibility': 'Induction, Gas, Electric',
//             'Dishwasher Safe': 'Yes'
//         },
//         tags: ['cookware', 'kitchen', 'steel', 'set']
//     },
//     {
//         id: '12',
//         name: 'Compact Drone with 4K Camera',
//         slug: 'compact-drone-4k-camera',
//         description: 'Foldable drone with 4K UHD camera, GPS, and 30-minute flight time.',
//         price: 329.99,
//         category: 'Photography',
//         image: 'https://images.pexels.com/photos/9977849/pexels-photo-9977849.jpeg?auto=compress&cs=tinysrgb&w=500',
//         images: [
//             'https://images.pexels.com/photos/29438556/pexels-photo-29438556.jpeg?auto=compress&cs=tinysrgb&w=800',
//             'https://images.pexels.com/photos/16991045/pexels-photo-16991045.jpeg?auto=compress&cs=tinysrgb&w=800'
//         ],
//         inStock: true,
//         featured: true,
//         rating: 4.6,
//         reviewCount: 98,
//         specifications: {
//             'Camera': '4K UHD',
//             'Flight Time': '30 minutes',
//             'Range': '2km',
//             'GPS': 'Yes'
//         },
//         tags: ['drone', 'camera', 'photography', '4k']
//     },
//     {
//         id: '13',
//         name: 'Minimalist Wall Clock',
//         slug: 'minimalist-wall-clock',
//         description: 'Modern, silent non-ticking wall clock perfect for home or office decor.',
//         price: 49.99,
//         category: 'Home Decor',
//         image: 'https://images.pexels.com/photos/5799379/pexels-photo-5799379.jpeg?auto=compress&cs=tinysrgb&w=500',
//         images: [
//             'https://images.pexels.com/photos/19801745/pexels-photo-19801745.jpeg?auto=compress&cs=tinysrgb&w=800'
//         ],
//         inStock: true,
//         featured: false,
//         rating: 4.2,
//         reviewCount: 33,
//         specifications: {
//             'Diameter': '12 inches',
//             'Mechanism': 'Quartz',
//             'Style': 'Modern',
//             'Power': '1 AA battery'
//         },
//         tags: ['clock', 'home', 'decor', 'minimal']
//     },
//     {
//         id: '14',
//         name: 'Smart LED Light Strip',
//         slug: 'smart-led-light-strip',
//         description: 'Color-changing LED strip with app and voice control compatibility.',
//         price: 29.99,
//         category: 'Lighting',
//         image: 'https://images.pexels.com/photos/8108685/pexels-photo-8108685.jpeg?auto=compress&cs=tinysrgb&w=500',
//         images: [
//             'https://images.pexels.com/photos/8108685/pexels-photo-8108685.jpeg?auto=compress&cs=tinysrgb&w=800',
//             'https://images.pexels.com/photos/8108682/pexels-photo-8108682.jpeg?auto=compress&cs=tinysrgb&w=800'
//         ],
//         inStock: true,
//         featured: true,
//         rating: 4.6,
//         reviewCount: 210,
//         specifications: {
//             'Length': '5 meters',
//             'Colors': '16 million+',
//             'Control': 'App & Voice',
//             'Power Source': 'USB'
//         },
//         tags: ['led', 'smart', 'lighting', 'home']
//     },
//     {
//         id: '15',
//         name: 'Adjustable Dumbbell Set',
//         slug: 'adjustable-dumbbell-set',
//         description: 'Space-saving adjustable dumbbells with quick-change weight system.',
//         price: 189.99,
//         category: 'Fitness',
//         image: 'https://images.pexels.com/photos/3823039/pexels-photo-3823039.jpeg?auto=compress&cs=tinysrgb&w=500',
//         images: [
//             'https://images.pexels.com/photos/3823039/pexels-photo-3823039.jpeg?auto=compress&cs=tinysrgb&w=800'
//         ],
//         inStock: true,
//         featured: false,
//         rating: 4.4,
//         reviewCount: 65,
//         specifications: {
//             'Weight Range': '5-50 lbs',
//             'Mechanism': 'Dial adjust',
//             'Material': 'Steel & Rubber',
//             'Storage Tray': 'Included'
//         },
//         tags: ['fitness', 'dumbbell', 'adjustable', 'gym']
//     },
//     {
//         id: '16',
//         name: 'Smartphone Gimbal Stabilizer',
//         slug: 'smartphone-gimbal-stabilizer',
//         description: '3-axis gimbal for smooth mobile video recording with face tracking.',
//         price: 99.99,
//         category: 'Photography',
//         image: 'https://images.pexels.com/photos/2468812/pexels-photo-2468812.jpeg?auto=compress&cs=tinysrgb&w=500',
//         images: [
//             'https://images.pexels.com/photos/26527345/pexels-photo-26527345.jpeg?auto=compress&cs=tinysrgb&w=800',
//             'https://images.pexels.com/photos/2468812/pexels-photo-2468812.jpeg?auto=compress&cs=tinysrgb&w=800'
//         ],
//         inStock: true,
//         featured: false,
//         rating: 4.5,
//         reviewCount: 58,
//         specifications: {
//             'Axis': '3-axis',
//             'Battery Life': '12 hours',
//             'Compatibility': 'iOS/Android',
//             'Weight': '430g'
//         },
//         tags: ['gimbal', 'mobile', 'stabilizer', 'video']
//     },
//     {
//         id: '17',
//         name: 'High-Speed Blender',
//         slug: 'high-speed-blender',
//         description: 'Professional-grade blender with multiple speed settings and pulse mode.',
//         price: 149.99,
//         category: 'Kitchen',
//         image: 'https://images.pexels.com/photos/6824660/pexels-photo-6824660.jpeg?auto=compress&cs=tinysrgb&w=500',
//         images: [
//             'https://images.pexels.com/photos/6824660/pexels-photo-6824660.jpeg?auto=compress&cs=tinysrgb&w=800'
//         ],
//         inStock: true,
//         featured: true,
//         rating: 4.7,
//         reviewCount: 147,
//         specifications: {
//             'Power': '1200W',
//             'Speed Settings': '10',
//             'Jar Capacity': '2L',
//             'Blades': 'Stainless Steel'
//         },
//         tags: ['blender', 'kitchen', 'appliance', 'smoothie']
//     },
//     {
//         id: '18',
//         name: 'Wireless Charging Stand',
//         slug: 'wireless-charging-stand',
//         description: 'Fast wireless charging stand compatible with iPhone, Samsung, and other Qi-enabled devices.',
//         price: 39.99,
//         category: 'Accessories',
//         image: 'https://images.pexels.com/photos/6373127/pexels-photo-6373127.jpeg?auto=compress&cs=tinysrgb&w=500',
//         images: [
//             'https://images.pexels.com/photos/6373127/pexels-photo-6373127.jpeg?auto=compress&cs=tinysrgb&w=800'
//         ],
//         inStock: true,
//         featured: false,
//         rating: 4.4,
//         reviewCount: 77,
//         specifications: {
//             'Charging Power': '15W',
//             'Compatibility': 'Qi-enabled devices',
//             'Orientation': 'Vertical/Horizontal',
//             'LED Indicator': 'Yes'
//         },
//         tags: ['charging', 'wireless', 'accessories', 'stand']
//     },
//     {
//         id: '19',
//         name: 'Compact Air Purifier',
//         slug: 'compact-air-purifier',
//         description: 'HEPA air purifier for bedrooms and small spaces with quiet operation.',
//         price: 119.99,
//         category: 'Home Appliances',
//         image: 'https://images.pexels.com/photos/3951612/pexels-photo-3951612.jpeg?auto=compress&cs=tinysrgb&w=500',
//         images: [
//             'https://images.pexels.com/photos/3951612/pexels-photo-3951612.jpeg?auto=compress&cs=tinysrgb&w=800'
//         ],
//         inStock: true,
//         featured: true,
//         rating: 4.6,
//         reviewCount: 95,
//         specifications: {
//             'Coverage': '300 sq ft',
//             'Filter Type': 'HEPA',
//             'Noise Level': 'Low',
//             'Modes': 'Auto/Sleep'
//         },
//         tags: ['air', 'purifier', 'home', 'health']
//     },
//     {
//         id: '20',
//         name: 'Foldable Treadmill',
//         slug: 'foldable-treadmill',
//         description: 'Space-saving treadmill with LED display and multiple speed settings.',
//         price: 499.99,
//         category: 'Fitness',
//         image: 'https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=500',
//         images: [
//             'https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=800'
//         ],
//         inStock: true,
//         featured: true,
//         rating: 4.7,
//         reviewCount: 102,
//         specifications: {
//             'Max Speed': '10 mph',
//             'Display': 'LED',
//             'Foldable': 'Yes',
//             'Weight Capacity': '120kg'
//         },
//         tags: ['treadmill', 'fitness', 'gym', 'foldable']
//     }
// ];

// export function getProductBySlug(slug: string): Product | undefined {
//     return products.find(product => product.slug === slug);
// }

// export function getProductsByCategory(category: string): Product[] {
//     return products.filter(product =>
//         product.category.toLowerCase() === category.toLowerCase()
//     );
// }

// export function getFeaturedProducts(): Product[] { 
//     return products.filter(product => product.featured);
// }

// export function searchProducts(query: string): Product[] {
//     const lowercaseQuery = query.toLowerCase();
//     return products.filter(product =>
//         product.name.toLowerCase().includes(lowercaseQuery) ||
//         product.description.toLowerCase().includes(lowercaseQuery) ||
//         product.category.toLowerCase().includes(lowercaseQuery) ||
//         product.tags?.some(tag => tag.toLowerCase().includes(lowercaseQuery))
//     );
// }

// export function getCategories(): string[] {
//     return Array.from(new Set(products.map(product => product.category)));
// }
// Utility to generate placeholder images or handle missing images
export const getProductImage = (productId, brand, category) => {
  // List of available product images
  const availableImages = [
    "/images/product1.jpg",
    "/images/product2.jpg",
    "/images/product3.jpg",
    "/images/product4.jpg",
  ];

  // Cycle through available images for products beyond 4
  const imageIndex = ((productId - 1) % availableImages.length);
  return availableImages[imageIndex];
};

export const getCategoryImage = (category) => {
  const categoryImages = {
    "Men": "/images/categories/men.jpg",
    "Women": "/images/categories/women.jpg",
    "Kids": "/images/categories/kids.jpg",
    "Footwear": "/images/categories/footwear.jpg",
    "Beauty": "/images/categories/beauty.jpg",
    "Watches": "/images/categories/watches.jpg",
    "Bags": "/images/categories/bags.jpg",
    "Sports": "/images/categories/sports.jpg",
  };

  return categoryImages[category] || "/images/categories/men.jpg";
};

export const getBrandImage = (brand) => {
  const brandImages = {
    "Nike": "/images/brands/nike2.jpg",
    "Puma": "/images/brands/puma1.jpg",
    "Adidas": "/images/brands/adidas.jpg",
    "Roadster": "/images/brands/roadster.jpg",
    "H&M": "/images/brands/hm.jpg",
    "Zara": "/images/brands/zara.jpg",
    "Levi's": "/images/brands/levis.jpg",
    "U.S. Polo": "/images/brands/uspa.jpg",
  };

  return brandImages[brand] || "/images/product1.jpg";
};

export const getDealImage = (dealId) => {
  const dealImages = [
    "/images/deals/deal1.jpg",
    "/images/deals/deal2.jpg",
    "/images/deals/deal3.jpg",
    "/images/deals/deal4.jpg",
  ];

  return dealImages[dealId - 1] || "/images/deals/deal1.jpg";
};

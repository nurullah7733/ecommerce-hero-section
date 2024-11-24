import Categories from "./components/common/categories/categories";
import MainSlider from "./components/homePage/mainSlider/mainSlider";

export const categories = [
  {
    id: "1",
    name: "Womens' & Girls' Fashion",
    slug: "womens-fashion",
  },
  {
    id: "2",
    name: "Health & Beauty",
    slug: "health-beauty",
  },
  {
    id: "3",
    name: "Watches, Bags, Jewellery",
    slug: "accessories",
    isHighlighted: true,
    subcategories: [
      {
        id: "3-1",
        name: "kids bags",
        slug: "kids-bags",
      },
      {
        id: "3-2",
        name: "laptop bags & cases",
        slug: "laptop-bags",
      },
      {
        id: "3-3",
        name: "Luggage",
        slug: "luggage",
      },
      {
        id: "3-4",
        name: "Travel Bags",
        slug: "travel-bags",
      },
      {
        id: "3-5",
        name: "Men's bag",
        slug: "mens-bag",
      },
      {
        id: "3-6",
        name: "Women's Bag",
        slug: "womens-bag",
        subcategories: [
          {
            id: "3-6-1",
            name: "Backpacks",
            slug: "backpacks",
            subcategories: [
              {
                id: "3-6-1-1",
                name: "Leather Backpacks",
                slug: "leather-backpacks",
              },
              {
                id: "3-6-1-2",
                name: "Canvas Backpacks",
                slug: "canvas-backpacks",
                subcategories: [
                  {
                    id: "3-6-1-2-1",
                    name: "Small Canvas Backpacks",
                    slug: "small-canvas-backpacks",
                  },
                  {
                    id: "3-6-1-2-2",
                    name: "Large Canvas Backpacks",
                    slug: "large-canvas-backpacks",
                  },
                ],
              },
            ],
          },
          {
            id: "3-6-2",
            name: "Cross Body & Shoulder Bags",
            slug: "cross-body-bags",
          },
          {
            id: "3-6-3",
            name: "Bag Charms & Accessories",
            slug: "bag-accessories",
          },
          {
            id: "3-6-4",
            name: "Clutches",
            slug: "clutches",
          },
          {
            id: "3-6-5",
            name: "Top-Handle Bags",
            slug: "top-handle-bags",
          },
          {
            id: "3-6-6",
            name: "Tote bags",
            slug: "tote-bags",
            isHighlighted: true,
          },
          {
            id: "3-6-7",
            name: "wallets",
            slug: "wallets",
          },
        ],
      },
    ],
  },
  {
    id: "4",
    name: "Men's & Boys' Fashion",
    slug: "mens-fashion",
  },
  {
    id: "5",
    name: "Mother & Baby",
    slug: "mother-baby",
  },
  {
    id: "6",
    name: "Electronics Devices",
    slug: "electronics",
  },
  {
    id: "7",
    name: "TV & Home Appliances",
    slug: "appliances",
  },
  {
    id: "8",
    name: "Electronic Accessories",
    slug: "electronics-accessories",
  },
  {
    id: "9",
    name: "Groceries",
    slug: "groceries",
  },
  {
    id: "10",
    name: "Home & Lifestyle",
    slug: "home-lifestyle",
  },
  {
    id: "11",
    name: "Sports & Outdoors",
    slug: "sports",
  },
  {
    id: "12",
    name: "Automobile",
    slug: "automobile",
  },
  {
    id: "13",
    name: "Computer and laptop",
    slug: "computers",
  },
  {
    id: "14",
    name: "Pet Supplies",
    slug: "pet-supplies",
  },
];

const Home = async () => {
  let res = await fetch(
    "https://api.shope.com.bd/api/v1/public/hero-categories",
    { cache: "force-cache", next: { revalidate: 3600 } }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch categories data");
  }
  let categories1 = await res.json();

  return (
    <div>
      <div className="relative">
        {/* Categories section */}
        <div
          className={`absolute top-0 left-0 w-full z-20 pointer-events-none`}
        >
          <div className="container mx-auto ">
            <Categories categories={categories1} />
          </div>
        </div>
        {/* Main slider */}
        <MainSlider />
      </div>
    </div>
  );
};

export default Home;

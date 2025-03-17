import Categories from "./components/common/categories/categories";
import MainSlider from "./components/homePage/mainSlider/mainSlider";

const categories1 = [
  {
    id: 1,
    title: "Women's & Girls Fashion",
    parent_id: null,
    category_id: 2,
    icon: "https://shope.sgp1.cdn.digitaloceanspaces.com/images/hero-categories/icons/Women-&-Girls-Fashion.svg",
    link: "/womens-girls-fashion",
  },
  {
    id: 2,
    title: "Health & Beauty",
    parent_id: null,
    category_id: 8,
    icon: "https://shope.sgp1.cdn.digitaloceanspaces.com/images/hero-categories/icons/Health-&-Beauty.svg",
    link: "/health-beauty",
  },
  {
    id: 3,
    title: "Watches, Bags, Jewellery",
    parent_id: null,
    category_id: 16,
    icon: "https://shope.sgp1.cdn.digitaloceanspaces.com/images/hero-categories/icons/Watches-Bags-jewellery.svg",
    link: "/watches-bags-jewellery",
    childrens: [
      {
        id: 15,
        title: "kids bags",
        parent_id: 3,
        category_id: 13,
        image: null,
        link: "/watches-bags-jewellery/kids-bags",
        childrens: [
          {
            id: 15,
            title: "Toys & Games",
            parent_id: 3,
            category_id: 13,
            image: null,
            link: "/watches-bags-jewellery/kids-bags",
          },
          {
            id: 16,
            title: "Fashion Accessories",
            parent_id: 3,
            category_id: 12,
            image: null,
            link: "/watches-bags-jewellery/ravel-bags",
            childrens: [
              {
                id: 15,
                title: "Clothing & Apparel",
                parent_id: 3,
                category_id: 13,
                image: null,
                link: "/watches-bags-jewellery/kids-bags",
              },
              {
                id: 16,
                title: "School Supplies",
                parent_id: 3,
                category_id: 12,
                image: null,
                link: "/watches-bags-jewellery/ravel-bags",
                childrens: [
                  {
                    id: 15,
                    title: "Footwear",
                    parent_id: 3,
                    category_id: 13,
                    image: null,
                    link: "/watches-bags-jewellery/kids-bags",
                    childrens: [
                      {
                        id: 15,
                        title: "Baby Care Products",
                        parent_id: 3,
                        category_id: 13,
                        image: null,
                        link: "/watches-bags-jewellery/kids-bags",
                      },
                      {
                        id: 16,
                        title: "Outdoor & Sports Gear",
                        parent_id: 3,
                        category_id: 12,
                        image: null,
                        link: "/watches-bags-jewellery/ravel-bags",
                        childrens: [
                          {
                            id: 15,
                            title: "Educational Products",
                            parent_id: 3,
                            category_id: 13,
                            image: null,
                            link: "/watches-bags-jewellery/kids-bags",
                          },
                          {
                            id: 16,
                            title: "Kids Furniture & Decor",
                            parent_id: 3,
                            category_id: 12,
                            image: null,
                            link: "/watches-bags-jewellery/ravel-bags",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    id: 16,
                    title: " ravel Bags",
                    parent_id: 3,
                    category_id: 12,
                    image: null,
                    link: "/watches-bags-jewellery/ravel-bags",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 16,
        title: " ravel Bags",
        parent_id: 3,
        category_id: 12,
        image: null,
        link: "/watches-bags-jewellery/ravel-bags",
      },
    ],
  },
  {
    id: 4,
    title: "Mens & Boys Fashion",
    parent_id: null,
    category_id: 15,
    icon: "https://shope.sgp1.cdn.digitaloceanspaces.com/images/hero-categories/icons/mens-boys-fashion.svg",
    link: "/mens-boys-fashion",
  },
  {
    id: 5,
    title: "Mother & Baby",
    parent_id: null,
    category_id: 14,
    icon: "https://shope.sgp1.cdn.digitaloceanspaces.com/images/hero-categories/icons/mother-baby.svg",
    link: "/mother-baby",
  },
  {
    id: 6,
    title: "Electronics Devices",
    parent_id: null,
    category_id: 6,
    icon: "https://shope.sgp1.cdn.digitaloceanspaces.com/images/hero-categories/icons/electronics.svg",
    link: "/electronics-devices",
  },
  {
    id: 7,
    title: "TV & Home Appliances",
    parent_id: null,
    category_id: 16,
    icon: "https://shope.sgp1.cdn.digitaloceanspaces.com/images/hero-categories/icons/tv-home.svg",
    link: "/tv-home-appliances",
  },
  {
    id: 8,
    title: "Electronic Accessories",
    parent_id: null,
    category_id: 4,
    icon: "https://shope.sgp1.cdn.digitaloceanspaces.com/images/hero-categories/icons/electronic-acces.svg",
    link: "/electronic-accessories",
  },
  {
    id: 9,
    title: "Groceries",
    parent_id: null,
    category_id: 4,
    icon: "https://shope.sgp1.cdn.digitaloceanspaces.com/images/hero-categories/icons/grocery.svg",
    link: "/groceries",
  },
  {
    id: 10,
    title: "Home & Lifestyle",
    parent_id: null,
    category_id: 9,
    icon: "https://shope.sgp1.cdn.digitaloceanspaces.com/images/hero-categories/icons/home-lifestyle.svg",
    link: "/home-lifestyle",
  },
  {
    id: 11,
    title: "Sports & Outdoors",
    parent_id: null,
    category_id: 10,
    icon: "https://shope.sgp1.cdn.digitaloceanspaces.com/images/hero-categories/icons/sports.svg",
    link: "/sports-outdoors",
  },
  {
    id: 12,
    title: "Automobile",
    parent_id: null,
    category_id: 1,
    icon: "https://shope.sgp1.cdn.digitaloceanspaces.com/images/hero-categories/icons/auto-mobile.svg",
    link: "/automobile",
  },
  // {
  //   id: 13,
  //   title: "Computer and laptop",
  //   parent_id: null,
  //   category_id: 13,
  //   icon: "https://shope.sgp1.cdn.digitaloceanspaces.com/images/hero-categories/icons/computer-laptop.svg",
  //   link: "/computer-and-laptop",
  // },
  // {
  //   id: 14,
  //   title: "Pet Supplies",
  //   parent_id: null,
  //   category_id: 15,
  //   icon: "https://shope.sgp1.cdn.digitaloceanspaces.com/images/hero-categories/icons/pet-supplier.svg",
  //   link: "/pet-supplies",
  // },
];

const Home = async () => {
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

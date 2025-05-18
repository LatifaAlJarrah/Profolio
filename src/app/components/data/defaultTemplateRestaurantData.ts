import { TemplateData } from "@/app/types/templateData";

export const defaultTemplateRestaurantData: TemplateData = {
  fontFamily: "Roboto",
  backgroundOverlayColor: "#000000",
  backgroundImage: "/assets/images/company/res-background.png",
  titleTextColor: "#ffffff",
  buttonColor: "#FFDB58",
  navbarColor: "rgba(0, 0, 0, 0.2)",
  logoName: "Épicure",
  headerImage: "/assets/images/resturantHero.png",
  headerTitle: "Where Every Tells a Story",
  headerSubtitle: "Meals",
  headerTagline:
    "A Culinary Experience Crafted with Passion and Fresh Ingredients",
  aboutTitle: "ABOUT US",
  aboutTagline: "Experience Authentic Flavors",
  aboutDescription: "Visit us at los angeles or explore our menu online at",
  contactLocation: "Los Angeles",
  menuItems: {
    appetizers: [
      {
        name: "Grilled Halloumi With Honey",
        price: "5$",
        img: "/assets/images/resturantMenu/halloumi.png",
        description: "Grilled Halloumi Cheese With Honey And Pistachios",
      },
      {
        name: "Stuffed Peppers",
        price: "7$",
        img: "/assets/images/resturantMenu/stuffed-peppers.png",
        description:
          "Jalapeño And Sweet Peppers Stuffed With Goat And Lamb Cheese",
      },
      {
        name: "Smoked Fish Platter",
        price: "15$",
        img: "/assets/images/resturantMenu/fish-platter.png",
        description: "A Selection Of Smoked Salmon And Whitefish",
      },
      {
        name: "Imam Bayildi",
        price: "10$",
        img: "/assets/images/resturantMenu/imam-bayildi.png",
        description:
          "Slow-Cooked Eggplant With Tomatoes, Sweet Peppers, And Garlic.",
      },
      {
        name: "Eggplant Rolls",
        price: "5$",
        img: "/assets/images/resturantMenu/eggplant.png",
        description:
          "Rolled Eggplant Stuffed With Creamy Cheese, Labneh, And Walnuts.",
      },
    ],
    soupsSalads: [
      {
        name: "Pumpkin & Apple Soup",
        price: "10$",
        img: "/assets/images/resturantMenu/pumpkin-and-apple-soup.jpeg",
        description: "A creamy soup made with pumpkin and apples.",
      },
      {
        name: "Tomato Soup",
        price: "7$",
        img: "/assets/images/resturantMenu/tomatosoup.jpeg",
        description:
          "Fresh tomatoes, onion, garlic, olive oil, vegetable broth, heavy cream",
      },
      {
        name: "Vinaigrette Salad",
        price: "5$",
        img: "/assets/images/resturantMenu/VinaigretteSalad.jpeg",
        description: "A mix of beets, beans, potatoes, and pickles.",
      },
      {
        name: "Olivier Salad",
        price: "6$",
        img: "/assets/images/resturantMenu/olivier-salad.jpeg",
        description: "Beef, carrots, peas, eggs, potatoes, and pickles.",
      },
      {
        name: "Goat Cheese Salad",
        price: "5$",
        img: "/assets/images/resturantMenu/goat-cheese-salad.jpeg",
        description: "Fresh tomatoes with goat cheese and cream cheese.",
      },
    ],
    mainCourses: [
      {
        name: "Ribeye Steak",
        price: "15$",
        img: "/assets/images/resturantMenu/ribeye-steak.jpeg",
        description: "Grilled ribeye steak",
      },
      {
        name: "Prime Steak Tartare",
        price: "12$",
        img: "/assets/images/resturantMenu/prime-steak.jpeg",
        description: "Finely minced raw beef with spices and fresh ingredients",
      },
      {
        name: "Tuna Tartare",
        price: "10$",
        img: "/assets/images/resturantMenu/tuna-tartare.jpeg",
        description: "Finely minced raw tuna with spices and fresh ingredients",
      },
      {
        name: "Tomahawk Steak",
        price: "17$",
        img: "/assets/images/resturantMenu/tomahawk-steak.jpeg",
        description: "Grilled bone-in tomahawk steak",
      },
      {
        name: "Lamb Chops",
        price: "15$",
        img: "/assets/images/resturantMenu/lamb-chops.jpeg",
        description: "Grilled lamb chops with special seasonings.",
      },
    ],
    desserts: [
      {
        name: "Molten Lava Cake",
        price: "5$",
        img: "/assets/images/resturantMenu/chocolate.jpeg",
        description: "Warm chocolate cake with a gooey center",
      },
      {
        name: "Mille Feuille",
        price: "5$",
        img: "/assets/images/resturantMenu/mille-feuille.jpeg",
        description: "Layers of puff pastry filled with vanilla cream",
      },
      {
        name: "Macarons",
        price: "4$",
        img: "/assets/images/resturantMenu/macarons.jpeg",
        description:
          "Famous almond-based French cookies with various fillings such as chocolate, vanilla",
      },
    ],
  },
  chefSpecials: [
    {
      name: "Cassoulet",
      price: "20$",
      description:
        "A Traditional French Dish Made Of White Beans, Sausage, And Slow-Cooked Beef.",
      image: "/assets/images/resturantMenu/goulash.jpg",
    },
    {
      name: "Bouillabaisse",
      price: "12$",
      description:
        "A Traditional French Fish Soup Garnished With Fresh Seafood And Special Spices.",
      image: "/assets/images/resturantMenu/seafood.jpg",
    },
    {
      name: "Tarte Aux Fruits",
      price: "10$",
      description: "A Fresh Fruit Tart With A Base Of Vanilla-Scented Cream.",
      image: "/assets/images/resturantMenu/sweetBerry.jpg",
    },
  ],
  contactInstagramName: "Instagram Name",
  contactInstagramLink: "https://instagram.com",
  contactFacebookName: "Facebook Name",
  contactFacebookLink: "https://facebook.com",
  contactPhone: "+1 323 9587458",
  contactPhone2: "+1 323 2548974",
  footerDescription:
    "Upscale restaurant in Los Angeles offering distinctive French dishes that blend traditional and modern flavors to provide an exceptional dining experience.",
  footerName: "Épicure",
  navigationLinks: [
    { name: "Home", link: "#home" },
    { name: "About Us", link: "#about" },
    { name: "Menu", link: "#menu" },
    { name: "Contact", link: "#contact" },
  ],
};
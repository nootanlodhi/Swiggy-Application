import barbeque from "../assets/images/barbeque.png";
import baskin from "../assets/images/baskin.png";
import bebe from "../assets/images/bebe.png";
import behrouz from "../assets/images/behrouz.png";
import burgerKing from "../assets/images/burgerKing.png";
import eatfit from "../assets/images/eatfit.png";
import faasos from "../assets/images/faasos.png";
import gharkahkana from "../assets/images/gharkahkana.png";
import goodBowl from "../assets/images/goodBowl.png";
import kfc from "../assets/images/kfc.png";
import lunchBox from "../assets/images/lunchBox.png";
import mcDonalds from "../assets/images/mcDonalds.png";
import momo from "../assets/images/momo.png";
import natural from "../assets/images/natural.png";
import nici from "../assets/images/nici.png";
import oyeKiddan from "../assets/images/oyeKiddan.png";
import pindPunjab from "../assets/images/pindPunjab.png";
import pizzahut from "../assets/images/pizzahut.png";
import subway from "../assets/images/subway.png";

export const restaurent = [
  {
    id: 1,
    restaurentName: "Pizza Hut",
    rating: 5.0,
    time: "30-50 mins",
    food: "Pizzas",
    area: "Hinjawadi",
    url: pizzahut,
    recommended: [
      {
        id:1,
        foodImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/77b13d58799f70f670be31e6fe53374e",
        foodName: "Melts Meal for 1 with Fries - Veg",
        rate: 929,
        discription: "Serves 1 | Choose your favourite Melts & Fries. Customize your satisfaction."
      },
      {
        id:2,
        foodImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/3/14/bfee1036-41ea-40c1-addc-4fcbfb9475ee_37545bf3-2f63-458b-a7bc-fbeeaa7c41bc.jpg_compressed",
        foodName: "Melts 3 Course Meal for 1 - Veg",
        rate: 499,
        discription: "Serves 1 | The perfect 'Me Time' meal. Choose your favourite Melts and Fries accompanied with 1 Pepsi PET"
      },
      {
        id:3,
        foodImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/da8429720566b8992d5c1c6bfeecdd2c",
        foodName: "Melts Meal for 1 with Fries Non-Veg",
        rate: 599,
        discription: "Serves 1 | Choose your favourite Melts & Fries combo. Customize your satisfaction."
      },
      {
        id:4,
        foodImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/3/14/26d48552-a554-4b30-93d0-7462c255adc2_cc625cc1-b13b-44d4-a394-969d224b4c6c.jpg_compressed",
        foodName: "Melts 3 Course Meal for 1 Non-Veg",
        rate: 419,
        discription: "Serves 1 | The perfect 'Me Time' meal. Choose your favourite Melts and Fries accompanied with 1 Pepsi PET"
      },
      {
        id:5,
        foodImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/e6072e97754de0c6c6030103e0fb50d3",
        foodName: "Create your Melts box of 2 - Veg",
        rate: 399,
        discription: "Serves 1 | Choose any 2 Melts flavour. Double the flavour, double the satisfaction"
      },
      {
        id:6,
        foodImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/0b816322be7e8731246e9492e4b44b84",
        foodName: "Cheezy Cheese Veg & Loaded BBQ Veg Combo",
        rate: 399,
        discription: "Serves 1 | Double the satisfaction with Cheezy Cheese Veg & Loaded BBQ Veg Melts."
      },
    ],
  },
  {
    id: 2,
    restaurentName: "UBQ By Barbeque Nation",
    rating: 4.1,
    time: "20-30 mins",
    food: "North Indian, Barbecue",
    area: "Wakad",
    url: barbeque,
    recommended: [
        {
          id:1,
          foodImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/3/6/030e00df-5de4-4e88-bd5d-f0dc5a82d3d4_cc0a9242-24e8-4ecc-a74b-291e219836b8_compressed",
          foodName: "Kebabs in a Box (Non Veg Overload)",
          rate: 929,
          discription: "Serves 2 | Chilly Garlic Prawns (6 Pcs) + Chicken Tikka (6 Pcs) + Chicken Wings (6 Pcs) + Tandoori Tangadi (2Pcs) + Fish Tikka (6 Pcs) + Angoori Jamun (8 Pcs). Accompanied with Dips & Salad. Non Veg Overload in a Box.",
        },
        {
          id:2,
          foodImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/90071acd3832fda9e1a08519ce35d280",
          foodName: "Chicken Kebabs Platter- (Serves 2)",
          rate: 499,
          discription: "Serves 2 | Chicken Tikka Boneless (6 Pcs) + Chicken Seekh Kebab (6 Pcs)+ Chicken Tangadi Mirch Masala (2 Pcs) + Tandoori Chicken Wings (4 Pcs)-A mighty shareable Chicken starter platter served with Dips, Salad & Mint Chutney.",
        },
        {
          id:3,
          foodImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/43c91a42d76e180ce9b3a6f9c3c19b91",
          foodName: "Tandoori Chicken Wings (6Pcs)",
          rate: 599,
          discription: "Serves 1 | Nothing better than a crispy yet juicy hot barbecue chicken wings , tossed in BBQ sauce, will surely make you crave for more."
        },
        {
          id:4,
          foodImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/bcirausndatlpylzwk4l",
          foodName: "Chicken Tikka (Boneless)",
          rate: 419,
          discription: "Serves 1 | Boneless Chicken chunks marinated in authentic tikka masala and grilled on skewers, one of India's most popular dishes. Kcal - 615"
        },
        {
          id:5,
          foodImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/31033e97ac5d0e1b3155369a2e11ed94",
          foodName: "Grilled Chilli Garlic Prawns (9Pcs)",
          rate: 399,
          discription: "Serves 1 | Prawns marinated in Indian spices and hung curd cooked in clay oven -Tandoor and served with Salad mix and Mint Chutney."
        },
        {
          id:6,
          foodImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/gilsg4u3pv23avswifdf",
          foodName: "Boneless Chicken Biryani",
          rate: 399,
          discription: "Serves 1 | Boneless, succulent chicken chunks (7-8 Pcs) marinated in exquisite in-house spices and layered with aromatic Basmati rice in the Dum style. Served with Raita."
        },
      ],
  },
  {
    id: 3,
    restaurentName: "Wow! Momo",
    rating: 4.2,
    time: "20-30 mins",
    food: "Tibetan, Healthy Food",
    area: "Chinchwad",
    url: momo,
    recommended: [
        {
          id:1,
          foodImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/usgs3ew8xsul9chz8z21",
          foodName: "Veg Chilli Momo",
          rate: 929,
          discription: "Veggie kothey roasted and mixed with Pahari Seasoning to experience a Wow! Hilly touch. We don't serve additional Sauce with this plate of Momos [5Pcs]."
        },
        {
          id:2,
          foodImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/q4kruzcu8ng4plemgcnl",
          foodName: "Chicken Kebabs Platter- (Serves 2)",
          rate: 499,
          discription: "Serves 2 | Chicken Tikka Boneless (6 Pcs) + Chicken Seekh Kebab (6 Pcs)+ Chicken Tangadi Mirch Masala (2 Pcs) + Tandoori Chicken Wings (4 Pcs)-A mighty shareable Chicken starter platter served with Dips, Salad & Mint Chutney.",
        },
        {
          id:3,
          foodImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/43c91a42d76e180ce9b3a6f9c3c19b91",
          foodName: "Tandoori Chicken Wings (6Pcs)",
          rate: 599,
          discription: "Serves 1 | Nothing better than a crispy yet juicy hot barbecue chicken wings , tossed in BBQ sauce, will surely make you crave for more."
        },
        {
          id:4,
          foodImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/bcirausndatlpylzwk4l",
          foodName: "Chicken Tikka (Boneless)",
          rate: 419,
          discription: "Serves 1 | Boneless Chicken chunks marinated in authentic tikka masala and grilled on skewers, one of India's most popular dishes. Kcal - 615"
        },
        {
          id:5,
          foodImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/31033e97ac5d0e1b3155369a2e11ed94",
          foodName: "Grilled Chilli Garlic Prawns (9Pcs)",
          rate: 399,
          discription: "Serves 1 | Prawns marinated in Indian spices and hung curd cooked in clay oven -Tandoor and served with Salad mix and Mint Chutney."
        },
        {
          id:6,
          foodImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/gilsg4u3pv23avswifdf",
          foodName: "Boneless Chicken Biryani",
          rate: 399,
          discription: "Serves 1 | Boneless, succulent chicken chunks (7-8 Pcs) marinated in exquisite in-house spices and layered with aromatic Basmati rice in the Dum style. Served with Raita."
        },
      ],
  },
  {
    id: 4,
    restaurentName: "McDonald's",
    rating: 4.1,
    time: "30-40 mins",
    food: "Burgers, Beverages",
    area: "Hinjawadi",
    url: mcDonalds,
    recommended: [
        {
          id:1,
          foodImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/usgs3ew8xsul9chz8z21",
          foodName: "Veg Chilli Momo",
          rate: 929,
          discription: "Veggie kothey roasted and mixed with Pahari Seasoning to experience a Wow! Hilly touch. We don't serve additional Sauce with this plate of Momos [5Pcs]."
        },
        {
          id:2,
          foodImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/q4kruzcu8ng4plemgcnl",
          foodName: "Chicken Kebabs Platter- (Serves 2)",
          rate: 499,
          discription: "Serves 2 | Chicken Tikka Boneless (6 Pcs) + Chicken Seekh Kebab (6 Pcs)+ Chicken Tangadi Mirch Masala (2 Pcs) + Tandoori Chicken Wings (4 Pcs)-A mighty shareable Chicken starter platter served with Dips, Salad & Mint Chutney.",
        },
        {
          id:3,
          foodImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/43c91a42d76e180ce9b3a6f9c3c19b91",
          foodName: "Tandoori Chicken Wings (6Pcs)",
          rate: 599,
          discription: "Serves 1 | Nothing better than a crispy yet juicy hot barbecue chicken wings , tossed in BBQ sauce, will surely make you crave for more."
        },
        {
          id:4,
          foodImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/bcirausndatlpylzwk4l",
          foodName: "Chicken Tikka (Boneless)",
          rate: 419,
          discription: "Serves 1 | Boneless Chicken chunks marinated in authentic tikka masala and grilled on skewers, one of India's most popular dishes. Kcal - 615"
        },
        {
          id:5,
          foodImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/31033e97ac5d0e1b3155369a2e11ed94",
          foodName: "Grilled Chilli Garlic Prawns (9Pcs)",
          rate: 399,
          discription: "Serves 1 | Prawns marinated in Indian spices and hung curd cooked in clay oven -Tandoor and served with Salad mix and Mint Chutney."
        },
        {
          id:6,
          foodImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/gilsg4u3pv23avswifdf",
          foodName: "Boneless Chicken Biryani",
          rate: 399,
          discription: "Serves 1 | Boneless, succulent chicken chunks (7-8 Pcs) marinated in exquisite in-house spices and layered with aromatic Basmati rice in the Dum style. Served with Raita."
        },
      ],
  },
  {
    id: 5,
    restaurentName: "Burger King",
    rating: 3.5,
    time: "30-40 mins",
    food: "Burgers, American",
    area: "Tathawade",
    url: burgerKing,
    recommended: [
        {
          id:1,
          foodImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/usgs3ew8xsul9chz8z21",
          foodName: "Veg Chilli Momo",
          rate: 929,
          discription: "Veggie kothey roasted and mixed with Pahari Seasoning to experience a Wow! Hilly touch. We don't serve additional Sauce with this plate of Momos [5Pcs]."
        },
        {
          id:2,
          foodImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/q4kruzcu8ng4plemgcnl",
          foodName: "Chicken Kebabs Platter- (Serves 2)",
          rate: 499,
          discription: "Serves 2 | Chicken Tikka Boneless (6 Pcs) + Chicken Seekh Kebab (6 Pcs)+ Chicken Tangadi Mirch Masala (2 Pcs) + Tandoori Chicken Wings (4 Pcs)-A mighty shareable Chicken starter platter served with Dips, Salad & Mint Chutney.",
        },
        {
          id:3,
          foodImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/43c91a42d76e180ce9b3a6f9c3c19b91",
          foodName: "Tandoori Chicken Wings (6Pcs)",
          rate: 599,
          discription: "Serves 1 | Nothing better than a crispy yet juicy hot barbecue chicken wings , tossed in BBQ sauce, will surely make you crave for more."
        },
        {
          id:4,
          foodImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/bcirausndatlpylzwk4l",
          foodName: "Chicken Tikka (Boneless)",
          rate: 419,
          discription: "Serves 1 | Boneless Chicken chunks marinated in authentic tikka masala and grilled on skewers, one of India's most popular dishes. Kcal - 615"
        },
        {
          id:5,
          foodImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/31033e97ac5d0e1b3155369a2e11ed94",
          foodName: "Grilled Chilli Garlic Prawns (9Pcs)",
          rate: 399,
          discription: "Serves 1 | Prawns marinated in Indian spices and hung curd cooked in clay oven -Tandoor and served with Salad mix and Mint Chutney."
        },
        {
          id:6,
          foodImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/gilsg4u3pv23avswifdf",
          foodName: "Boneless Chicken Biryani",
          rate: 399,
          discription: "Serves 1 | Boneless, succulent chicken chunks (7-8 Pcs) marinated in exquisite in-house spices and layered with aromatic Basmati rice in the Dum style. Served with Raita."
        },
      ],
  },
  {
    id: 6,
    restaurentName: "KFC",
    rating: 4.3,
    time: "30-40 mins",
    food: "Burgers, Biryani",
    area: "Hinjawadi",
    url: kfc,
    recommended: [
        {
          id:1,
          foodImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/usgs3ew8xsul9chz8z21",
          foodName: "Veg Chilli Momo",
          rate: 929,
          discription: "Veggie kothey roasted and mixed with Pahari Seasoning to experience a Wow! Hilly touch. We don't serve additional Sauce with this plate of Momos [5Pcs]."
        },
        {
          id:2,
          foodImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/q4kruzcu8ng4plemgcnl",
          foodName: "Chicken Kebabs Platter- (Serves 2)",
          rate: 499,
          discription: "Serves 2 | Chicken Tikka Boneless (6 Pcs) + Chicken Seekh Kebab (6 Pcs)+ Chicken Tangadi Mirch Masala (2 Pcs) + Tandoori Chicken Wings (4 Pcs)-A mighty shareable Chicken starter platter served with Dips, Salad & Mint Chutney.",
        },
        {
          id:3,
          foodImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/43c91a42d76e180ce9b3a6f9c3c19b91",
          foodName: "Tandoori Chicken Wings (6Pcs)",
          rate: 599,
          discription: "Serves 1 | Nothing better than a crispy yet juicy hot barbecue chicken wings , tossed in BBQ sauce, will surely make you crave for more."
        },
        {
          id:4,
          foodImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/bcirausndatlpylzwk4l",
          foodName: "Chicken Tikka (Boneless)",
          rate: 419,
          discription: "Serves 1 | Boneless Chicken chunks marinated in authentic tikka masala and grilled on skewers, one of India's most popular dishes. Kcal - 615"
        },
        {
          id:5,
          foodImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/31033e97ac5d0e1b3155369a2e11ed94",
          foodName: "Grilled Chilli Garlic Prawns (9Pcs)",
          rate: 399,
          discription: "Serves 1 | Prawns marinated in Indian spices and hung curd cooked in clay oven -Tandoor and served with Salad mix and Mint Chutney."
        },
        {
          id:6,
          foodImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/gilsg4u3pv23avswifdf",
          foodName: "Boneless Chicken Biryani",
          rate: 399,
          discription: "Serves 1 | Boneless, succulent chicken chunks (7-8 Pcs) marinated in exquisite in-house spices and layered with aromatic Basmati rice in the Dum style. Served with Raita."
        },
      ],
  },
  {
    id: 7,
    restaurentName: "Ghar Ka Khana - Since 2005",
    rating: 4.5,
    time: "30-40 mins",
    food: "North Indian, Punjabi",
    area: "Hinjawadi",
    url: gharkahkana,
    recommended: [
        {
          id:1,
          foodImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/usgs3ew8xsul9chz8z21",
          foodName: "Veg Chilli Momo",
          rate: 929,
          discription: "Veggie kothey roasted and mixed with Pahari Seasoning to experience a Wow! Hilly touch. We don't serve additional Sauce with this plate of Momos [5Pcs]."
        },
        {
          id:2,
          foodImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/q4kruzcu8ng4plemgcnl",
          foodName: "Chicken Kebabs Platter- (Serves 2)",
          rate: 499,
          discription: "Serves 2 | Chicken Tikka Boneless (6 Pcs) + Chicken Seekh Kebab (6 Pcs)+ Chicken Tangadi Mirch Masala (2 Pcs) + Tandoori Chicken Wings (4 Pcs)-A mighty shareable Chicken starter platter served with Dips, Salad & Mint Chutney.",
        },
        {
          id:3,
          foodImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/43c91a42d76e180ce9b3a6f9c3c19b91",
          foodName: "Tandoori Chicken Wings (6Pcs)",
          rate: 599,
          discription: "Serves 1 | Nothing better than a crispy yet juicy hot barbecue chicken wings , tossed in BBQ sauce, will surely make you crave for more."
        },
        {
          id:4,
          foodImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/bcirausndatlpylzwk4l",
          foodName: "Chicken Tikka (Boneless)",
          rate: 419,
          discription: "Serves 1 | Boneless Chicken chunks marinated in authentic tikka masala and grilled on skewers, one of India's most popular dishes. Kcal - 615"
        },
        {
          id:5,
          foodImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/31033e97ac5d0e1b3155369a2e11ed94",
          foodName: "Grilled Chilli Garlic Prawns (9Pcs)",
          rate: 399,
          discription: "Serves 1 | Prawns marinated in Indian spices and hung curd cooked in clay oven -Tandoor and served with Salad mix and Mint Chutney."
        },
        {
          id:6,
          foodImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/gilsg4u3pv23avswifdf",
          foodName: "Boneless Chicken Biryani",
          rate: 399,
          discription: "Serves 1 | Boneless, succulent chicken chunks (7-8 Pcs) marinated in exquisite in-house spices and layered with aromatic Basmati rice in the Dum style. Served with Raita."
        },
      ],
  },
  {
    id: 8,
    restaurentName: "LunchBox - Meals And Thalis",
    rating: 4,
    time: "25-35 mins",
    food: "Biryani, North Indian",
    area: "Hinjawadi",
    url: lunchBox,
    recommended: [
        {
          id:1,
          foodImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/usgs3ew8xsul9chz8z21",
          foodName: "Veg Chilli Momo",
          rate: 929,
          discription: "Veggie kothey roasted and mixed with Pahari Seasoning to experience a Wow! Hilly touch. We don't serve additional Sauce with this plate of Momos [5Pcs]."
        },
        {
          id:2,
          foodImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/q4kruzcu8ng4plemgcnl",
          foodName: "Chicken Kebabs Platter- (Serves 2)",
          rate: 499,
          discription: "Serves 2 | Chicken Tikka Boneless (6 Pcs) + Chicken Seekh Kebab (6 Pcs)+ Chicken Tangadi Mirch Masala (2 Pcs) + Tandoori Chicken Wings (4 Pcs)-A mighty shareable Chicken starter platter served with Dips, Salad & Mint Chutney.",
        },
        {
          id:3,
          foodImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/43c91a42d76e180ce9b3a6f9c3c19b91",
          foodName: "Tandoori Chicken Wings (6Pcs)",
          rate: 599,
          discription: "Serves 1 | Nothing better than a crispy yet juicy hot barbecue chicken wings , tossed in BBQ sauce, will surely make you crave for more."
        },
        {
          id:4,
          foodImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/bcirausndatlpylzwk4l",
          foodName: "Chicken Tikka (Boneless)",
          rate: 419,
          discription: "Serves 1 | Boneless Chicken chunks marinated in authentic tikka masala and grilled on skewers, one of India's most popular dishes. Kcal - 615"
        },
        {
          id:5,
          foodImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/31033e97ac5d0e1b3155369a2e11ed94",
          foodName: "Grilled Chilli Garlic Prawns (9Pcs)",
          rate: 399,
          discription: "Serves 1 | Prawns marinated in Indian spices and hung curd cooked in clay oven -Tandoor and served with Salad mix and Mint Chutney."
        },
        {
          id:6,
          foodImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/gilsg4u3pv23avswifdf",
          foodName: "Boneless Chicken Biryani",
          rate: 399,
          discription: "Serves 1 | Boneless, succulent chicken chunks (7-8 Pcs) marinated in exquisite in-house spices and layered with aromatic Basmati rice in the Dum style. Served with Raita."
        },
      ],
  },
  {
    id: 9,
    restaurentName: "Faasos - Wraps, Rolls & Shawarma",
    rating: 3.8,
    time: "35-45 mins",
    food: "Kebabs, Fast Food",
    area: "Ravet",
    url: faasos,
    recommended: [
        {
          id:1,
          foodImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/usgs3ew8xsul9chz8z21",
          foodName: "Veg Chilli Momo",
          rate: 929,
          discription: "Veggie kothey roasted and mixed with Pahari Seasoning to experience a Wow! Hilly touch. We don't serve additional Sauce with this plate of Momos [5Pcs]."
        },
        {
          id:2,
          foodImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/q4kruzcu8ng4plemgcnl",
          foodName: "Chicken Kebabs Platter- (Serves 2)",
          rate: 499,
          discription: "Serves 2 | Chicken Tikka Boneless (6 Pcs) + Chicken Seekh Kebab (6 Pcs)+ Chicken Tangadi Mirch Masala (2 Pcs) + Tandoori Chicken Wings (4 Pcs)-A mighty shareable Chicken starter platter served with Dips, Salad & Mint Chutney.",
        },
        {
          id:3,
          foodImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/43c91a42d76e180ce9b3a6f9c3c19b91",
          foodName: "Tandoori Chicken Wings (6Pcs)",
          rate: 599,
          discription: "Serves 1 | Nothing better than a crispy yet juicy hot barbecue chicken wings , tossed in BBQ sauce, will surely make you crave for more."
        },
        {
          id:4,
          foodImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/bcirausndatlpylzwk4l",
          foodName: "Chicken Tikka (Boneless)",
          rate: 419,
          discription: "Serves 1 | Boneless Chicken chunks marinated in authentic tikka masala and grilled on skewers, one of India's most popular dishes. Kcal - 615"
        },
        {
          id:5,
          foodImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/31033e97ac5d0e1b3155369a2e11ed94",
          foodName: "Grilled Chilli Garlic Prawns (9Pcs)",
          rate: 399,
          discription: "Serves 1 | Prawns marinated in Indian spices and hung curd cooked in clay oven -Tandoor and served with Salad mix and Mint Chutney."
        },
        {
          id:6,
          foodImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/gilsg4u3pv23avswifdf",
          foodName: "Boneless Chicken Biryani",
          rate: 399,
          discription: "Serves 1 | Boneless, succulent chicken chunks (7-8 Pcs) marinated in exquisite in-house spices and layered with aromatic Basmati rice in the Dum style. Served with Raita."
        },
      ],
  },
  {
    id: 10,
    restaurentName: "NIC Ice Creams",
    rating: 3.7,
    time: "35-45 mins",
    food: "Ice Cream, Desserts",
    area: "Ravet",
    url: nici,
    recommended: [
        {
          id:1,
          foodImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/usgs3ew8xsul9chz8z21",
          foodName: "Veg Chilli Momo",
          rate: 929,
          discription: "Veggie kothey roasted and mixed with Pahari Seasoning to experience a Wow! Hilly touch. We don't serve additional Sauce with this plate of Momos [5Pcs]."
        },
        {
          id:2,
          foodImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/q4kruzcu8ng4plemgcnl",
          foodName: "Chicken Kebabs Platter- (Serves 2)",
          rate: 499,
          discription: "Serves 2 | Chicken Tikka Boneless (6 Pcs) + Chicken Seekh Kebab (6 Pcs)+ Chicken Tangadi Mirch Masala (2 Pcs) + Tandoori Chicken Wings (4 Pcs)-A mighty shareable Chicken starter platter served with Dips, Salad & Mint Chutney.",
        },
        {
          id:3,
          foodImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/43c91a42d76e180ce9b3a6f9c3c19b91",
          foodName: "Tandoori Chicken Wings (6Pcs)",
          rate: 599,
          discription: "Serves 1 | Nothing better than a crispy yet juicy hot barbecue chicken wings , tossed in BBQ sauce, will surely make you crave for more."
        },
        {
          id:4,
          foodImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/bcirausndatlpylzwk4l",
          foodName: "Chicken Tikka (Boneless)",
          rate: 419,
          discription: "Serves 1 | Boneless Chicken chunks marinated in authentic tikka masala and grilled on skewers, one of India's most popular dishes. Kcal - 615"
        },
        {
          id:5,
          foodImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/31033e97ac5d0e1b3155369a2e11ed94",
          foodName: "Grilled Chilli Garlic Prawns (9Pcs)",
          rate: 399,
          discription: "Serves 1 | Prawns marinated in Indian spices and hung curd cooked in clay oven -Tandoor and served with Salad mix and Mint Chutney."
        },
        {
          id:6,
          foodImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/gilsg4u3pv23avswifdf",
          foodName: "Boneless Chicken Biryani",
          rate: 399,
          discription: "Serves 1 | Boneless, succulent chicken chunks (7-8 Pcs) marinated in exquisite in-house spices and layered with aromatic Basmati rice in the Dum style. Served with Raita."
        },
      ],
  },
  {
    id: 11,
    restaurentName: "The Good Bowl",
    rating: 4.7,
    time: "22-45 mins",
    food: "Biryani, North Indian",
    area: "Ravet",
    url: goodBowl,
    recommended: [
        {
          id:1,
          foodImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/usgs3ew8xsul9chz8z21",
          foodName: "Veg Chilli Momo",
          rate: 929,
          discription: "Veggie kothey roasted and mixed with Pahari Seasoning to experience a Wow! Hilly touch. We don't serve additional Sauce with this plate of Momos [5Pcs]."
        },
        {
          id:2,
          foodImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/q4kruzcu8ng4plemgcnl",
          foodName: "Chicken Kebabs Platter- (Serves 2)",
          rate: 499,
          discription: "Serves 2 | Chicken Tikka Boneless (6 Pcs) + Chicken Seekh Kebab (6 Pcs)+ Chicken Tangadi Mirch Masala (2 Pcs) + Tandoori Chicken Wings (4 Pcs)-A mighty shareable Chicken starter platter served with Dips, Salad & Mint Chutney.",
        },
        {
          id:3,
          foodImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/43c91a42d76e180ce9b3a6f9c3c19b91",
          foodName: "Tandoori Chicken Wings (6Pcs)",
          rate: 599,
          discription: "Serves 1 | Nothing better than a crispy yet juicy hot barbecue chicken wings , tossed in BBQ sauce, will surely make you crave for more."
        },
        {
          id:4,
          foodImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/bcirausndatlpylzwk4l",
          foodName: "Chicken Tikka (Boneless)",
          rate: 419,
          discription: "Serves 1 | Boneless Chicken chunks marinated in authentic tikka masala and grilled on skewers, one of India's most popular dishes. Kcal - 615"
        },
        {
          id:5,
          foodImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/31033e97ac5d0e1b3155369a2e11ed94",
          foodName: "Grilled Chilli Garlic Prawns (9Pcs)",
          rate: 399,
          discription: "Serves 1 | Prawns marinated in Indian spices and hung curd cooked in clay oven -Tandoor and served with Salad mix and Mint Chutney."
        },
        {
          id:6,
          foodImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/gilsg4u3pv23avswifdf",
          foodName: "Boneless Chicken Biryani",
          rate: 399,
          discription: "Serves 1 | Boneless, succulent chicken chunks (7-8 Pcs) marinated in exquisite in-house spices and layered with aromatic Basmati rice in the Dum style. Served with Raita."
        },
      ],
  },
  {
    id: 12,
    restaurentName: "Pind Punjab",
    rating: 4.1,
    time: "20-40 mins",
    food: "North Indian, Indian",
    area: "Bavdhan",
    url: pindPunjab,
    recommended: [
        {
          id:1,
          foodImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/usgs3ew8xsul9chz8z21",
          foodName: "Veg Chilli Momo",
          rate: 929,
          discription: "Veggie kothey roasted and mixed with Pahari Seasoning to experience a Wow! Hilly touch. We don't serve additional Sauce with this plate of Momos [5Pcs]."
        },
        {
          id:2,
          foodImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/q4kruzcu8ng4plemgcnl",
          foodName: "Chicken Kebabs Platter- (Serves 2)",
          rate: 499,
          discription: "Serves 2 | Chicken Tikka Boneless (6 Pcs) + Chicken Seekh Kebab (6 Pcs)+ Chicken Tangadi Mirch Masala (2 Pcs) + Tandoori Chicken Wings (4 Pcs)-A mighty shareable Chicken starter platter served with Dips, Salad & Mint Chutney.",
        },
        {
          id:3,
          foodImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/43c91a42d76e180ce9b3a6f9c3c19b91",
          foodName: "Tandoori Chicken Wings (6Pcs)",
          rate: 599,
          discription: "Serves 1 | Nothing better than a crispy yet juicy hot barbecue chicken wings , tossed in BBQ sauce, will surely make you crave for more."
        },
        {
          id:4,
          foodImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/bcirausndatlpylzwk4l",
          foodName: "Chicken Tikka (Boneless)",
          rate: 419,
          discription: "Serves 1 | Boneless Chicken chunks marinated in authentic tikka masala and grilled on skewers, one of India's most popular dishes. Kcal - 615"
        },
        {
          id:5,
          foodImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/31033e97ac5d0e1b3155369a2e11ed94",
          foodName: "Grilled Chilli Garlic Prawns (9Pcs)",
          rate: 399,
          discription: "Serves 1 | Prawns marinated in Indian spices and hung curd cooked in clay oven -Tandoor and served with Salad mix and Mint Chutney."
        },
        {
          id:6,
          foodImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/gilsg4u3pv23avswifdf",
          foodName: "Boneless Chicken Biryani",
          rate: 399,
          discription: "Serves 1 | Boneless, succulent chicken chunks (7-8 Pcs) marinated in exquisite in-house spices and layered with aromatic Basmati rice in the Dum style. Served with Raita."
        },
      ],
  },
  {
    id: 13,
    restaurentName: "Subway",
    rating: 5.0,
    time: "20-40 mins",
    food: "Healthy Food, Salads",
    area: "Tathawade",
    url: subway,
    recommended: [
        {
          id:1,
          foodImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/usgs3ew8xsul9chz8z21",
          foodName: "Veg Chilli Momo",
          rate: 929,
          discription: "Veggie kothey roasted and mixed with Pahari Seasoning to experience a Wow! Hilly touch. We don't serve additional Sauce with this plate of Momos [5Pcs]."
        },
        {
          id:2,
          foodImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/q4kruzcu8ng4plemgcnl",
          foodName: "Chicken Kebabs Platter- (Serves 2)",
          rate: 499,
          discription: "Serves 2 | Chicken Tikka Boneless (6 Pcs) + Chicken Seekh Kebab (6 Pcs)+ Chicken Tangadi Mirch Masala (2 Pcs) + Tandoori Chicken Wings (4 Pcs)-A mighty shareable Chicken starter platter served with Dips, Salad & Mint Chutney.",
        },
        {
          id:3,
          foodImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/43c91a42d76e180ce9b3a6f9c3c19b91",
          foodName: "Tandoori Chicken Wings (6Pcs)",
          rate: 599,
          discription: "Serves 1 | Nothing better than a crispy yet juicy hot barbecue chicken wings , tossed in BBQ sauce, will surely make you crave for more."
        },
        {
          id:4,
          foodImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/bcirausndatlpylzwk4l",
          foodName: "Chicken Tikka (Boneless)",
          rate: 419,
          discription: "Serves 1 | Boneless Chicken chunks marinated in authentic tikka masala and grilled on skewers, one of India's most popular dishes. Kcal - 615"
        },
        {
          id:5,
          foodImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/31033e97ac5d0e1b3155369a2e11ed94",
          foodName: "Grilled Chilli Garlic Prawns (9Pcs)",
          rate: 399,
          discription: "Serves 1 | Prawns marinated in Indian spices and hung curd cooked in clay oven -Tandoor and served with Salad mix and Mint Chutney."
        },
        {
          id:6,
          foodImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/gilsg4u3pv23avswifdf",
          foodName: "Boneless Chicken Biryani",
          rate: 399,
          discription: "Serves 1 | Boneless, succulent chicken chunks (7-8 Pcs) marinated in exquisite in-house spices and layered with aromatic Basmati rice in the Dum style. Served with Raita."
        },
      ],
  },
  {
    id: 14,
    restaurentName: "McDonald's Gourmet Burger Collection",
    rating: 4.6,
    time: "15-25 mins",
    food: "Burgers, Beverages",
    area: "Baner",
    url: mcDonalds,
    recommended: [
        {
          id:1,
          foodImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/usgs3ew8xsul9chz8z21",
          foodName: "Veg Chilli Momo",
          rate: 929,
          discription: "Veggie kothey roasted and mixed with Pahari Seasoning to experience a Wow! Hilly touch. We don't serve additional Sauce with this plate of Momos [5Pcs]."
        },
        {
          id:2,
          foodImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/q4kruzcu8ng4plemgcnl",
          foodName: "Chicken Kebabs Platter- (Serves 2)",
          rate: 499,
          discription: "Serves 2 | Chicken Tikka Boneless (6 Pcs) + Chicken Seekh Kebab (6 Pcs)+ Chicken Tangadi Mirch Masala (2 Pcs) + Tandoori Chicken Wings (4 Pcs)-A mighty shareable Chicken starter platter served with Dips, Salad & Mint Chutney.",
        },
        {
          id:3,
          foodImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/43c91a42d76e180ce9b3a6f9c3c19b91",
          foodName: "Tandoori Chicken Wings (6Pcs)",
          rate: 599,
          discription: "Serves 1 | Nothing better than a crispy yet juicy hot barbecue chicken wings , tossed in BBQ sauce, will surely make you crave for more."
        },
        {
          id:4,
          foodImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/bcirausndatlpylzwk4l",
          foodName: "Chicken Tikka (Boneless)",
          rate: 419,
          discription: "Serves 1 | Boneless Chicken chunks marinated in authentic tikka masala and grilled on skewers, one of India's most popular dishes. Kcal - 615"
        },
        {
          id:5,
          foodImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/31033e97ac5d0e1b3155369a2e11ed94",
          foodName: "Grilled Chilli Garlic Prawns (9Pcs)",
          rate: 399,
          discription: "Serves 1 | Prawns marinated in Indian spices and hung curd cooked in clay oven -Tandoor and served with Salad mix and Mint Chutney."
        },
        {
          id:6,
          foodImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/gilsg4u3pv23avswifdf",
          foodName: "Boneless Chicken Biryani",
          rate: 399,
          discription: "Serves 1 | Boneless, succulent chicken chunks (7-8 Pcs) marinated in exquisite in-house spices and layered with aromatic Basmati rice in the Dum style. Served with Raita."
        },
      ],
  },
  {
    id: 15,
    restaurentName: "Baskin Robbins - Ice Cream Desserts",
    rating: 4.6,
    time: "20-40 mins",
    food: "Ice Cream, Desserts",
    area: "Wakad",
    url: baskin,
    recommended: [
        {
          id:1,
          foodImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/usgs3ew8xsul9chz8z21",
          foodName: "Veg Chilli Momo",
          rate: 929,
          discription: "Veggie kothey roasted and mixed with Pahari Seasoning to experience a Wow! Hilly touch. We don't serve additional Sauce with this plate of Momos [5Pcs]."
        },
        {
          id:2,
          foodImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/q4kruzcu8ng4plemgcnl",
          foodName: "Chicken Kebabs Platter- (Serves 2)",
          rate: 499,
          discription: "Serves 2 | Chicken Tikka Boneless (6 Pcs) + Chicken Seekh Kebab (6 Pcs)+ Chicken Tangadi Mirch Masala (2 Pcs) + Tandoori Chicken Wings (4 Pcs)-A mighty shareable Chicken starter platter served with Dips, Salad & Mint Chutney.",
        },
        {
          id:3,
          foodImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/43c91a42d76e180ce9b3a6f9c3c19b91",
          foodName: "Tandoori Chicken Wings (6Pcs)",
          rate: 599,
          discription: "Serves 1 | Nothing better than a crispy yet juicy hot barbecue chicken wings , tossed in BBQ sauce, will surely make you crave for more."
        },
        {
          id:4,
          foodImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/bcirausndatlpylzwk4l",
          foodName: "Chicken Tikka (Boneless)",
          rate: 419,
          discription: "Serves 1 | Boneless Chicken chunks marinated in authentic tikka masala and grilled on skewers, one of India's most popular dishes. Kcal - 615"
        },
        {
          id:5,
          foodImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/31033e97ac5d0e1b3155369a2e11ed94",
          foodName: "Grilled Chilli Garlic Prawns (9Pcs)",
          rate: 399,
          discription: "Serves 1 | Prawns marinated in Indian spices and hung curd cooked in clay oven -Tandoor and served with Salad mix and Mint Chutney."
        },
        {
          id:6,
          foodImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/gilsg4u3pv23avswifdf",
          foodName: "Boneless Chicken Biryani",
          rate: 399,
          discription: "Serves 1 | Boneless, succulent chicken chunks (7-8 Pcs) marinated in exquisite in-house spices and layered with aromatic Basmati rice in the Dum style. Served with Raita."
        },
      ],
  },
  {
    id: 16,
    restaurentName: "EatFit",
    rating: 4.3,
    time: "20-40 mins",
    food: "Chinese, Healthy Food",
    area: "Wakad",
    url: eatfit,
    recommended: [
        {
          id:1,
          foodImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/usgs3ew8xsul9chz8z21",
          foodName: "Veg Chilli Momo",
          rate: 929,
          discription: "Veggie kothey roasted and mixed with Pahari Seasoning to experience a Wow! Hilly touch. We don't serve additional Sauce with this plate of Momos [5Pcs]."
        },
        {
          id:2,
          foodImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/q4kruzcu8ng4plemgcnl",
          foodName: "Chicken Kebabs Platter- (Serves 2)",
          rate: 499,
          discription: "Serves 2 | Chicken Tikka Boneless (6 Pcs) + Chicken Seekh Kebab (6 Pcs)+ Chicken Tangadi Mirch Masala (2 Pcs) + Tandoori Chicken Wings (4 Pcs)-A mighty shareable Chicken starter platter served with Dips, Salad & Mint Chutney.",
        },
        {
          id:3,
          foodImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/43c91a42d76e180ce9b3a6f9c3c19b91",
          foodName: "Tandoori Chicken Wings (6Pcs)",
          rate: 599,
          discription: "Serves 1 | Nothing better than a crispy yet juicy hot barbecue chicken wings , tossed in BBQ sauce, will surely make you crave for more."
        },
        {
          id:4,
          foodImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/bcirausndatlpylzwk4l",
          foodName: "Chicken Tikka (Boneless)",
          rate: 419,
          discription: "Serves 1 | Boneless Chicken chunks marinated in authentic tikka masala and grilled on skewers, one of India's most popular dishes. Kcal - 615"
        },
        {
          id:5,
          foodImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/31033e97ac5d0e1b3155369a2e11ed94",
          foodName: "Grilled Chilli Garlic Prawns (9Pcs)",
          rate: 399,
          discription: "Serves 1 | Prawns marinated in Indian spices and hung curd cooked in clay oven -Tandoor and served with Salad mix and Mint Chutney."
        },
        {
          id:6,
          foodImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/gilsg4u3pv23avswifdf",
          foodName: "Boneless Chicken Biryani",
          rate: 399,
          discription: "Serves 1 | Boneless, succulent chicken chunks (7-8 Pcs) marinated in exquisite in-house spices and layered with aromatic Basmati rice in the Dum style. Served with Raita."
        },
      ],
  },
  {
    id: 17,
    restaurentName: "Natural Ice Cream",
    rating: 4.4,
    time: "10-20 mins",
    food: "Ice Cream, Desserts",
    area: "Viman Nagar",
    url: natural,
    recommended: [
        {
          id:1,
          foodImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/usgs3ew8xsul9chz8z21",
          foodName: "Veg Chilli Momo",
          rate: 929,
          discription: "Veggie kothey roasted and mixed with Pahari Seasoning to experience a Wow! Hilly touch. We don't serve additional Sauce with this plate of Momos [5Pcs]."
        },
        {
          id:2,
          foodImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/q4kruzcu8ng4plemgcnl",
          foodName: "Chicken Kebabs Platter- (Serves 2)",
          rate: 499,
          discription: "Serves 2 | Chicken Tikka Boneless (6 Pcs) + Chicken Seekh Kebab (6 Pcs)+ Chicken Tangadi Mirch Masala (2 Pcs) + Tandoori Chicken Wings (4 Pcs)-A mighty shareable Chicken starter platter served with Dips, Salad & Mint Chutney.",
        },
        {
          id:3,
          foodImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/43c91a42d76e180ce9b3a6f9c3c19b91",
          foodName: "Tandoori Chicken Wings (6Pcs)",
          rate: 599,
          discription: "Serves 1 | Nothing better than a crispy yet juicy hot barbecue chicken wings , tossed in BBQ sauce, will surely make you crave for more."
        },
        {
          id:4,
          foodImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/bcirausndatlpylzwk4l",
          foodName: "Chicken Tikka (Boneless)",
          rate: 419,
          discription: "Serves 1 | Boneless Chicken chunks marinated in authentic tikka masala and grilled on skewers, one of India's most popular dishes. Kcal - 615"
        },
        {
          id:5,
          foodImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/31033e97ac5d0e1b3155369a2e11ed94",
          foodName: "Grilled Chilli Garlic Prawns (9Pcs)",
          rate: 399,
          discription: "Serves 1 | Prawns marinated in Indian spices and hung curd cooked in clay oven -Tandoor and served with Salad mix and Mint Chutney."
        },
        {
          id:6,
          foodImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/gilsg4u3pv23avswifdf",
          foodName: "Boneless Chicken Biryani",
          rate: 399,
          discription: "Serves 1 | Boneless, succulent chicken chunks (7-8 Pcs) marinated in exquisite in-house spices and layered with aromatic Basmati rice in the Dum style. Served with Raita."
        },
      ],
  },
  {
    id: 18,
    restaurentName: "Behrouz Biryani",
    rating: 4.2,
    time: "15-22 mins",
    food: "Biryani, North Indian",
    area: "Ravet",
    url: behrouz,
    recommended: [
        {
          id:1,
          foodImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/usgs3ew8xsul9chz8z21",
          foodName: "Veg Chilli Momo",
          rate: 929,
          discription: "Veggie kothey roasted and mixed with Pahari Seasoning to experience a Wow! Hilly touch. We don't serve additional Sauce with this plate of Momos [5Pcs]."
        },
        {
          id:2,
          foodImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/q4kruzcu8ng4plemgcnl",
          foodName: "Chicken Kebabs Platter- (Serves 2)",
          rate: 499,
          discription: "Serves 2 | Chicken Tikka Boneless (6 Pcs) + Chicken Seekh Kebab (6 Pcs)+ Chicken Tangadi Mirch Masala (2 Pcs) + Tandoori Chicken Wings (4 Pcs)-A mighty shareable Chicken starter platter served with Dips, Salad & Mint Chutney.",
        },
        {
          id:3,
          foodImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/43c91a42d76e180ce9b3a6f9c3c19b91",
          foodName: "Tandoori Chicken Wings (6Pcs)",
          rate: 599,
          discription: "Serves 1 | Nothing better than a crispy yet juicy hot barbecue chicken wings , tossed in BBQ sauce, will surely make you crave for more."
        },
        {
          id:4,
          foodImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/bcirausndatlpylzwk4l",
          foodName: "Chicken Tikka (Boneless)",
          rate: 419,
          discription: "Serves 1 | Boneless Chicken chunks marinated in authentic tikka masala and grilled on skewers, one of India's most popular dishes. Kcal - 615"
        },
        {
          id:5,
          foodImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/31033e97ac5d0e1b3155369a2e11ed94",
          foodName: "Grilled Chilli Garlic Prawns (9Pcs)",
          rate: 399,
          discription: "Serves 1 | Prawns marinated in Indian spices and hung curd cooked in clay oven -Tandoor and served with Salad mix and Mint Chutney."
        },
        {
          id:6,
          foodImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/gilsg4u3pv23avswifdf",
          foodName: "Boneless Chicken Biryani",
          rate: 399,
          discription: "Serves 1 | Boneless, succulent chicken chunks (7-8 Pcs) marinated in exquisite in-house spices and layered with aromatic Basmati rice in the Dum style. Served with Raita."
        },
      ],
  },
  {
    id: 19,
    restaurentName: "Oye Kiddan",
    rating: 4.2,
    time: "15-22 mins",
    food: "North Indian, Punjabi",
    area: "Waked",
    url: oyeKiddan,
    recommended: [
        {
          id:1,
          foodImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/usgs3ew8xsul9chz8z21",
          foodName: "Veg Chilli Momo",
          rate: 929,
          discription: "Veggie kothey roasted and mixed with Pahari Seasoning to experience a Wow! Hilly touch. We don't serve additional Sauce with this plate of Momos [5Pcs]."
        },
        {
          id:2,
          foodImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/q4kruzcu8ng4plemgcnl",
          foodName: "Chicken Kebabs Platter- (Serves 2)",
          rate: 499,
          discription: "Serves 2 | Chicken Tikka Boneless (6 Pcs) + Chicken Seekh Kebab (6 Pcs)+ Chicken Tangadi Mirch Masala (2 Pcs) + Tandoori Chicken Wings (4 Pcs)-A mighty shareable Chicken starter platter served with Dips, Salad & Mint Chutney.",
        },
        {
          id:3,
          foodImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/43c91a42d76e180ce9b3a6f9c3c19b91",
          foodName: "Tandoori Chicken Wings (6Pcs)",
          rate: 599,
          discription: "Serves 1 | Nothing better than a crispy yet juicy hot barbecue chicken wings , tossed in BBQ sauce, will surely make you crave for more."
        },
        {
          id:4,
          foodImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/bcirausndatlpylzwk4l",
          foodName: "Chicken Tikka (Boneless)",
          rate: 419,
          discription: "Serves 1 | Boneless Chicken chunks marinated in authentic tikka masala and grilled on skewers, one of India's most popular dishes. Kcal - 615"
        },
        {
          id:5,
          foodImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/31033e97ac5d0e1b3155369a2e11ed94",
          foodName: "Grilled Chilli Garlic Prawns (9Pcs)",
          rate: 399,
          discription: "Serves 1 | Prawns marinated in Indian spices and hung curd cooked in clay oven -Tandoor and served with Salad mix and Mint Chutney."
        },
        {
          id:6,
          foodImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/gilsg4u3pv23avswifdf",
          foodName: "Boneless Chicken Biryani",
          rate: 399,
          discription: "Serves 1 | Boneless, succulent chicken chunks (7-8 Pcs) marinated in exquisite in-house spices and layered with aromatic Basmati rice in the Dum style. Served with Raita."
        },
      ],
  },
  {
    id: 20,
    restaurentName: "Bebe Di Rasoi - Punjabi",
    rating: 4.1,
    time: "15-22 mins",
    food: "North Indian, Punjabi",
    area: "katraj",
    url: bebe,
    recommended: [
        {
          id:1,
          foodImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/usgs3ew8xsul9chz8z21",
          foodName: "Veg Chilli Momo",
          rate: 929,
          discription: "Veggie kothey roasted and mixed with Pahari Seasoning to experience a Wow! Hilly touch. We don't serve additional Sauce with this plate of Momos [5Pcs]."
        },
        {
          id:2,
          foodImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/q4kruzcu8ng4plemgcnl",
          foodName: "Chicken Kebabs Platter- (Serves 2)",
          rate: 499,
          discription: "Serves 2 | Chicken Tikka Boneless (6 Pcs) + Chicken Seekh Kebab (6 Pcs)+ Chicken Tangadi Mirch Masala (2 Pcs) + Tandoori Chicken Wings (4 Pcs)-A mighty shareable Chicken starter platter served with Dips, Salad & Mint Chutney.",
        },
        {
          id:3,
          foodImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/43c91a42d76e180ce9b3a6f9c3c19b91",
          foodName: "Tandoori Chicken Wings (6Pcs)",
          rate: 599,
          discription: "Serves 1 | Nothing better than a crispy yet juicy hot barbecue chicken wings , tossed in BBQ sauce, will surely make you crave for more."
        },
        {
          id:4,
          foodImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/bcirausndatlpylzwk4l",
          foodName: "Chicken Tikka (Boneless)",
          rate: 419,
          discription: "Serves 1 | Boneless Chicken chunks marinated in authentic tikka masala and grilled on skewers, one of India's most popular dishes. Kcal - 615"
        },
        {
          id:5,
          foodImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/31033e97ac5d0e1b3155369a2e11ed94",
          foodName: "Grilled Chilli Garlic Prawns (9Pcs)",
          rate: 399,
          discription: "Serves 1 | Prawns marinated in Indian spices and hung curd cooked in clay oven -Tandoor and served with Salad mix and Mint Chutney."
        },
        {
          id:6,
          foodImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/gilsg4u3pv23avswifdf",
          foodName: "Boneless Chicken Biryani",
          rate: 399,
          discription: "Serves 1 | Boneless, succulent chicken chunks (7-8 Pcs) marinated in exquisite in-house spices and layered with aromatic Basmati rice in the Dum style. Served with Raita."
        },
      ],
  },
];

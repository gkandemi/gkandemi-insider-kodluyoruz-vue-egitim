import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    persons: [],
    products: [
      {
        id: 6,
        title: "Headphones",
        picture: "headphones.jpg",
        price: 200
      },
      {
        id: 7,
        title: "Air Jordans",
        picture: "airjordans.jpg",
        price: 200
      },
      {
        id: 8,
        title: "Skateboard",
        picture: "skateboard.jpg",
        price: 300
      },
      {
        id: 9,
        title: "Smart Phone",
        picture: "smartphone.jpg",
        price: 600
      },
      {
        id: 10,
        title: "Gaming Console",
        picture: "gamingconsole.jpg",
        price: 600
      },
      { id: 11, title: "Bike", picture: "bike.jpg", price: 800 },
      { id: 12, title: "Drone", picture: "drone.jpg", price: 800 },
      {
        id: 13,
        title: "Designer Handbag",
        picture: "designerhandbag.jpg",
        price: 1000
      },
      { id: 14, title: "JetSki", picture: "jetski.jpg", price: 8000 },
      { id: 15, title: "4K TV", picture: "4ktv.jpg", price: 10000 },
      {
        id: 16,
        title: "Diamond Ring",
        picture: "diamondring.jpg",
        price: 10000
      },
      { id: 17, title: "Rolex", picture: "rolex.jpg", price: 15000 },
      {
        id: 18,
        title: "Speed Boat",
        picture: "speedboat.jpg",
        price: 30000
      },
      {
        id: 19,
        title: "Food Truck",
        picture: "foodtruck.jpg",
        price: 50000
      },
      { id: 20, title: "Tesla", picture: "tesla.jpg", price: 70000 },
      {
        id: 21,
        title: "Monster Truck",
        picture: "monstertruck.jpg",
        price: 150000
      },
      {
        id: 22,
        title: "Helicopter",
        picture: "helicopter.jpg",
        price: 175000
      },
      { id: 23, title: "Ferrari", picture: "ferrari.jpg", price: 200000 },
      {
        id: 24,
        title: "Lamborghini",
        picture: "lamborghini.jpg",
        price: 200000
      },
      {
        id: 25,
        title: "Firetruck",
        picture: "firetruck.jpg",
        price: 200000
      },
      {
        id: 26,
        title: "Townhouse",
        picture: "townhouse.jpg",
        price: 200000
      },
      { id: 27, title: "Bar", picture: "bar.jpg", price: 300000 },
      {
        id: 28,
        title: "Pizza Shop",
        picture: "pizzashop.jpg",
        price: 500000
      },
      {
        id: 29,
        title: "Bar of Gold",
        picture: "barofgold.jpg",
        price: 500000
      },
      {
        id: 30,
        title: "Superbowl Ad",
        picture: "superbowlad.jpg",
        price: 5000000
      },
      {
        id: 31,
        title: "Beach House",
        picture: "beachhouse.jpg",
        price: 5000000
      },
      { id: 32, title: "Yacht", picture: "yacht.jpg", price: 10000000 },
      { id: 33, title: "F16", picture: "f16.jpg", price: 15000000 },
      {
        id: 34,
        title: "Skyscraper",
        picture: "skyscraper.jpg",
        price: 50000000
      },
      {
        id: 35,
        title: "Mansion",
        picture: "mansion.jpg",
        price: 50000000
      },
      { id: 36, title: "Rocket", picture: "rocket.jpg", price: 60000000 },
      {
        id: 37,
        title: "Passenger Jet",
        picture: "passengerjet.jpg",
        price: 150000000
      },
      {
        id: 38,
        title: "Monalisa",
        picture: "monalisa.jpg",
        price: 780000000
      },
      {
        id: 39,
        title: "Cruise Ship",
        picture: "cruiseship.jpg",
        price: 1200000000
      },
      {
        id: 40,
        title: "NBA Team",
        picture: "nbateam.jpg",
        price: 1300000000
      },
      {
        id: 41,
        title: "MLB Team",
        picture: "mlbteam.jpg",
        price: 1500000000
      },
      {
        id: 42,
        title: "NFL Team",
        picture: "nflteam.jpg",
        price: 2300000000
      }
    ],
    sold_products: [
      { id: 1, title: "Big Mac", picture: "bigmac.jpg", price: 2 },
      {
        id: 2,
        title: "Cup of Coffee",
        picture: "cupofcoffee.jpg",
        price: 4
      },
      { id: 3, title: "Book", picture: "book.jpg", price: 15 },
      { id: 4, title: "Video Game", picture: "videogame.jpg", price: 60 },
      { id: 5, title: "Charity", picture: "charity.jpg", price: 100 }
    ]
  },
  getters: {
    getPersonList(state) {
      return state.persons;
    }
  },
  mutations: {
    // context = {commit, state, dispatch}
    setPerson(state, userData) {
      state.persons.push(userData);
    },
    productAction(state, event) {
      if (event.action === "add") {
        state.products.splice(state.products.indexOf(event.product), 1);
        state.sold_products.push(event.product);
      } else if (event.action === "delete") {
        state.sold_products.splice(
          state.sold_products.indexOf(event.product),
          1
        );
        state.products.push(event.product);
      }
    }
  },
  actions: {
    setPerson({ state, commit, dispatch }, userData) {
      setTimeout(() => {
        commit("setPerson", userData);
      }, 2000);
    },
    productAction({ commit }, event) {
      commit("productAction", event);
    }
  },
  modules: {}
});

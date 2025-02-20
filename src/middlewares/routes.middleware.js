import specialPriceRoutes from "../routes/specialPrice.routes.js";
import welcomeRoutes from "../routes/welcome.routes.js";
import productsRoutes from "../routes/product.routes.js";

const routes = [
    { path: "", route: specialPriceRoutes },
    { path: "", route: welcomeRoutes },
    { path: "", route: productsRoutes}
];

export const loadRoutes = (app) => {
    routes.forEach(({ path, route }) => {
        app.use(path, route);
    });
};

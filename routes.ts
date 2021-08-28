import { createRoute } from 'next-typed-routes';

const routes = {
    home: createRoute('/'),
    projects: createRoute('/projects'),
    research: createRoute('/research'),
    about: createRoute('/about')
}

export default routes;
const { createBrowserRouter } = require("react-router-dom");
const { default: Root } = require("../Layout/Root");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>
    }
])

export default router